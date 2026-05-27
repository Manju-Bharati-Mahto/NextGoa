import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Site-wide footer (matches the Figma footer): cyan band, white brand lockup,
 * NAP contact column, and three link columns. The NAP is real, crawlable text —
 * a local-SEO trust signal that must match the JSON-LD and external listings.
 */
const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Us", href: "#philosophy" },
      { label: "Admissions", href: "#admissions" },
      { label: "Campus Life", href: "#campus-life" },
      { label: "Placements", href: "#placements" },
      { label: "Study Abroad", href: "#international" },
      { label: "Stories", href: "#news" },
    ],
  },
  {
    heading: "Programmes",
    links: [
      { label: "Engineering, IT & CS", href: "#programmes" },
      { label: "Management Studies", href: "#programmes" },
      { label: "Pharmacy", href: "#programmes" },
      { label: "Nursing", href: "#programmes" },
      { label: "Hotel Management", href: "#programmes" },
      { label: "Physiotherapy", href: "#programmes" },
    ],
  },
  {
    heading: "Accreditations",
    links: [
      { label: "NAAC Grade A++", href: "#admissions" },
      { label: "THE Impact Rankings 2025", href: "#admissions" },
      { label: "ASSOCHAM Best Placements 3x", href: "#placements" },
      { label: "NIRF Top 50 Innovations", href: "#placements" },
      { label: "Goa Private Universities Act 2020", href: "#admissions" },
    ],
  },
];

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8Z" />
      <circle cx="8" cy="6" r="1.8" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 3h3l1 4-2 1a8 8 0 0 0 3 3l1-2 4 1v3a1 1 0 0 1-1 1A11 11 0 0 1 2 4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
      <path d="m2.5 4.5 5.5 4 5.5-4" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 text-2xl text-white">
      <span className="font-extrabold tracking-tight">
        Parul
        <sup className="ml-0.5 align-super text-[0.5em] font-normal">®</sup>
      </span>
      <span className="font-light">University</span>
      <span className="rounded-lg bg-brand px-2.5 py-0.5 text-xl font-bold">Goa</span>
    </div>
  );
}

export function SiteFooter() {
  const { contact } = siteConfig;
  const { address } = contact;
  const year = new Date().getFullYear();
  const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;

  return (
    <footer id="contact" className="mt-auto bg-ocean text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + NAP */}
          <div>
            <Logo />
            <address className="mt-4 space-y-2.5 text-sm not-italic leading-6 text-white/90">
              <p className="flex items-start gap-2">
                <span className="mt-0.5 text-white/70">
                  <PinIcon />
                </span>
                {fullAddress}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/70">
                  <PhoneIcon />
                </span>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {contact.phone}
                </a>{" "}
                <span className="text-white/60">(Toll Free)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/70">
                  <MailIcon />
                </span>
                <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
                  {contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-sunshine">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-white/90">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-xs text-white/70">
          © {year} {siteConfig.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
