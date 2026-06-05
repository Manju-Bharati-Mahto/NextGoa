"use client";

import { useState } from "react";
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
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30">
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
              className="whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-bright"
            >
              Apply Now
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2 — secondary nav strip (desktop) */}
      <div className="hidden bg-white/10 backdrop-blur-md border-b border-white/20 lg:block">
        <nav
          aria-label="Sections"
          className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-6 py-3"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-ink/90 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="bg-sky-soft px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-ink transition-colors hover:bg-white/50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
