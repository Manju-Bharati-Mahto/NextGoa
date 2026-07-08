import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const page = Number(
      req.nextUrl.searchParams.get("page") || 1
    );

    const limit = Number(
      req.nextUrl.searchParams.get("limit") || 10
    );

    const search =
      req.nextUrl.searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    let where = "";

    const params: any[] = [];

    if (search) {
      where = "WHERE content LIKE ?";

      params.push(`%${search}%`);
    }

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM experts
      ${where}
      ORDER BY sort_order ASC,id DESC
      LIMIT ${limit}
      OFFSET ${offset}
      `,
      params
    );

    const [countRows]: any = await db.query(
      `
      SELECT COUNT(*) total
      FROM experts
      ${where}
      `,
      params
    );

    const data = rows.map((item: any) => ({
      ...item,
      content:
        typeof item.content === "string"
          ? JSON.parse(item.content)
          : item.content,
    }));

    return NextResponse.json({
      success: true,
      data,
      total: countRows[0].total,
      totalPages: Math.ceil(
        countRows[0].total / limit
      ),
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