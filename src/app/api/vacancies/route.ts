import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get("limit") || 10);
    const offset = Number(searchParams.get("offset") || 0);
    const search = searchParams.get("search") || "";
    const positions = searchParams.get("positions") ? searchParams.get("positions")?.split(",") : [];
    const locations = searchParams.get("locations") ? searchParams.get("locations")?.split(",") : [];
    const types = searchParams.get("types") ? searchParams.get("types")?.split(",") : [];

    let whereClause = "WHERE is_deleted = 0 AND status = 'published'";
    const queryParams: any[] = [];

    // Search query database filtering
    if (search) {
      whereClause += ` AND (
        title LIKE ?
        OR department LIKE ?
        OR position LIKE ?
        OR location LIKE ?
        OR type LIKE ?
        OR card_description LIKE ?
      )`;
      const searchPattern = `%${search}%`;
      queryParams.push(searchPattern, searchPattern, searchPattern, searchPattern, searchPattern, searchPattern);
    }

    // Job Position database filtering
    if (positions && positions.length > 0) {
      whereClause += ` AND (position IN (${positions.map(() => "?").join(",")}))`;
      queryParams.push(...positions);
    }

    // Location database filtering
    if (locations && locations.length > 0) {
      whereClause += ` AND (location IN (${locations.map(() => "?").join(",")}))`;
      queryParams.push(...locations);
    }

    // Job Type database filtering
    if (types && types.length > 0) {
      whereClause += ` AND (type IN (${types.map(() => "?").join(",")}))`;
      queryParams.push(...types);
    }

    // Fetch paginated rows matching active filters
    const [rows]: any = await db.query(
      `
      SELECT id, title, slug, department, position, location, type, card_description, status, created_at, updated_at
      FROM vacancies
      ${whereClause}
      ORDER BY id DESC
      LIMIT ? OFFSET ?
      `,
      [...queryParams, limit, offset]
    );

    // Get total count matching active filters
    const [countRows]: any = await db.query(
      `
      SELECT COUNT(*) AS total
      FROM vacancies
      ${whereClause}
      `,
      queryParams
    );

    const total = countRows[0].total;

    // Fetch dynamic, global list of filters from active postings in the database
    const [distinctPositions]: any = await db.query(
      "SELECT DISTINCT position FROM vacancies WHERE is_deleted = '0' AND status = 'published' AND position IS NOT NULL AND position != ''"
    );
    const [distinctLocations]: any = await db.query(
      "SELECT DISTINCT location FROM vacancies WHERE is_deleted = '0' AND status = 'published' AND location IS NOT NULL AND location != ''"
    );
    const [distinctTypes]: any = await db.query(
      "SELECT DISTINCT type FROM vacancies WHERE is_deleted = '0' AND status = 'published' AND type IS NOT NULL AND type != ''"
    );

    const availableFilters = {
      positions: distinctPositions.map((r: any) => r.position),
      locations: distinctLocations.map((r: any) => r.location),
      types: distinctTypes.map((r: any) => r.type),
    };

    return NextResponse.json({
      success: true,
      data: rows,
      total,
      hasMore: offset + rows.length < total,
      availableFilters,
    });
  } catch (error: any) {
    console.error("Error fetching vacancies:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch vacancies" },
      { status: 500 }
    );
  }
}
