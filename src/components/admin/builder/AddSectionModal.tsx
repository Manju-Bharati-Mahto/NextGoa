"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Search } from "lucide-react";
import { v4 as uuid } from "uuid";

interface Props {
  setSections: React.Dispatch<React.SetStateAction<any[]>>;
  module?: "pages" | "faculty";
}

const PAGE_SECTIONS = [
  { type: "hero", title: "Hero Banner" },
  { type: "banner", title: "Banner" },
  { type: "stats", title: "Stats Bar" },
  { type: "notification", title: "Notification Marquee" },
  { type: "philosophy", title: "Our Philosophy" },
  { type: "admissions", title: "Admissions" },
  { type: "placements", title: "Top Placements" },
  { type: "recruiters", title: "Recruiters" },
  { type: "programme_finder", title: "Programme Finder" },
  { type: "research", title: "Research" },
  { type: "testimonials", title: "Testimonials" },
  { type: "campus_tour", title: "Campus Tour" },
  { type: "campus_life", title: "Campus Life" },
  { type: "why_goa", title: "WhyGoa" },
  { type: "international", title: "International" },
  { type: "news", title: "News" },
  { type: "final_cta", title: "Final CTA" },
  { type: "faq", title: "FAQ'S" },
  { type: "vision_mission", title: "Vision Mission" },
  { type: "accreditations", title: "Accreditations" },
  { type: "leadership", title: "Leadership" },
  { type: "leadership_team", title: "Leadership Team" },
  { type: "faculty_deans", title: "Faculty Deans" },
  { type: "journey_timeline", title: "Journey Timeline" },
  { type: "examination_schedule", title: "Examination Schedule" },
  { type: "admission_timeline", title: "Admission Timeline" },
  { type: "trending_programs", title: "Trending Programs" },
  
];
const FACULTY_SECTIONS = [
  { type: "banner", title: "Banner" },
  { type: "faq", title: "FAQ" },
  { type: "final_cta", title: "Final CTA" },
];

export default function AddSectionDropdown({ setSections, module = "pages", }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const sectionTypes = module === "faculty" ? FACULTY_SECTIONS : PAGE_SECTIONS;
  const filtered = sectionTypes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function addSection(section: any) {
    setSections((prev) => [
      ...prev,
      {
        id: uuid(),
        type: section.type,
        title: section.title,
        status: 1,
        content: {},
      },
    ]);

    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="btn btn-primary btn-sm flex items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <Plus size={16} />
        Add Section
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[90vw] max-w-[500px] rounded-xl border border-gray-200 bg-white shadow-2xl z-50 overflow-hidden">
          {/* Search */}
          <div className="p-3">
            <div className="flex items-center rounded-lg border border-gray-200 px-3">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search section..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-2 pl-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Sections */}
          <div className="max-h-80 overflow-y-auto p-2 border-light-t">
            <div className="grid grid-cols-3 gap-2">
              {filtered.map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => addSection(item)}
                  className="rounded-lg border border-gray-200 p-3 text-left transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-6 text-center text-sm text-gray-500">
                No sections found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
