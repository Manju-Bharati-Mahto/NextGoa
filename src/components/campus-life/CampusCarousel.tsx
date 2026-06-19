"use client";

import { useRef } from "react";

const carouselItems = [
  { id: 1, title: "Academic Block", image: "/campus-images/Academic Block.png" },
  { id: 2, title: "Student Hostel", image: "/campus-images/Hostel.jpeg" },
  { id: 3, title: "Cafe", image: "/campus-images/Cafe.png" },
  { id: 4, title: "Open Spaces", image: "/campus-images/Open Spaces.jpg" },
];

export function CampusCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // 600px is the card width on sm breakpoint
      const scrollAmount = window.innerWidth > 640 ? 624 : window.innerWidth * 0.85;
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FEF3BA] to-[#F8F8F8] py-16 sm:py-24">
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

      <div
        className="relative z-10 mx-auto w-full flex flex-col items-center pt-[calc(clamp(30px,6vw,120px)+2rem)] pb-[calc(clamp(30px,6vw,120px)+2rem)] sm:pt-[calc(clamp(30px,6vw,120px)+4rem)] sm:pb-[calc(clamp(30px,6vw,120px)+4rem)]"
      >
        {/* Header content */}
        <div className="text-center px-6 max-w-3xl mb-12">
          <h3 className="text-white mb-2 section-subheading">The Campus</h3>
          <h2 className="text-white mb-6 section-heading">
            A Campus Built for Inspiration
          </h2>
          <p className="text-white mx-auto max-w-2xl section-body">
            The PU Goa campus is located near ONGC Betul, Tal. Quepem, Dist. Kushavati, South Goa.<br className="hidden sm:block" />
            Modern, purposefully designed, and built to stimulate ideas and collaboration.
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 lg:px-[10%] pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
        >
          {/* Hide webkit scrollbar using a style tag since Tailwind requires plugin for it */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[85vw] sm:w-[600px] h-[250px] xs:h-[300px] sm:h-[450px] lg:h-[500px] rounded-[24px] overflow-hidden snap-center shrink-0 shadow-xl bg-white/20 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-3 z-10">
                <div className="w-[3px] h-[20px] sm:h-[24px] bg-[#FEDB2F]"></div>
                <h4 className="font-[family-name:var(--font-poppins)] text-white text-[18px] sm:text-[22px] font-semibold tracking-wide leading-none mt-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-4 relative z-30">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand shadow-sm transition-all duration-300 ease-in-out cursor-pointer focus:outline-none"
            aria-label="Scroll left"
          >
            <svg className="pointer-events-none w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-black/10 bg-white text-ink flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand shadow-sm transition-all duration-300 ease-in-out cursor-pointer focus:outline-none"
            aria-label="Scroll right"
          >
            <svg className="pointer-events-none w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
