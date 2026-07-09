import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requirePermission } from "@/lib/adminAuth";
import * as XLSX from "xlsx";

export async function POST(req: NextRequest) {
  try {
    const user = await requirePermission("redirect.import");

    if (user instanceof NextResponse) {
      return user;
    }

    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "Please upload file",
        },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const workbook = XLSX.read(buffer, {
      type: "buffer",
    });

    const sheet =
      workbook.Sheets[workbook.SheetNames[0]];

    const rows: any[] =
      XLSX.utils.sheet_to_json(sheet);

    let inserted = 0;

    let skipped = 0;

    for (const row of rows) {
      const source = row.Source?.trim();

      const destination =
        row.Destination?.trim();

      const type = Number(row.Type || 301);

      const status =
        row.Status === "Active" ? 1 : 0;

      if (!source || !destination) {
        skipped++;

        continue;
      }

      const [exists]: any = await db.query(
        `
        SELECT id
        FROM redirects
        WHERE source_url=?
        `,
        [source],
      );

      if (exists.length) {
        skipped++;

        continue;
      }

      await db.execute(
        `
        INSERT INTO redirects
        (
          source_url,
          destination_url,
          redirect_type,
          is_active
        )
        VALUES
        (?,?,?,?)
        `,
        [
          source,
          destination,
          type,
          status,
        ],
      );

      inserted++;
    }

    return NextResponse.json({
      success: true,
      message: `${inserted} redirects imported. ${skipped} skipped.`,
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