import { WaveBandBg } from "@/components/landing/WaveBand";

const carouselItems = [
  { id: 1, title: "Academic Block" },
  { id: 2, title: "Student Hostel" },
  { id: 3, title: "Central Library" },
  { id: 4, title: "Sports Complex" },
];

export function CampusCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8]">
      {/* Background Blue Wavy SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
        <WaveBandBg band="#0CAADD" accent="#0094C4" />
      </div>

      <div className="relative z-10 mx-auto w-full flex flex-col items-center py-32 sm:py-48">
        {/* Header content */}
        <div className="text-center px-6 max-w-3xl mb-12">
          <h3 className="font-sans font-bold text-[20px] sm:text-[24px] text-white mb-2">The Campus</h3>
          <h2 className="font-sans font-black text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-white mb-6">
            A Campus Built for Inspiration
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-white text-[14px] sm:text-[16px] leading-relaxed mx-auto max-w-2xl">
            The PU Goa campus is located near ONGC Betul, Tal. Quepem, Dist. Kushavati, South Goa.<br className="hidden sm:block" />
            Modern, purposefully designed, and built to stimulate ideas and collaboration.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 lg:px-[10%] pb-8" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
              className="relative w-[85vw] sm:w-[600px] h-[400px] sm:h-[450px] lg:h-[500px] rounded-[24px] overflow-hidden snap-center shrink-0 shadow-xl bg-white/20"
            >
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-3 z-10">
                <div className="w-[3px] h-[20px] sm:h-[24px] bg-[#FEDB2F]"></div>
                <h4 className="font-[family-name:var(--font-poppins)] text-white text-[18px] sm:text-[22px] font-medium tracking-wide leading-none mt-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
