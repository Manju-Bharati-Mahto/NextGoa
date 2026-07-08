import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";
import { generateUniqueSlug } from "../route";

// GET SINGLE ACTIVE VACANCY
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requirePermission("carrers");

  if (user instanceof NextResponse) {
    return user;
  }

  try {
    const { id } = await params;
    const jobId = Number(id);

    const [rows]: any = await db.query(
      `
      SELECT id, title, slug, department, position, location, type, card_description, status, content, created_at, updated_at
      FROM vacancies
      WHERE id = ? AND is_deleted = 0
      `,
      [jobId]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancy not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: rows[0],
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

// UPDATE ACTIVE VACANCY (WITH SLUG DEDUPLICATION & UNIQUE CHECKING)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requirePermission("carrers");

  if (user instanceof NextResponse) {
    return user;
  }

  try {
    const { id } = await params;
    const jobId = Number(id);
    const body = await req.json();

    // Basic Validation
    if (!body.title || !body.department || !body.position || !body.location || !body.type || !body.content) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // Generate unique slug (ignore current row ID from collision checks)
    const slugInput = body.slug || body.title;
    const uniqueSlug = await generateUniqueSlug(slugInput, jobId);

    const [result]: any = await db.execute(
      `
      UPDATE vacancies 
      SET title = ?, slug = ?, department = ?, position = ?, location = ?, type = ?, card_description = ?, status = ?, content = ?
      WHERE id = ? AND is_deleted = 0
      `,
      [
        body.title,
        uniqueSlug,
        body.department,
        body.position,
        body.location,
        body.type,
        body.card_description || "",
        body.status || "published",
        JSON.stringify(body.content),
        jobId
      ]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Vacancy not found or already deleted",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Vacancy updated successfully",
      slug: uniqueSlug
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

// DELETE ACTIVE VACANCY (SOFT DELETE)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await requirePermission("carrers");

  if (user instanceof NextResponse) {
    return user;
  }

  try {
    const { id } = await params;
    const jobId = Number(id);

    // Update table with soft delete values: is_deleted=1, deleted_by=current_user_id, deleted_at=current_timestamp
    const [result]: any = await db.execute(
      `
      UPDATE vacancies 
      SET is_deleted = 1, deleted_by = ?, deleted_at = NOW() 
      WHERE id = ? AND is_deleted = 0
      `,
      [user.id, jobId]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Job posting not found or already deleted",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Job posting soft deleted successfully",
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
