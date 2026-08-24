import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";
import db from "@/lib/db";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  let urls: SitemapUrl[] = [
    {
      loc: `${SITE_URL}/events`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    },
  ];

  try {
    const [rows]: any = await db.query(
      `SELECT slug, COALESCE(publish_at, updated_at, created_at) AS date 
       FROM blogs 
       WHERE blog_type = 'event' AND status = 'published'`
    );

    if (rows && rows.length > 0) {
      const dynamicUrls: SitemapUrl[] = rows.map((event: any) => ({
        loc: `${SITE_URL}/events/${event.slug}`,
        lastmod: new Date(event.date || Date.now()).toISOString(),
        changefreq: "weekly",
        priority: 0.9,
      }));
      urls = [...urls, ...dynamicUrls];
    }
  } catch (error) {
    console.error("[EventsSitemap] Database error:", error);
    // On DB failure, it will just return the static /events route
  }

  const xml = generateSitemap(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
