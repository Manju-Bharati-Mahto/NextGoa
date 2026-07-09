export function generateSitemapIndex(sitemapUrls: string[]): string {
  const sitemapsXml = sitemapUrls
    .map(
      (url) => `
    <sitemap>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapsXml}
</sitemapindex>`;
}

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  images?: number; // Just for visual reference like Yoast
};

export function generateSitemap(urls: SitemapUrl[]): string {
  const urlsXml = urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod || new Date().toISOString()}</lastmod>
      ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
      ${url.priority ? `<priority>${url.priority}</priority>` : ""}
    </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXml}
</urlset>`;
}
