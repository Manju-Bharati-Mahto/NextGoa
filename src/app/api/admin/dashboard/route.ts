import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    // Cards

    const [[leadCount]]: any = await db.query(
      `SELECT COUNT(*) total FROM form_submissions`
    );

    const [[todayLeadCount]]: any = await db.query(
      `
      SELECT COUNT(*) total
      FROM form_submissions
      WHERE DATE(created_at)=CURDATE()
      `
    );

    const [[userCount]]: any = await db.query(
      `SELECT COUNT(*) total FROM users`
    );

    const [[blogCount]]: any = await db.query(
      `SELECT COUNT(*) total FROM blogs`
    );

    // Recent Blogs

    const [recentBlogs]: any = await db.query(
      `
      SELECT
      id,
      title,
      status,
      created_at
      FROM blogs
      ORDER BY created_at DESC
      LIMIT 5
      `
    );

    // Recent Leads

    const [recentLeads]: any = await db.query(
      `
      SELECT
      id,
      form_name,
      form_data,
      created_at
      FROM form_submissions
      ORDER BY created_at DESC
      LIMIT 5
      `
    );

    return NextResponse.json({
      cards: {
        totalLeads: leadCount.total,
        todayLeads: todayLeadCount.total,
        users: userCount.total,
        blogs: blogCount.total,
      },
      recentBlogs,
      recentLeads,
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