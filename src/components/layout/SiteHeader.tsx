"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, cta } from "@/lib/navigation";

const subPrograms = [
  { label: "Engineering & Technology", href: "/faculty/engineering" },
  { label: "IT & Computer Science", href: "/faculty/it-cs" },
  { label: "Management Studies", href: "/faculty/management-studies" },
  { label: "Hotel Management", href: "/faculty/hotel-management" },
  { label: "Applied Sciences", href: "/faculty/applied-sciences" },
  { label: "Nursing", href: "/faculty/nursing" },
  { label: "Pharmacy", href: "/faculty/pharmacy" },
  { label: "Physiotherapy", href: "/faculty/physiotherapy" },
  { label: "Allied & Healthcare Sciences", href: "/faculty/allied-healthcare" },
  { label: "Doctorate Programs", href: "/faculty/doctorate-programs" }
];

/**
 * Site-wide header matching the Parul University Goa design:
 * - Row 1 (sky gradient): white logo + white primary nav + red "Apply Now"
 * - Row 2 (lighter sky bar): centered dark nav strip on desktop
 * - Mobile: white logo + Apply + hamburger that toggles a nav panel
 *
 * Client component for the mobile menu toggle; still prerenders (SSG) + hydrates.
 */

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2"
      aria-label="Parul University Goa home"
    >
      <Image
        src="/logo.svg"
        alt="Parul University Goa Logo"
        width={233}
        height={26}
        className="h-6 md:h-7 xl:h-8 [@media(min-width:1250px)_and_(max-width:1300px)]:h-6 w-auto shrink-0"
        priority
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[150]">
      {/* Row 1 - Brand Blue bar */}
      <div className="bg-brand-blue/80 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto flex w-full items-center sm:justify-around justify-between gap-3 px-4 xl:px-8 py-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-3 xl:gap-5 xl:flex h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.label === "Faculties" && pathname.startsWith("/faculty"));

              if (item.label === "Faculties") {
                return (
                  <div key={item.label} className="relative group py-4 -my-4 flex items-center h-full">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 whitespace-nowrap font-[family-name:var(--font-poppins)] text-[15px] font-semibold transition-all py-1 relative text-white
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#E73649] after:origin-left after:transition-transform after:duration-300 after:ease-out
                        ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-50"}
                      `}
                    >
                      {item.label}
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {/* Dropdown Panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-white/60 p-2 overflow-hidden ring-1 ring-black/5">
                        <div className="grid grid-cols-1 gap-0.5">
                          <Link
                            href="/faculty"
                            className={`group/link flex items-center justify-between px-4 py-3 text-[14px] font-[family-name:var(--font-poppins)] font-bold rounded-xl transition-all
                              ${pathname === "/faculty" ? "text-[#ED383F] bg-[#ED383F]/10" : "text-slate-800 hover:text-[#ED383F] hover:bg-[#ED383F]/5"}
                            `}
                          >
                            <span>All Faculties</span>
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-[#ED383F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <div className="h-px bg-slate-200 mx-2 my-0.5"></div>
                          {subPrograms.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`group/link flex items-center justify-between px-4 py-3 text-[14px] font-[family-name:var(--font-poppins)] font-semibold rounded-xl transition-all
                                ${pathname === sub.href ? "text-[#ED383F] bg-[#ED383F]/10" : "text-slate-700 hover:text-[#ED383F] hover:bg-[#ED383F]/5"}
                              `}
                            >
                              <span>{sub.label}</span>
                              <svg className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-[#ED383F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div key={item.label} className="relative h-full flex items-center py-4 -my-4">
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap font-[family-name:var(--font-poppins)] text-[15px] font-semibold transition-all py-1 relative text-white
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#E73649] after:origin-left after:transition-transform after:duration-300 after:ease-out
                      ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-50"}
                    `}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            <button
              data-enquiry-trigger="true"
              className="hidden sm:inline-flex whitespace-nowrap rounded-full bg-brand px-4 xl:px-5 py-2 xl:py-2.5 text-[13px] xl:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-bright"
            >
              Apply Now
            </button>
            <Link
              href="/contact"
              className="hidden sm:inline-flex whitespace-nowrap rounded-full border border-white px-4 xl:px-5 py-2 xl:py-2.5 text-[13px] xl:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-brand-blue"
            >
              Contact Us
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white xl:hidden"
            >
              {open ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Nav Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-brand-blue transition-transform duration-300 ease-in-out xl:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex shrink-0 items-center justify-between p-6">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white hover:text-white/80 p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="my-auto flex flex-col sm:px-6 px-4 py-4"
        >
          <ul className="flex flex-col gap-6">
            {navItems.map((item, idx) => {
              if (item.label === "Faculties") {
                return (
                  <li
                    key={item.label}
                    className={`transform transition-all duration-500 ease-out ${open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                      }`}
                    style={{ transitionDelay: open ? `${150 + idx * 75}ms` : "0ms" }}
                  >
                    <div className="flex flex-col">
                      <button
                        onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                        className="group inline-flex items-center justify-start font-[family-name:var(--font-poppins)] text-xl font-medium text-white transition-colors w-full text-left py-1 animate-pulse-subtle"
                      >
                        <div className="flex items-center gap-3">
                          <svg
                            className={`w-5 h-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white ${mobileProgramsOpen ? "opacity-100 translate-x-0" : ""
                              }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                          <span className="transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-1.5">
                            {item.label}
                            <svg
                              className={`w-5 h-5 transition-transform duration-300 text-white/80 ${mobileProgramsOpen ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                      </button>

                      {/* Expandable sub-list */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${mobileProgramsOpen ? "max-h-[500px] opacity-100 mt-2 pl-8" : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                      >
                        <ul className="flex flex-col gap-4 border-l-2 border-white/20 pl-4 py-2">
                          <li>
                            <Link
                              href="/faculty"
                              onClick={() => setOpen(false)}
                              className="block text-[17px] font-semibold text-white/90 hover:text-white transition-colors"
                            >
                              All Faculties &rarr;
                            </Link>
                          </li>
                          {subPrograms.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block text-[17px] font-semibold text-white/70 hover:text-white transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }
              // Normal link
              return (
                <li
                  key={item.label}
                  className={`transform transition-all duration-500 ease-out ${open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                    }`}
                  style={{ transitionDelay: open ? `${150 + idx * 75}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group inline-flex flex-col font-[family-name:var(--font-poppins)] text-xl font-medium text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                    </div>
                    <div className="h-[3px] bg-white w-0 transition-all duration-300 group-hover:w-[calc(100%-2rem)] ml-8 mt-1 rounded-full"></div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="flex shrink-0 flex-col gap-3 p-6 pt-8">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-md font-bold text-white transition-all hover:bg-white hover:text-brand-blue"
          >
            Contact Us
          </Link>
          <button
            data-enquiry-trigger="true"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#E73649] px-6 py-4 text-md font-bold text-white transition-all hover:bg-[#D62B3D]"
          >
            Apply Now &rarr;
          </button>
        </div>
      </div>
    </header>
  );
}
