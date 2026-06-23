"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Eyebrow } from "./Decor";
import Image from "next/image";
import { BlogStory } from "@/lib/fetchBlogs";

const placeholderStories = [
  {
    tag: "STUDENT LIFE",
    tagClass: "bg-[#04B86A] text-white",
    title: "How Students Learn Creative Design and Editing at Parul University's Adobe Lab",
    body: "The Adobe Creative Design Studio inside Parul University's Lakshya 2047...",
    image: "",
    link: "/blog/how-students-learn-creative-design",
  },
  {
    tag: "STUDENT LIFE",
    tagClass: "bg-[#04B86A] text-white",
    title: "Parul University Autodesk Lab: CAD Studio for Mechanical, Civil and Architecture Students",
    body: "The Autodesk Lab inside Parul University's Lakshya 2047 Centre provides...",
    image: "",
    link: "/blog/parul-university-autodesk-lab",
  },
  {
    tag: "STUDENT LIFE",
    tagClass: "bg-[#04B86A] text-white",
    title: "How Parul University's Home Automation Lab Trains Students in BMS and HVAC...",
    body: "The Home Automation Lab inside Parul University's Lakshya 2047 Centre...",
    image: "",
    link: "/blog/how-parul-universitys-home-automation-lab-trains",
  },
];

export function News({ stories = [] }: { stories?: BlogStory[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use up to 3 of the latest fetched stories, fallback to placeholders if empty
  const activeStories = stories.length >= 3 ? stories.slice(0, 3) : placeholderStories;

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

  const CardContent = ({ s }: { s: any }) => (
    <Link href={s.link || "#"} className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg h-full">
      <div className="flex flex-col h-full">
        <div className="relative aspect-[16/12] bg-gradient-to-br from-brand via-brand-bright to-ocean overflow-hidden shrink-0">
          {s.image ? (
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
          )}
        </div>
        <div className="p-7">
          <span className={`inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wide ${s.tagClass}`}>
            {s.tag}
          </span>
          <h3 className="mt-4 font-poppins text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
            {s.title}
          </h3>
          <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-3">
            {s.body}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <section id="news" className="bg-brand-white py-10 sm:pt-5 sm:pb-10">
      <div className="mx-auto max-w-6xl px-6 py-8">
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
            {activeStories.map((s, idx) => (
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
            {activeStories.map((_, idx) => (
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
          {activeStories.map((s) => (
            <li key={s.title}>
              <CardContent s={s} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-[15px] font-poppins font-semibold text-white shadow-sm transition-all hover:bg-brand/90 hover:shadow-md"
          >
            All news →
          </Link>
        </div>
      </div>
    </section>
  );
}
