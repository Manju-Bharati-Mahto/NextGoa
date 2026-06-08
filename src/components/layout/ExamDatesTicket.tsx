"use client";

import React from "react";
import Link from "next/link";
import { cta } from "@/lib/navigation";

export function ExamDatesTicket() {
  return (
    <div
      className="relative block w-full max-w-full sm:max-w-[585px] aspect-[1170/844] overflow-hidden select-none [container-type:inline-size]"
    >
      <img
        src="/exam.png"
        alt="Entrance test window"
        className="w-full h-full object-contain"
      />
      {/* Ticket Content Overlay */}
      <div className="absolute left-[13.5cqw] right-[13.5cqw] top-[22.5cqw] bottom-[21.5cqw] flex flex-col justify-between text-left font-[family-name:var(--font-poppins)]">
        {/* Top part */}
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-[#333333] text-[5.8cqw] leading-[1.1] tracking-tight">
            May-July 2026
          </h4>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200/80 my-[1cqw]" />

        {/* Bottom part */}
        <div className="flex items-center justify-between gap-[2cqw] mb-[1cqw]">
          <div className="flex flex-col gap-[0.4cqw] text-[#1f1f1f] text-left max-w-[75%] font-bold text-[2.7cqw] tracking-normal leading-[1.3]">
            <span className="text-[#ee364f] font-semibold text-[2.2cqw] mb-[0.8cqw]">Applicable to admissions in</span>
            <span>B.Sc. in Nursing | BPT | Ph.D.</span>
            <span>Select PG Programs</span>
          </div>

          {/* Apply Now button */}
          <Link
            href={cta.apply}
            className="inline-flex items-center justify-center rounded-full bg-black px-[4.5cqw] py-[1.8cqw] text-[2.4cqw] font-bold text-white shadow-sm hover:bg-[#ee364f] transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
