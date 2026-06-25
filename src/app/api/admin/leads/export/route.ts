import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const form = searchParams.get("form") || "all";
    const search = searchParams.get("search") || "";

    let where = "WHERE 1=1";
    const params: any[] = [];

    if (form !== "all") {
      where += " AND form_name = ?";
      params.push(form);
    }

    if (search) {
      where += " AND form_data LIKE ?";
      params.push(`%${search}%`);
    }

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM form_submissions
      ${where}
      ORDER BY id ASC
      `,
      params
    );

    const csvRows: string[] = [];

    csvRows.push([
      "ID",
      "Form",
      "Name",
      "Email",
      "Phone",
      "Date",
    ].join(","));

    rows.forEach((lead: any) => {

      const formData =
        typeof lead.form_data === "string"
          ? JSON.parse(lead.form_data)
          : lead.form_data;

      csvRows.push([
        lead.id,
        `"${lead.form_name}"`,
        `"${formData?.fullName || formData?.name || ""}"`,
        `"${formData?.email || ""}"`,
        `"${formData?.mobile || ""}"`,
        `"${new Date(lead.created_at).toLocaleString()}"`
      ].join(","));

    });

    const csv = csvRows.join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition":
          'attachment; filename="leads.csv"',
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
      }
    );

  }
}