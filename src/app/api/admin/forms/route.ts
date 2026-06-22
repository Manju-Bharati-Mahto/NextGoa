import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const [rows]: any = await db.query(`
      SELECT DISTINCT form_name
      FROM form_submissions
      ORDER BY form_name ASC
  `);

  return NextResponse.json(rows);
}