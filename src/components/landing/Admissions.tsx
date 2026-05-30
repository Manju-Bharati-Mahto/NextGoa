import { Eyebrow } from "./Decor";
import { cta } from "@/lib/navigation";

/**
 * "Admissions 2026 — LIVE" key-dates section. Plain, crawlable dates + accepted
 * entrance tests — exactly the kind of facts AI answer engines cite. Update the
 * dates / tests here as the cycle progresses.
 */
const acceptedTests = ["JEE", "CUET", "CAT", "MAT", "GPAT", "UGC NET", "PU Goa Entrance"];

export function Admissions() {
  return (
    <section id="admissions" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex justify-center mb-6">
          <img src="/1.svg" alt="Admissions illustration" className="h-[97px] w-auto" />
        </div>
        <Eyebrow className="mt-3 text-ink">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            Admissions 2026 — Live
          </span>
        </Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Key dates you can plan around.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left — entrance test pitch */}
          <div className="flex flex-col justify-center text-left">
            <h3 className="font-sans font-medium text-[24px] sm:text-[32px] leading-tight tracking-tight text-ink">
              Apply for PU Goa&apos;s<br />Entrance Test
            </h3>
            <p className="mt-4 max-w-md font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] leading-[1.65] text-ink/70">
              The Goa Entrance Exam is designed to assess your readiness for B.Tech programmes in
              Computer Science &amp; AI. Sit it online, get your result fast, and lock your seat.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="/IMG.png"
                alt="5,235 registered students"
                className="h-8 w-auto object-contain"
              />
              <p className="font-[family-name:var(--font-poppins)] font-normal text-sm sm:text-base text-ink/70">
                5,235 students have registered
              </p>
            </div>
          </div>

          {/* Right — window card SVG */}
          <div className="flex items-center justify-center">
            <a
              href={cta.apply}
              className="block w-full max-w-[585px]"
            >
              <img
                src="/Group 32629.svg"
                alt="Entrance test window"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Date cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 text-left">
          <div className="rounded-[24px] bg-brand p-8 text-white shadow-sm">
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
          <div className="rounded-[24px] bg-ocean p-8 text-white shadow-sm">
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

        {/* Accepted tests */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 font-[family-name:var(--font-poppins)] font-normal text-[15px] sm:text-[17px] text-ink/60">Accepted entrance tests:</span>
          {acceptedTests.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-3 py-1.5 font-[family-name:var(--font-poppins)] font-normal text-xs text-ink/80 ring-1 ring-zinc-200/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
