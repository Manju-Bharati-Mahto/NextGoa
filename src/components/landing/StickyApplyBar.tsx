"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cta } from "@/lib/navigation";

/**
 * Persistent CTA toggle (Apply / Counsellor / Brochure).
 *
 * Behaviour requested: it stays hidden over the hero, then "appears on the
 * second scroll" — i.e. once the user scrolls past the hero — and "becomes
 * static", staying fixed to the bottom of the viewport from then on.
 *
 * Implementation: watch scroll position against the hero's height (resolved by
 * the element `#hero`). Reveal when scrolled past it. Scroll reads are throttled
 * with requestAnimationFrame so we never thrash the main thread.
 */
export function StickyApplyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    let ticking = false;

    const update = () => {
      ticking = false;
      // Reveal a little before the hero fully leaves so it feels responsive.
      const threshold = hero ? hero.offsetHeight - 140 : window.innerHeight * 0.8;
      setVisible(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update(); // set initial state (e.g. on reload mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      // aria-hidden + pointer-events-none while hidden so it's fully inert until revealed.
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/90 p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur">
        <Link
          href={cta.apply}
          className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-bright"
        >
          Apply for 2026 →
        </Link>
        <Link
          href={cta.counsellor}
          className="rounded-full px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-black/5"
        >
          Talk to Counsellor
        </Link>
        <a
          href={cta.brochure}
          download
          className="rounded-full px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-black/5"
        >
          Brochure
        </a>
      </div>
    </div>
  );
}
