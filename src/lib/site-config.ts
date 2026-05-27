/**
 * Central source of truth for site-wide identity, contact, and SEO defaults.
 *
 * Every metadata tag, JSON-LD block, sitemap entry, and robots rule reads from
 * here — change a fact once and it propagates across the whole site.
 *
 * ⚠️ TODO (verify before launch): confirm the NAP (name / address / phone)
 * details below with the university. Search engines and AI answer engines treat
 * NAP consistency as a strong trust signal, so these must exactly match Google
 * Business Profile, social profiles, and any directory listings.
 */

/**
 * Canonical origin of the production site, e.g. "https://www.paruluniversity.ac.in".
 * Override per environment via NEXT_PUBLIC_SITE_URL (see .env.local). Used as the
 * `metadataBase` for resolving Open Graph / canonical URLs, and in the sitemap.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.paruluniversity.ac.in"
).replace(/\/$/, "");

export const siteConfig = {
  /** Short brand name used in the title template suffix and schema. */
  name: "Parul University Goa",
  /** Full legal/marketing name for structured data. */
  legalName: "Parul University Goa",
  /** Default home/landing title (the template adds the brand suffix on inner pages). */
  defaultTitle: "Parul University Goa — Goa's First State Private University",
  /** Default meta description (≤ ~155 chars). Inner pages should override this. */
  description:
    "Parul University Goa is Goa's first State Private University, backed by two decades of teaching, research, and placements at Parul University in Gujarat. Admissions open for 2026.",
  url: SITE_URL,
  /** Locale used for og:locale and <html lang>. */
  locale: "en_IN",
  lang: "en",

  /**
   * NAP — Name, Address, Phone. ⚠️ Verify these.
   * Powers the EducationalOrganization JSON-LD and the footer.
   */
  contact: {
    // From the Figma footer. ⚠️ Verify with the university before launch.
    phone: "1800 890 9090", // toll-free enquiry line (shown as-is in the footer)
    email: "admissions@goa.paruluniversity.ac.in",
    address: {
      streetAddress: "Near ONGC Betul, Tal. Quepem",
      addressLocality: "Kushavati",
      addressRegion: "Goa",
      postalCode: "403723",
      addressCountry: "IN",
    },
    /** Decimal geo-coordinates of the main campus. TODO: fill from Google Maps. */
    geo: {
      latitude: 0,
      longitude: 0,
    },
  },

  /** Official social/profile URLs — emitted as schema `sameAs` for entity linking. */
  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    x: "", // TODO (twitter/X)
    youtube: "", // TODO
    linkedin: "", // TODO
  },

  /** Path (relative to /public or a route) of the default social-share image. */
  ogImage: "/og-default.png",
} as const;

/** Non-empty `sameAs` list for JSON-LD (filters out unfilled social URLs). */
export const socialProfiles: string[] = Object.values(siteConfig.social).filter(
  (u) => u.length > 0,
);

export type SiteConfig = typeof siteConfig;
