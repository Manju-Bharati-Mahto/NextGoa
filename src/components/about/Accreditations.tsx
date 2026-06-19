export function Accreditations() {
  return (
    <section id="accreditations-recognitions" className="bg-brand-white px-6 scroll-mt-24 md:scroll-mt-32 py-10 sm:py-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-ink section-subheading">
          Legacy of
        </h2>
        <h3 className="mt-2 text-brand section-heading">
          Parul University, Vadodara
        </h3>

        {/* Top faded divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        {/* Rankings SVG */}
        <div className="py-10 sm:py-12 flex justify-center items-center overflow-hidden">
          <img
            src="/RANK.svg"
            alt="Accreditations and Rankings"
            className="w-full max-w-6xl h-auto px-4 scale-[1.2] sm:scale-100 origin-center"
          />
        </div>

        {/* Bottom faded divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>
    </section>
  );
}
