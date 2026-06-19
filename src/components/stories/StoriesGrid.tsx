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

function StoryCard({ s }: { s: Story }) {
  return (
    <li className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg">
      <Link href={s.link || '#'} className="flex flex-col justify-between h-full">
        <div>
          <div className="relative aspect-[16/12] bg-gradient-to-br from-brand via-brand-bright to-ocean overflow-hidden">
            {s.image ? (
              <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#ffffff_0,transparent_45%)]" />
            )}
          </div>
          <div className="p-7">
            <span className={`inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wide ${s.tagClass}`}>
              {s.tag}
            </span>
            <h3 className="mt-4 font-poppins text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
              {s.title}
            </h3>
            <p className="mt-3 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-3">
              {s.body}
            </p>
          </div>
        </div>
        <div className="px-7 pb-7 pt-0">
          <span className="text-[15px] font-semibold text-brand/80 group-hover:text-brand flex items-center gap-1 transition-colors">
            Read Story 
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </li>
  );
}

function StoriesGridInner({ 
  goaStories = [], 
  mainStories = [] 
}: { 
  goaStories?: Story[]; 
  mainStories?: Story[] 
}) {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(tagParam);

  useEffect(() => {
    if (tagParam) {
      setSelectedCategory(tagParam);
    }
  }, [tagParam]);

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const filteredGoa =
    selectedCategory === null
      ? goaStories
      : goaStories.filter((s) => s.tag.toLowerCase() === selectedCategory.toLowerCase());

  const filteredMain =
    selectedCategory === null
      ? mainStories
      : mainStories.filter((s) => s.tag.toLowerCase() === selectedCategory.toLowerCase());

  const allStories = [...filteredGoa, ...filteredMain];

  return (
    <div id="stories-grid" className="w-full">
      {/* Moss Green Categories Section */}
      <section className="bg-[#5B6933] text-white pt-8 sm:pt-12">
        {/* Title */}
        <div className="mx-auto max-w-[1680px] px-6 sm:px-10 pb-8 text-center">
          <h2 className="text-white section-subheading">
            Browse by Category.
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
      <section className="bg-brand-white sm: py-16 sm:py-24">
        <div className="mx-auto max-w-[1680px] px-6 sm:px-10">
          
          {/* Combined Stories Section */}
          {allStories.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 transition-all duration-300">
              {allStories.map((s, index) => (
                <StoryCard key={s.title + index} s={s} />
              ))}
            </ul>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-black/5">
              <p className="font-poppins text-lg text-ink/60">No stories found in this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export function StoriesGrid({ 
  goaStories = [], 
  mainStories = [] 
}: { 
  goaStories?: Story[]; 
  mainStories?: Story[] 
}) {
  return (
    <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-brand-white">Loading stories...</div>}>
      <StoriesGridInner goaStories={goaStories} mainStories={mainStories} />
    </Suspense>
  );
}
