import React from "react";

const cards = [
  {
    title: "Location",
    line1: "Tal. Quepem, South Goa",
    line2: "Near ONGC Betul",
    bgImage: "/campus-life/cards/Group 32666.svg"
  },
  {
    title: "Transport",
    line1: "~45 Min drive",
    line2: "Goa Dabolim Int'l Airport",
    bgImage: "/campus-life/cards/Group 32668.svg"
  },
  {
    title: "Hostels",
    line1: "Boys + Girls blocks",
    line2: "24x7 biometric security",
    bgImage: "/campus-life/cards/Group 32669.svg"
  },
  {
    title: "Food",
    line1: "Multi-cuisine",
    line2: "",
    bgImage: "/campus-life/cards/Group 32670.svg"
  },
  {
    title: "Connectivity",
    line1: "Statewide transit",
    line2: "network",
    bgImage: "/campus-life/cards/Group 32671.svg"
  }
];

export function CampusFacilities() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#FEF3BA] lg: py-16 sm:py-24">
      {/* Decorative Trees */}
      <img src="/campus-life/left-tree.svg" alt="" className="absolute left-0 top-0 sm:top-[10%] opacity-30 sm:opacity-100 w-[140px] md:w-[200px] lg:w-[280px] pointer-events-none z-10" />
      <img src="/campus-life/right-tree.svg" alt="" className="absolute right-0 top-0 sm:top-[10%] opacity-30 sm:opacity-100 w-[140px] md:w-[200px] lg:w-[280px] pointer-events-none z-10" />

      <div className="mx-auto max-w-6xl sm:px-6 px-4 relative z-20 flex flex-col items-center">
        {/* Header content */}
        <div className="flex flex-col items-center text-center max-w-4xl">
          <img src="/campus-life/sa.svg" alt="Campus Life Icon" className="w-[80px] sm:w-[100px] h-auto mb-4" />
          <h3 className="text-[#1F1F1F] mb-1 section-subheading">Campus Life</h3>
          <h2 className="leading-[1.1] text-[#E53B4A] section-heading">
            A campus that feels like a<br className="hidden sm:block" /> destination.
          </h2>
          <p className="text-[#1F1F1F]/80 max-w-3xl mt-6 mb-12 section-body">
            Modern classrooms. Fully equipped labs. A central auditorium. Comfortable residences.
            Smart digital libraries. An on-campus bank facility, salon, and supermarket. A cafeteria
            alongside a swimming pool. And beyond the gate, a Goan beach view awaits.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 w-full max-w-[1200px]">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="relative overflow-hidden rounded-[12px] sm:rounded-[16px] p-3 xs:p-4 sm:p-8 w-[calc(50%-6px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[120px] sm:min-h-[220px] flex flex-col justify-center shadow-lg bg-[#E73649]"
            >
              {/* Background SVG */}
              <img src={card.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover object-right-bottom sm:object-center scale-[0.6] xs:scale-[0.7] sm:scale-100 origin-bottom-right sm:origin-center transition-transform z-0" />
              
              <h4 className="font-poppins font-semibold text-[18px] xs:text-[20px] sm:text-[36px] text-[#FEDB2F] relative z-20 leading-tight">
                {card.title}
              </h4>
              <hr className="border-t border-white/30 my-2 sm:my-3 w-1/2 relative z-20" />
              <div className="font-[family-name:var(--font-poppins)] text-white text-[11px] xs:text-[12px] sm:text-[18px] relative z-20 leading-snug">
                <p>{card.line1}</p>
                {card.line2 && <p>{card.line2}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
