
const carouselItems = [
  { id: 1, title: "Academic Block" },
  { id: 2, title: "Student Hostel" },
  { id: 3, title: "Central Library" },
  { id: 4, title: "Sports Complex" },
];

export function CampusCarousel() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FEF3BA] to-[#F8F8F8]">
      {/* Background Blue Wavy Image from Figma */}
      <img
        src="/69.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full flex flex-col items-center py-32 sm:py-48">
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
                <h4 className="font-[family-name:var(--font-poppins)] text-white text-[18px] sm:text-[22px] font-semibold tracking-wide leading-none mt-0.5">
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
