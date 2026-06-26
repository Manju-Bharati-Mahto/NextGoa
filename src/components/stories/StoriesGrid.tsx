"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
const STORIES_PER_PAGE = 8;
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
function StoriesGridInner() {
const searchParams = useSearchParams();
const tagParam = searchParams.get("tag");
const [selectedCategory, setSelectedCategory] = useState
<string | null>
(tagParam);
const [stories, setStories] = useState<Story[]>([]);
const [loading, setLoading] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
useEffect(() => {
async function fetchStories() {
try {
const res = await fetch("/api/blogs");
const data = await res.json();
const formatted = data.map((blog: any) => ({
tag: blog.category_names,
tagClass: "bg-brand/10 text-brand ring-1 ring-brand/20",
title: blog.title,
body: blog.excerpt,
image: blog.featured_image,
link: `/blog/${blog.slug}`,
}));
setStories(formatted);
} catch (err) {
console.error(err);
} finally {
setLoading(false);
}
}
fetchStories();
}, []);
const handleCategorySelect = (categoryName: string) => {
if (selectedCategory === categoryName) {
setSelectedCategory(null);
} else {
setSelectedCategory(categoryName);
}
setCurrentPage(1);
};
const filteredStories =
selectedCategory === null
? stories
: stories.filter(story =>
story.tag
.toLowerCase()
.includes(selectedCategory.toLowerCase())
);
const totalPages = Math.ceil(
filteredStories.length / STORIES_PER_PAGE
);
const paginatedStories = filteredStories.slice(
(currentPage - 1) * STORIES_PER_PAGE,
currentPage * STORIES_PER_PAGE
);
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
         {loading ? (
         <div className="text-center py-20">
            Loading...
         </div>
         ) : filteredStories.length > 0 ? (
         <>
         <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 transition-all duration-300">
            {paginatedStories.map((s, index) => (
            <StoryCard key={s.title + index} s={s} />
            ))}
         </ul>
         {totalPages > 1 && (
         <div className="flex justify-center items-center gap-3 mt-14">

  <button
    onClick={() => setCurrentPage((p) => p - 1)}
    disabled={currentPage === 1}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B6933]/20 bg-white text-[#5B6933] hover:bg-[#5B6933] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#5B6933]"
  >
    <ChevronLeft size={18} />
  </button>

  {Array.from({ length: totalPages }).map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrentPage(i + 1)}
      className={`w-11 h-11 rounded-full text-sm font-semibold transition-all duration-300 ${
        currentPage === i + 1
          ? "bg-[#5B6933] text-white shadow-lg scale-105"
          : "bg-white border border-gray-300 text-gray-700 hover:border-[#5B6933] hover:text-[#5B6933] hover:shadow"
      }`}
    >
      {i + 1}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage((p) => p + 1)}
    disabled={currentPage === totalPages}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B6933]/20 bg-white text-[#5B6933] hover:bg-[#5B6933] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#5B6933]"
  >
    <ChevronRight size={18} />
  </button>

</div>
         )}
         </>
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
export function StoriesGrid() {
return (
<Suspense
fallback={
<div className="h-96 w-full flex items-center justify-center bg-brand-white">
   Loading stories...
</div>
}
>
<StoriesGridInner />
</Suspense>
);
}