"use client";

import React, { useState } from "react";
import { cta } from "@/lib/navigation";

export function EntranceExaminations() {
  const [activeTab, setActiveTab] = useState<"pu-goa" | "other">("pu-goa");

  return (
    <section className="w-full bg-[#faf9f6] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-sans font-medium text-[32px] text-ink mb-2">Entrance Examinations</h2>
          <h3 className="font-sans font-bold text-4xl sm:text-[56px] text-[#ee364f] mb-4">
            Two Pathways, <br className="hidden sm:block" />
            Designed Around Your Journey
          </h3>
          <p className="font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] text-ink">
            Take our in-house entrance test or apply with a valid national score. Pick the route that fits you.
          </p>
        </div>

        {/* Pill Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("pu-goa")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === "pu-goa" ? "bg-[#ee364f] text-white" : "text-ink hover:bg-gray-50"
              }`}
            >
              PU Goa Entrance
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === "other" ? "bg-[#ee364f] text-white" : "text-ink hover:bg-gray-50"
              }`}
            >
              Other Entrances
            </button>
          </div>
        </div>

        {activeTab === "pu-goa" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Entrance Test Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
              {/* Left — entrance test pitch */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="font-sans font-bold text-[32px] sm:text-[42px] leading-tight tracking-tight text-ink">
                  Apply for PU Goa&apos;s<br />Entrance Test
                </h3>
                <p className="mt-4 max-w-md font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] leading-[1.65] text-ink/80">
                  The Goa Entrance Exam is designed to assess your readiness for B.Tech Programs in
                  Computer Science &amp; AI.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/IMG.png"
                    alt="5,235 registered students"
                    className="h-8 w-auto object-contain"
                  />
                  <p className="font-[family-name:var(--font-poppins)] font-normal text-sm sm:text-base text-ink/80">
                    5,235 Students have registered.
                  </p>
                </div>
              </div>

              {/* Right — window card SVG */}
              <div className="flex items-center justify-center">
                <a href={cta.apply} className="block w-full max-w-[585px]">
                  <img src="/Group 32629.svg" alt="Entrance test window" className="w-full h-auto" />
                </a>
              </div>
            </div>

            {/* Date cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-left">
              <div className="rounded-[24px] bg-[#ee364f] p-8 text-white shadow-sm">
                <div>
                  <span className="inline-block rounded-full bg-[#FEDB2F] text-[#1F1F1F] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                    Application deadline
                  </span>
                </div>
                <p className="mt-4 font-sans font-medium text-[26px] sm:text-[32px] leading-tight">30 June 2026</p>
                <div className="w-full h-px bg-white/20 my-4" />
                <p className="font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] text-white/90">
                  All UG, PG and Diploma programmes — 2026 intake.
                </p>
              </div>
              <div className="rounded-[24px] bg-[#0caadd] p-8 text-white shadow-sm">
                <div>
                  <span className="inline-block rounded-full bg-[#FEDB2F] text-[#1F1F1F] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                    Merit list &amp; counselling
                  </span>
                </div>
                <p className="mt-4 font-sans font-medium text-[26px] sm:text-[32px] leading-tight">July 2026</p>
                <div className="w-full h-px bg-white/20 my-4" />
                <p className="font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] text-white/90">
                  Rolling rounds with hostel allotment.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "other" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-20">
            <h4 className="text-2xl font-bold text-ink mb-4">Other National Entrances</h4>
            <p className="text-ink/80 text-lg">
              We accept valid scores from JEE, CUET, CAT, MAT, GPAT, and UGC NET.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
