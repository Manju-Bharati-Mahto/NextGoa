import Image from "next/image";
import { Animated2200Icon } from "@/components/placements/Animated2200Icon";

export function PlacementsNumbers() {
  return (
    <section className="relative w-full z-10 overflow-hidden bg-transparent text-white -mt-6 sm:-mt-12 py-16 sm:py-24"
      style={{
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
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
      
      {/* Decorative Assets */}
      <div className="absolute left-0 top-[20%] z-0 w-32 md:w-64 h-64 md:h-[400px] pointer-events-none opacity-40">
        <Image
          src="/abroad/Global Lighthouse.svg"
          alt="Lighthouse Decoration"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute right-0 bottom-[10%] z-0 w-40 md:w-72 h-40 md:h-72 pointer-events-none">
        <Image
          src="/abroad/Global Sunrise.png"
          alt="Sunrise Decoration"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center justify-center">
        {/* Heading Section */}
        <p className="text-white mb-2 text-center section-subheading">
          Numbers That Matter
        </p>
        <h2 className="text-center text-white section-heading">
          The ecosystem in figures.
        </h2>
        <p className="text-center text-white/90 section-body">
          Three decades of placement results, distilled.
        </p>

        {/* ── Headline package card from landing page ── */}
        <div className="relative mt-6 sm:mt-6 w-full sm:pt-16" style={{ overflow: "visible" }}>
          {/* ── MOBILE CARD (vertical, shown below sm) ── */}
          <div className="sm:hidden relative mx-auto w-full rounded-[24px] bg-[#E73649] text-white shadow-lg overflow-hidden flex flex-col" style={{ minHeight: "330px" }}>
            {/* Text content */}
            <div className="p-6 pb-0 flex flex-col justify-start relative z-20">
              <div>
                <span className="whitespace-nowrap inline-block rounded-full bg-white px-4 py-1.5 font-[family-name:var(--font-poppins)] font-normal text-[14px] text-[#1F1F1F]">
                  Highest Package - Batch of 2025 - 26
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1 text-white">
                <span className="font-[family-name:var(--font-gotham)] font-bold leading-none" style={{ fontSize: "64px" }}>₹60</span>
                <span className="mb-2 font-[family-name:var(--font-gotham)] font-bold text-2xl">LPA<span className="text-[#FEDB2F]">*</span></span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p className="font-[family-name:var(--font-poppins)] font-normal text-[15px] leading-relaxed text-white/90">
                Awarded to two B.Tech. CSE students (Batch of 2027) in a single recruitment
                cycle. It&apos;s the benchmark the PU ecosystem is producing today.
              </p>
            </div>
            
            {/* Image at bottom */}
            <div className="relative mt-2 z-10 w-full flex-grow flex items-end justify-center pointer-events-none">
              <Image
                src="/Image-opt.webp"
                alt="MS Dhoni with Parul University students"
                className="w-[110%] max-w-none ml-[5%] block"
                style={{ marginBottom: "-56px" }}
              width={1200} height={1200} />
            </div>
          </div>

          {/* ── DESKTOP CARD (horizontal, shown at sm+) ── */}
          <div
            className="hidden sm:block overflow-hidden rounded-[24px] bg-[#E73649] text-white shadow-lg text-left"
            style={{ minHeight: "340px", position: "relative" }}
          >
            {/* Left: text content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center max-w-[45%]" style={{ minHeight: "340px" }}>
              <div>
                <span className="whitespace-nowrap inline-block rounded-full bg-white px-5 py-2 font-[family-name:var(--font-poppins)] font-normal text-[16px] text-[#1F1F1F]">
                  Highest Package - Batch of 2025 - 26
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2 text-white">
                <span className="font-[family-name:var(--font-gotham)] font-bold leading-none" style={{ fontSize: "110px" }}>₹60</span>
                <span className="mb-3 font-[family-name:var(--font-gotham)] font-bold text-5xl">LPA<span className="text-[#FEDB2F]">*</span></span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p className="font-[family-name:var(--font-poppins)] font-normal text-[15px] leading-[1.65] text-white/95">
                Awarded to two B.Tech. CSE students (Batch of 2027) in a single recruitment
                cycle. It&apos;s the benchmark the PU ecosystem is producing today.
              </p>
            </div>
          </div>

          {/* Desktop photo - wrapped to clip bottom-right corner but allow pop-out at top */}
          <div
            className="hidden sm:block absolute right-0 bottom-0 z-10 w-[62%] pointer-events-none rounded-br-[24px]"
            style={{
              top: "-200px", // Extends high up so the head is never clipped
              overflow: "hidden",
            }}
          >
            <Image
              src="/Image-opt.webp"
              alt="MS Dhoni with Parul University students"
              style={{
                position: "absolute",
                bottom: "-56px", // Increased from -38px to account for larger image scale
                right: 0,
                width: "100%",
                height: "auto",
              }}
            width={1200} height={1200} />
          </div>
        </div>

        {/* 2200++ Recruiting companies line */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <Animated2200Icon className="h-20 sm:h-24 md:h-28 w-auto" />
          </div>

          <div className="hidden md:block h-16 sm:h-32 w-[1px] bg-white/40" />

          <div className="text-center md:text-left">
            <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-white tracking-tight whitespace-nowrap">
              Recruiting companies<span className="text-white">*</span>
            </h3>
            <p className="mt-1 md:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[14px] sm:text-[18px] md:text-[24px] text-white/90">
              Across the Parul University ecosystem, every year.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
