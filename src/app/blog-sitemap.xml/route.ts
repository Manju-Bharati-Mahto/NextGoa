import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/blog", changefreq: "daily", priority: 0.9 },
    { path: "/blog/parul-university-goa-achieves-a-historic-hattrick-at-india-energy-week-iew-2026", changefreq: "daily", priority: 0.9 },
    { path: "/blog/classroom-community-building-its-ok-to-try-something-new-feature", changefreq: "daily", priority: 0.9 },
    { path: "/blog/best-courses-after-12th-in-goa", changefreq: "daily", priority: 0.9 },
    { path: "/blog/career-in-artificial-intelligence-after-12th-in-goa", changefreq: "daily", priority: 0.9 },
    { path: "/blog/cybersecurity-career-guide-after-12th", changefreq: "daily", priority: 0.9 },
    { path: "/blog/why-study-in-goa-benefits-for-students", changefreq: "daily", priority: 0.9 },
    { path: "/blog/admission-process-for-hotel-management-courses-in-goa", changefreq: "daily", priority: 0.9 },
    { path: "/blog/how-to-choose-between-bca-and-btech", changefreq: "daily", priority: 0.9 },
    { path: "/blog/campus-life-in-goa", changefreq: "daily", priority: 0.9 },
    { path: "/blog/nursing-admission-guide-2026-eligibility-steps", changefreq: "daily", priority: 0.9 },
    { path: "/blog/top-specialisations-courses-hotel-management", changefreq: "daily", priority: 0.9 },
    { path: "/blog/ai-vs-data-science-btech-differences", changefreq: "daily", priority: 0.9 },
    { path: "/blog/bhmct-course-guide", changefreq: "daily", priority: 0.9 },
    { path: "/blog/btech-in-ai-course-structure", changefreq: "daily", priority: 0.9 },
    { path: "/blog/bsc-nursing-course-details", changefreq: "daily", priority: 0.9 },
    { path: "/blog/b-sc-biotechnology-course-guide-subjects-admission-process", changefreq: "daily", priority: 0.9 },
    { path: "/blog/inequality-inside-the-home-understanding-the-gaps-that-exist-within-household", changefreq: "daily", priority: 0.9 },
    { path: "/blog/bba-course-guide", changefreq: "daily", priority: 0.9 },
    { path: "/blog/cardiovascular-health-after-decades-of-progress-why-the-numbers-are-worrying-again", changefreq: "daily", priority: 0.9 },
    { path: "/blog/how-to-start-career-in-finance-with-mba-and-bba", changefreq: "daily", priority: 0.9 },
    { path: "/blog/future-scope-of-phd-in-computer-science", changefreq: "daily", priority: 0.9 },
    { path: "/blog/what-you-learn-in-bca-and-mca-program", changefreq: "daily", priority: 0.9 },
    { path: "/blog/bba-vs-bba-hons", changefreq: "daily", priority: 0.9 },
    { path: "/blog/msc-biotechnology-scope-career-research-guide", changefreq: "daily", priority: 0.9 }
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
