import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// GET All Blogs
export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT *
      FROM blogs
      ORDER BY id DESC
    `);

    return NextResponse.json(rows);

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

// CREATE BLOG
export async function POST(req: NextRequest) {
  try {

    const body = await req.json();

    await db.execute(
      `
      INSERT INTO blogs
      (
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
      ]
    );

    return NextResponse.json({
      success: true,
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