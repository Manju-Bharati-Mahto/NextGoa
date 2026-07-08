"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface TestimonialProps {
  data: {
    rating?: string;
    reviewLabel?: string;
    googleImage?: string;

    testimonials?: {
      quote: string;
      name: string;
      image: string;
      link: string;
    }[];
  };
}

export function Testimonial({ data, }: TestimonialProps) {
  const testimonials = data?.testimonials || [];
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

  if (!testimonials.length) return;
    const timer = setInterval(() => {
      goTo( (currentIndex + 1) % testimonials.length );
    }, 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const t = testimonials[currentIndex];
  if (!t) return null;

  return (
    <section className="bg-gradient-to-t from-[#CBEFFD] to-brand-white pt-8 pb-10 sm:pt-5 sm:pb-15">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.8fr_1fr]">
        <div className="relative">
          {/* Animated text */}
          <figure
            style={{
              transition: phase === "entering"
                ? "none"
                : "opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)",
              opacity: phase === "visible" ? 1 : 0,
              transform: phase === "visible" ? "translateX(0)"
                : phase === "exiting" ? "translateX(60px)"
                  : "translateX(-60px)",
            }}
          >
            <blockquote className="font-sans text-base sm:text-lg md:text-xl font-medium leading-[1.5] tracking-tight text-ink">
              &quot;{t.quote}&quot;
            </blockquote>
            <hr className="my-4 sm:my-8 w-full border-t border-ink/20" />

            {/* Figcaption — avatar + name side by side on mobile, name-only on desktop */}
            <figcaption className="font-sans flex items-center gap-4 md:block">
              {/* Small avatar — mobile only */}
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full md:hidden">
                {testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={item.name}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                        priority={idx === 0}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Name / role / course */}
              <div>
                {t.link ? (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="inline-block text-2xl font-bold text-[#1967D2] hover:underline md:text-2xl">
                    {t.name}
                  </a>
                ) : (
                  <span className="inline-block text-2xl font-bold text-ink md:text-2xl">{t.name}</span>
                )}
              </div>
            </figcaption>

            {/* Google Reviews Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 inline-flex mt-8 md:mt-4">
              <div className="flex items-center">
                <Image src={ data?.googleImage || "/placements/google reviews - Copy.png" } alt="Google Reviews" width={350} height={85} className="object-contain" />
              </div>
              <div className="w-px h-14 bg-[#1f2020] hidden sm:block"></div>
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-bold text-[#0F172A] text-2xl mr-2">{data?.rating}</span>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[#1967D2] text-base font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {data?.reviewLabel}
                </div>
              </div>
            </div>
          </figure>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8 z-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-brand" : "w-2.5 bg-ink/20 hover:bg-ink/40"
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
                  className={`absolute inset-0 overflow-hidden rounded-full shadow-lg transition-all duration-1000 ease-in-out ${isActive
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
