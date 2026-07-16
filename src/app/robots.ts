import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

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
        disallow: ["/api/", "/admin/"],
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
