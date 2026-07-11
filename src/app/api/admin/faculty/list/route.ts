import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const [rows]: any = await db.query(`
      SELECT
        id,
        title,
        slug
      FROM faculty
      WHERE status='published'
      ORDER BY title
  `);

  return NextResponse.json({
    success: true,
    data: rows,
  });
}