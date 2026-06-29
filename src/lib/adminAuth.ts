import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import db from "@/lib/db";

export async function requireAdmin() {
  const cookieStore = await cookies();

  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const user = verifyToken(token);

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid Token",
      },
      {
        status: 401,
      }
    );
  }

  return user;
}

export async function getUserPermissions(
  userId: number
) {
  const [rows]: any = await db.query(
    `
    SELECT p.slug
    FROM user_permissions up
    INNER JOIN permissions p
      ON p.id = up.permission_id
    WHERE up.user_id = ?
    `,
    [userId]
  );

  return rows.map((row: any) => row.slug);
}

export async function requirePermission(
  permission: string
) {
  const user = await requireAdmin();

  if (user instanceof NextResponse) {
    return user;
  }

  // Super Admin
  if (user.role_id === 1) {
    return user;
  }

  const permissions = await getUserPermissions(user.id);

  if (!permissions.includes(permission)) {
    return NextResponse.json(
      {
        success: false,
        message: "Access Denied",
      },
      {
        status: 403,
      }
    );
  }

  return user;
}