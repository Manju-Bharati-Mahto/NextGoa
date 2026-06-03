"use client";

import React, { useState } from "react";

export default function PharmacyProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");

  const pharmacyProgrammes = [
    { 
      title: "Bachelor of Pharmacy\n(B.Pharm.)", 
      duration: "4 Years", 
      eligibility: "10+2 Science (PCM or PCB) from a recognized board.", 
      intake: "60", 
      mode: "Full-time" 
    },
    { 
      title: "B.Pharm. - Lateral Entry", 
      duration: "3 Years", 
      eligibility: "Diploma in Pharmacy from a recognized university.", 
      intake: "10", 
      mode: "Full-time" 
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink font-semibold text-[20px] sm:text-[24px] tracking-wide mb-2">
            Programme Picker
          </h2>
          <h3 className="font-poppins font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-[#E73649] mb-10">
            Pick your degree level.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Bachelor's"].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`rounded-full px-8 py-2.5 font-bold text-sm sm:text-base transition-all duration-200 border ${
                  activeLevel === level
                    ? "bg-[#0CAADD] text-white border-[#0CAADD] shadow-md shadow-[#0CAADD]/20"
                    : "bg-transparent text-ink border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full mx-auto items-stretch">
          {pharmacyProgrammes.map((prog, idx) => {
            const isYellow = idx === 0;

            return (

              <div 
                key={idx}
                className="w-full md:w-[calc(50%-1.25rem)] rounded-[24px] overflow-hidden flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-shadow hover:shadow-lg"
              >
                {/* Top Section */}
                <div className={`p-6 sm:p-8 ${isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"}`}>
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] ${isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"}`}>
                      New and In-Demand
                    </span>
                  </div>
                  <h4 className="font-poppins font-bold text-[20px] sm:text-[24px] leading-snug whitespace-pre-line">
                    {prog.title}
                  </h4>
                </div>

                {/* Bottom Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-ink">
                  <div className="grid grid-cols-2 gap-y-5 mb-6">
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Duration</p>
                      <p className="font-bold text-[17px]">{prog.duration}</p>
                    </div>
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Eligibility</p>
                      <p className="font-bold text-[17px] leading-snug max-w-[250px] whitespace-pre-wrap">{prog.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Intake</p>
                      <p className="font-bold text-[17px]">{prog.intake}</p>
                    </div>
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Mode</p>
                      <p className="font-bold text-[17px]">{prog.mode}</p>
                    </div>
                  </div>

                  <div className="flex-grow"></div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button className="bg-[#E73649] text-white rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      View Details &rarr;
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      Brochure
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="font-bold text-[#E73649] hover:underline text-[15px]">
            View more &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
