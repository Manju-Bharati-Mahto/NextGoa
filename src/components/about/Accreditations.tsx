export function Accreditations() {
  return (
    <section className="bg-brand-white py-5 sm:py-20 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-ink section-subheading">
          Accreditations and rankings of
        </h2>
        <h3 className="mt-2 text-brand section-heading">
          Parul University, Vadodara!
        </h3>

        {/* Top faded divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        {/* Rankings SVG */}
        <div className="py-10 sm:py-16 flex justify-center items-center overflow-hidden">
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
