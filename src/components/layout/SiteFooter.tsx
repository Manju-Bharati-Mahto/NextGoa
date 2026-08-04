import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
// Removed lucide-react brand imports because they are not available in this version

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
          { label: "Legal Policies", href: "/policies" },
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

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-5">
              <a href="https://www.facebook.com/p/Parul-University-GOA-Campus-61573600365001/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#e73649] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/paruluniversitygoa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#e73649] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/parul-university-goa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full  text-white bg-[#e73649] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCwn-ALLelk9BJziTZCU5S4g" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#e73649] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
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
