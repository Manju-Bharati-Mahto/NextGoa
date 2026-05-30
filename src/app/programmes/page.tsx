import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | Parul University Goa",
  description: "Explore the academic programmes offered at Parul University Goa.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <main className="flex-1">
      {/* Hero Banner Section */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-start pt-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/programmes/Programme-banner.png')" }}
      >
        <div className="relative z-10 w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-8 lg:pt-12 text-center">
          <span className="mb-6 inline-block rounded-full bg-sunshine px-4 py-1.5 text-xs text-ink shadow-sm">
            All Programmes
          </span>
          <h1 className="font-[family-name:var(--font-poppins)] mx-auto w-full max-w-none text-4xl font-bold leading-[1.3] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
            Learning designed for the future.<br />
            <span className="text-brand">Delivered in Goa.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[13px] text-ink sm:text-[13px]">
            Specialisations spanning AI, Cyber Security, Data Science, Analytics, Pharmacy, Healthcare,
            Hospitality and Research — all NEP 2020 aligned, all built for the real world.
          </p>
        </div>

        {/* White fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Trending Section */}
      <section 
        className="relative z-20 w-full min-h-[600px] flex items-center bg-transparent -mt-12 sm:-mt-24 lg:-mt-5 pt-32 pb-24"
        style={{ backgroundImage: "url('/programmes/trending-section.png')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 items-center">
            {/* Left Column */}
            <div className="flex flex-col text-white lg:pr-4">
              <h2 className="text-xl sm:text-[22px] font-[family-name:var(--font-poppins)] tracking-wide">Trending now</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-[#FFD523] mt-2 leading-[1.1] font-[family-name:var(--font-poppins)]">
                Limited seats for<br/>2026-27
              </h3>
              
              {/* Card Section */}
              <div className="mt-8 sm:mt-12 w-full max-w-[650px]">
                <div className="flex justify-end mb-3 pr-2">
                  <a href="#" className="text-sm font-medium text-white/90 hover:text-white hover:underline flex items-center gap-1 transition-colors">
                    View all <span>&rarr;</span>
                  </a>
                </div>
                
                <div className="bg-white rounded-[24px] p-6 sm:px-10 sm:py-8 text-ink shadow-2xl relative overflow-hidden">
                  {/* Subtle gear watermark (optional) */}
                  <div className="absolute right-[-10%] top-[10%] opacity-5 pointer-events-none">
                    <svg width="220" height="220" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 relative z-10">
                    <span className="bg-sunshine text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest text-ink">12 Seats Left</span>
                    <span className="bg-sunshine text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest text-ink">Most Applied</span>
                  </div>
                  
                  <h4 className="text-3xl sm:text-[38px] font-bold tracking-tight mb-1 font-[family-name:var(--font-poppins)] relative z-10">B.Tech CSE</h4>
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
            <div className="flex justify-center lg:justify-end relative h-full mt-16 lg:mt-0">
               <img 
                 src="/programmes/trending-right.png" 
                 alt="MS Dhoni trending programmes"
                 className="w-full max-w-[500px] object-contain drop-shadow-2xl"
               />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
