"use client";

import React, { useState } from "react";

export default function NursingProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("All Programmes");
  const [showAll, setShowAll] = useState<boolean>(false);

  const nursingProgrammes = [
    { 
      title: "General Nursing and\nMidwifery (G.N.M)", 
      duration: "3 Years", 
      eligibility: "10+2 in any stream with English (40% Gen/EWS, 35% Reserved) OR 10+2 with English and 40% in vocational ANM.", 
      intake: "40", 
      mode: "Full-time" 
    },
    { 
      title: "Bachelor of Science\nin Nursing", 
      duration: "4 Years", 
      eligibility: "10+2 Science (PCB) with English. Minimum 45% (40% Reserved).", 
      intake: "100", 
      mode: "Full-time" 
    },
    { 
      title: "Post Basic Bachelor of Science\nin Nursing (PB-B.Sc.)", 
      duration: "2 Years", 
      eligibility: "GNM pass from INC/State Council recognized institution. Registered as Nurse & Midwife.", 
      intake: "40", 
      mode: "Full-time" 
    }
  ];

  const currentProgrammes = showAll ? nursingProgrammes : nursingProgrammes.slice(0, 2);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Programme Picker
          </h2>
          <h3 className="text-[#0CAADD] mb-10 section-heading">
            Pick your degree level.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["All Programmes"].map((level) => (
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
          {currentProgrammes.map((prog, idx) => {
            const isYellow = idx % 2 === 0;

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

        {/* Important Notes */}
        <div className="mt-12 text-center text-ink/80 text-[14px] sm:text-[15px] max-w-2xl mx-auto">
          <p className="mb-2"><strong>Note:</strong> Apart from this candidate shall have appeared NEET examination in the concurrent year.</p>
          <p>Admission will be granted based on the entrance examination conducted by the University.</p>
        </div>

        {/* View All Button */}
        {!showAll && nursingProgrammes.length > 2 && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(true)}
              className="font-bold text-[#E73649] hover:underline text-[15px]"
            >
              View all &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
