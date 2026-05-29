"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Hackathons here weren't optional. By placement season, I had three real projects to walk in with.",
    name: "Riya S.",
    role: "Software Engineer - TCS",
    course: "B.Tech CSE - Batch 2025",
    image: "/students/riya.png",
  },
  {
    quote: "The semester abroad in Germany changed how I think about engineering. Having the university support my visa and credits made it seamless.",
    name: "Karan M.",
    role: "Graduate Student - Technical University of Munich",
    course: "B.Tech Mechanical - Batch 2024",
    image: "/students/karan.png",
  },
  {
    quote: "Working on the solar car project with students from electrical and design courses taught me more about teamwork than any textbook ever could.",
    name: "Anjali D.",
    role: "EV Research Engineer - Ather Energy",
    course: "B.Tech Electrical - Batch 2025",
    image: "/students/anjali.png",
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // rotate every 6s

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-t from-[#CBEFFD] to-brand-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="relative">
          {/* Testimonial text cross-fade container - grid cell overlap prevents height collapse */}
          <div className="grid grid-cols-1 grid-rows-1">
            {testimonials.map((t, idx) => {
              const isActive = idx === currentIndex;
              return (
                <figure
                  key={idx}
                  className={`col-start-1 row-start-1 transition-all duration-[1200ms] ease-in-out ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                      : "opacity-0 translate-y-2 pointer-events-none z-0"
                  }`}
                >
                  <blockquote className="font-sans text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.25] tracking-tight text-ink">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <hr className="my-8 w-full border-t border-ink/20" />
                  <figcaption className="font-sans">
                    <span className="block text-xl sm:text-2xl font-bold text-ink">{t.name}</span>
                    <span className="block text-sm sm:text-base text-ink/80 mt-1">{t.role}</span>
                    <span className="block text-xs sm:text-sm text-ink/50 mt-1">{t.course}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8 z-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-brand" : "w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto md:mr-0 md:ml-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
          {/* Yellow Accent Disc behind the photo - stays constant */}
          <div className="absolute -bottom-3 -right-3 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-sunshine" />
          {/* Circular Image Container - fades */}
          {testimonials.map((t, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={idx}
                className={`absolute inset-0 overflow-hidden rounded-full shadow-lg transition-all duration-[1200ms] ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100 pointer-events-auto z-10"
                    : "opacity-0 scale-95 pointer-events-none z-0"
                }`}
              >
                <Image
                  src={t.image}
                  alt={t.name}
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
    </section>
  );
}

