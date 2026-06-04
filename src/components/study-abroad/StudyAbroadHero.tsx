import React from "react";

export default function StudyAbroadHero() {
  return (
    <section
      className="relative w-full min-h-[900px] lg:min-h-[1100px] font-[family-name:var(--font-poppins)] pt-32 lg:pt-48 pb-0 flex flex-col items-center bg-[length:250%] md:bg-[length:100%] bg-bottom bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%), url('/abroad/Global Learning Experience.png')",
        backgroundColor: "#ffffff"
      }}
    >
      {/* Text Content */}
      <div className="relative z-20 w-full max-w-[1000px] px-4 text-center flex flex-col items-center">
        <span className="inline-block rounded-full bg-[#FFD523] px-5 py-1 text-[13px] font-semibold text-ink shadow-sm mb-6">
          Global Pathways
        </span>

        <h1 className="text-[#E9324D] mb-6 section-heading">
          Study Abroad from PU Goa<br />
          Global Pathway Programmes
        </h1>

        <p className="max-w-[900px] text-ink/80 section-body">
          Start your degree in India and finish abroad through our Pathway Programs with partner universities across the USA, UK, Canada, Germany, France, Australia, and New Zealand
        </p>
      </div>

      {/* Optional bottom fade if needed to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
