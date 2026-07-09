import { NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const user = await requirePermission("redirect.export");

    if (user instanceof NextResponse) {
      return user;
    }

    const [rows]: any = await db.query(`
      SELECT
        source_url,
        destination_url,
        redirect_type,
        is_active
      FROM redirects
      ORDER BY id DESC
    `);

    const data = rows.map((item: any) => ({
      Source: item.source_url,
      Destination: item.destination_url,
      Type: item.redirect_type,
      Status: item.is_active ? "Active" : "Inactive",
    }));

    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Redirects",
    );

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

        "Content-Disposition":
          'attachment; filename="redirects.xlsx"',
      },
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