import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";
// import pool from "@/lib/db"; // Uncomment this to fetch from DB

export async function GET() {
  // TODO: Fetch program types from your database
  // const [rows] = await pool.execute("SELECT slug, updated_at FROM program_types");
  
  // Placeholder data for now
  const dummyProgramTypes = [
    { slug: "diploma-programs" },
    { slug: "bachelors-programs" },
    { slug: "masters-programs" },
    { slug: "dual-degree" },
  ];

  const urls: SitemapUrl[] = dummyProgramTypes.map((type) => ({
    loc: `${SITE_URL}/program-type/${type.slug}`,
    lastmod: new Date().toISOString(), // Use type.updated_at if available
    changefreq: "weekly",
    priority: 0.9,
  }));

  const xml = generateSitemap(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
