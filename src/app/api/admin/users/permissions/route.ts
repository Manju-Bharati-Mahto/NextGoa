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
      FROM permissions
      ORDER BY id ASC
    `);

    return NextResponse.json(rows);

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