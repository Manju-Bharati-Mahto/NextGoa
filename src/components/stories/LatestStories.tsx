"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarouselCard {
  tag: string;
  tagClass: string;
  title: string;
  body: string;
  image: string;
}

import { Story } from "./StoriesGrid";

export function LatestStories({ stories = [] }: { stories?: Story[] }) {
  // Use first 5 stories for carousel, fallback to empty array if none
  const carouselCards = stories.slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(1); // Real Card 0 starts at index 1
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideLock, setSlideLock] = useState(false);

  // Prepend last card at index 0, and append first card at end
  const extendedCards = carouselCards.length > 0 ? [
    carouselCards[carouselCards.length - 1],
    ...carouselCards,
    carouselCards[0],
  ] : [];

  const handlePrev = () => {
    if (slideLock) return;
    setSlideLock(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (slideLock) return;
    setSlideLock(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const isSwiping = useRef(false);
  const touchStartRef = useRef<number | null>(null);
  const dragStartRef = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    isSwiping.current = false;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const currentX = e.targetTouches[0].clientX;
    const diff = Math.abs(touchStartRef.current - currentX);
    if (diff > 10) {
      isSwiping.current = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const distance = touchStartRef.current - endX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartRef.current = null;
    if (isSwiping.current) {
      setTimeout(() => {
        isSwiping.current = false;
      }, 50);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isSwiping.current = false;
    dragStartRef.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartRef.current === null) return;
    const diff = Math.abs(dragStartRef.current - e.clientX);
    if (diff > 10) {
      isSwiping.current = true;
    }
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartRef.current === null) return;
    const distance = dragStartRef.current - e.clientX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    dragStartRef.current = null;
    if (isSwiping.current) {
      setTimeout(() => {
        isSwiping.current = false;
      }, 50);
    }
  };

  const onMouseLeave = () => {
    if (dragStartRef.current !== null) {
      dragStartRef.current = null;
      setTimeout(() => {
        isSwiping.current = false;
      }, 50);
    }
  };

  const handleTransitionEnd = () => {
    // If reached end clone (idx 5), snap back to idx 1 (real first card)
    if (currentIndex === extendedCards.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    // If reached start clone (idx 0), snap forward to idx 4 (real last card)
    else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(carouselCards.length);
    }
    setSlideLock(false);
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // small delay to let transition reset before toggling back on
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Bulletproof fallback if index goes out of bounds
  useEffect(() => {
    if (currentIndex >= extendedCards.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setSlideLock(false);
      }, 0);
      return () => clearTimeout(timer);
    } else if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(carouselCards.length);
        setSlideLock(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, extendedCards.length]);

  // Safety unlock fallback in case transitionEnd doesn't fire
  useEffect(() => {
    if (slideLock) {
      const timer = setTimeout(() => {
        setSlideLock(false);
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [slideLock]);

  return (
    <section className="bg-brand-white border-t border-black/5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10">

        {/* Header content & Nav */}
        <div className="w-full mb-8 sm:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-10">
          <div className="flex flex-row items-center gap-6 text-left">
            <div className="pointer-events-none select-none shrink-0">
              <img
                src="/1.svg"
                alt="Lighthouse logo"
                className="w-[50px] h-[63px]"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-ink/60">
                LATEST
              </p>
              <h2 className="mt-1 text-brand section-heading">
                Across all categories.
              </h2>
            </div>
          </div>

          {/* Navigation Buttons (Moved to Header) */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand shadow-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand shadow-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div
          className="relative mx-auto w-full max-w-[1680px] overflow-hidden px-4 md:px-0 select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .carousel-track-container {
              display: flex;
              transition: ${isTransitioning ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "none"};
            }
            @media (max-width: 767px) {
              .carousel-track-container {
                transform: translateX(calc(-${currentIndex * 85}%));
              }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .carousel-track-container {
                transform: translateX(calc(-${currentIndex * 45}%));
              }
            }
            @media (min-width: 1024px) {
              .carousel-track-container {
                transform: translateX(calc(-${currentIndex * 30}%));
              }
            }
          `}} />

          <div
            className="carousel-track-container -mx-2 md:-mx-3"
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((card, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`w-[85%] md:w-[45%] lg:w-[30%] flex-shrink-0 px-2 md:px-3 transition-all duration-700 ease-in-out ${isActive
                      ? "scale-100 opacity-100 z-10"
                      : "scale-[0.98] opacity-60 lg:opacity-100 z-0"
                    }`}
                >
                  <Link
                    href={card.link || '#'}
                    onClick={(e) => { if (isSwiping.current) e.preventDefault(); }}
                    onDragStart={(e) => e.preventDefault()}
                    className="rounded-[28px] bg-white shadow-md border border-black/5 overflow-hidden flex flex-col h-full group transition-all hover:shadow-lg"
                  >
                    {/* Top: Image */}
                    <div className="relative w-full aspect-[16/11] bg-slate-100 overflow-hidden">
                      {card.image ? (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          priority={idx === 0 || idx === 1}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-bright to-ocean opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
                      )}
                    </div>

                    {/* Bottom: Text details */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <span
                          className={`inline-block rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider ${card.tagClass}`}
                        >
                          {card.tag}
                        </span>
                        <h3 className="mt-4 font-poppins text-lg font-bold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-3">
                          {card.title}
                        </h3>
                        <p className="mt-2.5 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-3">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation buttons moved to header */}

        {/* Newsletter Subscription Banner */}
        <div className="mt-16 bg-[#000000] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-left">
          {/* Left Side */}
          <div className="max-w-xl">
            <span className="text-[#E73649] font-bold text-xs uppercase tracking-wider block mb-2">
              The PU Goa Weekly
            </span>
            <h3 className="text-white section-subheading">
              Placements, Programme Launches, Scholarships Once a Week.
            </h3>
            <p className="mt-3 text-white/60 text-sm">
              No spam. Unsubscribe any time.
            </p>
          </div>

          {/* Right Side - Form */}
          <form className="flex flex-col gap-4 w-full lg:max-w-[600px]">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your name (optional)"
                className="w-full bg-[#1F1F1F]/60 border border-white/10 rounded-full px-8 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-base"
              />
              <input
                type="email"
                placeholder="Email address *"
                required
                className="w-full bg-[#1F1F1F]/60 border border-white/10 rounded-full px-8 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-base"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#E73649] hover:bg-[#c92b3c] text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                Subscribe &rarr;
              </button>
              <span className="text-sm text-white/50 w-full text-center sm:text-left ml-2">
                We never share your email.
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
