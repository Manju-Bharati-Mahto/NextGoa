import { Eyebrow } from "./Decor";
import { cta } from "@/lib/navigation";

/**
 * "Admissions 2026 — LIVE" key-dates section. Plain, crawlable dates + accepted
 * entrance tests — exactly the kind of facts AI answer engines cite. Update the
 * dates / tests here as the cycle progresses.
 */
const acceptedTests = ["JEE", "CUET", "CAT", "MAT", "GPAT", "UGC NET", "PU Goa Entrance"];

function LighthouseMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M15 16h10l2 19H13z" fill="var(--color-brand)" />
      <path d="M16 16l1-6h6l1 6z" fill="var(--color-ink)" />
      <rect x="17" y="6" width="6" height="5" rx="1" fill="var(--color-sunshine)" />
      <circle cx="20" cy="5" r="2" fill="var(--color-brand)" />
      <path d="M27 9l5-2M13 9l-5-2" stroke="var(--color-sunshine-deep)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Admissions() {
  return (
    <section id="admissions" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex justify-center">
          <LighthouseMark />
        </div>
        <Eyebrow className="mt-3 text-ink/70">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            ADMISSIONS 2026 — LIVE
          </span>
        </Eyebrow>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
          Key dates you can plan around.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left — entrance test pitch */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">
              Apply for PU Goa&apos;s Entrance Test
            </h3>
            <p className="mt-4 max-w-md text-base leading-7 text-ink/70">
              The Goa Entrance Exam is designed to assess your readiness for B.Tech programmes in
              Computer Science &amp; AI. Sit it online, get your result fast, and lock your seat.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-3">
                {["#e73649", "#0babe0", "#fedb2f", "#1f1f1f"].map((c, i) => (
                  <span
                    key={i}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-ink/70">
                <strong className="text-ink">5,235</strong> students have registered
              </p>
            </div>
          </div>

          {/* Right — window card */}
          <div className="rounded-3xl bg-zinc-50 p-7 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              Entrance test window
            </p>
            <p className="mt-1 text-3xl font-extrabold text-ink">May–July 2026</p>
            <ul className="mt-5 space-y-2 text-sm font-medium text-ink/80">
              {["B.Sc Nursing", "BPT — Physiotherapy", "BHMCT — Hotel Management"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink ring-1 ring-black/5">
              Select PG seats open by merit
            </p>
            <a
              href={cta.apply}
              className="mt-5 inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Date cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-brand p-7 text-white shadow-sm">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
              Application deadline
            </span>
            <p className="mt-4 text-3xl font-extrabold">30 June 2026</p>
            <p className="mt-2 text-sm text-white/90">
              All UG, PG and Diploma programmes — 2026 intake.
            </p>
          </div>
          <div className="rounded-3xl bg-ocean p-7 text-white shadow-sm">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
              Merit list &amp; counselling
            </span>
            <p className="mt-4 text-3xl font-extrabold">July 2026</p>
            <p className="mt-2 text-sm text-white/90">
              Rolling Goa-side seats with hostel allotment.
            </p>
          </div>
        </div>

        {/* Accepted tests */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-sm font-semibold text-ink/60">Accepted entrance tests:</span>
          {acceptedTests.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-bold text-ink/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
