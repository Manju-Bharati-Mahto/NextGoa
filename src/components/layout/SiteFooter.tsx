import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Site-wide footer (matches the Figma footer): cyan band, white brand lockup,
 * NAP contact column, and three link columns. The NAP is real, crawlable text -
 * a local-SEO trust signal that must match the JSON-LD and external listings.
 */

type LinkItem = { label: string; href: string };
const columns: { heading: string; links?: LinkItem[]; subSections?: { heading: string; links: LinkItem[] }[] }[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Admissions", href: "/admissions" },
      { label: "Campus Life", href: "/campus" },
      { label: "Placements", href: "/placements" },
      { label: "Study Abroad", href: "/international/study-abroad" },
      { label: "Blogs", href: "/blog" },
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Engineering, IT & CS", href: "/faculty/engineering" },
      { label: "Management Studies", href: "/faculty/management" },
      { label: "Pharmacy", href: "/faculty/pharmacy" },
      { label: "Nursing", href: "/faculty/nursing" },
      { label: "Hotel Management", href: "/faculty/hotel-management" },
      { label: "Physiotherapy", href: "/faculty/physiotherapy" },

      { label: "Applied and Health Sciences", href: "/faculty/applied-and-health-sciences" },
      { label: "Doctorate Programs", href: "/faculty/doctorate-programs" },
    ],
  },
  {
    heading: "Regulatory",
    links: [
      { label: "Redressal of Grievances of Staff", href: "/grievances/staff" },
      { label: "Redressal of Grievances of Students", href: "/grievances/students" },
    ],
    subSections: [
      {
        heading: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of use", href: "/terms-of-use" },
        ],
      },
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
    <footer id="contact" className="relative mt-auto overflow-hidden bg-transparent text-white -mt-16">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {/* Solid background covering the rest of the footer below the wave */}
        <div className="absolute top-[18vw] sm:top-[10vw] bottom-0 left-0 right-0 bg-[#0caadd]" />
        {/* The wave SVG scaling naturally with width */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-top bg-[length:300%_auto] sm:bg-[length:100%_auto]" 
          style={{ backgroundImage: "url('/footer.svg')" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 pt-32 sm:pt-[clamp(12rem,8vw+4rem,35rem)] sm:pb-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.7fr_0.95fr_0.95fr_1.08fr] lg:gap-16">
          {/* Brand + NAP */}
          <div className="max-w-[34rem]">
            <Logo />
            <p className="mt-6 text-base leading-6 text-white sm:text-[17px]">
              Parul University Goa is a not-for-profit, world-class institution, nestled in the heart of Goa, established in 2025 by the Parul Education Foundation.
            </p>
            {/* University Contact Information & Physical Address */}
            <address className="mt-6 space-y-4 text-base not-italic leading-6 text-white sm:text-[17px]">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white/80 shrink-0">
                  <PinIcon />
                </span>
                <p className="flex flex-col">
                  <span className="font-semibold">Parul University,</span>
                  <span>Goa Near ONGC, Betul, Taluka - Quepem</span>
                  <span>Dist - Kushavati Goa - 403723</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/80 shrink-0">
                  <PhoneIcon />
                </span>
                <a href="tel:18008909090" className="hover:text-white">
                  18008909090
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/80 shrink-0">
                  <MailIcon />
                </span>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="break-all hover:text-white"
                >
                  {contact.email}
                </a>
              </div>
            </address>
          </div>

          {/* Link columns */}
          {columns.map((col, index) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className={index > 0 ? "lg:border-l lg:border-white/18 lg:pl-10" : ""}
            >
              <h2 className="text-base sm:text-[17px] font-bold uppercase tracking-[0.08em] text-sunshine font-poppins">
                {col.heading}
              </h2>
              {col.links && (
                <ul className="mt-6 space-y-3 text-base text-white sm:text-[17px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {col.subSections?.map((sub) => (
                <div key={sub.heading} className="mt-8">
                  <h2 className="text-base sm:text-[17px] font-bold uppercase tracking-[0.08em] text-sunshine font-poppins">
                    {sub.heading}
                  </h2>
                  <ul className="mt-6 space-y-3 text-base text-white sm:text-[17px]">
                    {sub.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-[-30px] right-[-30px] hidden lg:block z-0">
          <ShellMark />
        </div>

        <div className="mt-16 border-t border-white/20 pt-8 text-center text-base font-poppins text-white/80">
          <p>Copyright © {new Date().getFullYear()}. All Rights Reserved by Parul University</p>
        </div>
      </div>
    </footer>
  );
}
