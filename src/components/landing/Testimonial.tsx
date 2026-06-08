"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Hackathons here weren't optional. By placement season, I had three real projects to walk in with.",
    name: "Riya S.",
    role: "Software Engineer - TCS",
    course: "B.Tech CSE - Batch 2025",
    image: "/students/riya.webp",
  },
  {
    quote: "The semester abroad in Germany changed how I think about engineering. Having the university support my visa and credits made it seamless.",
    name: "Karan M.",
    role: "Graduate Student - Technical University of Munich",
    course: "B.Tech Mechanical - Batch 2024",
    image: "/students/karan.webp",
  },
  {
    quote: "Working on the solar car project with students from electrical and design courses taught me more about teamwork than any textbook ever could.",
    name: "Anjali D.",
    role: "EV Research Engineer - Ather Energy",
    course: "B.Tech Electrical - Batch 2025",
    image: "/students/anjali.webp",
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exiting" | "entering">("visible");

  const goTo = (idx: number) => {
    setPhase("exiting");
    setTimeout(() => {
      setCurrentIndex(idx);
      setPhase("entering");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setPhase("visible"))
      );
    }, 520);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((currentIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const t = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-t from-[#CBEFFD] to-brand-white sm:py-24 py-15">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="relative">
          {/* Animated text */}
          <figure
            style={{
              transition: phase === "entering"
                ? "none"
                : "opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)",
              opacity:   phase === "visible" ? 1 : 0,
              transform: phase === "visible"  ? "translateX(0)"
                       : phase === "exiting"  ? "translateX(60px)"
                       :                        "translateX(-60px)",
            }}
          >
            <blockquote className="font-sans text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.25] tracking-tight text-ink">
              &quot;{t.quote}&quot;
            </blockquote>
            <hr className="my-4 sm:my-8 w-full border-t border-ink/20" />

            {/* Figcaption — avatar + name side by side on mobile, name-only on desktop */}
            <figcaption className="font-sans flex items-center gap-3 md:block">
              {/* Small avatar — mobile only */}
              <div className="relative h-[54px] w-[54px] flex-shrink-0 overflow-hidden rounded-full md:hidden">
                {testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                        priority={idx === 0}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Name / role / course */}
              <div>
                <span className="block text-sm font-bold text-ink md:text-2xl">{t.name}</span>
                <span className="block text-xs text-ink/80 mt-0.5 md:text-base md:mt-1">{t.role}</span>
                <span className="block text-[11px] text-ink/50 mt-0.5 md:text-sm md:mt-1">{t.course}</span>
              </div>
            </figcaption>
          </figure>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8 z-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-brand" : "w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Large circular image — desktop only */}
        <div className="hidden md:block">
          <div className="relative mx-auto md:mr-0 md:ml-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
            {/* Yellow Accent Disc */}
            <div className="absolute -bottom-3 -right-3 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-sunshine" />
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 overflow-hidden rounded-full shadow-lg transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 blur-0 pointer-events-auto z-10"
                      : "opacity-0 scale-95 blur-[4px] pointer-events-none z-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 256px, 320px"
                    priority={idx === 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
