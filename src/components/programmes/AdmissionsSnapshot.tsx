"use client";

import React from "react";
import Link from "next/link";
import { cta } from "@/lib/navigation";

interface AdmissionsSnapshotProps {
  slug?: string;
}

export default function AdmissionsSnapshot({ slug }: AdmissionsSnapshotProps) {
  const getAdmissionsData = () => {
    let eligibility = "10+2 with PCM (B.Tech). Diploma (Lateral). 10+2 any stream (BCA). Bachelor's degree (MCA).";
    let entrance = "JEE / state CET / PU Goa entrance accepted.";

    switch (slug) {
      case "engineering":
        eligibility = "10+2 with PCM (B.Tech). Diploma for Lateral Entry. Bachelor's degree (M.Tech).";
        entrance = "JEE / state CET / PU Goa entrance accepted.";
        break;
      case "it-cs":
        eligibility = "10+2 any stream (BCA). Bachelor's degree (MCA).";
        entrance = "PU Goa entrance accepted. Counselling-based for BCA.";
        break;
      case "management":
        eligibility = "10+2 any stream (BBA). Bachelor's degree (MBA).";
        entrance = "PU Goa entrance accepted / National level exams.";
        break;
      case "pharmacy":
        eligibility = "10+2 with PCB/PCM (B.Pharm). D.Pharm for Lateral Entry.";
        entrance = "PUCET accepted.";
        break;

      case "applied-and-health-sciences":
        eligibility = "10+2 with Science (PCB/PCM) for B.Sc / B.AOTT / BMLS. Bachelor's degree for M.Sc.";
        entrance = "PUCET accepted.";
        break;
      case "nursing":
        eligibility = "10+2 with PCB and English (B.Sc Nursing). GNM for Post Basic.";
        entrance = "PUCET accepted.";
        break;
      case "physiotherapy":
        eligibility = "10+2 with PCB and English (BPT).";
        entrance = "PUCET accepted.";
        break;
      case "hotel-management":
        eligibility = "10+2 any stream (BHMCT / B.Sc HM).";
        entrance = "PU Goa entrance accepted.";
        break;

    }

    return [
      {
        title: "Eligibility",
        description: eligibility,
      },
      {
        title: "Entrance",
        description: entrance,
      },
      {
        title: "Fees &\nScholarships",
        description: "Tiered fees by programme. Merit, sports & need-based scholarships available.",
      },
      {
        title: "Key Dates",
        description: "Applications open for 2026-27. Early-bird scholarship deadlines apply.",
      },
    ];
  };

  const admissionsData = getAdmissionsData();
  return (
    <section className="w-full bg-[#FAFAFA] pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-ink mb-2 section-subheading">
            Admissions Snapshot
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
              <p className="text-ink/90 text-[15px] sm:text-[16px] leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button 
            data-enquiry-trigger="true"
            className="inline-block bg-[#E73649] text-white font-bold text-[16px] sm:text-[18px] px-8 py-4 rounded-full hover:bg-[#D62839] transition-colors shadow-sm"
          >
            Open admissions &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
