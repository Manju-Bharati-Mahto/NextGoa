import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  try {
    const user = await requirePermission("leads");

if (user instanceof NextResponse) {
  return user;
}
    
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    const offset = (page - 1) * limit;

    const form = searchParams.get("form") || "all";
    const search = searchParams.get("search") || "";

    let where = "WHERE 1=1";
    const params: any[] = [];

    if (form !== "all") {
      where += " AND form_name = ?";
      params.push(form);
    }

    if (search) {
      where += " AND form_data LIKE ?";
      params.push(`%${search}%`);
    }

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM form_submissions
      ${where}
      ORDER BY id ASC
      LIMIT ?
      OFFSET ?
      `,
      [...params, limit, offset]
    );

    const [countRows]: any = await db.query(
      `
      SELECT COUNT(*) total
      FROM form_submissions
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

  } catch (err: any) {

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );

  }
}