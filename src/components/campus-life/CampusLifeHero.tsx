export function CampusLifeHero() {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center sm:gap-12 lg:gap-0 sm:py-24 pb-5 pt-20 lg:py-0 gap-0">

        {/* ── Left: Text ── */}
        <div className="flex-1 lg:pr-8 z-10 lg:-translate-x-[150px] pt-10">
          {/* Eyebrow pill */}
          <span className="inline-block bg-[#FEDB2F] text-[#1F1F1F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-6">
            Campus Life
          </span>

          <h1 className="font-poppins font-bold text-[42px] sm:text-[52px] lg:text-[64px] tracking-tight leading-[1.05] text-[#1F1F1F] mb-5">
            A campus that nurtures and helps students learn and grow.
          </h1>

          <p className="font-[family-name:var(--font-poppins)] text-[16px] sm:text-[18px] text-[#1F1F1F]/60 max-w-md">
            Where Learning and Living Become One With Nature.
          </p>
        </div>

        {/* ── Right: Collage ── */}
        <div className="flex-1 flex items-center justify-center relative w-full mt-8 lg:mt-0 min-h-[350px] sm:min-h-[520px] lg:min-h-[600px] lg:translate-x-[50px]">
          <img
            src="/campus-life/hero-collage.png"
            alt="Campus Life"
            className="w-full h-auto max-w-[100%] sm:max-w-[750px] lg:max-w-[950px] scale-100 lg:scale-125 origin-center object-contain relative z-20"
          />
        </div>
      </div>
    </section>
  );
}
