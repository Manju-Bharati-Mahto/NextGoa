import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

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
// UPDATE BLOG
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;

    const meta_title = formData.get("meta_title") as string;
    const meta_description = formData.get("meta_description") as string;
    const meta_keywords = formData.get("meta_keywords") as string;

    const canonical_url = formData.get("canonical_url") as string;

    const og_title = formData.get("og_title") as string;
    const og_description = formData.get("og_description") as string;

    const status = formData.get("status") as string;

    // Existing Images
    let featured_image =
      (formData.get("featured_image_path") as string) || "";

    let og_image =
      (formData.get("og_image_path") as string) || "";

    // ===========================
    // Featured Image Upload
    // ===========================

    const image = formData.get("featured_image");

    if (image instanceof File && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${uuid()}-${image.name}`;

      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        filename
      );

      await writeFile(uploadPath, buffer);

      featured_image = `/uploads/${filename}`;
    }

    // ===========================
    // OG Image Upload
    // ===========================

    const ogFile = formData.get("og_image");

    if (ogFile instanceof File && ogFile.size > 0) {
      const bytes = await ogFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${uuid()}-${ogFile.name}`;

      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        "ogimage",
        filename
      );

      await writeFile(uploadPath, buffer);

      og_image = `/uploads/ogimg/${filename}`;
    }

    // ===========================
    // Update Database
    // ===========================

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
        title,
        slug,
        excerpt,
        content,
        featured_image,
        category,
        meta_title,
        meta_description,
        meta_keywords,
        canonical_url,
        og_title,
        og_description,
        og_image,
        status,
        id,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error: any) {
    console.error(error);

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