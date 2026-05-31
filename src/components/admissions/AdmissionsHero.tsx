import Image from "next/image";

export function AdmissionsHero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col pt-32 pb-40 overflow-hidden bg-brand-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/admissions-hero.png"
          alt="Parul University Goa Campus"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Bottom fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center mt-8 sm:mt-16">
        {/* Yellow Badge */}
        <div className="inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-1.5 mb-8">
          <span className="font-sans text-sm font-semibold tracking-wide text-ink">
            Admissions Open for 2026-27 Academic Year
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-sans text-[42px] font-bold leading-[1.1] tracking-tight text-brand sm:text-[64px] lg:text-[72px] mb-8 drop-shadow-sm">
          From Goa To Global Degree!
        </h1>

        {/* Description */}
        <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-[20px] leading-[1.6] text-ink/80 max-w-[800px] mx-auto font-medium drop-shadow-sm">
          Stay in touch with your <strong>GOA</strong>ls as admissions in Parul University Goa are open for the 2026-27 academic year. Whether you are a student, fresh out of Class 12, a diploma holder seeking lateral entry, a graduate ready for postgraduate studies, or a working professional, there is a pathway here for you!
        </p>
      </div>
    </section>
  );
}
