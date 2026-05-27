import { siteConfig, SITE_URL } from "@/lib/site-config";
import { staticRoutes } from "@/lib/routes";

/**
 * Serves /llms.txt — an emerging convention (llmstxt.org) giving AI engines a
 * concise, curated map of the site's most useful pages in Markdown. Complements
 * robots.txt (which controls access) by guiding *what matters* for citation.
 *
 * Statically generated so it ships in the SSG output with no runtime cost.
 */
export const dynamic = "force-static";

export function GET() {
  const links = staticRoutes
    .map((r) => `- [${r.title}](${SITE_URL}${r.path}): ${r.summary}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Key pages

${links}

## Contact

- Email: ${siteConfig.contact.email}
- Phone: ${siteConfig.contact.phone}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
