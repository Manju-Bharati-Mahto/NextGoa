import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { staticRoutes } from "@/lib/routes";

/**
 * Generates /sitemap.xml at build time (SSG) from the shared route registry.
 *
 * For data-driven pages built later (e.g. one per program), fetch them here and
 * concat onto the returned array. If the total ever approaches 50,000 URLs,
 * split with `generateSitemaps` per the Next.js docs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
