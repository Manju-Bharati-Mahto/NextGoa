import React from "react";

export function Legacy() {
  return (
    <section className="bg-brand-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          
          {/* Left Text */}
          <div className="relative">
            {/* Top-Left Decorative SVG */}
            <img 
              src="/deco-tl.svg" 
              alt="" 
              aria-hidden="true" 
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 -translate-x-[10.2%] -translate-y-[13.1%] w-[250px] sm:w-[400px] lg:w-[500px] max-w-none z-0 pointer-events-none" 
            />

            <div className="relative z-10">
              <h2 className="font-sans font-medium text-[32px] sm:text-[36px] leading-tight text-brand mb-6">
                Where a 3-Decade-Old <br />
                Legacy Meets <br />
                India&apos;s Coastal Paradise!
              </h2>
              
              <div className="font-[family-name:var(--font-poppins)] text-[16px] sm:text-[18px] text-ink leading-relaxed">
                <p>
                  Though Parul University Goa opened its doors in 2025 as the State&apos;s First Private University—inaugurated by Honourable Chief Minister Dr. Pramod Sawant—its legacy began over three decades ago in Vadodara, Gujarat. Built on the singular belief that every student deserves the best chance at life, Parul University has shaped the futures of thousands through government-funded research, national startups, and top-tier placements at global giants like Microsoft, Google, Meta, and Goldman Sachs. Now, India&apos;s Most Award-Winning University brings this world-class educational ecosystem to the coastal paradise of Goa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="px-4 sm:px-0 mt-8 lg:mt-0">
            <div className="relative inline-block w-full">
              {/* Bottom-Right Decorative SVG */}
              <img 
                src="/deco-br.svg" 
                alt="" 
                aria-hidden="true" 
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 translate-x-[10.4%] translate-y-[13.8%] w-[250px] sm:w-[400px] lg:w-[500px] max-w-none z-0 pointer-events-none" 
              />
              
              <img 
                src="/rectangle-319.webp" 
                alt="PU Goa Academic Block" 
                className="relative w-full h-auto rounded-[24px] object-cover z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
