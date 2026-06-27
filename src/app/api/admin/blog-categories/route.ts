import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const user = await requireAdmin();

  if (user instanceof NextResponse) {
    return user;
  }
  try {
   
    const [rows]: any = await db.query(`
      SELECT
        id,
        name,
        slug
      FROM blog_categories
      WHERE status='active'
      ORDER BY name
    `);

    return NextResponse.json(rows);

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