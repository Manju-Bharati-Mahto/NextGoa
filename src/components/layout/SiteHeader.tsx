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
      className="flex items-center gap-2"
      aria-label="Parul University Goa home"
    >
      <Image
        src="/logo.svg"
        alt="Parul University Goa Logo"
        width={233}
        height={26}
        className="h-7 sm:h-8 w-auto"
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-4 xl:gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={cta.apply}
              className="hidden sm:inline-flex whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-bright"
            >
              Apply Now
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white lg:hidden"
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
        className={`fixed inset-0 z-50 bg-black transition-transform duration-300 ease-in-out lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-end p-6">
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
          className="flex flex-col px-10 pt-4"
        >
          <ul className="flex flex-col gap-8">
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
                  className="block font-[family-name:var(--font-poppins)] text-lg font-medium text-white transition-colors hover:text-white/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
