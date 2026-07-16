import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/events", changefreq: "weekly", priority: 0.9 },
    { path: "/events/vadodara-fashion-week-season-3-innovation-arjun-kapoor-parul-university-goa", changefreq: "weekly", priority: 0.9 },
    { path: "/events/7th-annual-convocation-9980-graduates-careers", changefreq: "weekly", priority: 0.9 },
    { path: "/events/pu-overall-champions-aiu-west-zone-unifest-2025-satrang", changefreq: "weekly", priority: 0.9 }
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
