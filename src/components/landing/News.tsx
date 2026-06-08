"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Eyebrow } from "./Decor";

const stories = [
  {
    tag: "Innovation",
    tagClass: "bg-brand text-white",
    title: "PU Goa Hackathon 2026 - 48 hours, 60 teams, 9 deployed prototypes.",
    body: "From medical scheduling to coastal-tourism analytics, students built real solutions.",
  },
  {
    tag: "Alumni",
    tagClass: "bg-ocean text-white",
    title: "From BHMCT to The Leela: Aman's two-year journey to property operations.",
    body: "How training pairs hands-on career years - without a single skip in between.",
  },
  {
    tag: "Industry",
    tagClass: "bg-ink text-white",
    title: "Engineering students visit ONGC Betul during India Energy Week 2026.",
    body: "A first-hand look at offshore operations, processing platforms, and energy supply chains.",
  },
];

export function News() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Update dot indicator using IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting && entry.intersectionRatio >= 0.5) setActiveIndex(idx); },
        { root: scrollRef.current, threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (idx: number) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const CardContent = ({ s }: { s: (typeof stories)[number] }) => (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-emerald-500 via-emerald-700 to-emerald-900">
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#bbf7d0_0,transparent_45%)]" />
      </div>
      <div className="p-7">
        <span className={`inline-block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide ${s.tagClass}`}>
          {s.tag}
        </span>
        <h3 className="mt-4 font-poppins text-xl font-semibold leading-snug tracking-tight text-ink">{s.title}</h3>
        <p className="mt-3 section-body text-ink/70">{s.body}</p>
      </div>
    </div>
  );

  return (
    <section id="news" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-15">
        <Eyebrow className="text-ink">News &amp; Stories</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          What&apos;s happening on campus.
        </h2>

        {/* Mobile: swipeable carousel */}
        <div className="mt-12 md:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 px-[7.5vw]"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {stories.map((s, idx) => (
              <div
                key={s.title}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="snap-center flex-shrink-0 w-[85vw] max-w-sm"
              >
                <CardContent s={s} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to story ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-8 bg-brand" : "w-2.5 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <ul className="hidden md:grid mt-12 grid-cols-3 gap-6">
          {stories.map((s) => (
            <li key={s.title}>
              <CardContent s={s} />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <Link href="/stories" className="font-poppins text-lg font-bold text-brand hover:text-brand-dark">
            All news →
          </Link>
        </p>
      </div>
    </section>
  );
}
