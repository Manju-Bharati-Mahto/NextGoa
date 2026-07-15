import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Generates /robots.txt.
 *
 * GEO note: AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Claude)
 * crawl with named user agents. To be *cited* by them, those agents must be
 * allowed. They're listed explicitly below so the intent is documented and easy
 * to flip - if the university ever wants to opt a specific engine OUT (e.g. out
 * of model training while staying in search), change its `allow` to `disallow`.
 */
const AI_CRAWLERS = [
  "GPTBot", 
  "OAI-SearchBot", 
  "ChatGPT-User", 
  "ClaudeBot", 
  "Claude-Web",
  "PerplexityBot", 
  "Perplexity-User",
  "Google-Extended", 
  "Applebot-Extended", 
  "Bytespider", 
  "CCBot", 
];

export default function robots(): MetadataRoute.Robots {
  // If we are in the UAT environment, block all crawlers
  if (process.env.NEXT_PUBLIC_ENV === "uat") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${SITE_URL}/sitemap_index.xml`,
    };
  }

  // Production Rules (Allow normal crawling)
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Non-public / non-content paths. /api covers route handlers; the rest
        // are Next.js internals that need not be crawled.
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
  };
}
