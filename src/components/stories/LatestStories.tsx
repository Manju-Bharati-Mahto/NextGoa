"use client";

import React, { useState, useEffect } from "react";
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
    <section className="bg-brand-white pb-24 pt-8 border-t border-black/5">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10">
        
        {/* Title Block */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <div className="mb-4 pointer-events-none select-none">
            <img 
              src="/1.svg" 
              alt="Lighthouse logo" 
              className="w-[50px] h-[63px]"
            />
          </div>
          <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-ink/60">
            LATEST
          </p>
          <h2 className="mt-2 text-center text-brand section-heading">
            Across all categories.
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative mx-auto w-full max-w-[1680px] overflow-hidden px-4 md:px-0">
          <style dangerouslySetInnerHTML={{__html: `
            .carousel-track-container {
              display: flex;
              transition: ${isTransitioning ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "none"};
            }
            @media (max-width: 767px) {
              .carousel-track-container {
                transform: translateX(calc(-${currentIndex * 85}% + 7.5%));
              }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .carousel-track-container {
                transform: translateX(calc(-${currentIndex * 45}% + 27.5%));
              }
            }
            @media (min-width: 1024px) {
              .carousel-track-container {
                transform: translateX(calc(-${(currentIndex - 1) * 24.2}% + 1.5%));
              }
            }
          `}} />

          <div 
            className="carousel-track-container"
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((card, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`w-[85%] md:w-[45%] lg:w-[23.5%] flex-shrink-0 px-2 md:px-3 transition-all duration-700 ease-in-out ${
                    isActive 
                      ? "scale-100 opacity-100 z-10" 
                      : "scale-[0.98] opacity-60 lg:opacity-100 z-0"
                  }`}
                >
                  <Link href={card.link || '#'} target="_blank" className="rounded-[28px] bg-white shadow-md border border-black/5 overflow-hidden flex flex-col h-full min-h-[460px] group transition-all hover:shadow-lg">
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
                        <h3 className="mt-4 font-poppins text-lg font-bold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors">
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

        {/* Navigation Buttons (Left/Right) */}
        <div className="flex justify-center items-center gap-4 mt-8">
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

        {/* Newsletter Subscription Banner */}
        <div className="mt-16 bg-[#000000] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-left">
          {/* Left Side */}
          <div className="max-w-xl">
            <span className="text-[#E73649] font-bold text-xs uppercase tracking-wider block mb-2">
              The PU Goa Weekly
            </span>
            <h3 className="text-white section-subheading">
              Placements, Programme Launches, Scholarships — Once a Week.
            </h3>
            <p className="mt-3 text-white/60 text-sm">
              No spam. Unsubscribe any time.
            </p>
          </div>

          {/* Right Side - Form */}
          <form className="flex flex-col gap-4 w-full lg:max-w-[500px]">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Your name (optional)" 
                className="w-full bg-[#1F1F1F]/60 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-sm"
              />
              <input 
                type="email" 
                placeholder="Email address *" 
                required
                className="w-full bg-[#1F1F1F]/60 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#E73649] hover:bg-[#c92b3c] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                Subscribe &rarr;
              </button>
              <span className="text-xs text-white/50 w-full text-center sm:text-left">
                We never share your email.
              </span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
