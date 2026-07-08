import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

import { parsePageForm } from "@/lib/pageBuilder/parsePageForm";
import { getPageData } from "@/lib/pageBuilder/pageData";
import { saveSections } from "@/lib/pageBuilder/saveSections";
import { processSectionUploads } from "@/lib/pageBuilder/processSectionUploads";
import { processPageUploads } from "@/lib/pageBuilder/processPageUploads";

// ===========================
// GET - Pages List
// ===========================

export async function GET(req: NextRequest) {
  try {
    const user = await requirePermission("pages");

    if (user instanceof NextResponse) {
      return user;
    }

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);

    const limit = Number(searchParams.get("limit") || 10);

    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    const where = search ? `WHERE title LIKE ? OR slug LIKE ?` : "";

    const params = search
      ? [`%${search}%`, `%${search}%`, limit, offset]
      : [limit, offset];

    const [rows]: any = await db.query(
      `
        SELECT *
        FROM pages
        ${where}
        ORDER BY id DESC
        LIMIT ?
        OFFSET ?
        `,
      params,
    );

    const [countRows]: any = await db.query(
      `
        SELECT COUNT(*) total
        FROM pages
        ${where}
        `,
      search ? [`%${search}%`, `%${search}%`] : [],
    );

    const total = countRows[0].total;

    return NextResponse.json({
      success: true,

      data: rows,

      total,

      page,

      totalPages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

// ===========================
// CREATE PAGE
// ===========================

export async function POST(req: NextRequest) {
  try {
    const user = await requirePermission("pages.create");

    if (user instanceof NextResponse) {
      return user;
    }

    const body: any = await parsePageForm(req);

    await processPageUploads(body);

    const [result]: any = await db.execute(
      `
        INSERT INTO pages
        (
          title,
          slug,
          seo_title,
          seo_description,
          seo_keywords,
          canonical_url,
          og_title,
          og_description,
          featured_image,
          og_image,
          status,
          publish_at
        )
        VALUES
        (
          ?,?,?,?,?,?,?,?,?,?,?,?
        )
        `,
      getPageData(body),
    );
    body.sections = await processSectionUploads(body.sections);
    await saveSections(
      result.insertId,

      body.sections,
    );

    return NextResponse.json({
      success: true,

      message: "Page created successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
