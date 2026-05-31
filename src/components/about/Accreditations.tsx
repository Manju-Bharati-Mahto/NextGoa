export function Accreditations() {
  return (
    <section className="bg-brand-white py-20 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-[family-name:var(--font-poppins)] text-[24px] sm:text-[32px] font-semibold text-ink">
          Accreditations and Rankings of
        </h2>
        <h3 className="mt-2 font-sans font-bold text-[36px] sm:text-[48px] leading-tight tracking-tight text-brand">
          Parul University, Vadodara!
        </h3>

        {/* Top faded divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        {/* Rankings SVG */}
        <div className="py-16 flex justify-center items-center">
          <img
            src="/RANK.svg"
            alt="Accreditations and Rankings"
            className="w-full max-w-6xl h-auto px-4"
          />
        </div>

        {/* Bottom faded divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>
    </section>
  );
}
