"use client";

import React from 'react';
import Image from 'next/image';

export function AwardsRecognition() {
  return (
    <section className="w-full bg-[#1C1C1D] py-8 sm:py-24 border-y-[10px] sm:border-y-[20px] border-[#555555]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.3fr_2fr_1.1fr] gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center text-left py-4">
          <h3 className="text-[#FFD700] mb-4 sm:mb-6 !text-left section-subheading">
            Awards & Recognition
          </h3>
          <h2 className="text-white tracking-tight !text-left section-heading">
            Recognised,<br />
            Ranked,<br />
            Awarded.
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden w-full overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <style>{`
            @keyframes mobileMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-mobile-marquee {
              display: flex;
              width: max-content;
              animation: mobileMarquee 20s linear infinite;
            }
            /* Pause on touch */
            .animate-mobile-marquee:active {
              animation-play-state: paused;
            }
          `}</style>
          <div className="animate-mobile-marquee gap-4 px-4">
            {[1, 2].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                <div className="w-[220px] h-[160px] shrink-0 bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-4 flex items-center justify-center">
                  <div className="relative w-full h-[60px]">
                    <Image src="/placements/rank/_2279715841568.png" alt="UGC Category 1" fill className="object-contain" />
                  </div>
                </div>
                <div className="w-[220px] h-[160px] shrink-0 bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-4 flex items-center justify-center">
                  <div className="relative w-full h-[60px]">
                    <Image src="/placements/rank/Group 32509.png" alt="QS World Rankings" fill className="object-contain" />
                  </div>
                </div>
                <div className="w-[220px] h-[160px] shrink-0 bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-4 flex items-center justify-center">
                  <div className="relative w-full h-[60px]">
                    <Image src="/placements/rank/image 173.png" alt="THE Impact Rankings" fill className="object-contain" />
                  </div>
                </div>
                <div className="w-[220px] h-[160px] shrink-0 bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-4 flex items-center justify-center">
                  <div className="relative w-full h-[60px]">
                    <Image src="/placements/rank/Group 365.png" alt="NIRF Rankings" fill className="object-contain" />
                  </div>
                </div>
                <div className="w-[220px] h-[160px] shrink-0 bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-5 flex flex-col justify-center items-center text-center">
                  <div className="text-[#FFD700] text-[64px] leading-[0.85] font-bold mt-1 mb-1 flex items-baseline tracking-tighter">
                    3<span className="text-[36px] font-semibold ml-1">x</span>
                  </div>
                  <div className="text-white font-bold text-[14px] tracking-widest uppercase w-full">
                    ASSOCHAM AWARD
                  </div>
                  <div className="w-full h-px bg-white/10 my-2"></div>
                  <div className="text-white/90 text-[11px] leading-snug">
                    Best University in Placements for<br/>3 Consecutive Years
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Middle Column (Desktop) */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-4">
          
          {/* UGC Card */}
          <div className="bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-5 flex items-center justify-center hover:border-white/20 transition-colors">
            <div className="relative w-full h-[70px] sm:h-[80px]">
              <Image src="/placements/rank/_2279715841568.png" alt="UGC Category 1 University" fill className="object-contain" />
            </div>
          </div>

          {/* QS Card */}
          <div className="bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-5 flex items-center justify-center hover:border-white/20 transition-colors">
            <div className="relative w-full h-[70px] sm:h-[80px]">
              <Image src="/placements/rank/Group 32509.png" alt="QS World University Rankings" fill className="object-contain" />
            </div>
          </div>

          {/* THE Card */}
          <div className="bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-5 flex items-center justify-center hover:border-white/20 transition-colors">
            <div className="relative w-full h-[70px] sm:h-[80px]">
              <Image src="/placements/rank/image 173.png" alt="THE Impact Rankings" fill className="object-contain" />
            </div>
          </div>

          {/* NIRF Card */}
          <div className="bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-5 flex items-center justify-center hover:border-white/20 transition-colors">
            <div className="relative w-full h-[70px] sm:h-[80px]">
               <Image src="/placements/rank/Group 365.png" alt="NIRF Top 50 Innovations Ranking" fill className="object-contain" />
            </div>
          </div>

        </div>

        {/* Right Column (ASSOCHAM) (Desktop) */}
        <div className="hidden sm:flex bg-[#282828] border border-[#3A3A3A] rounded-[8px] p-6 flex-col justify-center items-center text-center hover:border-white/20 transition-colors h-full min-h-[240px]">
          <div className="text-[#FFD700] text-[120px] leading-[0.85] font-bold mt-2 mb-4 flex items-baseline tracking-tighter">
            3<span className="text-[72px] font-semibold ml-2">x</span>
          </div>
          <div className="text-white font-bold text-[18px] lg:text-[20px] tracking-widest uppercase w-full">
            ASSOCHAM AWARD
          </div>
          <div className="w-full h-px bg-white/10 my-4"></div>
          <div className="text-white/90 text-[15px] lg:text-[17px] leading-relaxed">
            Best University in Placements for<br/>3 Consecutive Years
          </div>
        </div>

      </div>
    </section>
  );
}
