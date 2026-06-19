"use client";

import Image from "next/image";
import { useRef } from "react";

const clubs = [
  {
    title: "Academic & Tech",
    tags: ["CODING", "ROBOTICS", "AI/ML", "PHARMA", "HOSPITALITY"],
    image: "/campus-culture/Academic & Tech.jpg"
  },
  {
    title: "Arts & Culture",
    tags: ["MUSIC", "DRAMA", "PHOTOGRAPHY", "LITERARY", "FILM"],
    image: "/campus-culture/Arts & Culture.jpg"
  },
  {
    title: "Freshers Fest",
    tags: ["MUSIC", "DANCE", "DJ NIGHT", "ICE BREAKERS"],
    image: "/campus-culture/Freshers Fest.jpg"
  },
  {
    title: "Goan Cultural Carnival",
    tags: ["LOCAL CUISINE", "FOLK DANCE", "ART", "HERITAGE"],
    image: "/campus-culture/Goan Cultural Carnival.jpg"
  }
];

export function CampusStudentLife() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 574 : window.innerWidth > 640 ? 474 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
      scrollRef.current.style.cursor = 'grabbing';
      scrollRef.current.style.scrollSnapType = 'none';
    }
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center pt-[calc(clamp(30px,6vw,120px)+2rem)] pb-[calc(clamp(30px,6vw,120px)+2rem)] sm:pt-[calc(clamp(30px,6vw,120px)+4rem)] sm:pb-[calc(clamp(30px,6vw,120px)+4rem)] py-16 sm:py-24"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div
          className="absolute inset-x-0 bg-[#0CAADD]"
          style={{
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)",
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)"
          }}
        />
        {/* Top Wave */}
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center text-center mb-8 sm:mb-16 mt-4 lg:mt-8">
        <h3 className="text-white mb-2 section-subheading">
          Clubs, Events & Student Life
        </h3>
        <h2 className="text-white mb-4 section-heading">
          A campus alive with possibility.
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto section-body">
          Student-led clubs across academic, arts, sports, social impact, and entrepreneurship.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full mb-6 lg:mb-8">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-12 snap-x snap-mandatory hide-scrollbar pb-2 lg:pb-8"
          style={{ cursor: 'grab' }}
        >
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] lg:w-[550px] snap-start rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/20 aspect-[16/9] shadow-lg border border-white/10"
            >
              {/* Placeholder for Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={club.image}
                  alt={club.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content Container (Bottom Left) */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="font-poppins font-semibold text-[28px] sm:text-[32px] text-white leading-tight mb-3">
                  {club.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {club.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white font-[family-name:var(--font-poppins)] text-[12px] sm:text-[13px] font-medium rounded-full transition-colors tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-4 relative z-30">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-[#E73649] hover:text-white hover:border-[#E73649] shadow-sm transition-all duration-300 ease-in-out cursor-pointer focus:outline-none"
          aria-label="Scroll left"
        >
          <svg className="pointer-events-none w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-[#E73649] hover:text-white hover:border-[#E73649] shadow-sm transition-all duration-300 ease-in-out cursor-pointer focus:outline-none"
          aria-label="Scroll right"
        >
          <svg className="pointer-events-none w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
