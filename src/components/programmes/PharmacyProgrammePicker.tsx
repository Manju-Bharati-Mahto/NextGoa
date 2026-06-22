"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function PharmacyProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");

  const programmesData: Record<string, any[]> = {
    "Bachelor's": [
      { 
        title: "Bachelor of Pharmacy\n(B.Pharm.)", 
        duration: "4 Years", 
        eligibility: "10+2 Science (PCM or PCB) from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹1,35,000"
      },
      { 
        title: "B.Pharm. - Lateral Entry", 
        duration: "3 Years", 
        eligibility: "Diploma in Pharmacy from a recognized university.", 
        intake: "10", 
        mode: "Full-time",
        tuitionFee: "₹1,35,000"
      }
    ],
    "Doctoral Programs": [
      {
        title: "Doctor of Philosophy - Pharmaceutics",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000"
      },
      {
        title: "Doctor of Philosophy - Pharmaceutical Technology",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000"
      },
      {
        title: "Doctor of Philosophy - Pharmaceutical Quality Assurance",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000"
      },
      {
        title: "Doctor of Philosophy - Pharmacology",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000"
      },
      {
        title: "Doctor of Philosophy - Pharmacognosy",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000"
      },
      {
        title: "Doctor of Philosophy - Pharmaceutical Chemistry",
        duration: "3 Years",
        eligibility: "Master's in a relevant subject with 55% (general) / 50% (SC/ST/OBC-NCL / EWS / differently-abled), or 4-yr Bachelor's with 75%.",
        intake: "30",
        mode: "Full-time",
        tuitionFee: "₹1,05,000"
      }
    ]
  };

  const currentProgrammes = programmesData[activeLevel] || [];

  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-ink mb-2 section-subheading">
            Pharmacy
          </h2>
          <h3 className="text-[#E73649] mb-6 section-heading">
            Pick your Pharmacy Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Bachelor's", "Doctoral Programs"].map((level) => (
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
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full mx-auto items-stretch">
          {currentProgrammes.map((prog, idx) => (
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

        <div className="text-center mt-12">
          <a href="#" className="font-bold text-[#E73649] hover:underline text-[15px]">
            View more &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
