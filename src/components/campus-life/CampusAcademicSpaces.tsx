"use client";

import Image from "next/image";
import { useRef } from "react";

const spaces = [
  {
    title: "Advanced Laboratories",
    description: "Discipline-specific labs across Engineering, Pharmacy, Health Sciences and more.",
    image: "/labs/advance 1.png"
  },
  {
    title: "Digital Libraries",
    description: "Access to global academic resources and research databases.",
    image: "/labs/Digital Libraries.png"
  },
  {
    title: "Smart Classrooms",
    description: "Interactive learning environments equipped with hybrid and modern technology.",
    image: "/labs/Smart Classrooms.png"
  },
  {
    title: "Research Centers",
    description: "Dedicated spaces for innovation, incubation, and student-led projects.",
    image: "/labs/Research Centers.png"
  }
];

export function CampusAcademicSpaces() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Adjust scroll amount based on card widths at different breakpoints
      const scrollAmount = window.innerWidth > 1024 ? 624 : window.innerWidth > 640 ? 474 : window.innerWidth * 0.85;
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
    <section className="relative w-full bg-white sm: lg: overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16 flex flex-col items-center text-center">
        <h3 className="text-[#1F1F1F] mb-2 section-subheading">
          Academic Spaces
        </h3>
        <h2 className="leading-[1.1] text-[#E73649] mb-4 section-heading">
          Built for inspiration.
        </h2>
        <p className="max-w-2xl mx-auto text-[#1F1F1F]/80 section-body">
          Labs and classrooms designed with modern technology to prepare students for the future.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-12 snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ cursor: 'grab' }}
        >
          {spaces.map((space, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[550px] lg:w-[600px] snap-start rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F4F4F4] border border-[#E5E5E5] flex flex-col shadow-sm"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] bg-black/5">
                {/* Using a placeholder image or a div if image fails. We assume the path works or will be replaced. */}
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover object-[center_15%]"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 bg-[#F8F8F8]">
                <h4 className="font-poppins font-semibold text-[22px] sm:text-[26px] text-[#1F1F1F] mb-2 leading-tight">
                  {space.title}
                </h4>
                <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/80 text-[14px] sm:text-[16px] leading-relaxed">
                  {space.description}
                </p>
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
