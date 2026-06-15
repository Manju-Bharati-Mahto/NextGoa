"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Image from 'next/image';
import Link from 'next/link';

export interface Story {
  tag: string;
  tagClass: string;
  title: string;
  body: string;
  image?: string;
  link?: string;
  date?: string;
}

const categories = [
  { name: "News", icon: "newspaper" },
  { name: "Events", icon: "theater_comedy" },
  { name: "Academic", icon: "menu_book" },
  { name: "Placement", icon: "business_center" },
  { name: "Research", icon: "biotech" },
  { name: "Student Life", icon: "school" },
  { name: "Admissions Tips", icon: "assignment" }
];

function StoriesGridInner({ initialStories = [] }: { initialStories?: Story[] }) {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(tagParam);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (tagParam) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedCategory(tagParam);
    }
  }, [tagParam]);

  const handleCategorySelect = (categoryName: string) => {
    // If clicked category is already selected, clear the filter to show all
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
    setShowAll(false); // Reset to show only 4 cards when category changes
  };

  const filteredStories =
    selectedCategory === null
      ? initialStories
      : initialStories.filter((s) => s.tag.toLowerCase() === selectedCategory.toLowerCase());

  const visibleStories = showAll ? filteredStories : filteredStories.slice(0, 4);

  return (
    <div id="stories-grid" className="w-full">
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
                    suppressHydrationWarning
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
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 transition-all duration-300">
                {visibleStories.map((s, index) => (
                  <li
                    key={s.title + index}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href={s.link || '#'} target="_blank" className="flex flex-col justify-between h-full">
                      <div>
                        <div className={`relative aspect-[16/12] bg-gradient-to-br from-brand via-brand-bright to-ocean overflow-hidden`}>
                          {s.image ? (
                            <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                          ) : (
                            <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
                          )}
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
                    </Link>
                  </li>
                ))}
              </ul>

              {filteredStories.length > 4 && (
                <div className="mt-12 text-center">
                  <button
                    suppressHydrationWarning
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

export function StoriesGrid({ initialStories = [] }: { initialStories?: Story[] }) {
  return (
    <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-brand-white">Loading stories...</div>}>
      <StoriesGridInner initialStories={initialStories} />
    </Suspense>
  );
}
