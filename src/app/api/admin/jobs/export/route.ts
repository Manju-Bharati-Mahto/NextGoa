import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const user = await requireAdmin();

  if (user instanceof NextResponse) {
    return user;
  }

  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";

    let where = "WHERE 1=1";
    const params: any[] = [];

    if (search) {
      where += `
        AND (
          full_name LIKE ?
          OR email LIKE ?
          OR mobile LIKE ?
          OR position LIKE ?
          OR location LIKE ?
        )
      `;

      const keyword = `%${search}%`;

      params.push(
        keyword,
        keyword,
        keyword,
        keyword,
        keyword
      );
    }

    const [rows]: any = await db.query(
      `
      SELECT *
      FROM careers
      ${where}
      ORDER BY id DESC
      `,
      params
    );

    const csvRows: string[] = [];

    csvRows.push([
      "ID",
      "Full Name",
      "Email",
      "Mobile",
      "Position",
      "Location",
      "Resume",
      "Applied Date",
    ].join(","));

    rows.forEach((job: any) => {
      csvRows.push([
        job.id,
        `"${job.full_name}"`,
        `"${job.email}"`,
        `"${job.mobile}"`,
        `"${job.job_title}"`,
        `"${job.location}"`,
        `${process.env.NEXT_PUBLIC_SITE_URL || "https://goa.paruluniversity.ac.in"}${job.resume}`,
        `"${new Date(job.created_at).toLocaleString()}"`,
      ].join(","));
    });

    const csv = csvRows.join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition":
          'attachment; filename="career-applications.csv"',
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