import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

import { parsePageForm } from "@/lib/pageBuilder/parsePageForm";
import { processPageUploads } from "@/lib/pageBuilder/processPageUploads";
import { processSectionUploads } from "@/lib/pageBuilder/processSectionUploads";
import { getPageData } from "@/lib/pageBuilder/pageData";

import { saveFacultySections } from "@/lib/facultyBuilder/saveFacultySections";
import { getFacultySections } from "@/lib/facultyBuilder/getFacultySections";

interface Params {
  params: Promise<{
    id: string;
  }>;
}
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const user = await requirePermission("faculty.edit");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const [rows]: any = await db.query(`SELECT * FROM faculty WHERE id=?`, [
      id,
    ]);

    if (!rows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Faculty not found",
        },
        {
          status: 404,
        },
      );
    }

    const faculty = rows[0];
  

    const sections = await getFacultySections(Number(id));

    return NextResponse.json({
      success: true,
      faculty,
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
      },
    );
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const user = await requirePermission("faculty.edit");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const [oldRows]: any = await db.query(`SELECT * FROM faculty WHERE id=?`, [
      id,
    ]);

    const oldFaculty = oldRows[0];

    const oldSections = await getFacultySections(Number(id));

    const body: any = await parsePageForm(req);

    await processPageUploads(body, oldFaculty);

    body.sections = await processSectionUploads(body.sections, oldSections);

    await db.execute(
      `
      UPDATE faculty
      SET
        title=?,
        slug=?,
        seo_title=?,
        seo_description=?,
        seo_keywords=?,
        canonical_url=?,
        og_title=?,
        og_description=?,
        featured_image=?,
        og_image=?,
        status=?,
        publish_at=?
      WHERE id=?
      `,
      [...getPageData(body), id],
    );

    await saveFacultySections(Number(id), body.sections);

    return NextResponse.json({
      success: true,
      message: "Faculty updated successfully",
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
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const user = await requirePermission("faculty.delete");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    await db.execute(`DELETE FROM faculty WHERE id=?`, [id]);

    return NextResponse.json({
      success: true,
      message: "Faculty deleted successfully",
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
