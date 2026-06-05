"use client";

import React from "react";

const labs = [
  {
    title: "Artificial Intelligence & Machine Learning Lab",
    color: "bg-[#E73649]",
    image: "/labs/engineering/DSC03169.jpg",
  },
  {
    title: "Cyber Security & Network Forensics Lab",
    color: "bg-[#FDE047]",
    image: "/labs/engineering/DSC03171.jpg",
  },
  {
    title: "Cloud Computing & DevOps Lab",
    color: "bg-[#0CAADD]",
    image: "/labs/engineering/DSC03177.jpg",
  },
  {
    title: "IoT & Embedded Systems Lab",
    color: "bg-[#252525]",
    image: "/labs/engineering/DSC03190.jpg",
  },
  {
    title: "Quantum Computing Sandbox",
    color: "bg-[#E73649]",
    image: "/labs/engineering/DSC03217.jpg",
  },
  {
    title: "Data Science & Analytics Lab",
    color: "bg-[#FDE047]",
    image: "/labs/engineering/DSC03219.jpg",
  },
  {
    title: "Maker Space & Innovation Studio",
    color: "bg-[#0CAADD]",
    image: "/labs/engineering/DSC03227.jpg",
  },
  {
    title: "High-Performance Computing Cluster",
    color: "bg-[#252525]",
    image: "/labs/engineering/DSC03237.jpg",
  },
];

export default function LabsAndLearning() {
  return (
    <section className="w-full bg-gradient-to-b from-[#BAE6FD] to-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-ink mb-2 section-subheading">
            Labs & Hands-on Learning
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            Where you'll actually build.
          </h3>
          <p className="text-ink/80 max-w-2xl mx-auto leading-relaxed section-body">
            Purpose-built spaces from AI clusters to a maker studio. Theory matters. Practice ships.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-[1280px] mx-auto">
          {labs.map((lab, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-white rounded-[16px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              {/* Image Area */}
              <div className="w-full aspect-square sm:aspect-[4/3] relative">
                <img 
                  src={lab.image} 
                  alt={lab.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content Area */}
              <div className="p-5 sm:p-6 flex-grow flex items-start">
                <h4 className="font-bold text-[16px] sm:text-[18px] text-ink leading-tight">
                  {lab.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
