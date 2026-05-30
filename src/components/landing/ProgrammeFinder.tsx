"use client";

import { useState, useId } from "react";
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

const faculties = [
  {
    name: "Engineering, IT & CS",
    tags: ["Diploma", "B.Tech", "BCA", "MCA"],
    levels: ["Diploma", "Undergraduate", "Postgraduate"],
    fields: ["Engineering & Technology", "Science & Computing"],
  },
  {
    name: "Management Studies",
    tags: ["BBA", "MBA", "BCom"],
    levels: ["Undergraduate", "Postgraduate"],
    fields: ["Management & Commerce"],
  },
  {
    name: "Pharmacy",
    tags: ["B.Pharm", "M.Pharm", "D.Pharm"],
    levels: ["Undergraduate", "Postgraduate", "Diploma"],
    fields: ["Medicine & Health Sciences"],
  },
  {
    name: "Nursing",
    tags: ["B.Sc", "GNM", "Post Basic"],
    levels: ["Undergraduate", "Diploma", "Postgraduate"],
    fields: ["Medicine & Health Sciences"],
  },
  {
    name: "Hotel Management",
    tags: ["BHMCT", "Diploma"],
    levels: ["Undergraduate", "Diploma"],
    fields: ["Management & Commerce"],
  },
  {
    name: "Physiotherapy",
    tags: ["BPT", "MPT"],
    levels: ["Undergraduate", "Postgraduate"],
    fields: ["Medicine & Health Sciences"],
  },
];

type CardColor = "blue" | "yellow" | "red" | "black" | "white";

interface CourseCardProps {
  color: CardColor;
  title: string;
  tags: string[];
}

function CourseCard({ color, title, tags }: CourseCardProps) {
  const styles = {
    blue: {
      bg: "bg-[#0CAADD] border-[#0CAADD] text-white",
      svgFill: "#F8F8F8",
      svgStroke: "#0CAADD",
      tag: "bg-white text-black",
      btn: "bg-black text-white hover:bg-zinc-800",
    },
    yellow: {
      bg: "bg-[#FEDB2F] border-[#FEDB2F] text-[#1F1F1F]",
      svgFill: "#F8F8F8",
      svgStroke: "#FEDB2F",
      tag: "bg-white text-black",
      btn: "bg-black text-white hover:bg-zinc-800",
    },
    red: {
      bg: "bg-[#E73649] border-[#E73649] text-white",
      svgFill: "#F8F8F8",
      svgStroke: "#E73649",
      tag: "bg-white text-black",
      btn: "bg-black text-white hover:bg-zinc-800",
    },
    black: {
      bg: "bg-[#1F1F1F] border-[#1F1F1F] text-white",
      svgFill: "#333333",
      svgStroke: "#1F1F1F",
      tag: "bg-white text-black",
      btn: "bg-white text-black hover:bg-zinc-200",
    },
    white: {
      bg: "bg-[#F8F8F8] border-zinc-200 text-[#1F1F1F]",
      svgFill: "#E5E5E5",
      svgStroke: "#F8F8F8",
      tag: "bg-black text-white",
      btn: "bg-[#0CAADD] text-white hover:bg-[#0094C4]",
    },
  };

  const theme = styles[color];

  return (
    <div
      className={`relative w-full h-[268px] rounded-[16px] p-8 flex flex-col justify-between overflow-hidden border text-left ${theme.bg}`}
    >
      {/* Decorative background pattern (isolated to the right portion of the card) */}
      <svg
        viewBox="250 0 125 268"
        className="absolute right-0 top-0 h-full w-[33%] pointer-events-none opacity-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M279.918 96.1157C285.888 107.687 297.761 115.1 310.877 115.1C323.992 115.1 335.866 107.686 341.836 96.1157L355.349 96.1157C354.213 99.3087 352.83 102.398 351.037 105.267L351.003 105.322L351.036 105.377L353.77 109.938C354.493 111.142 354.302 112.684 353.31 113.675L344.362 122.624C343.37 123.612 341.829 123.802 340.626 123.083L336.065 120.348L336.01 120.315L335.955 120.349C331.512 123.13 326.681 125.128 321.545 126.305L321.481 126.32L321.466 126.382L320.171 131.559C319.827 132.928 318.599 134.084 317.205 134.084L304.549 134.084C303.154 134.084 301.926 132.928 301.583 131.559L300.288 126.382L300.272 126.32L300.21 126.305L299.25 126.075C294.471 124.875 289.964 122.956 285.8 120.349L285.745 120.315L285.69 120.348L281.129 123.083C279.918 123.8 278.381 123.617 277.392 122.624L277.391 122.624L268.443 113.675C267.451 112.684 267.261 111.142 267.984 109.938L270.719 105.377L270.752 105.322L270.718 105.267C268.923 102.398 267.541 99.3087 266.404 96.1157L279.918 96.1157Z"
            fill={theme.svgFill}
            stroke={theme.svgStroke}
            strokeWidth="0.210938"
          />
          <path
            d="M261.623 80.2954L360.131 80.2954C362.693 80.2954 364.771 82.3732 364.771 84.936C364.771 87.4988 362.693 89.5767 360.131 89.5767L261.623 89.5767C259.06 89.5767 256.982 87.4988 256.982 84.936C256.982 82.3732 259.06 80.2954 261.623 80.2954Z"
            fill={theme.svgFill}
            stroke={theme.svgStroke}
            strokeWidth="0.210938"
          />
          <path
            d="M304.549 26.2954L317.205 26.2954C320.642 26.2954 323.427 29.081 323.427 32.5181L323.427 54.8774C323.427 56.6841 324.89 58.1469 326.697 58.147C328.504 58.147 329.967 56.6842 329.967 54.8774L329.967 37.1245C332.099 38.0739 334.141 39.1605 336.084 40.3979L336.084 54.8774C336.084 56.6841 337.547 58.1469 339.353 58.147C341.16 58.147 342.623 56.6842 342.623 54.8774L342.623 45.3481C350.681 52.7107 356.157 62.7181 357.709 73.7563L264.045 73.7563C265.596 62.7183 271.073 52.7117 279.131 45.3491L279.131 54.8774C279.131 56.6841 280.593 58.1469 282.4 58.147C284.207 58.147 285.67 56.6842 285.67 54.8774L285.67 40.3979C287.613 39.1605 289.654 38.0739 291.787 37.1245L291.787 54.8774C291.787 56.6841 293.25 58.1469 295.056 58.147C296.863 58.147 298.326 56.6842 298.326 54.8774L298.326 32.5181C298.326 29.1892 300.939 26.4706 304.228 26.3032L304.549 26.2954Z"
            fill={theme.svgFill}
            stroke={theme.svgStroke}
            strokeWidth="0.210938"
          />
        </g>
      </svg>
      {/* Content wrapper */}
      <div className="flex flex-col h-full justify-end z-10 relative">
        {/* Title */}
        <h3 className="font-sans font-medium text-[24px] sm:text-[32px] leading-tight tracking-tight pr-12 mb-3.5">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center justify-center rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider animate-none ${theme.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Program button */}
        <div>
          <a
            href="#admissions"
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold transition-colors shadow-sm ${theme.btn}`}
          >
            View Program
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProgrammeFinder() {
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ready = level !== "" && field !== "";

  const filteredFaculties = faculties.filter((fac) => {
    if (!submitted) return true;
    const matchesLevel = level ? fac.levels.includes(level) : true;
    const matchesField = field ? fac.fields.includes(field) : true;
    return matchesLevel && matchesField;
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (ready) setSubmitted(true);
  }

  return (
    <section id="programmes" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Find your programme</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Tell us where you&apos;re headed.
        </h2>
        <p className="mt-3 text-center font-[family-name:var(--font-poppins)] font-normal text-base sm:text-lg text-ink leading-relaxed">
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
              className="w-full appearance-none border-0 bg-transparent px-0 text-base text-zinc-500 focus:outline-none focus:ring-0 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.1rem_1.1rem] bg-[position:right_12px_center] bg-no-repeat pr-8 cursor-pointer"
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
              className="w-full appearance-none border-0 bg-transparent px-0 text-base text-zinc-500 focus:outline-none focus:ring-0 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.1rem_1.1rem] bg-[position:right_12px_center] bg-no-repeat pr-8 cursor-pointer"
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

        {/* Faculty cards grid */}
        {filteredFaculties.length === 0 ? (
          <div className="mt-12 text-center py-16 px-6 rounded-3xl border border-zinc-200 max-w-xl mx-auto bg-white shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-50 ring-4 ring-zinc-50/50">
              <svg
                className="h-7 w-7 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">No programmes found</h3>
            <p className="mt-2 text-sm text-ink/70">
              We couldn&apos;t find any faculties offering <strong>{level}</strong> programmes in the <strong>{field}</strong> field.
            </p>
            <button
              type="button"
              onClick={() => {
                setLevel("");
                setField("");
                setSubmitted(false);
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
            >
              Reset search filters
            </button>
          </div>
        ) : (
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFaculties.map((fac, i) => {
              const colors: CardColor[] = ["blue", "yellow", "red"];
              return (
                <li key={fac.name}>
                  <CourseCard
                    color={colors[i % colors.length]}
                    title={fac.name}
                    tags={fac.tags}
                  />
                </li>
              );
            })}
          </ul>
        )}

        {/* Counsellor band */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-warm px-6 py-5 sm:flex-row">
          <p className="text-center text-base sm:text-lg font-medium text-white/90 sm:text-left">
            <span className="font-bold">Don&apos;t know what to choose?</span>{" "}
            Talk to a counsellor — we&apos;ll match you to the right program.
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
