import { NextResponse } from "next/server";
import { generateSitemapIndex } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const sitemaps = [
    `${SITE_URL}/page-sitemap.xml`,
    `${SITE_URL}/blog-sitemap.xml`,
    `${SITE_URL}/faculty-sitemap.xml`,
    `${SITE_URL}/careers-sitemap.xml`,
    `${SITE_URL}/events-sitemap.xml`,
    `${SITE_URL}/news-sitemap.xml`,
  ];

  const xml = generateSitemapIndex(sitemaps);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
