"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const companies = [
  "Frame 174.png",
  "Frame 175.png",
  "Frame 176.png",
  "Frame 177-1.png",
  "Frame 177.png",
  "Frame 178.png",
  "Frame 179.png",
  "Frame 180.png",
  "Frame 181-1.png",
  "Frame 181.png",
  "Frame 182.png",
  "Frame 183.png",
  "Frame 184.png",
  "Frame 185.png",
  "Frame 186.png",
  "Frame 187.png",
  "Frame 188.png",
  "Frame 189.png",
  "Frame 190.png",
];

const destinations = [
  { name: "USA", icon: "flag:us-4x3" },
  { name: "UK", icon: "flag:gb-4x3" },
  { name: "Germany", icon: "flag:de-4x3" },
  { name: "Australia", icon: "flag:au-4x3" },
  { name: "New Zealand", icon: "flag:nz-4x3" },
  { name: "France", icon: "flag:fr-4x3" },
];

export default function RecruitersAndDestinations() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 overflow-hidden border-t border-gray-100">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-[#E73649] mb-3 section-heading">
          Top recruiter network
        </h2>
        <p className="text-ink/80 section-body">
          Indicative recruiters from the wider Parul University network.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-transparent py-8 mb-20 overflow-hidden relative">
        {/* Faded Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(to_right,transparent,#D1D5DB_10%,#D1D5DB_90%,transparent)]"></div>
        
        <div className="animate-marquee items-center gap-12 sm:gap-20 px-6">
          {/* Duplicate the array twice to ensure seamless infinite scrolling */}
          {[...companies, ...companies].map((fileName, idx) => (
            <div key={idx} className="relative w-36 h-16 shrink-0">
              <Image
                src={`/companies/${fileName}`}
                alt={`Recruiter ${idx}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Faded Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(to_right,transparent,#D1D5DB_10%,#D1D5DB_90%,transparent)]"></div>
      </div>

      {/* Destinations Section */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
          
          <h3 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight text-center md:text-left max-w-[300px]">
            Higher-studies destinations
          </h3>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 max-w-[500px]">
            {destinations.map((dest, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 shadow-sm"
              >
                <Icon icon={dest.icon} className="text-xl sm:text-2xl rounded-sm overflow-hidden" />
                <span className="font-bold text-ink text-sm sm:text-base whitespace-nowrap">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
