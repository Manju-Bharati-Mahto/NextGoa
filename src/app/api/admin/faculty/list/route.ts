import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

export async function GET() {
   const user = await requirePermission("faculty");

    if (user instanceof NextResponse) {
      return user;
    }
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