/**
 * Navigation + call-to-action targets, shared by the header, hero, and sticky
 * CTA bar so they never drift apart.
 *
 * Most nav items currently point to on-page section anchors (smooth-scroll) so
 * the landing page is fully functional today. Swap each `href` to a real route
 * (e.g. "/programmes") as those pages ship, and register the route in routes.ts.
 */
export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Programs", href: "/programs" },
  { label: "Examinations", href: "/examination" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Blogs", href: "/blog" },
];

/** Primary CTA destinations. */
export const cta = {
  /** Application modal trigger. */
  apply: "#enquiry",
  /** Brochure download. TODO: add the PDF at public/parul-goa-brochure-2026.pdf. */
  brochure: "/parul-goa-brochure-2026.pdf",
  /** Counsellor enquiry modal trigger. */
  counsellor: "#enquiry",
} as const;
