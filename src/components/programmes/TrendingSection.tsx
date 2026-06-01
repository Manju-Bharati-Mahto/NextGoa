import React from "react";

export default function TrendingSection() {
  return (
    <section 
      className="relative z-20 w-full min-h-[600px] flex items-center bg-transparent -mt-12 sm:-mt-24 lg:-mt-5 pt-32 pb-24"
      style={{ backgroundImage: "url('/programmes/trending-section.png')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 lg:gap-0 items-center">
          {/* Left Column */}
          <div className="flex flex-col text-white lg:pr-4 relative z-10">
            <h2 className="text-xl sm:text-[22px] font-[family-name:var(--font-poppins)] tracking-wide">Trending now</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-[#FFD523] mt-2 leading-[1.1] font-[family-name:var(--font-poppins)]">
              Limited seats for<br/>2026-27
            </h3>
            
            {/* Card Section */}
            <div className="mt-0 sm:mt-2 w-full max-w-[800px]">
              <div className="flex justify-end mb-3 pr-2">
                <a href="#" className="text-sm font-medium font-[family-name:var(--font-poppins)] text-white/90 hover:text-white flex items-center gap-1 transition-colors">
                  View all <span>&rarr;</span>
                </a>
              </div>
              
              <div className="bg-white rounded-[24px] p-6 sm:px-10 sm:py-8 text-ink shadow-2xl relative overflow-hidden">
                {/* Subtle gear watermark (optional) */}
                <div className="absolute right-[7%] top-[10%] pointer-events-none">
                  <img src="/programmes/industry-symbol.png" alt="Industry Symbol" width={195} height={195} className="w-[195px] h-[195px] object-contain" />
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 relative z-10">
                  <span className="bg-sunshine text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest text-ink">12 Seats Left</span>
                  <span className="bg-sunshine text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest text-ink">Most Applied</span>
                </div>
                
                <h4 className="text-3xl sm:text-[38px] font-extrabold  tracking-tight mb-1 font-[family-name:var(--font-poppins)] relative z-10">B.Tech CSE</h4>
                <p className="text-lg sm:text-[20px] font-medium mb-6 text-ink/80 relative z-10">AI & ML</p>
                
                <button className="bg-[#0EB1E1] hover:bg-[#0BA1CD] transition-colors text-white text-[14px] font-medium px-6 py-2.5 rounded-full flex items-center gap-2 w-max relative z-10">
                  Apply Now <span>&rarr;</span>
                </button>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mt-8 pl-4">
                <div className="h-2 w-8 bg-[#FFD523] rounded-full"></div>
                <div className="h-2 w-2 bg-white/40 rounded-full"></div>
                <div className="h-2 w-2 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex justify-center lg:justify-end relative h-full mt-16 lg:mt-0 lg:-ml-16 z-0">
              <img 
                src="/programmes/trending-right.png" 
                alt="MS Dhoni trending programmes"
                className="w-full max-w-[500px] object-contain drop-shadow-2xl"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
