"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function AlliedHealthProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");

  const alliedHealthProgrammes = [
    { 
      title: "Bachelor of Anaesthesia & Operation Theatre Technology (B.AOTT)", 
      duration: "4 Years", 
      eligibility: "Candidate shall have passed 12th Examination in Science stream with Physics, Chemistry & Biology subjects from a recognized board.", 
      intake: "60", 
      mode: "Full-time",
      tuitionFee: "₹85,000"
    },
    { 
      title: "Bachelor of Medical Laboratory Science (BMLS)", 
      duration: "4 Years", 
      eligibility: "Candidate shall have passed 12th Examination in Science stream with Physics, Chemistry & Biology subjects from a recognized board.", 
      intake: "60", 
      mode: "Full-time",
      tuitionFee: "₹85,000"
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] sm: py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Allied & Health Sciences
          </h2>
          <h3 className="text-[#0CAADD] mb-10 section-heading">
            Pick your Healthcare Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Bachelor's"].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-[16px] sm:text-[18px] transition-all duration-200 border ${
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
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full max-w-7xl mx-auto items-stretch">
          {alliedHealthProgrammes.map((prog, idx) => (
            <ProgrammeCard
              key={idx}
              title={prog.title}
              duration={prog.duration}
              eligibility={prog.eligibility}
              tuitionFee={prog.tuitionFee}
              intake={prog.intake}
              mode={prog.mode}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
