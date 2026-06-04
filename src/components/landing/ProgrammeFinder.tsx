"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { Eyebrow } from "./Decor";
import {
  EngineeringIcon,
  ManagementIcon,
  PharmacyIcon,
  NursingIcon,
  HotelIcon,
  PhysiotherapyIcon,
  AlliedHealthIcon,
  DoctoralIcon
} from "./FacultyIcons";

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
    slug: "engineering",
    icon: EngineeringIcon,
  },
  {
    name: "Management Studies",
    tags: ["BBA", "MBA", "BCom"],
    levels: ["Undergraduate", "Postgraduate"],
    fields: ["Management & Commerce"],
    slug: "management-studies",
    icon: ManagementIcon,
  },
  {
    name: "Pharmacy",
    tags: ["B.Pharm", "M.Pharm", "D.Pharm"],
    levels: ["Undergraduate", "Postgraduate", "Diploma"],
    fields: ["Medicine & Health Sciences"],
    slug: "pharmacy",
    icon: PharmacyIcon,
  },
  {
    name: "Nursing",
    tags: ["B.Sc", "GNM", "Post Basic"],
    levels: ["Undergraduate", "Diploma", "Postgraduate"],
    fields: ["Medicine & Health Sciences"],
    slug: "nursing",
    icon: NursingIcon,
  },
  {
    name: "Hotel Management",
    tags: ["BHMCT", "Diploma"],
    levels: ["Undergraduate", "Diploma"],
    fields: ["Management & Commerce"],
    slug: "hotel-management",
    icon: HotelIcon,
  },
  {
    name: "Physiotherapy",
    tags: ["BPT", "MPT"],
    levels: ["Undergraduate", "Postgraduate"],
    fields: ["Medicine & Health Sciences"],
    slug: "physiotherapy",
    icon: PhysiotherapyIcon,
  },
  {
    name: "Allied Health Sciences",
    tags: ["B.Sc", "Diploma"],
    levels: ["Undergraduate", "Diploma"],
    fields: ["Medicine & Health Sciences"],
    slug: "allied-and-health-sciences",
    icon: AlliedHealthIcon,
  },
  {
    name: "Doctoral Research",
    tags: ["PhD"],
    levels: ["Doctoral (PhD)"],
    fields: ["Engineering & Technology", "Management & Commerce", "Science & Computing"],
    slug: "phd",
    icon: DoctoralIcon,
  }
];

type CardColor = "blue" | "yellow" | "red" | "black" | "white";

interface CourseCardProps {
  color: CardColor;
  title: string;
  tags: string[];
  href: string;
  icon: React.ComponentType<any>;
}

function CourseCard({ color, title, tags, href, icon: IconComponent }: CourseCardProps) {
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
      bg: "bg-[#F8F8F8] border-2 border-zinc-300 text-[#1F1F1F]",
      svgFill: "#CCCCCC",
      svgStroke: "#F8F8F8",
      tag: "bg-black text-white",
      btn: "bg-[#0CAADD] text-white hover:bg-[#0094C4]",
    },
  };

  const theme = styles[color];

  return (
    <Link
      href={href}
      className={`relative block w-full h-[268px] rounded-[16px] p-8 flex flex-col justify-between overflow-hidden border text-left cursor-pointer ${theme.bg}`}
    >
      {/* Decorative background icon */}
      <div className="absolute -right-4 -top-8 h-[120%] w-[55%] pointer-events-none opacity-40 flex items-center justify-end overflow-hidden">
        <IconComponent
          className="h-full w-full object-contain"
          style={{ color: theme.svgFill, '--svg-stroke': theme.svgStroke } as React.CSSProperties}
        />
      </div>
      {/* Content wrapper */}
      <div className="flex flex-col h-full justify-end z-10 relative">
        {/* Title */}
        <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] leading-tight tracking-tight pr-12 mb-3.5">
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
          <span
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold transition-colors shadow-sm ${theme.btn}`}
          >
            View Program
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProgrammeFinder() {
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const ready = level !== "" && field !== "";

  const filteredFaculties = faculties.filter((fac) => {
    if (!submitted) return true;
    const matchesLevel = level ? fac.levels.includes(level) : true;
    const matchesField = field ? fac.fields.includes(field) : true;
    return matchesLevel && matchesField;
  });

  const displayedFaculties = showAll ? filteredFaculties : filteredFaculties.slice(0, 6);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (ready) {
      setSubmitted(true);
      setShowAll(true); // Automatically show all when searching
    }
  }

  return (
    <section id="programmes" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Find Your Programme</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          Tell us where you&apos;re headed.
        </h2>
        <p className="mt-3 text-center section-body text-ink">
          Pick a level and a field - we&apos;ll take you straight to the right faculty.
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
            Showing <strong>{level}</strong> programmes in <strong>{field}</strong> - the full
            catalogue is coming soon.
          </p>
        )}

        {/* Faculty cards grid */}
        {displayedFaculties.length === 0 ? (
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
            <h3 className="mt-5 text-lg font-semibold text-ink font-poppins">No programmes found</h3>
            <p className="mt-2 text-sm text-ink/70">
              We couldn&apos;t find any faculties offering <strong>{level}</strong> programmes in the <strong>{field}</strong> field.
            </p>
            <button
              type="button"
              onClick={() => {
                setLevel("");
                setField("");
                setSubmitted(false);
                setShowAll(false);
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
            >
              Reset search filters
            </button>
          </div>
        ) : (
          <>
            <ul className="mt-12 flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
              {displayedFaculties.map((fac, i) => {
                const colors: CardColor[] = ["blue", "yellow", "red", "white"];
                return (
                  <li key={fac.name} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]">
                    <CourseCard
                      color={colors[i % colors.length]}
                      title={fac.name}
                      tags={fac.tags}
                      href={`/programmes/${fac.slug}`}
                      icon={fac.icon}
                    />
                  </li>
                );
              })}
            </ul>
            
            {!showAll && filteredFaculties.length > 6 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-8 py-3 text-sm font-semibold text-ink transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  View all faculties
                </button>
              </div>
            )}
          </>
        )}

        {/* Counsellor band */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-warm px-6 py-5 sm:flex-row">
          <p className="text-center text-base sm:text-lg font-medium text-white/90 sm:text-left">
            <span className="font-bold">Don&apos;t know what to choose?</span>{" "}
            Talk to a counsellor - we&apos;ll match you to the right program.
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
