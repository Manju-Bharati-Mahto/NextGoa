import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  try {
    const { slug } = await params;

    // Page
    const [pageRows]: any = await db.query(
      `
      SELECT *
      FROM pages
      WHERE slug = ?
      AND status = 'published'
      LIMIT 1
      `,
      [slug]
    );

    if (!pageRows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Page not found",
        },
        {
          status: 404,
        }
      );
    }

    const page = pageRows[0];

    // Sections
    const [sectionRows]: any = await db.query(
      `
      SELECT *
      FROM page_sections
      WHERE page_id = ? AND status = 1
      ORDER BY sort_order ASC
      `,
      [page.id]
    );

    const sections = sectionRows.map(
      (section: any) => ({
        ...section,
        content:
          typeof section.content === "string"
            ? JSON.parse(section.content)
            : section.content,
      })
    );

    return NextResponse.json({
      success: true,
      page,
      sections,
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