import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");

  if (!path) {
    return NextResponse.json({
      success: false,
    });
  }

  const [rows]: any = await db.query(
    `
    SELECT *
    FROM redirects
    WHERE source_url = ?
      AND is_active = 1
    LIMIT 1
    `,
    [path],
  );

  if (!rows.length) {
    return NextResponse.json({
      success: false,
    });
  }

  // Increment hit count
  await db.execute(
    `
    UPDATE redirects
    SET hit_count = hit_count + 1
    WHERE id = ?
    `,
    [rows[0].id],
  );

  // Return updated hit count
  rows[0].hit_count = rows[0].hit_count + 1;

  return NextResponse.json({
    success: true,
    data: rows[0],
  });
}