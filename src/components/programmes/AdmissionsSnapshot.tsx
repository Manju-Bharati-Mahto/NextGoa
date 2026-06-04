"use client";

import React from "react";
import Link from "next/link";

const admissionsData = [
  {
    title: "Eligibility",
    description: "10+2 with PCM (B.Tech). Diploma (Lateral). 10+2 any stream (BCA). Bachelor's degree (MCA).",
    linkText: "Open admissions \u2192",
    linkHref: "#",
  },
  {
    title: "Entrance",
    description: "JEE / state CET / PU Goa entrance accepted. Counselling-based for Diploma & BCA.",
    linkText: "Open admissions \u2192",
    linkHref: "#",
  },
  {
    title: "Fees &\nScholarships",
    description: "Tiered fees by programme. Merit, sports & need-based scholarships available.",
    linkText: "Open admissions \u2192",
    linkHref: "#",
  },
  {
    title: "Key Dates",
    description: "Applications open for 2026-27. Early-bird scholarship deadlines apply.",
    linkText: "Open admissions \u2192",
    linkHref: "#",
  },
];

export default function AdmissionsSnapshot() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Admissions snapshot
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            Everything you need to apply.
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-[1280px] mx-auto">
          {admissionsData.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-[#FDE047] rounded-[24px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-ink leading-tight mb-4 whitespace-pre-line">
                {item.title}
              </h4>
              <p className="text-ink/90 text-[15px] sm:text-[16px] leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              <Link 
                href={item.linkHref} 
                className="font-bold text-[15px] sm:text-[16px] text-ink hover:underline underline-offset-4"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
