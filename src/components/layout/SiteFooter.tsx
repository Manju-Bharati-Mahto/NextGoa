import Image from "next/image";
import Link from "next/link";
import footerBackground from "../../../Assets/FOOTER .svg";
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
    <Link href="/" aria-label="Parul University Goa home" className="inline-flex">
      <Image
        src="/logo.svg"
        alt="Parul University Goa"
        width={233}
        height={26}
        className="h-9 w-auto sm:h-11"
        priority={false}
      />
    </Link>
  );
}

function ShellMark() {
  return (
    <Image
      src="/vector.svg"
      alt=""
      width={220}
      height={180}
      className="h-auto w-[220px] opacity-20 brightness-0 invert"
      aria-hidden="true"
    />
  );
}

export function SiteFooter() {
  const { contact } = siteConfig;
  const { address } = contact;
  const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;

  return (
    <footer id="contact" className="relative mt-auto overflow-hidden bg-[#FFEA84] text-white">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={footerBackground}
          alt=""
          fill
          className="object-cover object-top"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 pb-32 pt-32 sm:pt-48 sm:pb-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.7fr_0.95fr_0.95fr_1.08fr] lg:gap-16">
          {/* Brand + NAP */}
          <div className="max-w-[34rem]">
            <Logo />
            <address className="mt-6 space-y-4 text-sm not-italic leading-6 text-white sm:text-base">
              <p className="flex items-start gap-2">
                <span className="mt-1 text-white/80">
                  <PinIcon />
                </span>
                {fullAddress}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/80">
                  <PhoneIcon />
                </span>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {contact.phone}
                </a>{" "}
                <span className="text-white/70">(Toll Free)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/80">
                  <MailIcon />
                </span>
                <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
                  {contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Link columns */}
          {columns.map((col, index) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className={index > 0 ? "lg:border-l lg:border-white/18 lg:pl-10" : ""}
            >
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-[0.08em] text-sunshine">
                {col.heading}
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-white sm:text-base">
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

        <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:block z-0">
          <ShellMark />
        </div>
      </div>
    </footer>
  );
}
