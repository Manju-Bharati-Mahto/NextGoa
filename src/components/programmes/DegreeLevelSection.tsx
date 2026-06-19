"use client";

import React from "react";

const degrees = [
  {
    title: "Diploma",
    count: "2 Prog",
    items: ["Diploma Engineering (D.E.) in Computer Engineering", "GNM"],
    headerBg: "bg-[#fe4155]",
    textColor: "text-white",
    badgeBg: "bg-white/20 border-white/30 text-white",
    iconBrightness: "",
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
    headerBg: "bg-[#FEDB2F]",
    textColor: "text-[#1f1f1f]",
    badgeBg: "bg-black/10 border-black/20 text-[#1f1f1f]",
    iconBrightness: "brightness-0",
  },
  {
    title: "Master's",
    count: "4 Prog",
    items: ["MCA", "MBA", "M.Sc. Biotechnology", "M.Sc. Microbiology"],
    headerBg: "bg-[#1F1F1F]",
    textColor: "text-white",
    badgeBg: "bg-white/20 border-white/30 text-white",
    iconBrightness: "",
  },
  {
    title: "Doctoral",
    count: "5 Prog",
    items: [
      "PhD - Allied & Healthcare Sciences",
      "PhD - B.Tech",
      "PhD - Pharmacy",
      "PhD - Management",
      "PhD - Nursing",
    ],
    headerBg: "bg-[#1AC15D]",
    textColor: "text-white",
    badgeBg: "bg-white/20 border-white/30 text-white",
    iconBrightness: "",
  },
];

const DocumentIcon = ({ className }: { className?: string }) => (
  <img
    src="/programmes/Academic Document.svg"
    alt="Academic Document"
    className={`w-[24px] h-[24px] md:w-[30px] md:h-[30px] object-contain shrink-0 ${className || ""}`}
  />
);

const DegreeCard = ({ data }: { data: typeof degrees[0] }) => (
  <div className="rounded-[24px] overflow-hidden shadow-xl bg-white border border-transparent max-w-[380px] sm:max-w-[420px] md:max-w-none mx-auto w-full">
    {/* Header */}
    <div className={`${data.headerBg} ${data.textColor} p-5 md:p-6 flex items-center justify-between relative overflow-hidden`}>
      <div className="flex items-center gap-2.5 md:gap-3 relative z-10">
        <DocumentIcon className={data.iconBrightness} />
        <h4 className="text-[18px] md:text-[22px] font-semibold font-[family-name:var(--font-poppins)] tracking-tight">{data.title}</h4>
      </div>
      <div className={`${data.badgeBg} px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase relative z-10`}>
        {data.count}
      </div>
    </div>

    {/* Body */}
    <div className="p-5 md:p-6">
      <ul className="flex flex-col">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 md:gap-4 py-2.5 md:py-4 border-b border-gray-100 last:border-0 last:pb-0 first:pt-0">
            <div className="mt-1.5 w-[7px] h-[7px] md:w-[9px] md:h-[9px] rounded-full bg-[#1AC15D] shrink-0" />
            <span className="text-[15px] md:text-[17px] text-ink font-medium leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function DegreeLevelSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[800px] flex items-center bg-transparent overflow-hidden py-16 sm:py-24"
      style={{ 
        paddingTop: "clamp(5rem, 12.2vw, 600px)", 
        paddingBottom: "clamp(5rem, 13.3vw, 600px)" 
      }}
    >
      {/* Background Blue Wavy Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div 
          className="absolute inset-x-0 bg-[#0CAADD]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-[family-name:var(--font-poppins)]">
        {/* Header Content */}
        <div className="text-center text-white mb-10 md:mb-16 lg:mb-20">
          <h2 className="text-white mb-3 section-subheading">By Degree Level</h2>
          <h3 className="text-[#FFD523] mb-5 section-heading">
            Choose by qualification.
          </h3>
          <p className="text-white/95 max-w-2xl mx-auto section-body">
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
