"use client";

import { SnapshotRowCard } from "@/data/programmes/types";

export function DynamicSnapshotRow({ data }: { data: SnapshotRowCard[] }) {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FFF4B3] to-[#FEDB2F] sm: py-16 sm:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-4 sm:gap-6">
          {data.map((card, idx) => (
            <div key={idx} className="flex flex-col items-start bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 w-full sm:w-auto lg:w-0 lg:flex-1">
              <span className="text-[14px] text-gray-600 font-medium">{card.title}</span>
              <span className="text-[24px] sm:text-[26px] font-bold text-ink mt-1 mb-1 leading-tight break-words">{card.value}</span>
              <span className="text-[14px] text-gray-600 tracking-tight">{card.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
