"use client";

import React, { useState } from "react";

type Programme = {
  title: string;
  duration: string;
  eligibility: string;
  intake: string;
  mode: string;
  specialisations: string[];
};

const programmeData: Record<string, Programme[]> = {
  Diploma: [
    { title: "Diploma in Computer Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["SOFTWARE", "NETWORKING"] },
    { title: "Diploma in Mechanical Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["CAD", "MANUFACTURING"] },
    { title: "Diploma in Civil Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["CONSTRUCTION", "DESIGN"] },
    { title: "Diploma in Electrical Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["POWER", "ELECTRONICS"] },
  ],
  "Bachelor's": [
    { title: "B.Tech. Computer Science & Engineering", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["AI", "CYBER SECURITY", "AI & DS", "AI & ML", "QUANTUM"] },
    { title: "B.Tech. Artificial Intelligence & Data Science", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["MACHINE LEARNING", "BIG DATA"] },
    { title: "B.Tech. Information Technology", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["CLOUD", "NETWORKING"] },
    { title: "B.Tech. Aerospace Engineering", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["AERODYNAMICS", "SPACE"] },
  ],
  "Master's": [
    { title: "M.Tech. Computer Engineering", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["AI", "SOFTWARE ENG"] },
    { title: "M.Tech. Structural Engineering", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["DESIGN", "CONSTRUCTION"] },
    { title: "M.Tech. Automation and Robotics", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["MECHATRONICS", "CONTROL"] },
    { title: "M.Tech. Thermal Engineering", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["ENERGY", "FLUID"] },
  ]
};

export default function ProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");

  const currentProgrammes = programmeData[activeLevel] || [];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink font-semibold text-[22px] sm:text-[26px] tracking-wide mb-2">
            Programme Picker
          </h2>
          <h3 className="font-poppins font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-[#E73649] mb-10">
            Pick your degree level.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Diploma", "Bachelor's", "Master's"].map((level) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 w-full mx-auto">
          {currentProgrammes.slice(0, 4).map((prog, idx) => {
            const isYellow = idx < 2;

            return (
              <div 
                key={idx}
                className={`rounded-[24px] p-8 sm:p-10 flex flex-col ${
                  isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"
                }`}
              >
                <h4 className="font-poppins font-bold text-[28px] sm:text-[32px] leading-tight mb-8">
                  {prog.title}
                </h4>

                <div className="grid grid-cols-2 gap-y-6 mb-8">
                  <div>
                    <p className={`text-base mb-1.5 opacity-80 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Duration</p>
                    <p className="font-bold text-[20px] sm:text-[22px]">{prog.duration}</p>
                  </div>
                  <div>
                    <p className={`text-base mb-1.5 opacity-80 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Eligibility</p>
                    <p className="font-bold text-[20px] sm:text-[22px]">{prog.eligibility}</p>
                  </div>
                  <div>
                    <p className={`text-base mb-1.5 opacity-80 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Intake</p>
                    <p className="font-bold text-[20px] sm:text-[22px]">{prog.intake}</p>
                  </div>
                  <div>
                    <p className={`text-base mb-1.5 opacity-80 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Mode</p>
                    <p className="font-bold text-[20px] sm:text-[22px]">{prog.mode}</p>
                  </div>
                </div>

                <div className={`border-t pt-6 mb-10 flex-grow ${isYellow ? "border-ink/10" : "border-white/20"}`}>
                  <p className={`text-base mb-3.5 opacity-80 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Specialisations</p>
                  <div className="flex flex-wrap gap-2.5">
                    {prog.specialisations.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${
                          isYellow ? "bg-white text-ink" : "bg-white/20 text-white"
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <button className={`rounded-full px-7 py-3 font-bold text-base transition-transform hover:scale-105 ${
                    isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"
                  }`}>
                    View Details &rarr;
                  </button>
                  <button className={`rounded-full px-7 py-3 font-bold text-base transition-transform hover:scale-105 border ${
                    isYellow ? "border-ink text-ink hover:bg-ink/5" : "border-white text-white hover:bg-white/10"
                  }`}>
                    Brochure
                  </button>
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
