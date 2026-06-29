import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    if (!rows.length) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 401 }
      );
    }

    const user = rows[0];

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }
const [permissionRows]: any = await db.query(
`
SELECT p.slug
FROM user_permissions up
INNER JOIN permissions p
ON up.permission_id = p.id
WHERE up.user_id = ?
`,
[user.id]
);
const permissions = permissionRows.map(
  (item: any) => item.slug
);
   const token = generateToken({
  id: user.id,
  role_id: user.role_id,
  email: user.email,
  permissions,
});

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}