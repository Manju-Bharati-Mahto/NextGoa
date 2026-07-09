import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

// GET Single Redirect
export async function GET(
  req: NextRequest,
  { params }: Params,
) {
  try {
    const user = await requirePermission("redirect.view");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const [rows]: any = await db.query(
      `SELECT * FROM redirects WHERE id=?`,
      [id],
    );

    if (!rows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Redirect not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      data: rows[0],
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

// UPDATE Redirect
export async function PUT(
  req: NextRequest,
  { params }: Params,
) {
  try {
    const user = await requirePermission("redirect.edit");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    const body = await req.json();

    const {
      source_url,
      destination_url,
      redirect_type,
      is_active,
    } = body;

    // Duplicate source url check
    const [exists]: any = await db.query(
      `
      SELECT id
      FROM redirects
      WHERE source_url=?
      AND id<>?
      `,
      [source_url, id],
    );

    if (exists.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Source URL already exists",
        },
        {
          status: 400,
        },
      );
    }

    await db.execute(
      `
      UPDATE redirects
      SET
        source_url=?,
        destination_url=?,
        redirect_type=?,
        is_active=?
      WHERE id=?
      `,
      [
        source_url,
        destination_url,
        redirect_type,
        is_active,
        id,
      ],
    );

    return NextResponse.json({
      success: true,
      message: "Redirect updated successfully",
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

// DELETE Redirect
export async function DELETE(
  req: NextRequest,
  { params }: Params,
) {
  try {
    const user = await requirePermission("redirect.delete");

    if (user instanceof NextResponse) {
      return user;
    }

    const { id } = await params;

    await db.execute(
      `DELETE FROM redirects WHERE id=?`,
      [id],
    );

    return NextResponse.json({
      success: true,
      message: "Redirect deleted successfully",
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}