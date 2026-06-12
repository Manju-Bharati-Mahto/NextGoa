"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PIERCModal from './PIERCModal';

const STARTUPS = [
  {
    name: "Solnce",
    image: "/placements/solance.png",
    bar: "/placements/cardsti.svg",
    bg: "#0C63C3",
  },
  {
    name: "Cligent Aerospace",
    image: "/placements/startups/cligent/image.png",
    bar: "/placements/startups/cligent/bar.png",
    bg: "#0C1A3A",
  },
  {
    name: "Dori Handicrafts",
    image: "/placements/startups/dori/image.png",
    bar: "/placements/startups/dori/bar.png",
    bg: "#2D1A0E",
  },
  {
    name: "Rehabveda",
    image: "/placements/startups/rehabveda/image.png",
    bar: "/placements/startups/rehabveda/bar.png",
    bg: "#0A3D2E",
  },
];

export function StartupEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STARTUPS.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="startup-ecosystem" className="w-full bg-[#F5F6F8] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-black mb-3 section-subheading">
            Startup Ecosystem
          </h3>
          <h2 className="text-[#DF3B4B] section-heading">
            For Those Who Want to Build,<br />Not Just Be Placed!
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-6 items-stretch mb-6">
          
          {/* Left Column: Stats Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 flex flex-col items-center sm:items-end justify-center text-center sm:text-right shadow-sm flex-1">
              <div className="text-[#00A8E8] font-black text-5xl sm:text-6xl leading-none flex items-baseline justify-center sm:justify-end tracking-tighter">
                <span className="text-3xl sm:text-4xl mr-1 font-bold">₹</span>20<span className="text-3xl sm:text-4xl font-bold ml-1">Cr+</span>
              </div>
              <div className="text-black text-[11px] sm:text-xs font-bold uppercase mt-4 tracking-widest">
                STARTUP FUNDING
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Provided to PU-incubated startups.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 flex flex-col items-center sm:items-end justify-center text-center sm:text-right shadow-sm flex-1">
              <div className="text-[#00A8E8] font-black text-5xl sm:text-6xl leading-none flex items-baseline justify-center sm:justify-end tracking-tighter">
                254
              </div>
              <div className="text-black text-[11px] sm:text-xs font-bold uppercase mt-4 tracking-widest">
                STARTUPS INCUBATED
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Active companies built inside the PU E-Cell.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 flex flex-col items-center sm:items-end justify-center text-center sm:text-right shadow-sm flex-1">
              <div className="text-[#00A8E8] font-black text-5xl sm:text-6xl leading-none flex items-baseline justify-center sm:justify-end tracking-tighter">
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

          {/* Right Column: Startup Image Carousel */}
          <div className="relative w-full h-full min-w-0">
            <div className="rounded-[24px] overflow-hidden w-full h-full shadow-md relative">
              <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {STARTUPS.map((startup, idx) => (
                  <div key={idx} className="relative w-full shrink-0 flex flex-col h-full" style={{ backgroundColor: startup.bg }}>
                    {/* Main startup image */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:flex-1 min-h-[400px] h-full">
                      <Image 
                        src={startup.image}
                        alt={startup.name}
                        fill 
                        className="object-cover object-center"
                        priority={idx === 0}
                      />
                    </div>
                    {/* Bottom bar overlapping the image */}
                    <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col justify-end">
                      <Image 
                        src={startup.bar}
                        alt={`${startup.name} info bar`}
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
            <div className="absolute -bottom-12 sm:-bottom-12 left-0 w-full flex justify-center items-center gap-2.5 pointer-events-none">
              {STARTUPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`pointer-events-auto w-3 h-3 rounded-full transition-colors ${
                    activeIndex === idx ? 'bg-[#00A8E8]' : 'bg-black opacity-30 hover:opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Call to Action Card */}
        <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-gray-100 overflow-hidden flex flex-col md:flex-row shadow-sm max-w-5xl mx-auto items-stretch mt-[80px] sm:mt-[61px]">
          
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
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FEDB2F] text-black font-bold text-[15px] sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#ffe042] transition-colors whitespace-nowrap shadow-sm">
              Talk to the PIERC
            </button>
          </div>

        </div>

      </div>

      {/* PIERC Multi-step Modal */}
      {showModal && <PIERCModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
