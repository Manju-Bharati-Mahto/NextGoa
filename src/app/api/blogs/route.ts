import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {

    const limit = Number(
      req.nextUrl.searchParams.get("limit") || 15
    );

    const [rows]: any = await db.query(
      `
      SELECT
        b.*,
        (
          SELECT GROUP_CONCAT(c.name SEPARATOR ', ')
          FROM blog_categories c
          WHERE FIND_IN_SET(c.id, b.category)
        ) AS category_names
      FROM blogs b
      WHERE b.status='published'
      ORDER BY b.created_at DESC
      LIMIT ?
      `,
      [limit]
    );

    return NextResponse.json(rows);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}