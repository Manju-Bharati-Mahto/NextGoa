import React from "react";

export default function StudyAbroadComparison() {
  const directAdmissionPoints = [
    "₹40-80 L total tuition",
    "Family support far away from day one",
    "Standalone application - bear all visa risk",
    "One-shot decision",
    "No fall-back if foreign plan fails",
    "No EMI structure",
  ];

  const puGoaPathwayPoints = [
    "≈ 50% lower total cost (split tuition)",
    "First 2 years on Indian campus, then transition to the country you choose",
    "PU Goa pre-vets, supports profile, and mock-visa prep.",
    "Complete the degree at PU Goa even if the pathway changes.",
    "Semester EMIs at 8% available",
  ];

  return (
    <section className="relative w-full font-[family-name:var(--font-poppins)] pt-24 pb-32 bg-transparent overflow-hidden">
      {/* Background Red Wavy Image */}
      <img
        src="/Group 32864.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 py-15">
        
        {/* Header Section */}
        <div className="text-center mb-12 pt-6">
          <p className="text-white font-medium text-lg mb-3">Why PU Goa Pathway</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFD523] mb-4 leading-tight font-poppins">
            Why study abroad with PU Goa<br className="hidden sm:block" /> instead of going directly.
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            A side-by-side comparison so you can decide what&apos;s right for you and your family.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto py-3">
          
          {/* Card 1: Direct Admission */}
          <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-white">
            {/* Header */}
            <div className="bg-[#222222] p-5 sm:p-6 flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-[#FF4C4C] rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-rounded text-2xl font-bold">close</span>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1 font-poppins">Option A</p>
                <h3 className="text-white text-lg sm:text-[22px] font-semibold leading-tight font-poppins">Direct foreign admission</h3>
              </div>
            </div>
            {/* Body */}
            <div className="p-6 sm:p-8 flex-grow">
              <ul className="space-y-6">
                {directAdmissionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#FF4C4C] mt-1.5 shadow-[0_0_8px_rgba(255,76,76,0.6)]"></span>
                    <span className="text-[16px] sm:text-[16.5px] text-[#333333] font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: PU Goa Pathway */}
          <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-white border-[3px] border-[#FFD523]">
            {/* Header */}
            <div className="bg-[#FFD523] p-5 sm:p-6 flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-[#2DD4BF] rounded-full flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-rounded text-2xl font-bold">check</span>
              </div>
              <div>
                <p className="text-[#222222] text-[11px] font-bold tracking-widest uppercase mb-1 font-poppins">Option B · Recommended</p>
                <h3 className="text-[#222222] text-lg sm:text-[22px] font-semibold leading-tight font-poppins">Study Abroad with PU Goa</h3>
              </div>
            </div>
            {/* Body */}
            <div className="p-6 sm:p-8 flex-grow">
              <ul className="space-y-6">
                {puGoaPathwayPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#2DD4BF] mt-1.5 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
                    <span className="text-[16px] sm:text-[16.5px] text-[#333333] font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
