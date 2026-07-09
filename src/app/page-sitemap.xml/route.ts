import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/", changefreq: "daily", priority: 1 },
    { path: "/about-us", changefreq: "weekly", priority: 0.9 },
    { path: "/careers", changefreq: "monthly", priority: 0.9 },
    { path: "/blog", changefreq: "daily", priority: 0.9 },
    { path: "/privacy-policy", changefreq: "monthly", priority: 0.9 },
    { path: "/terms-of-use", changefreq: "monthly", priority: 0.9 },
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
    { path: "/blog/msc-biotechnology-scope-career-research-guide", changefreq: "daily", priority: 0.9 },
    { path: "/documents/Prospectus_AY_2026_27.pdf", changefreq: "monthly", priority: 0.9 },
    { path: "/contact", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/engineering", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/management-studies", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/pharmacy", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/applied-sciences", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/nursing", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/physiotherapy", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/hotel-management", changefreq: "weekly", priority: 0.9 },
    { path: "/campus-life", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/allied-healthcare", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/it-cs", changefreq: "weekly", priority: 0.9 },
    { path: "/faculty/doctorate-programs", changefreq: "weekly", priority: 0.9 },
    { path: "/examination", changefreq: "weekly", priority: 0.9 },
    { path: "/international/study-abroad", changefreq: "weekly", priority: 0.9 },
    { path: "/placements", changefreq: "weekly", priority: 0.9 },
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
