import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const isNumeric = /^\d+$/.test(slug);

    const [rows]: any = await db.query(
      `
      SELECT id, title, slug, department, position, location, type, card_description, status, content, created_at, updated_at
      FROM vacancies
      WHERE (slug = ? ${isNumeric ? "OR id = ?" : ""}) AND is_deleted = '0' AND status = 'published'
      LIMIT 1
      `,
      isNumeric ? [slug, Number(slug)] : [slug]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Vacancy not found" },
        { status: 404 }
      );
    }

    // Ensure content is parsed correctly if it is stored as stringified JSON
    const vacancy = rows[0];
    if (vacancy.content && typeof vacancy.content === "string") {
      try {
        vacancy.content = JSON.parse(vacancy.content);
      } catch (e) {
        console.error("Failed to parse vacancy content JSON:", e);
      }
    }

    return NextResponse.json({
      success: true,
      data: vacancy,
    });
  } catch (error: any) {
    console.error("Error fetching vacancy details:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch vacancy details" },
      { status: 500 }
    );
  }
}
