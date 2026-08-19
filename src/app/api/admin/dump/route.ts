import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    await db.query("ALTER TABLE blog_faqs MODIFY id INT(11) NOT NULL AUTO_INCREMENT");
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
