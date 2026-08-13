import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

// HELPER FUNCTION TO GENERATE A UNIQUE SLUG WITH DUPLICATE COUNTER
export async function generateUniqueSlug(titleOrSlug: string, currentId?: number): Promise<string> {
  let baseSlug = titleOrSlug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphen
    .replace(/(^-|-$)+/g, "");  // trim leading/trailing hyphens

  if (!baseSlug) {
    baseSlug = "job-posting";
  }

  let uniqueSlug = baseSlug;
  let counter = 1;
  let isUnique = false;

  while (!isUnique) {
    const query = currentId
      ? "SELECT COUNT(*) AS count FROM vacancies WHERE slug = ? AND id != ? AND is_deleted = 0"
      : "SELECT COUNT(*) AS count FROM vacancies WHERE slug = ? AND is_deleted = 0";
    const params = currentId ? [uniqueSlug, currentId] : [uniqueSlug];

    const [rows]: any = await db.query(query, params);
    if (rows[0].count === 0) {
      isUnique = true;
    } else {
      counter++;
      uniqueSlug = `${baseSlug}-${counter}`;
    }
  }

  return uniqueSlug;
}

// GET ALL ACTIVE VACANCIES
export async function GET(req: NextRequest) {
  const user = await requirePermission("carrers");

  if (user instanceof NextResponse) {
    return user;
  }

  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    // Filter out soft-deleted vacancies
    let where = "WHERE is_deleted = 0";
    const params: any[] = [];

    if (search) {
      where += `
      AND (
        title LIKE ?
        OR slug LIKE ?
        OR department LIKE ?
        OR position LIKE ?
        OR location LIKE ?
        OR type LIKE ?
      )
      `;

      params.push(`%${search}%`);
      params.push(`%${search}%`);
      params.push(`%${search}%`);
      params.push(`%${search}%`);
      params.push(`%${search}%`);
      params.push(`%${search}%`);
    }

    const [rows]: any = await db.query(
      `
      SELECT id, title, meta_title, meta_description, keywords, canonical_url, slug, department, position, location, type, card_description, status, content, created_at, updated_at
      FROM vacancies
      ${where}
      ORDER BY id DESC
      LIMIT ?
      OFFSET ?
      `,
      [...params, limit, offset]
    );

    const [countRows]: any = await db.query(
      `
      SELECT COUNT(*) AS total
      FROM vacancies
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

// CREATE NEW VACANCY (WITH SLUG GENERATION & DUPLICATE DEDUPLICATION)
export async function POST(req: NextRequest) {
  const user = await requirePermission("carrers");

  if (user instanceof NextResponse) {
    return user;
  }

  try {
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

    // Generate unique slug (fallback to title if slug not submitted)
    const slugInput = body.slug || body.title;
    const uniqueSlug = await generateUniqueSlug(slugInput);

    const [result]: any = await db.execute(
      `
      INSERT INTO vacancies 
      (title, slug, department, position, location, type, card_description, meta_title, meta_description, keywords, canonical_url, status, content) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        body.title,
        uniqueSlug,
        body.department,
        body.position,
        body.location,
        body.type,
        body.card_description || "",
        body.meta_title || null,
        body.meta_description || null,
        body.keywords || null,
        body.canonical_url || null,
        body.status || "published",
        JSON.stringify(body.content)
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Vacancy created successfully",
      id: result.insertId,
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
