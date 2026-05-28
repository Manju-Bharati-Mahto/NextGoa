"use client";

import { useState } from "react";
import { Eyebrow } from "./Decor";

/**
 * "Find your programme" funnel + faculty card grid (matches the Figma section).
 *
 * The selector is functional today: pick a level + field and it confirms the
 * selection inline. When the programme catalogue ships, swap the inline result
 * for `router.push('/programmes?level=...&field=...')`. The cards below preview
 * the faculties; their "View Program" links become real routes at that point.
 */
const levels = ["Undergraduate", "Postgraduate", "Diploma", "Doctoral (PhD)"];

const fields = [
  "Engineering & Technology",
  "Management & Commerce",
  "Medicine & Health Sciences",
  "Design & Architecture",
  "Arts, Humanities & Law",
  "Science & Computing",
];

/** Faculty cards — alternating cyan / yellow as in the design. */
const faculties = [
  { name: "Engineering, IT & CS", tags: ["B.Tech", "M.Tech", "Diploma"] },
  { name: "Management Studies", tags: ["BBA", "MBA", "BCom"] },
  { name: "Pharmacy", tags: ["B.Pharm", "M.Pharm", "D.Pharm"] },
  { name: "Nursing", tags: ["B.Sc", "GNM", "Post Basic"] },
  { name: "Hotel Management", tags: ["BHMCT", "Diploma"] },
  { name: "Physiotherapy", tags: ["BPT", "MPT"] },
];

function CapIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

export function ProgrammeFinder() {
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ready = level !== "" && field !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (ready) setSubmitted(true);
  }

  return (
    <section id="programmes" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Find your programme</Eyebrow>
        <h2 className="mt-2 text-center font-[family-name:var(--font-poppins)] text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
          Tell us where you&apos;re headed.
        </h2>
        <p className="mt-3 text-center text-base text-ink/70">
          Pick a level and a field — we&apos;ll take you straight to the right faculty.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-stretch rounded-3xl bg-white p-2 ring-1 ring-zinc-300 sm:flex-row sm:items-center sm:rounded-[100px]"
        >
          <div className="flex flex-1 items-center px-4 py-2">
            <select
              aria-label="Level"
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
                setSubmitted(false);
              }}
              className="w-full appearance-none border-0 border-b border-zinc-400 bg-transparent px-0 pb-1.5 text-base text-zinc-500 focus:border-brand focus:outline-none focus:ring-0 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.2rem_1.2rem] bg-[position:right_0_bottom_6px] bg-no-repeat pr-6"
            >
              <option value="">I am exploring</option>
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden h-6 w-px bg-zinc-300 sm:block mx-2"></div>

          <div className="flex flex-1 items-center px-4 py-2">
            <select
              aria-label="Field"
              value={field}
              onChange={(e) => {
                setField(e.target.value);
                setSubmitted(false);
              }}
              className="w-full appearance-none border-0 border-b border-zinc-400 bg-transparent px-0 pb-1.5 text-base text-zinc-500 focus:border-brand focus:outline-none focus:ring-0 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.2rem_1.2rem] bg-[position:right_0_bottom_6px] bg-no-repeat pr-6"
            >
              <option value="">Field</option>
              {fields.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!ready}
            className="mt-2 whitespace-nowrap rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed sm:ml-4 sm:mt-0"
          >
            Find programs
          </button>
        </form>

        {submitted && (
          <p
            role="status"
            className="mx-auto mt-5 max-w-3xl rounded-2xl bg-sunshine/30 px-4 py-3 text-center text-sm font-medium text-ink"
          >
            Showing <strong>{level}</strong> programmes in <strong>{field}</strong> — the full
            catalogue is coming soon.
          </p>
        )}

        {/* Faculty cards */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faculties.map((f, i) => {
            const yellow = i % 2 === 1;
            return (
              <li
                key={f.name}
                className={`relative overflow-hidden rounded-3xl p-6 shadow-sm ring-1 ring-black/5 ${
                  yellow ? "bg-sunshine text-ink" : "bg-ocean text-white"
                }`}
              >
                <span
                  className={`pointer-events-none absolute -right-2 -top-2 ${
                    yellow ? "text-ink/10" : "text-white/20"
                  }`}
                >
                  <CapIcon />
                </span>
                <h3 className="max-w-[70%] text-xl font-extrabold leading-tight">{f.name}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        yellow ? "bg-ink/10 text-ink" : "bg-white/20 text-white"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#admissions"
                  className={`mt-5 inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                    yellow
                      ? "bg-ink text-white hover:bg-black"
                      : "bg-white text-ink hover:bg-zinc-100"
                  }`}
                >
                  View Program →
                </a>
              </li>
            );
          })}
        </ul>

        {/* Counsellor band */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-warm px-6 py-5 sm:flex-row">
          <p className="text-center text-sm font-medium text-white/90 sm:text-left">
            Don&apos;t know what to choose? Talk to a counsellor — we&apos;ll match you to the
            right program.
          </p>
          <a
            href="#admissions"
            className="whitespace-nowrap rounded-full bg-sunshine px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-[1.03]"
          >
            All programmes
          </a>
        </div>
      </div>
    </section>
  );
}
