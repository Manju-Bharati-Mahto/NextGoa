import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";
// import pool from "@/lib/db"; // Uncomment this to fetch from DB

export async function GET() {
  // TODO: Fetch programs from your database
  // const [rows] = await pool.execute("SELECT slug, updated_at FROM programs");
  
  // Placeholder data for now
  const dummyPrograms = [
    { slug: "master-of-science-in-nursing-paediatrics" },
    { slug: "certificate-program-in-product-design" },
    { slug: "certificate-program-in-interior-designing" },
  ];

  const urls: SitemapUrl[] = dummyPrograms.map((program) => ({
    loc: `${SITE_URL}/program/${program.slug}`,
    lastmod: new Date().toISOString(), // Use program.updated_at if available
    changefreq: "monthly",
    priority: 0.8,
  }));

  const xml = generateSitemap(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
