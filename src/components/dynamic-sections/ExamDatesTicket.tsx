"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cta } from "@/lib/navigation";
interface ExamDatesTicketProps {
  data?: {
    examLabel?: string;
    examDate?: string;
    applicableLabel?: string;
    programs?: string[];
    buttonText?: string;
    buttonLink?: string;
  };
}
export function ExamDatesTicket({ data }: ExamDatesTicketProps) {
  const examLabel = data?.examLabel || "Examination Date";

  const examDate = data?.examDate || "12 July 2026";

  const applicableLabel =
    data?.applicableLabel || "Applicable to admissions in";

  const programs = data?.programs || [
    "B.Sc. in Nursing | BPT | Ph.D.",
    "Select PG Programs",
  ];

  const buttonText = data?.buttonText || "Apply Now";

  const buttonLink = data?.buttonLink || "#";
  return (
    <div className="relative block w-full max-w-full sm:max-w-[585px] aspect-[1170/844] overflow-hidden select-none [container-type:inline-size]">
      <Image
        src="/exam.png"
        alt="Entrance test window"
        className="w-full h-full object-contain"
        width={1200}
        height={1200}
      />
      {/* Ticket Content Overlay */}
      <div className="absolute left-[13.5cqw] right-[13.5cqw] top-[22.5cqw] bottom-[21.5cqw] flex flex-col justify-between text-left font-[family-name:var(--font-poppins)]">
        {/* Top part */}
        <div className="flex flex-col">
          <span className="text-gray-500 font-medium text-[2.2cqw] mb-[0.2cqw] uppercase tracking-wider">
            {examLabel}
          </span>
          <h4 className="font-poppins font-semibold text-[#333333] text-[5.8cqw] leading-[1.1] tracking-tight">
            {examDate}
          </h4>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200/80 my-[1cqw]" />

        {/* Bottom part */}
        <div className="flex items-center justify-between gap-[2cqw] mb-[1cqw]">
          <div className="flex flex-col gap-[0.4cqw] text-[#1f1f1f] text-left max-w-[75%] font-bold text-[2.7cqw] tracking-normal leading-[1.3]">
            <span className="text-[#ee364f] font-semibold text-[2.2cqw] mb-[0.8cqw]">
              {applicableLabel}
            </span>
            {programs.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          {/* Apply Now button */}
          <Link
            href={buttonLink}
            data-enquiry-trigger="true"
            className="inline-flex items-center justify-center rounded-full bg-black px-[4.5cqw] py-[1.8cqw] text-[2.4cqw] font-bold text-white shadow-sm hover:bg-[#ee364f] transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
