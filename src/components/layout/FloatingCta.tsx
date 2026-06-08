"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingCta() {
  const pathname = usePathname();

  if (pathname === "/career" || pathname?.startsWith("/career/")) {
    return null;
  }

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[800px] flex justify-center pointer-events-none">
      <div className="bg-black/30 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 rounded-full flex items-center justify-between gap-2 sm:gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)] pointer-events-auto">
        <Link 
          href="#enquiry" 
          data-enquiry-trigger="true"
          className="bg-[#E73649] text-white font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 rounded-full hover:bg-[#D62B3D] transition-colors whitespace-nowrap"
        >
          Apply for 2026 &rarr;
        </Link>
        <Link 
          href="#enquiry" 
          data-enquiry-trigger="true"
          className="bg-white text-ink font-bold text-[14px] sm:text-[16px] px-5 sm:px-8 py-3 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap hidden sm:block"
        >
          Talk to Counsellor
        </Link>
        <Link 
          href="#enquiry" 
          data-enquiry-trigger="true"
          className="bg-white text-ink font-bold text-[14px] sm:text-[16px] px-5 sm:px-8 py-3 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          Brochure
        </Link>
      </div>
    </div>
  );
}
