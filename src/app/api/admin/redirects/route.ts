import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

// GET - List Redirects
export async function GET(req: NextRequest) {
  try {
    const user = await requirePermission("redirect.view");

    if (user instanceof NextResponse) {
      return user;
    }

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);

    const limit = Number(searchParams.get("limit") || 10);

    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    const where = search
      ? `WHERE source_url LIKE ? OR destination_url LIKE ?`
      : "";

    const params = search
      ? [`%${search}%`, `%${search}%`, limit, offset]
      : [limit, offset];

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM redirects
      ${where}
      ORDER BY id DESC
      LIMIT ?
      OFFSET ?
      `,
      params,
    );

    const [count]: any = await db.query(
      `
      SELECT COUNT(*) total
      FROM redirects
      ${where}
      `,
      search ? [`%${search}%`, `%${search}%`] : [],
    );

    return NextResponse.json({
      success: true,
      data: rows,
      total: count[0].total,
      page,
      totalPages: Math.ceil(count[0].total / limit),
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
// POST - Create Redirect
export async function POST(req: NextRequest) {
  try {
    const user = await requirePermission("redirect.create");

    if (user instanceof NextResponse) {
      return user;
    }

    const body = await req.json();

    const { source_url, destination_url, redirect_type, is_active } = body;

    // Check duplicate source
    const [exists]: any = await db.query(
      `SELECT id FROM redirects WHERE source_url=?`,
      [source_url],
    );

    if (exists.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Source URL already exists",
        },
        {
          status: 400,
        },
      );
    }

    await db.execute(
      `
      INSERT INTO redirects
      (
        source_url,
        destination_url,
        redirect_type,
        is_active
      )
      VALUES
      (?,?,?,?)
      `,
      [source_url, destination_url, redirect_type, is_active],
    );

    return NextResponse.json({
      success: true,
      message: "Redirect created successfully",
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
