import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// GET Single Blog
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM blogs
      WHERE id=?
      LIMIT 1
      `,
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(rows[0]);

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

// UPDATE BLOG
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

    const body = await req.json();

    await db.execute(
      `
      UPDATE blogs
      SET
        title=?,
        slug=?,
        excerpt=?,
        content=?,
        featured_image=?,
        category=?,
        meta_title=?,
        meta_description=?,
        meta_keywords=?,
        canonical_url=?,
        og_title=?,
        og_description=?,
        og_image=?,
        status=?
      WHERE id=?
      `,
      [
        body.title,
        body.slug,
        body.excerpt,
        body.content,
        body.featured_image,
        body.category,
        body.meta_title,
        body.meta_description,
        body.meta_keywords,
        body.canonical_url,
        body.og_title,
        body.og_description,
        body.og_image,
        body.status,
        id,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
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

// DELETE BLOG
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

    await db.execute(
      `
      DELETE FROM blogs
      WHERE id=?
      `,
      [id]
    );

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
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