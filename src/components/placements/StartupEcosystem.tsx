"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CAROUSEL_SLIDES = [0, 1, 2, 3];

export function StartupEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-black font-semibold text-lg sm:text-xl mb-3 tracking-wide">
            Startup ecosystem
          </h3>
          <h2 className="text-[#DF3B4B] font-bold text-[32px] sm:text-5xl md:text-[56px] leading-tight">
            For Those Who Want to Build,<br />Not Just Be Placed!
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 items-stretch mb-6">
          
          {/* Left Column: Stats Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 flex flex-col items-end justify-center text-right shadow-sm flex-1">
              <div className="text-[#00A8E8] font-black text-5xl sm:text-6xl leading-none flex items-baseline justify-end tracking-tighter">
                <span className="text-3xl sm:text-4xl mr-1 font-bold">₹</span>20<span className="text-3xl sm:text-4xl font-bold ml-1">Cr+</span>
              </div>
              <div className="text-black text-[11px] sm:text-xs font-bold uppercase mt-4 tracking-widest">
                STARTUP FUNDING
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Provided to PU-incubated startups.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 flex flex-col items-end justify-center text-right shadow-sm flex-1">
              <div className="text-[#00A8E8] font-black text-5xl sm:text-6xl leading-none flex items-baseline justify-end tracking-tighter">
                254
              </div>
              <div className="text-black text-[11px] sm:text-xs font-bold uppercase mt-4 tracking-widest">
                STARTUPS INCUBATED
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Active companies built inside the PU E-Cell.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 flex flex-col items-end justify-center text-right shadow-sm flex-1">
              <div className="text-[#00A8E8] font-black text-5xl sm:text-6xl leading-none flex items-baseline justify-end tracking-tighter">
                <span className="text-3xl sm:text-4xl mr-1 font-bold">₹</span>40<span className="text-3xl sm:text-4xl font-bold ml-1">Cr+</span>
              </div>
              <div className="text-black text-[11px] sm:text-xs font-bold uppercase mt-4 tracking-widest">
                ASSOCHAM AWARD
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Best University in Placements for 3 Consecutive Years
              </p>
            </div>

          </div>

          {/* Right Column: Solnce Image Carousel */}
          <div className="relative w-full h-full min-w-0">
            <div className="rounded-[24px] overflow-hidden w-full h-full shadow-md bg-[#0C63C3] relative">
              <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {CAROUSEL_SLIDES.map((slide, idx) => (
                  <div key={idx} className="relative w-full shrink-0 flex flex-col h-full bg-[#0C63C3]">
                    {/* Main Solnce Image taking up the whole card */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:flex-1 min-h-[400px] h-full">
                      <Image 
                        src="/placements/solance.png" 
                        alt="Solnce Startup India's First All-in-One Solar App" 
                        fill 
                        className="object-cover object-center"
                        priority={idx === 0}
                      />
                    </div>
                    {/* Bottom Ribbon Card overlapping the image */}
                    <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col justify-end">
                      <Image 
                        src="/placements/cardsti.svg" 
                        alt="Shark Tank India" 
                        width={884}
                        height={179}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute -bottom-10 sm:-bottom-12 left-0 w-full flex justify-center items-center gap-2.5">
              {CAROUSEL_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === idx ? 'bg-[#00A8E8]' : 'bg-black opacity-30 hover:opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Call to Action Card */}
        <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-gray-100 overflow-hidden flex flex-col md:flex-row shadow-sm max-w-5xl mx-auto items-stretch mt-[45px] sm:mt-[61px]">
          
          <div className="flex items-center p-6 md:p-8 gap-5 md:gap-8 flex-1">
            <div className="relative flex-shrink-0 w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] flex items-center justify-center">
              <Image 
                src="/placements/rocket.svg" 
                alt="Rocket Icon" 
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg md:text-[22px] text-black mb-1 sm:mb-2 leading-tight">
                Want to build instead of be placed?
              </h4>
              <p className="text-gray-600 text-[15px] sm:text-base">
                Pitch your idea to the PU PIERC.
              </p>
            </div>
          </div>

          <div className="bg-[#DF3B4B] p-6 sm:p-8 md:p-10 flex items-center justify-center md:w-auto w-full">
            <button className="bg-[#FEDB2F] text-black font-bold text-[15px] sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#ffe042] transition-colors whitespace-nowrap shadow-sm">
              Talk to the PIERC
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
