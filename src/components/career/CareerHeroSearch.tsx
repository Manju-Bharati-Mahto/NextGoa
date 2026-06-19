"use client";

import { useState } from "react";

export function CareerHeroSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dispatch custom event to CareerListings
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("career-search", { detail: query }));
    }
    
    // Smooth scroll down to the listings section
    document.getElementById("career-listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-[32rem] bg-white rounded-full flex items-center p-1.5 border border-gray-300 shadow-sm mb-8 lg:mb-16">
      <div className="pl-4 text-gray-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        suppressHydrationWarning
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Job Title" 
        className="flex-1 min-w-0 bg-transparent px-2 sm:px-3 py-2 sm:py-3 outline-none text-[#111111] text-base sm:text-lg placeholder-gray-500 font-medium"
      />
      <button suppressHydrationWarning type="submit" className="bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white font-medium text-base sm:text-lg px-5 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-sm cursor-pointer whitespace-nowrap flex-shrink-0">
        Apply Now
      </button>
    </form>
  );
}
