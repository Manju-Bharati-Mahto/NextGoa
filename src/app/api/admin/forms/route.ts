import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function GET() {
  
  const user = await requirePermission("forms");

if (user instanceof NextResponse) {
  return user;
}
  
  const [rows]: any = await db.query(`
      SELECT DISTINCT form_name
      FROM form_submissions
      ORDER BY form_name ASC
  `);

  return NextResponse.json(rows);
}