const milestones = [
  {
    year: "2009",
    label: "FOUNDATION",
    description:
      "Parul University, Vadodara established under the Gujarat Private Universities Act.",
  },
  {
    year: "2018",
    label: "ACCREDITATION",
    description:
      "Parul University, Vadodara conferred NAAC A++ in its first cycle.",
  },
  {
    year: "2020",
    label: "LEGISLATION",
    description:
      "Goa Private Universities Act passed, laying the legal foundation for PU Goa.",
  },
  {
    year: "2023",
    label: "PLACEMENTS",
    description:
      "Parul ecosystem crosses 2,200+ recruiting companies and 60 LPA highest package.",
  },
  {
    year: "2024",
    label: "GLOBAL REACH",
    description:
      "Parul University, Vadodara reaches 120+ global partner universities across 7 countries.",
  },
  {
    year: "2025",
    label: "APPROVAL",
    description:
      "PU Goa becomes the first State Private University approved under the Goa Act.",
  },
  {
    year: "2025",
    label: "INAUGURATION",
    description:
      "Inauguration graced by Hon'ble Chief Minister Dr. Pramod Sawant.",
  },
  {
    year: "2025",
    label: "OATH CEREMONY",
    description:
      "Oath-taking ceremony graced by Health Minister Shri Vishwajit Rane.",
  },
];

export function JourneyTimeline() {
  return (
    <section className="overflow-hidden bg-brand-white px-0 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-sans text-[24px] font-medium leading-tight text-ink sm:text-brand-subheading">
          Journey
        </p>
        <h2 className="mx-auto mt-5 max-w-5xl font-poppins text-[38px] font-bold leading-tight text-brand sm:text-[48px] lg:text-brand-heading">
          From Vadodara To Goa,
          <br className="hidden sm:block" />
          Milestones That Thrive Our Story!
        </h2>
        <p className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-poppins)] text-[16px] font-normal leading-relaxed text-ink sm:text-brand-body">
          20+ Years of building India&apos;s most recognised private university
          ecosystem and bringing it to Goa&apos;s coast.
        </p>
      </div>

      <div className="relative mt-16 w-full sm:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-white to-transparent sm:w-32" />

        <div className="scrollbar-hide snap-x snap-mandatory overflow-x-auto pb-6">
          <div className="relative flex w-max min-w-full items-start px-6">
            <span className="absolute left-6 right-6 top-[236px] h-[5px] -translate-y-1/2 bg-brand-blue-guideline sm:top-[250px]" />
            {milestones.map((item, index) => (
              <article
                key={`${item.year}-${item.label}-${index}`}
                className="relative flex w-[295px] shrink-0 snap-center flex-col items-center px-5 text-center sm:w-[340px] lg:w-[400px]"
              >
                <div className="flex h-[116px] items-end sm:h-[128px]">
                  <p className="font-[family-name:var(--font-poppins)] text-[16px] font-semibold leading-snug text-ink sm:text-[18px]">
                    {item.description}
                  </p>
                </div>

                <span className="mt-6 rounded-full border border-brand-blue-guideline bg-brand-blue-guideline/10 px-6 py-1.5 font-[family-name:var(--font-poppins)] text-[14px] font-medium leading-none text-brand-blue-guideline sm:text-[16px]">
                  {item.label}
                </span>

                <div className="relative mt-10 flex h-12 w-full items-center justify-center">
                  <span className="relative z-[1] h-12 w-12 rounded-full bg-brand" />
                </div>

                <p className="mt-3 font-[family-name:var(--font-poppins)] text-[38px] font-bold leading-tight text-ink sm:text-[44px]">
                  {item.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
