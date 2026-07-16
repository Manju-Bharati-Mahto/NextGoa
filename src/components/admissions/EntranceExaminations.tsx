"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cta } from "@/lib/navigation";
import { ExamDatesTicket } from "../layout/ExamDatesTicket";

export function EntranceExaminations() {
  const [activeTab, setActiveTab] = useState<"pu-goa" | "other">("pu-goa");

  return (
    <section className="w-full bg-[#faf9f6] px-4 sm:px-8 xl:px-16 py-10 sm:py-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-ink mb-2 section-subheading">Entrance Examinations</h2>
          <h3 className="text-[#ee364f] mb-4 section-heading">
            Two Pathways, <br className="hidden sm:block" />
            Designed Around Your Journey
          </h3>
          <p className="text-ink section-body">
            Take our in-house entrance test or apply with a valid national score. Pick the route that fits you.
          </p>
        </div>

        {/* Pill Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("pu-goa")}
              className={`rounded-full px-8 py-3.5 text-[17px] font-bold transition-colors ${
                activeTab === "pu-goa" ? "bg-[#ee364f] text-white" : "text-ink hover:bg-gray-50"
              }`}
            >
              PU Goa Entrance
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`rounded-full px-8 py-3.5 text-[17px] font-bold transition-colors ${
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
            {false && (
              <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                {/* Left - entrance test pitch */}
                <div className="flex flex-col justify-center text-left">
                  <h3 className="font-poppins font-semibold text-[32px] sm:text-[42px] leading-tight tracking-tight text-ink">
                    Apply for PU Goa&apos;s<br />Entrance Test
                  </h3>
                  <p className="mt-4 max-w-md font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] leading-[1.65] text-ink/80">
                    The Goa Entrance Exam is designed to assess your readiness for Medical and Doctorate courses.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src="/IMG.png"
                      alt="5,235 registered students"
                      className="h-8 w-auto object-contain"
                    width={1200} height={1200} />
                    <p className="font-[family-name:var(--font-poppins)] font-normal text-sm sm:text-base text-ink/80">
                      5,235 Students have registered.
                    </p>
                  </div>
                </div>

                {/* Right - window card with text overlay */}
                <div className="flex items-center justify-center w-full">
                  <ExamDatesTicket />
                </div>
              </div>
            )}

            {/* Date cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-left">
              <div className="rounded-[24px] bg-[#ee364f] p-8 text-white shadow-sm">
                <div>
                  <span className="inline-block rounded-full bg-[#FEDB2F] text-[#1F1F1F] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                    Application deadline
                  </span>
                </div>
                <p className="mt-4 font-sans font-medium text-[26px] sm:text-[32px] leading-tight">31st July 2026</p>
                <div className="w-full h-px bg-white/20 my-4" />
                <p className="font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] text-white/90">
                  All Diploma, UG, and PG Programs for 2026 Intake.
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
            <h4 className="text-2xl font-semibold text-ink mb-4 font-poppins">Other National Entrances</h4>
            <p className="text-ink/80 text-lg">
              We accept valid scores from JEE, CUET, CAT, MAT, GPAT, and UGC NET.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
