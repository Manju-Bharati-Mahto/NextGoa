"use client";

import React from "react";

export default function ManagementLearningEnvironment() {
  const cards = [
    {
      image: "/management/DSC03248.jpg",
      description: "Real-time market terminals for finance and analytics electives.",
      title: "Bloomberg-style finance lab"
    },
    {
      image: "/management/DSC03330.jpg",
      description: "Permanent rooms for HUL, P&G and ISB-style case wars.",
      title: "Live case competition rooms"
    },
    {
      image: "/management/DSC09616.jpg",
      description: "Marketing, supply-chain and operations simulators used in core courses.",
      title: "Simulation suites"
    },
    {
      image: "/management/DSC09840.jpg",
      description: "Working CXOs, founders and consultants in your classroom every month.",
      title: "Executive guest lectures"
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-ink mb-2 section-subheading">
            Learning Environment
          </h2>
          <h3 className="text-[#E73649] section-heading">
            More than a classroom.
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-8 w-full">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.5rem)] flex flex-col rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 h-[400px]"
            >
              {/* Top Image Half */}
              <div className="flex-grow p-8 flex flex-col justify-end relative overflow-hidden bg-gray-100">
                <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                <p className="text-white text-[15px] sm:text-[16px] leading-relaxed relative z-10 mt-auto font-medium">
                  {card.description}
                </p>
              </div>
              
              {/* Bottom White Half */}
              <div className="bg-white p-6 sm:p-8 h-[120px] flex items-center">
                <h4 className="font-poppins font-bold text-ink text-[18px] sm:text-[20px] leading-tight">
                  {card.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
