"use client";

import { useRef, useState, useEffect } from "react";
import { StoryCard, Story } from "@/components/stories/StoriesGrid";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FacultyBlogsSlider({ stories }: { stories: Story[] }) {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowPrev(scrollLeft > 0);
    // Use a small threshold (2px) for floating point errors
    setShowNext(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [stories]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current || scrollContainerRef.current.children.length === 0) return;
    
    // Get exact width of a single card + the gap to ensure we scroll exactly 1 card at a time
    const card = scrollContainerRef.current.children[0] as HTMLElement;
    const gap = window.innerWidth >= 1280 ? 32 : 24; // xl:gap-8 is 32px, gap-6 is 24px
    const scrollAmount = card.offsetWidth + gap;
        
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // If there are 3 or fewer stories, they fit perfectly on desktop, so no next button initially if it doesn't overflow.
  useEffect(() => {
    // Initial check after render
    setTimeout(checkScroll, 100);
  }, []);

  return (
    <div className="relative group">
      {/* Prev Button */}
      <button
        onClick={() => scroll("left")}
        className={`absolute -left-1 md:-left-6 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#0caadd] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ${showPrev ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="Previous blogs"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Scroll Container */}
      <ul 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-6 xl:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8 -my-4 px-4 -mx-4 scroll-pl-4 [&>li]:snap-start [&>li]:shrink-0 [&>li]:w-full sm:[&>li]:w-[calc((100%-1.5rem)/2)] lg:[&>li]:w-[calc((100%-3rem)/3)] xl:[&>li]:w-[calc((100%-4rem)/3)]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {stories.map((s, index) => (
          <StoryCard key={s.title + index} s={s} />
        ))}
      </ul>

      {/* Next Button */}
      <button
        onClick={() => scroll("right")}
        className={`absolute -right-1 md:-right-6 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#0caadd] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ${showNext && stories.length > 3 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="Next blogs"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
