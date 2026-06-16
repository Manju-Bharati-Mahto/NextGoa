"use client";

import React, { useState } from "react";
import Link from "next/link";

type Level = "All levels" | "UG" | "PG" | "Diploma" | "Doctoral";

interface EligibilityCard {
  title: string;
  level: Level;
  qualification: string;
  minimum: string;
  entrance: string;
  theme: "blue" | "red" | "yellow" | "white" | "black";
}

const CARDS: EligibilityCard[] = [
  {
    title: "B.Tech., BCA, BBA, B.Pharm., BHMCT, B.Sc., B.AOTT, B.MLS",
    level: "UG",
    qualification: "10+2 in relevant stream",
    minimum: "45-50%",
    entrance: "Not required",
    theme: "blue",
  },
  {
    title: "Lateral Entry (B.Tech. LE, B.Pharm. LE)",
    level: "UG",
    qualification: "Diploma in relevant discipline",
    minimum: "45%",
    entrance: "Not required",
    theme: "blue",
  },
  {
    title: "GNM",
    level: "Diploma",
    qualification: "10+2 Science stream",
    minimum: "40%",
    entrance: "Not required",
    theme: "red",
  },
  {
    title: "B.Sc. Nursing & BPT",
    level: "UG",
    qualification: "10+2 Science stream",
    minimum: "45%",
    entrance: "PU Goa offline test",
    theme: "blue",
  },
  {
    title: "MBA",
    level: "PG",
    qualification: "Graduation in any discipline",
    minimum: "50%",
    entrance: "Not required",
    theme: "yellow",
  },
  {
    title: "MCA",
    level: "PG",
    qualification: "Graduation with Mathematics",
    minimum: "50%",
    entrance: "Not required",
    theme: "yellow",
  },
  {
    title: "M.Sc.",
    level: "PG",
    qualification: "Relevant B.Sc. degree",
    minimum: "50%",
    entrance: "Not required",
    theme: "yellow",
  },
  {
    title: "PhD",
    level: "Doctoral",
    qualification: "Graduation in any discipline",
    minimum: "50%",
    entrance: "UGC-NET / GATE / GPAT / PU Goa test",
    theme: "black",
  },
];

export function EligibilitySection() {
  const [activeFilter, setActiveFilter] = useState<Level>("All levels");
  const [showAll, setShowAll] = useState(false);

  const filters: { label: Level; color: string }[] = [
    { label: "All levels", color: "bg-[#ee364f] text-white border-transparent" },
    { label: "UG", color: "bg-[#0caadd] text-white border-transparent" },
    { label: "PG", color: "bg-[#fedb2f] text-ink border-transparent" },
    { label: "Diploma", color: "bg-[#ee364f] text-white border-transparent" },
    { label: "Doctoral", color: "bg-white text-ink border-gray-200" },
  ];

  const filteredCards = CARDS.filter((card) =>
    activeFilter === "All levels" ? true : card.level === activeFilter
  );

  return (
    <section className="w-full bg-[#faf9f6] sm:py-20 py-15 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-ink mb-2 section-subheading">Eligibility</h2>
          <h3 className="text-[#ee364f] mb-4 section-heading">
            Find your fit in seconds.
          </h3>
          <p className="text-ink section-body">
            Pick a level to see the qualification, minimum marks and entrance test for each programme.
          </p>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto gap-4 justify-start md:justify-center scrollbar-hide mb-12 -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 py-1.5">
          {filters.map((f) => (
            <button
              suppressHydrationWarning
              key={f.label}
              onClick={() => {
                setActiveFilter(f.label);
                setShowAll(false);
              }}
              className={`px-8 py-3.5 rounded-full text-[17px] font-bold border transition-all hover:scale-105 shrink-0 whitespace-nowrap ${activeFilter === f.label || (activeFilter === "All levels" && f.label === "All levels")
                  ? f.color
                  : "bg-white text-ink border-gray-200 hover:border-gray-300 opacity-60"
                } ${activeFilter === f.label ? "opacity-100 shadow-md" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 transition-all duration-300">
          {(showAll ? filteredCards : filteredCards.slice(0, 3)).map((card, idx) => {
            const isDarkText = card.theme === "yellow" || card.theme === "white";
            const bgClass = {
              blue: "bg-[#0caadd]",
              red: "bg-[#ee364f]",
              yellow: "bg-[#fedb2f]",
              white: "bg-white border border-gray-200",
              black: "bg-ink",
            }[card.theme];

            const textColor = isDarkText ? "text-ink" : "text-white";
            const dividerColor = isDarkText ? "border-ink/20" : "border-white/20";
            const valueBold = isDarkText ? "font-semibold" : "font-semibold";

            // Tag style inside card
            let tagBg = "bg-white";
            let tagText = "text-ink";
            if (card.theme === "white") {
              tagBg = "bg-gray-100";
              tagText = "text-ink";
            }

            return (
              <div
                key={idx}
                className={`${bgClass} rounded-[20px] overflow-hidden border border-gray-100 shadow-sm flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]`}
              >
                {/* Top Section */}
                <div className="p-8 pb-6 flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className={`text-xl sm:text-2xl font-bold ${textColor} leading-snug w-[80%]`}>
                      {card.title}
                    </h4>
                    <span
                      className={`${tagBg} ${tagText} text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shrink-0`}
                    >
                      {card.level}
                    </span>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-white p-8 pt-6 space-y-4 text-base text-ink">
                  <div className="flex justify-between gap-4">
                    <span className="opacity-80 w-1/3">Qualification</span>
                    <span className="text-right w-2/3 font-semibold">{card.qualification}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="opacity-80 w-1/3">Minimum</span>
                    <span className="text-right w-2/3 font-semibold">{card.minimum}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="opacity-80 w-1/3">Entrance test</span>
                    <span className="text-right w-2/3 font-semibold">{card.entrance}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCards.length > 3 && (
          <div className="flex justify-center mb-12">
            <button
              suppressHydrationWarning
              onClick={() => setShowAll(!showAll)}
              className="border border-gray-300 hover:border-gray-400 text-ink font-semibold px-6 py-2.5 rounded-full transition-colors bg-white shadow-sm"
            >
              {showAll ? "View less" : "View all programs"}
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="bg-[#1f1f1f] rounded-[24px] sm:rounded-full p-3 flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between shadow-lg">
          <p className="text-white text-base sm:text-[17px] font-semibold px-8 py-2 sm:py-0 text-center sm:text-left font-poppins">
            Final eligibility is subject to applicable statutory council requirements.
          </p>
          <Link
            href="#enquiry"
            className="bg-[#fedb2f] hover:bg-[#e5c52a] text-ink text-[15px] sm:text-[16px] font-bold px-8 py-4 rounded-[20px] sm:rounded-full transition-colors whitespace-nowrap w-full sm:w-auto text-center font-poppins"
          >
            Not sure? Talk to a counsellor &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
