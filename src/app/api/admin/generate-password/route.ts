import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  const hash = await bcrypt.hash("Lz9|;jPRt895", 10);

  return NextResponse.json({
    password: "Lz9|;jPRt895",
    hash,
  });
}