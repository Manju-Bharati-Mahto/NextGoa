import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

import { parsePageForm } from "@/lib/pageBuilder/parsePageForm";
import { getPageData } from "@/lib/pageBuilder/pageData";
import { processPageUploads } from "@/lib/pageBuilder/processPageUploads";
import { processSectionUploads } from "@/lib/pageBuilder/processSectionUploads";
import { saveFacultySections } from "@/lib/facultyBuilder/saveFacultySections";

// ==========================
// GET
// ==========================

export async function GET(req: NextRequest) {
  try {
    
    const user = await requirePermission("faculty");

    if (user instanceof NextResponse) {
      return user;
    }

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    const where = search
      ? `WHERE title LIKE ? OR slug LIKE ?`
      : "";

    const params = search
      ? [`%${search}%`, `%${search}%`, limit, offset]
      : [limit, offset];

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM faculty
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
      FROM faculty
      ${where}
      `,
      search
        ? [`%${search}%`, `%${search}%`]
        : [],
    );

    return NextResponse.json({
      success: true,
      
      data: rows,
      total: countRows[0].total,
      page,
      totalPages: Math.ceil(
        countRows[0].total / limit,
      ),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

// ==========================
// CREATE
// ==========================

export async function POST(req: NextRequest) {
  try {

    const user =
      await requirePermission("faculty.create");

    if (user instanceof NextResponse) {
      return user;
    }

    const body: any = await parsePageForm(req);
    console.log("1 parse done");
    await processPageUploads(body);
    

    const [result]: any = await db.execute(
      `
      INSERT INTO faculty
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

    body.sections =
      await processSectionUploads(body.sections);

    await saveFacultySections(
      result.insertId,
      body.sections,
    );

    return NextResponse.json({
      success: true,
      message:
        "Faculty page created successfully",
    });
  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}