import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";


// GET ALL BLOGS
export async function GET(req: NextRequest) {
  const user = await requireAdmin();

  if (user instanceof NextResponse) {
    return user;
  }
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    let where = "WHERE 1=1";
    const params: any[] = [];

    if (search) {
      where += `
      AND (
        b.title LIKE ?
        OR b.slug LIKE ?
        OR b.status LIKE ?
      )
      `;

      params.push(`%${search}%`);
      params.push(`%${search}%`);
      params.push(`%${search}%`);
    }

    const [rows]: any = await db.query(
      `
      SELECT
        b.*,
        (
          SELECT GROUP_CONCAT(c.name SEPARATOR ', ')
          FROM blog_categories c
          WHERE FIND_IN_SET(c.id, b.category)
        ) AS category_names
      FROM blogs b
      ${where}
      ORDER BY b.id DESC
      LIMIT ?
      OFFSET ?
      `,
      [...params, limit, offset]
    );

    const [countRows]: any = await db.query(
      `
      SELECT COUNT(*) total
      FROM blogs b
      ${where}
      `,
      params
    );

    return NextResponse.json({
      data: rows,
      total: countRows[0].total,
      page,
      limit,
      totalPages: Math.ceil(countRows[0].total / limit),
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