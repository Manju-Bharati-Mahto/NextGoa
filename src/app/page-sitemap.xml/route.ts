import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/", changefreq: "daily", priority: 1 },
    { path: "/about-us", changefreq: "weekly", priority: 0.9 },
    { path: "/privacy-policy", changefreq: "monthly", priority: 0.9 },
    { path: "/terms-of-use", changefreq: "monthly", priority: 0.9 },
    { path: "/documents/Prospectus_AY_2026_27.pdf", changefreq: "monthly", priority: 0.9 },
    { path: "/contact", changefreq: "weekly", priority: 0.9 },
    { path: "/campus-life", changefreq: "weekly", priority: 0.9 },
    { path: "/examination", changefreq: "weekly", priority: 0.9 },
    { path: "/international/study-abroad", changefreq: "weekly", priority: 0.9 },
    { path: "/placements", changefreq: "weekly", priority: 0.9 }
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
