"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems, cta } from "@/lib/navigation";

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
        className="h-6 xl:h-7 w-auto shrink-0"
        priority
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
        <div className="mx-auto flex w-full items-center justify-around gap-3 px-4 xl:px-8 py-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-3 xl:gap-5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[15px] font-medium text-white transition-colors hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            <Link
              href={cta.apply}
              className="hidden sm:inline-flex whitespace-nowrap rounded-full bg-brand px-4 xl:px-5 py-2 xl:py-2.5 text-[13px] xl:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-bright"
            >
              Apply Now
            </Link>
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
            {navItems.map((item, idx) => (
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
            ))}
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
          <Link
            href={cta.apply}
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#E73649] px-6 py-4 text-md font-bold text-white transition-all hover:bg-[#D62B3D]"
          >
            Apply Now &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}
