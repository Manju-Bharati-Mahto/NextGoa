import { NextResponse } from "next/server";
import { generateSitemapIndex } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config"; // Assuming SITE_URL is defined here

export async function GET() {
  const sitemaps = [
    `${SITE_URL}/programs-sitemap.xml`,
    `${SITE_URL}/program_type-sitemap.xml`,
    `${SITE_URL}/page-sitemap.xml`,
    // You can add more later like /blog-sitemap.xml, etc.
  ];

  const xml = generateSitemapIndex(sitemaps);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
