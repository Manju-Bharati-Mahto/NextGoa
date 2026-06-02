"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "1",
      title: "Profile Review",
      desc: "Free counselling, pathway fit + country shortlist.",
    },
    {
      num: "2",
      title: "Year 1 at PU Goa",
      desc: "Continue programme, build CGPA & portfolio.",
    },
    {
      num: "3",
      title: "Pathway Application",
      desc: "6-9 months before transfer, partner application + English test.",
    },
    {
      num: "4",
      title: "Visa Preparation",
      desc: "Documents, mock visa interview, & financial documentation.",
    },
    {
      num: "5",
      title: "Pre-departure",
      desc: "Travel, accommodation, currency, & pre-boarding orientation.",
    },
    {
      num: "6",
      title: "Pre-Departure Support",
      desc: "Complete the abroad studies, graduate & get placed globally.",
    },
  ];

  return (
    <section 
      className={`bg-[#f8f8f8] py-24 px-4 md:px-8 ${poppins.className}`}
      style={poppins.style}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1f2022] text-lg md:text-xl font-semibold mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[3.5rem] font-bold text-[#eb3b47] tracking-tight leading-tight">
            Application timeline and process.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full mt-8 px-4">
          
          {/* Blue connecting line (Background) */}
          <div className="absolute top-[28px] md:top-[32px] left-[7.5%] right-[7.5%] h-[4px] bg-[#0ca7dd] z-0 hidden md:block opacity-30"></div>
          
          {/* Blue connecting line (Animated Fill) */}
          <div 
            className="absolute top-[28px] md:top-[32px] left-[7.5%] h-[4px] bg-[#0ca7dd] z-0 hidden md:block transition-all duration-700 ease-in-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 85}%` }}
          >
            {/* Fade gradient at start */}
            <div className="absolute left-[-20px] top-0 bottom-0 w-[40px] bg-gradient-to-r from-[#f8f8f8] to-transparent"></div>
          </div>

          {/* Mobile connecting line (Background) */}
          <div className="absolute top-[28px] bottom-[28px] left-[50%] -translate-x-1/2 w-[4px] bg-[#0ca7dd] z-0 md:hidden opacity-30"></div>
          
          {/* Mobile connecting line (Animated Fill) */}
          <div 
            className="absolute top-[28px] left-[50%] -translate-x-1/2 w-[4px] bg-[#0ca7dd] z-0 md:hidden transition-all duration-700 ease-in-out"
            style={{ height: `${(activeStep / (steps.length - 1)) * 95}%` }}
          ></div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = index < activeStep;
              
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center w-full md:w-[15%] group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  
                  {/* Circle */}
                  <div 
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-4 transition-all duration-500 ease-out transform
                      ${isActive 
                        ? 'bg-[#eb3b47] text-white shadow-[0_0_20px_rgba(235,59,71,0.5)] scale-110' 
                        : isPast
                          ? 'bg-white text-[#eb3b47] border-4 border-[#0ca7dd] hover:scale-105 shadow-sm'
                          : 'bg-[#f4f4f4] text-[#1f2022] border-4 border-[#e8e8e8] group-hover:border-[#d0d0d0] group-hover:scale-105'
                      }`}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <h4 className={`text-[15px] md:text-[18px] font-bold mb-2 px-2 transition-colors duration-300 ${isActive ? 'text-[#eb3b47]' : 'text-[#4a4a4a] group-hover:text-[#eb3b47]'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-[13px] md:text-[14px] leading-snug px-1 font-medium transition-all duration-300 ${isActive ? 'text-[#1f2022] opacity-100' : 'text-[#6a6a6a] opacity-80'}`}>
                    {step.desc}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
