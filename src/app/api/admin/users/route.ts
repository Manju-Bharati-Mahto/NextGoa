import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {

  const admin = await requireAdmin();

  if (admin instanceof NextResponse) {
    return admin;
  }

  try {

    const {
      name,
      email,
      password,
      permissions,
    } = await req.json();

    const hash = await bcrypt.hash(password, 10);

    const [result]: any = await db.query(
      `
      INSERT INTO users
      (
        name,
        email,
        password,
        role_id
      )
      VALUES
      (
        ?, ?, ?, ?
      )
      `,
      [
        name,
        email,
        hash,
        2
      ]
    );

    const userId = result.insertId;

    if (
      permissions &&
      permissions.length
    ) {

      for (const permissionId of permissions) {

        await db.query(
          `
          INSERT INTO user_permissions
          (
            user_id,
            permission_id
          )
          VALUES
          (
            ?, ?
          )
          `,
          [
            userId,
            permissionId
          ]
        );

      }

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
export async function GET(req: NextRequest) {
  const admin = await requireAdmin();

  if (admin instanceof NextResponse) {
    return admin;
  }

  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    let where = "WHERE 1=1";
    const params: any[] = [];

    if (search) {
      where += `
        AND (
          name LIKE ?
          OR email LIKE ?
        )
      `;

      params.push(
        `%${search}%`,
        `%${search}%`
      );
    }

    const [rows]: any = await db.query(
      `
      SELECT
        id,
        name,
        email,
        role_id,
        status,
        created_at
      FROM users
      ${where}
      ORDER BY id DESC
      LIMIT ?
      OFFSET ?
      `,
      [...params, limit, offset]
    );

    const [countRows]: any = await db.query(
      `
      SELECT COUNT(*) total
      FROM users
      ${where}
      `,
      params
    );

    return NextResponse.json({
      data: rows,
      total: countRows[0].total,
      page,
      limit,
      totalPages: Math.ceil(countRows[0].total / limit),
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