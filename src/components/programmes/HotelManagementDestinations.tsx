import React from "react";
import { Icon } from "@iconify/react";

export default function HotelManagementDestinations() {
  const destinations = [
    {
      country: "UAE",
      desc: "Dubai luxury hotels",
      flag: "flag:ae-4x3"
    },
    {
      country: "Switzerland",
      desc: "Hospitality exchange",
      flag: "flag:ch-4x3"
    },
    {
      country: "Singapore",
      desc: "Hospitality groups",
      flag: "flag:sg-4x3"
    },
    {
      country: "Maldives",
      desc: "Resort placements",
      flag: "flag:mv-4x3"
    }
  ];

  return (
    <section className="relative overflow-hidden z-10 w-full bg-transparent">
      {/* Background Blue Wavy Image from Figma */}
      <img
        src="/Group 32863.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
        
        <h2 className="text-[#FCE34B] mb-2 section-subheading">
          Global pathways
        </h2>
        <h3 className="text-white mb-12 section-heading">
          Explore international placements.
        </h3>

        <div className="flex flex-wrap justify-start gap-6 sm:gap-8 w-full mb-12">
          {destinations.map((dest, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] p-6 sm:p-8 flex flex-col items-start shadow-sm w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <div className="mb-6 rounded-md overflow-hidden border border-gray-100 shrink-0 w-[60px] sm:w-[80px]">
                <Icon icon={dest.flag} className="w-full h-auto block" />
              </div>
              <h4 className="font-bold text-[22px] sm:text-[24px] text-ink mb-2 leading-tight">
                {dest.country}
              </h4>
              <p className="text-ink/80 text-[14px] sm:text-[15px] leading-snug">
                {dest.desc}
              </p>
            </div>
          ))}
        </div>

        <div>
          <a href="#" className="inline-block bg-[#E73649] text-white font-bold text-[16px] sm:text-[18px] px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md">
            Explore all pathways &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
