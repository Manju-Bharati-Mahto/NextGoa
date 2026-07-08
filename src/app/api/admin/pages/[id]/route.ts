import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

import { parsePageForm } from "@/lib/pageBuilder/parsePageForm";
import { getPageData } from "@/lib/pageBuilder/pageData";
import { saveSections } from "@/lib/pageBuilder/saveSections";
import { getPage } from "@/lib/pageBuilder/getPage";
import { deletePage } from "@/lib/pageBuilder/deletePage";
import { processSectionUploads } from "@/lib/pageBuilder/processSectionUploads";
import { processPageUploads } from "@/lib/pageBuilder/processPageUploads";

// ==========================
// GET SINGLE PAGE
// ==========================

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  try {
    const user = await requirePermission("pages");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const page = await getPage(Number(id));

    if (!page) {
      return NextResponse.json(
        {
          success: false,
          message: "Page not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(page);
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

// ==========================
// UPDATE PAGE
// ==========================

export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  try {
    const user = await requirePermission("pages.edit");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const body: any = await parsePageForm(req);

    const page = await getPage(Number(id));

    if (!page) {
      return NextResponse.json(
        {
          success: false,
          message: "Page not found",
        },
        { status: 404 },
      );
    }

    await processPageUploads(body, page.page);

    await db.execute(
      ` UPDATE pages SET title=?, slug=?, seo_title=?, seo_description=?, seo_keywords=?, canonical_url= ?, og_title = ?, og_description = ?, featured_image=?, og_image=?, status=?, publish_at=? WHERE id=? `,
      [...getPageData(body), id],
    );

    if (!page) {
      return NextResponse.json(
        {
          success: false,
          message: "Page not found",
        },
        {
          status: 404,
        },
      );
    }

    body.sections = await processSectionUploads(body.sections, page.sections);

    await saveSections(Number(id), body.sections);

    return NextResponse.json({
      success: true,
      message: "Page updated successfully",
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

// ==========================
// DELETE PAGE
// ==========================

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  try {
    const user = await requirePermission("pages.delete");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    await deletePage(Number(id));

    return NextResponse.json({
      success: true,

      message: "Page deleted successfully",
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
