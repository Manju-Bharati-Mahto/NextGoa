import Image from "next/image";
import { Animated2200Icon } from "@/components/placements/Animated2200Icon";

export function PlacementsNumbers() {
  return (
    <section className="relative z-10 overflow-hidden bg-transparent text-white -mt-6 sm:-mt-12">
      {/* Background Blue Wavy Image from Figma */}
      <img
        src="/69.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-40 flex flex-col items-center justify-center">
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
          <div className="sm:hidden relative mx-auto w-full rounded-[24px] bg-[#E73649] text-white shadow-lg overflow-hidden flex flex-col" style={{ minHeight: "450px" }}>
            {/* Text content */}
            <div className="p-6 pb-0 flex flex-col justify-start relative z-20">
              <div>
                <span className="inline-block rounded-full bg-white px-4 py-1.5 font-[family-name:var(--font-poppins)] font-normal text-[14px] text-[#1F1F1F]">
                  Highest package · batch of 2027
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
            <div className="relative mt-12 z-10 w-full flex-grow flex items-end justify-center pointer-events-none">
              <img
                src="/Image-opt.webp"
                alt="MS Dhoni with Parul University students"
                className="w-[110%] max-w-none ml-[5%] block"
                style={{ marginBottom: "-56px" }}
              />
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
                <span className="inline-block rounded-full bg-white px-5 py-2 font-[family-name:var(--font-poppins)] font-normal text-[16px] text-[#1F1F1F]">
                  Highest package · batch of 2027
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
            <img
              src="/Image-opt.webp"
              alt="MS Dhoni with Parul University students"
              style={{
                position: "absolute",
                bottom: "-56px", // Increased from -38px to account for larger image scale
                right: 0,
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* 2200++ Recruiting companies line */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 w-full max-w-5xl">
          <div className="flex-shrink-0">
            <Animated2200Icon className="h-12 sm:h-16 md:h-28 w-auto" />
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
