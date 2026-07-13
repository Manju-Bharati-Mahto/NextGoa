import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/faculty", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/engineering", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/management", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/pharmacy", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/applied-sciences", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/nursing", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/physiotherapy", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/hotel-management", changefreq: "weekly", priority: 0.9 },
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
