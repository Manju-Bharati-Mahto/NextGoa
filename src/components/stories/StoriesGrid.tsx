"use client";

import React, { useState } from "react";

interface Story {
  tag: string;
  tagClass: string;
  title: string;
  body: string;
  imageGradient: string;
}

const stories: Story[] = [
  {
    tag: "News",
    tagClass: "bg-brand text-white",
    title: "PU Goa Hackathon 2026 - 48 hours, 60 teams, 9 deployed prototypes.",
    body: "From medical scheduling to coastal-tourism analytics, students built real solutions.",
    imageGradient: "from-emerald-500 via-emerald-700 to-emerald-900",
  },
  {
    tag: "Placement",
    tagClass: "bg-ocean text-white",
    title: "From BHMCT to The Leela: Aman's two-year journey to property operations.",
    body: "How training pairs hands-on career years - without a single skip in between.",
    imageGradient: "from-blue-600 via-cyan-700 to-indigo-900",
  },
  {
    tag: "News",
    tagClass: "bg-brand text-white",
    title: "AI & Robotics Lab launches smart-agriculture prototype for Goan farms.",
    body: "An IoT-driven sensor system designed to monitor soil moisture and optimize water resources locally.",
    imageGradient: "from-purple-500 via-purple-700 to-indigo-900",
  },
  {
    tag: "Placement",
    tagClass: "bg-ocean text-white",
    title: "Three B.Tech graduates secure international placements in Singapore.",
    body: "Highlighting global opportunities and placement support at Parul University Goa.",
    imageGradient: "from-sky-500 via-sky-700 to-blue-900",
  },
  {
    tag: "Academic",
    tagClass: "bg-pink-600 text-white",
    title: "New industry-aligned curriculum co-developed with tech giants.",
    body: "Introducing specialized courses in Cloud Computing and Cybersecurity in collaboration with leading firms.",
    imageGradient: "from-red-500 via-pink-700 to-rose-950",
  },
  {
    tag: "Research",
    tagClass: "bg-teal-600 text-white",
    title: "Faculty member publishes landmark study on marine biotechnology.",
    body: "Research focused on sustainable uses of marine resources along the Goan coastline.",
    imageGradient: "from-teal-500 via-teal-700 to-cyan-900",
  },
  {
    tag: "Research",
    tagClass: "bg-teal-600 text-white",
    title: "Student-led startup secures initial seed funding for eco-packaging.",
    body: "Developing biodegradable packaging solutions from agricultural waste products.",
    imageGradient: "from-amber-600 via-emerald-700 to-stone-900",
  },
  {
    tag: "Events",
    tagClass: "bg-violet-600 text-white",
    title: "Annual Cultural Fest 'Kushavati 2026' brings campus to life.",
    body: "A celebration of art, music, and diverse cultures with participation from across the state.",
    imageGradient: "from-rose-500 via-purple-600 to-indigo-950",
  },
  {
    tag: "Events",
    tagClass: "bg-violet-600 text-white",
    title: "Sports complex hosts state-level intercollegiate championship.",
    body: "PU Goa athletes shine in basketball, football, and track events.",
    imageGradient: "from-orange-500 via-red-600 to-orange-950",
  },
  {
    tag: "Admissions Tips",
    tagClass: "bg-yellow-600 text-white",
    title: "A step-by-step guide to applying for admissions in 2026.",
    body: "Clear, simple instructions for aspiring students on choosing programs and submitting applications.",
    imageGradient: "from-yellow-500 via-amber-600 to-amber-900",
  },
  {
    tag: "Student Life",
    tagClass: "bg-violet-600 text-white",
    title: "Student Council hosts beach cleanup and environment awareness drive.",
    body: "Promoting sustainability and community service along the coastal areas of South Goa.",
    imageGradient: "from-teal-600 via-emerald-700 to-stone-900",
  }
];

const categories = [
  { name: "News", icon: "newspaper" },
  { name: "Events", icon: "theater_comedy" },
  { name: "Academic", icon: "menu_book" },
  { name: "Placement", icon: "business_center" },
  { name: "Research", icon: "biotech" },
  { name: "Student Life", icon: "school" },
  { name: "Admissions Tips", icon: "assignment" }
];

export function StoriesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleCategorySelect = (categoryName: string) => {
    // If clicked category is already selected, clear the filter to show all
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
    setShowAll(false); // Reset to show only 3 cards when category changes
  };

  const filteredStories =
    selectedCategory === null
      ? stories
      : stories.filter((s) => s.tag.toLowerCase() === selectedCategory.toLowerCase());

  const visibleStories = showAll ? filteredStories : filteredStories.slice(0, 4);

  return (
    <div className="w-full">
      {/* Moss Green Categories Section */}
      <section className="bg-[#5B6933] text-white">
        {/* Title */}
        <div className="mx-auto max-w-[1680px] px-6 sm:px-10 pt-16 pb-10 text-center">
          <h2 className="text-white section-subheading">
            Browse by Category Pick a Topic.
          </h2>
        </div>

        {/* Categories Bar */}
        <div className="bg-black/15 py-4 border-b border-white/10">
          <div className="mx-auto max-w-[1680px] px-6 sm:px-10">
            <div className="flex overflow-x-auto gap-3.5 justify-start md:justify-center scrollbar-hide py-1.5 -mx-6 px-6 md:mx-0 md:px-0">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => handleCategorySelect(cat.name)}
                    className={`rounded-full px-5 py-2.5 text-[15px] font-medium tracking-wide inline-flex items-center gap-2 border transition-all whitespace-nowrap cursor-pointer select-none ${
                      isActive
                        ? "bg-white text-[#5B6933] border-white shadow-md scale-[1.02]"
                        : "border-white/40 text-white hover:bg-white/10 hover:border-white/80"
                    }`}
                  >
                    <span className="material-symbols-rounded text-[18px] leading-none">{cat.icon}</span>
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Cards Grid (Off-white background starting immediately below the green selector) */}
      <section className="bg-brand-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1680px] px-6 sm:px-10">
          {filteredStories.length > 0 ? (
            <>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-300">
                {visibleStories.map((s, index) => (
                  <li
                    key={s.title + index}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg"
                  >
                    <div>
                      <div className={`relative aspect-[16/12] bg-gradient-to-br ${s.imageGradient}`}>
                        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
                      </div>
                      <div className="p-7">
                        <span
                          className={`inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wide ${s.tagClass}`}
                        >
                          {s.tag}
                        </span>
                        <h3 className="mt-4 font-poppins text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors">
                          {s.title}
                        </h3>
                        <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70">
                          {s.body}
                        </p>
                      </div>
                    </div>
                    {/* Visual footer on card to align nicely */}
                    <div className="px-7 pb-7 pt-0">
                      <span className="text-xs font-semibold text-brand/80 group-hover:text-brand flex items-center gap-1 transition-colors">
                        Read Story 
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {filteredStories.length > 4 && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex whitespace-nowrap rounded-full bg-brand px-8 py-3 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-brand-bright hover:shadow-lg cursor-pointer"
                  >
                    {showAll ? "Show Less" : "View All"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-black/5">
              <p className="font-poppins text-lg text-ink/60">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
