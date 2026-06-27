import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    const offset = (page - 1) * limit;

    const search = searchParams.get("search") || "";

    let where = "WHERE 1=1";
    const params: any[] = [];

    if (search) {
      where += `
        AND (
          full_name LIKE ?
          OR email LIKE ?
          OR mobile LIKE ?
          OR job_title LIKE ?
          OR location LIKE ?
        )
      `;

      params.push(
        `%${search}%`,
        `%${search}%`,
        `%${search}%`,
        `%${search}%`,
        `%${search}%`
      );
    }

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM careers
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
      FROM careers
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