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
    { path: "/blog/bba-course-guide", changefreq: "daily", priority: 0.9 },
    { path: "/blog/how-to-start-career-in-finance-with-mba-and-bba", changefreq: "daily", priority: 0.9 },
    { path: "/blog/future-scope-of-phd-in-computer-science", changefreq: "daily", priority: 0.9 },
    { path: "/blog/what-you-learn-in-bca-and-mca-program", changefreq: "daily", priority: 0.9 },
    { path: "/blog/bba-vs-bba-hons", changefreq: "daily", priority: 0.9 },
    { path: "/blog/msc-biotechnology-scope-career-research-guide", changefreq: "daily", priority: 0.9 },
    { path: "/blog/after-decades-of-improvement-cardiovascular-health-rates", changefreq: "daily", priority: 0.9 },
    { path: "/blog/those-inequalities-are-inequalities-that-occur-within-households", changefreq: "daily", priority: 0.9 },
    { path: "/blog/how-students-learn-creative-design", changefreq: "daily", priority: 0.9 },
    { path: "/blog/mba-vs-specialised-business-certifications-what-employers-value", changefreq: "daily", priority: 0.9 },
    { path: "/blog/why-an-industrial-visit-for-mca-students-matters-inside-d-links-goa-networking-plant-with-parul-university", changefreq: "daily", priority: 0.9 },
    { path: "/blog/inside-ncpor-indias-polar-research-nodal-agency-in-goa-what-an-ncpor-industrial-visit-teaches-computer-science-and-bca-students-about-data-science-in-real-research", changefreq: "daily", priority: 0.9 },
    { path: "/blog/physiotherapy-top-choice-in-healthcare-career", changefreq: "daily", priority: 0.9 },
    { path: "/blog/top-programming-skills-recruiters-expect-from-freshers", changefreq: "daily", priority: 0.9 },
    { path: "/blog/applied-science-powering-innovation-in-healthcare-agriculture-and-sustainability", changefreq: "daily", priority: 0.9 },
    { path: "/blog/allied-healthcare-careers-in-india", changefreq: "daily", priority: 0.9 },
    { path: "/blog/d-link-goa-industrial-visit-mca-students", changefreq: "daily", priority: 0.9 },
    { path: "/blog/bca-students-ncpor-industrial-visit-data-science-learning", changefreq: "daily", priority: 0.9 }
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
