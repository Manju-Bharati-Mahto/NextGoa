import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/faculty", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/engineering", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty-of-management-studies", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty-of-pharmacy", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/applied-sciences", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty-of-nursing", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty-of-physiotherapy", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty-of-hotel-management", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/allied-healthcare", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/it-cs", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/doctorate-programs", changefreq: "weekly", priority: 0.9 }
  ];

  const urls: SitemapUrl[] = staticPaths.map((item) => ({
    loc: `${SITE_URL}${item.path}`,
    lastmod: new Date().toISOString(),
    changefreq: item.changefreq,
    priority: item.priority,
  }));

  const xml = generateSitemap(urls);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
