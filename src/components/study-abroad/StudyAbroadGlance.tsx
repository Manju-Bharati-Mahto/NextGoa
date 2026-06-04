import React from "react";
import Image from "next/image";

export default function StudyAbroadGlance() {
  return (
    <section className="bg-gradient-to-b from-white via-[#F9F9F9] via-[15%] to-[#F9F9F9] py-24 font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-ink mb-4 section-subheading">At a Glance</h3>
          <h2 className="text-[#E9324D] section-heading">
            Your global degree, in numbers.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:auto-rows-fr">

          {/* Top Row */}

          {/* 1. Blue Box (Partner Universities) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0EB1E1] p-5 sm:p-6 relative overflow-hidden flex flex-col justify-start min-h-[120px] sm:min-h-[150px]">
            <div className="relative z-10 w-full">
              <h4 className="text-6xl sm:text-7xl font-bold text-white mb-1 leading-none font-poppins">120+</h4>
              <p className="text-lg xs:text-xl font-bold text-white tracking-wide mb-1 uppercase whitespace-nowrap">Partner Universities</p>
              <p className="text-md text-white/90 max-w-[60%] sm:max-w-none">Across the Parul University Ecosystem</p>
            </div>
            {/* Logos cluster at bottom right */}
            <div className="absolute bottom-3 -right-5 flex items-center pointer-events-none">
              <img src="/abroad/Knowledge Beacon.svg" alt="Partner Logo" className="w-[68px] h-[68px] sm:w-24 sm:h-24 rounded-full border-[4px] border-white bg-white z-10 shadow-sm object-cover translate-y-4" />
              <img src="/abroad/Global Academic Partner.svg" alt="Partner Logo" className="w-[68px] h-[68px] sm:w-24 sm:h-24 rounded-full border-[4px] border-white bg-white -ml-8 sm:-ml-10 z-20 shadow-sm object-cover -translate-y-4" />
              <img src="/abroad/The University of Waikato.svg" alt="Partner Logo" className="w-[68px] h-[68px] sm:w-24 sm:h-24 rounded-full border-[4px] border-white bg-white -ml-8 sm:-ml-10 z-30 shadow-sm object-cover translate-y-4" />
              <img src="/abroad/Charles Sturt University.svg" alt="Partner Logo" className="w-[68px] h-[68px] sm:w-24 sm:h-24 rounded-full border-[4px] border-white bg-white -ml-8 sm:-ml-10 z-40 shadow-sm object-cover -translate-y-4" />
              <img src="/abroad/Global Education Partner.svg" alt="Partner Logo" className="w-[68px] h-[68px] sm:w-24 sm:h-24 rounded-full border-[4px] border-white bg-white -ml-8 sm:-ml-10 z-50 shadow-sm object-cover translate-y-4" />
            </div>
          </div>

          {/* 2. Yellow Box (Partner Countries) */}
          <div className="rounded-2xl bg-[#FFD523] p-5 sm:p-6 flex flex-col justify-start min-h-[120px] sm:min-h-[150px]">
            <h4 className="text-6xl sm:text-7xl font-bold text-ink mb-1 leading-none font-poppins">7</h4>
            <p className="text-xl font-bold text-ink tracking-wide mb-1 uppercase">Partner Countries</p>
            <p className="text-md text-ink/80 leading-snug">
              USA • UK • Canada • Germany •<br />France • Australia • NZ
            </p>
          </div>

          {/* 3. Yellow Box (Pathway Models) */}
          <div className="rounded-2xl bg-[#FFD523] p-5 sm:p-6 flex flex-col justify-start min-h-[120px] sm:min-h-[150px]">
            <h4 className="text-6xl sm:text-7xl font-bold text-ink mb-1 leading-none font-poppins">4</h4>
            <p className="text-xl font-bold text-ink tracking-wide mb-1 uppercase">Pathway Models</p>
            <p className="text-md text-ink/80 leading-snug">
              2+2 • 1+1 • 3+1+1 • 3.5+1.5
            </p>
          </div>

          {/* Bottom Row */}

          {/* 4. Dark Gray Box (EMI) */}
          <div className="rounded-2xl bg-[#1C1C1C] p-5 sm:p-6 flex flex-col justify-start min-h-[120px] sm:min-h-[150px]">
            <h4 className="text-6xl sm:text-7xl font-bold text-white mb-1 leading-none font-poppins">8%</h4>
            <p className="text-xl font-bold text-white tracking-wide mb-1 uppercase">EMI for Abroad Tuition</p>
            <p className="text-md text-white/70">Semester-wise</p>
          </div>

          {/* 5. Dark Gray Box (Students) */}
          <div className="rounded-2xl bg-[#1C1C1C] p-5 sm:p-6 flex flex-col justify-start min-h-[120px] sm:min-h-[150px]">
            <h4 className="text-6xl sm:text-7xl font-bold text-white mb-1 leading-none font-poppins">800+</h4>
            <p className="text-xl font-bold text-white tracking-wide mb-1 uppercase">Students Gone Global</p>
            <p className="text-md text-white/70">Pathways, exchange & internships</p>
          </div>

          {/* 6. Red Split Box (Scholarships/Students) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#E9324D] overflow-hidden flex flex-col sm:flex-row min-h-[200px]">
            {/* Left side text */}
            <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
              <h4 className="text-5xl sm:text-6xl font-bold text-white mb-2 leading-none font-poppins">₹6.3 cr</h4>
              <p className="text-xl font-bold text-white tracking-wide mb-2 uppercase">Students Gone Global</p>
              <p className="text-md text-white/90">Pathways, exchange & internships</p>
            </div>
            {/* Right side image */}
            <div
              className="w-full sm:w-1/2 min-h-[150px] bg-cover bg-center"
              style={{ backgroundImage: "url('/abroad/Global Student Connect.png')" }}
            />
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-center text-ink/50 text-md mt-8">
          *Across the Parul University ecosystem.
        </p>
      </div>
    </section>
  );
}
