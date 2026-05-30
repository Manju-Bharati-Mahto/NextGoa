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
  { label: "About", href: "#philosophy" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "#admissions" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Study Abroad", href: "#international" },
  { label: "Placements", href: "#placements" },
  { label: "Research", href: "#research" },
  { label: "Stories", href: "#news" },
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
