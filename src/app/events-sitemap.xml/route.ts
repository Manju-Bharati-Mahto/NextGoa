import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/events", changefreq: "weekly", priority: 0.9 },
    { path: "/events/vadodara-fashion-week-season-3-innovation-arjun-kapoor-parul-university-goa", changefreq: "weekly", priority: 0.9 },
    { path: "/events/7th-annual-convocation-9980-graduates-careers", changefreq: "weekly", priority: 0.9 },
    { path: "/events/pu-overall-champions-aiu-west-zone-unifest-2025-satrang", changefreq: "weekly", priority: 0.9 },
    { path: "/events/enterprise-rag-architecture-explained-how-the-goa-cloud-connect-2026-grounding-session-taught-developers-to-make-ai-trustworthy", changefreq: "weekly", priority: 0.9 },
    { path: "/events/building-ai-applications-with-gemini-what-the-goa-cloud-connect-2026-baseline-session-taught-120-developers-at-parul-university-goa", changefreq: "weekly", priority: 0.9 },
    { path: "/events/world-no-tobacco-day-2026-role-of-nurses-parul-college-of-nursing-students-skit-on-public-health-education", changefreq: "weekly", priority: 0.9 },
    { path: "/events/parul-university-goa-achieves-a-historic-hattrick-at-india-energy-week-iew-2026", changefreq: "weekly", priority: 0.9 }
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
