import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Generates /robots.txt.
 *
 * GEO note: AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Claude)
 * crawl with named user agents. To be *cited* by them, those agents must be
 * allowed. They're listed explicitly below so the intent is documented and easy
 * to flip — if the university ever wants to opt a specific engine OUT (e.g. out
 * of model training while staying in search), change its `allow` to `disallow`.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI (ChatGPT) crawling
  "OAI-SearchBot", // OpenAI search
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic
  "Claude-Web",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews training signal
  "Applebot-Extended", // Apple Intelligence
  "Bytespider", // TikTok/ByteDance
  "CCBot", // Common Crawl (feeds many models)
];

export default function robots(): MetadataRoute.Robots {
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
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
