"use client";

import React from "react";

const degrees = [
  {
    title: "Diploma",
    count: "2 Prog",
    items: ["Diploma Engineering (D.E.) in Computer Engineering", "GNM"],
  },
  {
    title: "Bachelor's",
    count: "17 Prog",
    items: [
      "B.Tech. in Computer Science & Engineering",
      "B.Tech. Lateral Entry in CSE",
      "BCA",
      "BCA (Hons.)",
      "BBA",
      "BBA (Hons.) NEP 2020",
    ],
  },
  {
    title: "Master's",
    count: "4 Prog",
    items: ["MCA", "MBA", "M.Sc. Biotechnology", "M.Sc. Microbiology"],
  },
  {
    title: "Doctoral",
    count: "5 Prog",
    items: [
      "PhD — Allied & Health Sciences",
      "PhD — Engineering, IT & CS",
      "PhD — Pharmacy",
      "PhD — Management",
      "PhD — Nursing",
    ],
  },
];

const DocumentIcon = () => (
  <img 
    src="/programmes/Academic Document.svg" 
    alt="Academic Document" 
    className="w-[30px] h-[30px] object-contain shrink-0" 
  />
);

const DegreeCard = ({ data }: { data: typeof degrees[0] }) => (
  <div className="rounded-[24px] overflow-hidden shadow-xl bg-white border border-transparent">
    {/* Header */}
    <div className="bg-[#fe4155] p-6 flex items-center justify-between text-white relative overflow-hidden">
      <div className="flex items-center gap-3 relative z-10">
        <DocumentIcon />
        <h4 className="text-[22px] font-bold font-[family-name:var(--font-poppins)] tracking-tight">{data.title}</h4>
      </div>
      <div className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase relative z-10">
        {data.count}
      </div>
    </div>
    
    {/* Body */}
    <div className="p-6">
      <ul className="flex flex-col">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 last:pb-0 first:pt-0">
            <div className="mt-1.5 w-[9px] h-[9px] rounded-full bg-[#1AC15D] shrink-0" />
            <span className="text-[15px] text-ink font-medium leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function DegreeLevelSection() {
  return (
    <section 
      className="relative w-full min-h-[800px] flex items-center py-24 sm:py-32"
      style={{
        backgroundImage: "url('/programmes/Ocean Wave Frame.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-[family-name:var(--font-poppins)]">
        {/* Header Content */}
        <div className="text-center text-white mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-[22px] font-bold mb-3 tracking-wide">By Degree Level</h2>
          <h3 className="text-4xl sm:text-[3.2rem] font-extrabold text-[#FFD523] mb-5 tracking-tight leading-tight">
            Choose by qualification.
          </h3>
          <p className="text-[15px] sm:text-[17px] max-w-2xl mx-auto opacity-95 font-medium">
            From short Diplomas to full Doctoral research a path for every stage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start relative z-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <DegreeCard data={degrees[0]} /> {/* Diploma */}
            <DegreeCard data={degrees[3]} /> {/* Doctoral */}
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <DegreeCard data={degrees[1]} /> {/* Bachelor's */}
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <DegreeCard data={degrees[2]} /> {/* Master's */}
          </div>
        </div>

        {/* Decorative Badge */}
        <div className="absolute bottom-10 right-10 lg:right-20 pointer-events-none opacity-80 mix-blend-overlay z-0 hidden md:block">
          <img 
            src="/programmes/Excellence Badge.svg" 
            alt="Excellence Badge" 
            className="w-[350px] lg:w-[450px] h-auto object-contain" 
          />
        </div>
      </div>
    </section>
  );
}
