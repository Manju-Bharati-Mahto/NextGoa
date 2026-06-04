"use client";
import React, { useState, useEffect } from 'react';

const CAROUSEL_DATA = [
  {
    country: "USA",
    flagCode: "us",
    subtitle: "MS at major state & private universities; OPT-eligible STEM tracks.",
    tags: [
      { text: "High Growth", bgColor: "bg-[#E5F7ED]", textColor: "text-[#22A055]" },
      { text: "Global Community", bgColor: "bg-[#E1F4FD]", textColor: "text-[#0CAADD]" },
      { text: "Industry Connects", bgColor: "bg-[#FCE8EA]", textColor: "text-[#E73649]" },
    ]
  },
  {
    country: "United Kingdom",
    flagCode: "gb",
    subtitle: "Masters in specialized fields with 2-year post-study work visa.",
    tags: [
      { text: "Research Focus", bgColor: "bg-[#E5F7ED]", textColor: "text-[#22A055]" },
      { text: "Global Community", bgColor: "bg-[#E1F4FD]", textColor: "text-[#0CAADD]" },
      { text: "Historic Campuses", bgColor: "bg-[#FCE8EA]", textColor: "text-[#E73649]" },
    ]
  },
  {
    country: "Canada",
    flagCode: "ca",
    subtitle: "PGWP-eligible programs with clear PR pathways post-graduation.",
    tags: [
      { text: "High Growth", bgColor: "bg-[#E5F7ED]", textColor: "text-[#22A055]" },
      { text: "Tech Hubs", bgColor: "bg-[#FCE8EA]", textColor: "text-[#E73649]" },
      { text: "Immigration Friendly", bgColor: "bg-[#E1F4FD]", textColor: "text-[#0CAADD]" },
    ]
  },
  {
    country: "Australia",
    flagCode: "au",
    subtitle: "Top-tier universities with excellent post-study work rights.",
    tags: [
      { text: "Quality of Life", bgColor: "bg-[#E1F4FD]", textColor: "text-[#0CAADD]" },
      { text: "Industry Connects", bgColor: "bg-[#FCE8EA]", textColor: "text-[#E73649]" },
      { text: "Research Grants", bgColor: "bg-[#E5F7ED]", textColor: "text-[#22A055]" },
    ]
  },
];

export function BeyondPlacements() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32 xl:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16">
        {/* Desktop Layout (xl and up) */}
        <div className="hidden xl:grid xl:grid-cols-[4fr_6fr] gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl lg:max-w-2xl lg:pr-8 mx-auto xl:mx-0">
            <h3 className="text-[#1F1F1F] mb-3 !text-left section-subheading">
              Beyond Placements
            </h3>
            <h2 className="text-[#E73649] mb-8 !text-left section-heading">
              Not every graduate takes a job offer.
            </h2>
            <p className="text-gray-800 mb-12 !text-left section-body">
              ~11% of each cohort chooses higher studies - at IITs, IIMs, and at universities across seven countries. The same career cell that places students in companies also guides applications, test prep and visas.
            </p>
            
            {/* Stats */}
            <div className="border-t border-b border-gray-300 py-8 mb-12">
              <div className="grid grid-cols-3 divide-x divide-gray-300 text-center">
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-[56px] text-[#0CAADD] mb-2">7</span>
                  <span className="font-poppins text-[15px] lg:text-[17px] text-gray-700 font-medium">Countries</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-[56px] text-[#0CAADD] mb-2">120+</span>
                  <span className="font-poppins text-[15px] lg:text-[17px] text-gray-700 font-medium">Countries</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-[56px] text-[#0CAADD] mb-2">800+</span>
                  <span className="font-poppins text-[15px] lg:text-[17px] text-gray-700 font-medium">Countries</span>
                </div>
              </div>
            </div>

            <button className="bg-[#1F1F1F] hover:bg-black text-white font-poppins font-semibold text-[16px] lg:text-[18px] px-10 py-5 rounded-full inline-flex items-center gap-3 transition-colors">
              Study Abroad pathways <span aria-hidden="true" className="text-xl">&rarr;</span>
            </button>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative w-full overflow-hidden pb-12 pt-6 xl:pt-0 -mx-6 px-6">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {CAROUSEL_DATA.map((slide, idx) => (
                <div key={idx} className="w-full shrink-0 px-1">
                  
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-[5fr_4fr] gap-4 sm:gap-6 lg:gap-8 min-h-[300px] sm:min-h-[400px]">
                    {/* Main Left Image (Empty for now) */}
                    <div className="bg-white rounded-[16px] shadow-sm w-full h-full border border-gray-100"></div>
                    
                    {/* Right Side Images */}
                    <div className="grid grid-rows-[5fr_4fr] gap-4 sm:gap-6 lg:gap-8 h-full">
                      <div className="bg-white rounded-[16px] shadow-sm w-full h-full border border-gray-100"></div>
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full">
                        <div className="bg-white rounded-[16px] shadow-sm w-full h-full border border-gray-100"></div>
                        <div className="bg-white rounded-[16px] shadow-sm w-full h-full border border-gray-100"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card */}
                  <div className="bg-white rounded-[8px] p-5 lg:p-6 shadow-[0_4px_24px_rgb(0,0,0,0.06)] flex flex-col 2xl:flex-row gap-4 lg:gap-5 justify-between items-start 2xl:items-center relative -mt-6 sm:-mt-10 w-full z-20">
                    <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-3">
                        <img src={`https://flagcdn.com/w40/${slide.flagCode}.png`} alt={`${slide.country} Flag`} className="w-[34px] h-auto shadow-sm rounded-[2px]" />
                        <h4 className="font-sans font-extrabold text-[26px] text-[#1F1F1F] tracking-tight leading-none">{slide.country}</h4>
                      </div>
                      <p className="font-sans text-[14.5px] lg:text-[15.5px] text-[#1F1F1F] mb-1 font-medium leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-nowrap gap-2 overflow-x-auto no-scrollbar pb-1">
                        {slide.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className={`px-3 py-1 rounded-full ${tag.bgColor} ${tag.textColor} text-[10px] sm:text-[11px] font-semibold tracking-wide whitespace-nowrap`}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-[#1E1E1E] hover:bg-black text-white font-sans font-semibold text-[14.5px] px-5 py-3 rounded-[6px] inline-flex items-center gap-2.5 transition-colors shrink-0">
                      <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="12" cy="12" r="12" fill="white"/>
                        <path d="M15.5 11.134C16.1667 11.5189 16.1667 12.4811 15.5 12.866L10.25 15.8971C9.58333 16.282 8.75 15.8009 8.75 15.0311V8.96887C8.75 8.19907 9.58333 7.71794 10.25 8.10286L15.5 11.134Z" fill="#1E1E1E"/>
                      </svg>
                      Watch their experience
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12 lg:mt-16 relative z-20">
              {CAROUSEL_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
                    activeIndex === idx 
                      ? 'bg-[#E73649]' 
                      : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-gray-100'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout (below xl) */}
        <div className="block xl:hidden">
          <div className="mb-6">
            <h3 className="text-[#1F1F1F] mb-2 text-left section-subheading">
              Beyond Placements
            </h3>
            <h2 className="text-[#E73649] mb-4 text-left section-heading !text-[28px] sm:!text-[36px] leading-tight">
              Not every graduate takes a job offer.
            </h2>
            <p className="text-gray-800 text-left section-body text-base sm:text-lg mb-6">
              ~11% of each cohort chooses higher studies - at IITs, IIMs, and at universities across seven countries. The same career cell also guides applications, test prep and visas.
            </p>
          </div>

          {/* Mobile Image Carousel */}
          <div className="w-full overflow-x-auto scrollbar-hide -mx-6 px-6 py-2 flex gap-4">
            {CAROUSEL_DATA.map((slide, idx) => (
              <div 
                key={idx} 
                className="w-[280px] xs:w-[320px] shrink-0 aspect-[16/10] rounded-[20px] border-2 border-dashed border-gray-200 bg-white flex items-center justify-center relative overflow-hidden shadow-sm"
              >
                {/* Empty Image Placeholder icon */}
                <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                </svg>

                {/* Country Name Tag Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm rounded-full py-1.5 px-3.5 flex items-center gap-2 shadow-md">
                  <img 
                    src={`https://flagcdn.com/w40/${slide.flagCode}.png`} 
                    alt={`${slide.country} Flag`} 
                    className="w-[20px] h-auto rounded-[1px] object-cover" 
                  />
                  <span className="font-sans font-bold text-[12px] tracking-wider text-white uppercase">{slide.country}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Stats */}
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
              <div className="flex flex-col">
                <span className="font-sans font-bold text-3xl text-[#0CAADD] mb-1">7</span>
                <span className="font-poppins text-xs text-gray-500 font-medium">Countries</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-3xl text-[#0CAADD] mb-1">120+</span>
                <span className="font-poppins text-xs text-gray-500 font-medium">Partners</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-3xl text-[#0CAADD] mb-1">800+</span>
                <span className="font-poppins text-xs text-gray-500 font-medium">Students</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#1F1F1F] hover:bg-black text-white font-poppins font-semibold text-base py-4 rounded-full flex items-center justify-center gap-2.5 transition-colors">
            Study Abroad pathways <span aria-hidden="true" className="text-lg">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
