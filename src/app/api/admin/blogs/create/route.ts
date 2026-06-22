import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  try {
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

    let featured_image = "";
    const image = formData.get("featured_image") as File | null;

    let og_image = "";
    const ogImage = formData.get("og_image") as File | null;


    if (image && image.size > 0) {
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
    if (ogImage && ogImage.size > 0) {
      const bytes = await ogImage.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${uuid()}-${ogImage.name}`;

      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        filename
      );

      await writeFile(uploadPath, buffer);

      og_image = `/uploads/ogimg/${filename}`;
    }

    await db.execute(
      `
      INSERT INTO blogs (
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
        status
      )
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
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
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
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