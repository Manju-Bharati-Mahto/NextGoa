import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT *
      FROM experts
      WHERE status = 1
      ORDER BY sort_order ASC
    `);

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}