import React from 'react';
import Image from 'next/image';

export function AlumniStories() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Red Background */}
        <div 
          className="absolute inset-x-0 bg-[#E73649]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <img
            src="/89.svg"
            alt=""
            className="absolute top-0 left-0 w-full h-auto"
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <img
            src="/89.svg"
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-4 sm:mt-6 mb-4 sm:mb-6">
        {/* Title Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h3 className="text-white mb-3 section-subheading">
            Alumni stories
          </h3>
          <h2 className="text-white tracking-tight section-heading">
            Real outcomes from the PU ecosystem.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-10 items-end">
          
          {/* Left Card - Image Frame */}
          <div className="flex items-center justify-center lg:justify-start mt-16 lg:mt-0 relative z-10 w-full max-w-md mx-auto lg:max-w-none lg:w-[95%]">
            <div className="relative w-full aspect-square">
              {/* Decorative Frame SVG from CampusHostel */}
              <svg
                viewBox="0 0 519 520"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -top-[27.5%] -left-[27.5%] w-[127.5%] h-[127.5%] z-0"
              >
                <rect x="271" y="271" width="239" height="238" rx="16" transform="rotate(180 271 271)" fill="#FEDB2F"/>
                <line x1="293.293" y1="112" x2="293.293" y2="-3.09108e-08" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
                <line x1="251" y1="69.2928" x2="519" y2="69.2928" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
                <circle cx="294.009" cy="69.3235" r="5.76442" transform="rotate(180 294.009 69.3235)" fill="#FEDB2F"/>
                <line y1="-0.707157" x2="112" y2="-0.707157" transform="matrix(-1 4.37114e-08 4.37114e-08 1 112 295)" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
                <line y1="-0.707157" x2="268" y2="-0.707157" transform="matrix(-8.74228e-08 1 1 8.74228e-08 70 252)" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
                <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(0 -1 -1 0 75.0887 300.773)" fill="#FEDB2F"/>
              </svg>
              
              {/* Image Container */}
              <div className="relative z-10 w-full h-full">
                <Image 
                  src="/placements/im1.png" 
                  alt="Alumni placed at Microsoft"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Card - Quote */}
          <div className="relative z-10 w-full">
            <div className="bg-[#1C1C1C] rounded-[32px] p-2 sm:p-2.5 border-[3px] border-white shadow-2xl">
              <div className="relative rounded-[24px] p-8 sm:p-10 flex flex-col h-full bg-[#1C1C1C]">
                
                {/* 8px Dashed Border Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[24px]" style={{ overflow: 'visible' }} xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" rx="24" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 8" />
                </svg>
                
                <div className="relative z-10 mb-6">
                  <h4 className="text-white font-poppins font-semibold text-[22px] mb-1">Tanish Patel & Suraj Jagtap</h4>
                  <p className="text-gray-400 font-sans text-xs sm:text-sm font-light">B.Tech CSE, Class of 2027</p>
                </div>
                
                <blockquote className="relative z-10 text-[#FEDB2F] font-sans font-medium text-[22px] sm:text-[26px] leading-snug mb-10">
                  &quot;Honored to be selected for this opportunity! A huge thank you to the placements at Parul University for their incredible support in making this happen. Excited for the journey ahead at Microsoft!&quot;
                </blockquote>
                
                {/* 8px Dashed HR Separator */}
                <svg width="100%" height="2" className="relative z-10 mb-6" aria-hidden="true">
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="8 8" />
                </svg>
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 font-sans text-xs uppercase tracking-wider mb-1.5">Now at</p>
                    <p className="text-white font-sans font-medium text-sm sm:text-[15px]">Microsoft</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-sans text-xs uppercase tracking-wider mb-1.5">Package</p>
                    <p className="text-[#E73649] font-sans font-bold text-sm sm:text-[15px]">₹60 LPA</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
