import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const facultySlug =
      req.nextUrl.searchParams.get("faculty");

    if (!facultySlug) {
      return NextResponse.json(
        {
          success: false,
          message: "Faculty slug is required",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================
    // Faculty Name
    // ==========================

    const [facultyRows]: any = await db.query(
      `
      SELECT title
      FROM faculty
      WHERE slug=?
      LIMIT 1
      `,
      [facultySlug]
    );

    const facultyName =
      facultyRows.length > 0
        ? facultyRows[0].title
        : facultySlug;

    // ==========================
    // Faculty Deans
    // ==========================

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM experts
      WHERE
        JSON_CONTAINS(category, JSON_QUOTE(?))
        AND JSON_CONTAINS(faculty, JSON_QUOTE(?))
        AND status=1
      ORDER BY
        sort_order ASC,
        id ASC
      `,
      ["Faculty Deans", facultySlug]
    );

    // ==========================
    // Staff
    // ==========================

    const [staffRows]: any = await db.query(
      `
      SELECT *
      FROM experts
      WHERE
        JSON_CONTAINS(category, JSON_QUOTE(?))
        AND JSON_CONTAINS(faculty, JSON_QUOTE(?))
        AND status=1
      ORDER BY
        sort_order ASC,
        id ASC
      `,
      ["Staff", facultySlug]
    );

    const dean = rows.map((item: any) => ({
      id: item.id,
      ...(typeof item.content === "string"
        ? JSON.parse(item.content)
        : item.content),
    }));

    const faculties = staffRows.map((item: any) => ({
      id: item.id,
      ...(typeof item.content === "string"
        ? JSON.parse(item.content)
        : item.content),
    }));

    return NextResponse.json({
      success: true,
      facultyName,
      dean,
      faculties,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}