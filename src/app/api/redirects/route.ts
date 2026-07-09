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
    WHERE
      source_url=?
      AND is_active=1
    LIMIT 1
    `,
    [path],
  );

  if (!rows.length) {
    return NextResponse.json({
      success: false,
    });
  }

  return NextResponse.json({
    success: true,
    data: rows[0],
  });
}