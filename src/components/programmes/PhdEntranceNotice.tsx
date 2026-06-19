import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PhdEntranceNotice() {
  return (
    <section className="w-full py-16 sm:py-24">
      {/* Entrance Test Notice Banner */}
      <div className="w-full bg-[#E73649] border-t-4 border-b-4 border-black/5">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex flex-col md:flex-row items-stretch justify-center">
          
          {/* Left info box */}
          <div className="bg-white rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px] p-6 sm:p-8 flex flex-row items-start sm:items-center gap-6 shadow-sm max-w-4xl flex-grow">
            <div className="shrink-0 flex items-center justify-center mt-1 sm:mt-0">
              <Icon icon="ph:info" className="text-[42px] sm:text-[48px] text-[#0CAADD]" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-bold text-[20px] sm:text-[22px] text-ink mb-1 sm:mb-2 leading-tight">Entrance Test Notice</h4>
              <p className="text-ink/80 text-[16px] sm:text-[18px] leading-relaxed">
                PU Goa conducts its own offline entrance test for PhD admissions. Eligibility: postgraduation in relevant discipline with minimum 55% aggregate. Valid scores from UGC-NET / GATE / GPAT or the PU Goa entrance examination are accepted.
              </p>
            </div>
          </div>

          {/* Right Register Button (wrapped in border) */}
          <div className="border border-white/80 border-t-0 md:border-t md:border-l-0 rounded-b-[24px] md:rounded-bl-none md:rounded-r-[24px] p-6 sm:p-8 md:px-16 flex items-center justify-center shrink-0">
            <Link href="/apply" className="bg-[#FCE34B] text-ink font-bold text-[18px] sm:text-[22px] px-14 sm:px-20 py-4 rounded-full transition-transform hover:scale-105 shadow-md text-center">
              Register
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
