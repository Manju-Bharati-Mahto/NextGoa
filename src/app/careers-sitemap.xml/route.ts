import { NextResponse } from "next/server";
import { generateSitemap, SitemapUrl } from "@/lib/sitemaps/sitemap-utils";
import { SITE_URL } from "@/lib/site-config";

export async function GET() {
  const staticPaths = [
    { path: "/careers", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/teaching/physiotherapy", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/teaching/management-studies", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/teaching/engineering-it-cs", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/teaching/applied-health-sciences", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/teaching/nursing", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/teaching/hotel-management", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/senior-civil-engineer", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/office-assistant", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/lab-assistant", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/electrician", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/plumber", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/driver", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/system-support-engineer", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/hostel-warden", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/security-guard", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/non-teaching/librarian", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/international-relations", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/entrepreneurship-and-innovation", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/training-placement-and-career-development", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/national-education-policy-nep", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/research-and-development", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/internal-quality-assurance-cell-iqac", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/sports-cell", changefreq: "monthly", priority: 0.9 },
    { path: "/careers/leadership/cultural-affairs", changefreq: "monthly", priority: 0.9 }
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
