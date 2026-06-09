import { Eyebrow } from "./Decor";
import { TwoThousandPlusIcon } from "./TwoThousandPlusIcon";

/**
 * "Numbers that matter" - the placement ecosystem in figures. The headline
 * package card + the stat trio. Figures are plain text (cited by AI engines);
 * keep the asterisked "ecosystem" caveat honest.
 */
const stats = [
  {
    title: (
      <>
        3x ASSOCHAM
        <br />
        Award
      </>
    ),
    titleClass: "text-[36px] sm:text-[32px] lg:text-[36px]",
    label: "Best University in Placements for 3 Consecutive Years",
  },
  {
    title: "58Cr+",
    titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
    label: "Govt. Research Grant",
  },
  {
    title: "120+",
    titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
    label: "Partnerships with Foreign Universities",
  },
];

export function Placements({ variant = "landing" }: { variant?: "landing" | "about" }) {
  const isAbout = variant === "about";

  const aboutExtraStats = [
    {
      title: "254",
      titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
      label: "Startups incubated",
    },
    {
      title: "800+",
      titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
      label: "Students in global programmes",
    },
    {
      title: "315",
      titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
      label: "Funded research projects",
    },
  ];

  return (
    <section id="placements" className={isAbout ? "bg-gradient-to-b from-[#D6F0FA] via-[#F8F8F8]/50 to-brand-white -mt-10 pt-10 relative z-0" : "bg-brand-white"}>
      <div className="mx-auto max-w-6xl px-4 pt-15 pb-20 sm:py-20">
        <div className="flex justify-center mb-6">
          <img src="/Test.svg" alt="" aria-hidden="true" className="h-[97px] w-auto" />
        </div>
        <Eyebrow className="mt-3 text-ink">
          {isAbout ? "Legacy in Numbers" : "Numbers That Matter"}
        </Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          {isAbout ? "Excellence That Needs No Introduction!" : "The ecosystem in figures."}
        </h2>
        <p className="mt-3 text-center section-body text-ink">
          {isAbout ? "Figures from Parul University, Gujarat." : "Three decades of placement results, distilled."}
        </p>

        {/* ── Headline package card ────────────────────────────────────────
             Mobile  : vertical stack  - text top, photo bottom (inside card)
             Desktop : horizontal band - text left, photo overflows above right
        ──────────────────────────────────────────────────────────────────── */}

        {/* Outer wrapper: on desktop only we add pt-16 for the photo overflow */}
        <div className="relative mt-8 sm:pt-16" style={{ overflow: "visible" }}>

          {/* ── MOBILE CARD (vertical, shown below sm) ── */}
          <div className="sm:hidden relative mx-auto w-full rounded-[24px] bg-[#E73649] text-white shadow-lg overflow-hidden flex flex-col" style={{ minHeight: "330px" }}>
            {/* Text content */}
            <div className="p-6 pb-0 flex flex-col justify-start relative z-20">
              <div>
                <span className="inline-block rounded-full bg-white px-4 py-2 mb-1 font-[family-name:var(--font-poppins)] font-normal text-[14px] text-[#1F1F1F]">
                  Highest package · batch of 2027
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1 text-white">
                <span className="font-[family-name:var(--font-gotham)] font-bold leading-none" style={{ fontSize: "64px" }}>₹60</span>
                <span className="mb-2 font-[family-name:var(--font-gotham)] font-bold text-2xl">LPA<span className="text-[#FEDB2F]">*</span></span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p className="section-body text-white/90">
                Awarded to two B.Tech. CSE students (Batch of 2027) in a single recruitment
                cycle. It&apos;s the benchmark the PU ecosystem is producing today.
              </p>
            </div>

            {/* Image at bottom */}
            <div className="relative mt-2 z-10 w-full flex-grow flex items-end justify-center pointer-events-none">
              <img
                src="/Image-opt.webp"
                alt="MS Dhoni with Parul University students"
                className="w-[110%] max-w-none ml-[5%] block"
                style={{ marginBottom: "-30px" }}
              />
            </div>
          </div>

          {/* ── DESKTOP CARD (horizontal, shown at sm+) ── */}
          <div
            className="hidden sm:block overflow-hidden rounded-[24px] bg-brand text-white shadow-lg text-left"
            style={{ minHeight: "260px", position: "relative" }}
          >
            {/* Left: text content */}
            <div className="p-10 flex flex-col justify-center max-w-[40%]" style={{ minHeight: "260px" }}>
              <div>
                <span className="inline-block rounded-full bg-white px-5 py-2 font-[family-name:var(--font-poppins)] font-normal text-[20px] text-[#1F1F1F]">
                  Highest package · batch of 2027
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2 text-white">
                <span className="font-[family-name:var(--font-gotham)] font-bold leading-none" style={{ fontSize: "110px" }}>₹60</span>
                <span className="mb-3 font-[family-name:var(--font-gotham)] font-bold text-5xl">LPA<span className="text-[#FEDB2F]">*</span></span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p className="section-body text-white/90">
                Awarded to two B.Tech. CSE students (Batch of 2027) in a single recruitment
                cycle. It&apos;s the benchmark the PU ecosystem is producing today.
              </p>
            </div>
          </div>

          {/* Desktop photo - wrapped to clip bottom-right corner but allow pop-out at top */}
          <div
            className="hidden sm:block absolute right-0 bottom-0 z-10 w-[62%] pointer-events-none rounded-br-[24px]"
            style={{
              top: "-200px", // Extends high up so the head is never clipped
              overflow: "hidden",
            }}
          >
            <img
              src="/Image-opt.webp"
              alt="MS Dhoni with Parul University students"
              style={{
                position: "absolute",
                bottom: "-38px", // Pulls the transparent padding down
                right: 0,
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Recruiting companies line */}
        <div className="mt-8 flex items-center justify-center gap-3.5 sm:gap-8">
          {/* Left: 2200 SVG image */}
          <div className="flex-shrink-0">
            <TwoThousandPlusIcon className="h-14 sm:h-[90px] w-auto" />
          </div>

          {/* Middle: Vertical divider */}
          <div className="h-14 sm:h-[90px] w-px bg-zinc-300" />

          {/* Right: Text block */}
          <div className="text-left">
            <h3 className="font-poppins font-semibold text-[18px] sm:text-[40px] leading-tight text-[#1F1F1F]">
              Recruiting companies*
            </h3>
            <p className="mt-0.5 sm:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[11px] sm:text-[18px] text-zinc-500">
              Across the Parul University ecosystem, every year.
            </p>
          </div>
        </div>

        {/* Stat trio - Row 1 */}
        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`${idx === 0 ? "col-span-2 sm:col-span-1" : ""} rounded-[16px] sm:rounded-[20px] border border-zinc-300 bg-white text-center sm:text-left shadow-sm ${idx === 0 ? "px-7 py-6" : "px-4 py-5 sm:px-7 sm:py-6"}`}
            >
              <dt className={`font-sans font-bold leading-[1.15] text-[#0CAADD] tracking-tight ${("titleClass" in s && s.titleClass) || "text-[22px] sm:text-[28px] lg:text-[30px]"}`}>
                {s.title}
              </dt>
              <dd className={`mt-2 sm:mt-3 font-[family-name:var(--font-poppins)] font-normal text-ink leading-[1.45] text-[14px] sm:text-[15px]`}>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Stat trio - Row 2 (About page only) */}
        {isAbout && (
          <dl className="mt-5 grid grid-cols-2 sm:flex sm:flex-row justify-center gap-3 sm:gap-5">
            {aboutExtraStats.map((s, idx) => (
              <div
                key={idx}
                className={`${idx === 2 ? "col-span-2 sm:col-span-1" : ""} w-full sm:w-[30%] sm:max-w-[280px] rounded-[20px] border border-zinc-300 bg-white px-4 py-5 sm:px-7 sm:py-6 text-center sm:text-left shadow-sm mx-auto sm:mx-0`}
              >
                <dt className={`font-sans font-bold leading-[1.15] text-[#0CAADD] tracking-tight ${s.titleClass}`}>
                  {s.title}
                </dt>
                <dd className={`mt-2 sm:mt-3 font-[family-name:var(--font-poppins)] font-normal text-[14px] sm:text-[15px] text-ink leading-[1.45]`}>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
