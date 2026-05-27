/**
 * Registry of indexable, statically-known routes.
 *
 * Single source of truth shared by the sitemap and llms.txt so they never drift
 * apart. Only add a path here once a real page exists for it — a sitemap that
 * lists 404s erodes crawl trust.
 *
 * As you build out the university sections, uncomment / add entries below.
 * Data-driven routes (e.g. one page per program pulled from a CMS or JSON)
 * should be appended programmatically in sitemap.ts rather than listed here.
 */
export type StaticRoute = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /** 1.0 = most important. Keep the homepage highest, key sections next. */
  priority: number;
  /** Human label + one-line purpose, surfaced in llms.txt for AI engines. */
  title: string;
  summary: string;
};

export const staticRoutes: StaticRoute[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
    title: "Home",
    summary:
      "Parul University Goa — Goa's first State Private University. Programmes, admissions, and campus life.",
  },
  {
    path: "/admissions",
    changeFrequency: "weekly",
    priority: 0.9,
    title: "Admissions 2026",
    summary: "Eligibility, application process, fees, and how to apply for the 2026 intake.",
  },
  // --- Add as each section ships ---
  // { path: "/programmes", changeFrequency: "weekly",  priority: 0.9, title: "Programmes", summary: "All undergraduate, postgraduate, and doctoral programmes." },
  // { path: "/about",      changeFrequency: "monthly", priority: 0.6, title: "About",      summary: "History, accreditation, leadership, and rankings." },
];
