import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin();

  if (admin instanceof NextResponse) {
    return admin;
  }

  const { id } = await params;

  const [users]: any = await db.query(
    `
    SELECT
      id,
      name,
      email
    FROM users
    WHERE id=?
    LIMIT 1
    `,
    [id]
  );

  if (!users.length) {
    return NextResponse.json(
      {
        success: false,
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  const [permissions]: any = await db.query(
    `
    SELECT permission_id
    FROM user_permissions
    WHERE user_id=?
    `,
    [id]
  );

  return NextResponse.json({
    ...users[0],
    permissions: permissions.map(
      (p: any) => p.permission_id
    ),
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin();

  if (admin instanceof NextResponse) {
    return admin;
  }

  const { id } = await params;

  try {
    const {
      name,
      email,
      password,
      permissions,
    } = await req.json();

    if (password) {
      const hash = await bcrypt.hash(password, 10);

      await db.query(
        `
        UPDATE users
        SET
          name=?,
          email=?,
          password=?
        WHERE id=?
        `,
        [
          name,
          email,
          hash,
          id,
        ]
      );
    } else {
      await db.query(
        `
        UPDATE users
        SET
          name=?,
          email=?
        WHERE id=?
        `,
        [
          name,
          email,
          id,
        ]
      );
    }

    await db.query(
      `
      DELETE
      FROM user_permissions
      WHERE user_id=?
      `,
      [id]
    );

    for (const permissionId of permissions) {
      await db.query(
        `
        INSERT INTO user_permissions
        (
          user_id,
          permission_id
        )
        VALUES
        (?,?)
        `,
        [
          id,
          permissionId,
        ]
      );
    }

    return NextResponse.json({
      success: true,
    });

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