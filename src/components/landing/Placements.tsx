import { Eyebrow } from "./Decor";
import { TwoThousandPlusIcon } from "./TwoThousandPlusIcon";

/**
 * "Numbers that matter" — the placement ecosystem in figures. The headline
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
    label: "Best Placement University - consecutive years.",
  },
  {
    title: "₹58 Cr+",
    titleClass: "text-[34px] sm:text-[38px] lg:text-[42px]",
    label: "Best Placement University - consecutive years.",
  },
  {
    title: "120+",
    titleClass: "text-[34px] sm:text-[38px] lg:text-[42px]",
    label: "Best Placement University - consecutive years.",
  },
];

export function Placements() {
  return (
    <section id="placements" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex justify-center mb-6">
          <img src="/Test.svg" alt="" aria-hidden="true" className="h-[97px] w-auto" />
        </div>
        <Eyebrow className="mt-3 text-ink">Numbers that matter</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          The ecosystem in figures.
        </h2>
        <p className="mt-3 text-center font-[family-name:var(--font-poppins)] font-normal text-[16px] sm:text-[18px] leading-relaxed text-ink">
          Two decades of placement results, distilled.
        </p>

        {/* ── Headline package card ────────────────────────────────────────
             Mobile  : vertical stack  — text top, photo bottom (inside card)
             Desktop : horizontal band — text left, photo overflows above right
        ──────────────────────────────────────────────────────────────────── */}

        {/* Outer wrapper: on desktop only we add pt-16 for the photo overflow */}
        <div className="relative mt-8 sm:pt-16" style={{ overflow: "visible" }}>

          {/* ── MOBILE CARD (vertical, shown below sm) ── */}
          <div className="sm:hidden relative mx-auto max-w-[420px]">
            {/* SVG card as the only background/structure */}
            <img
              src="/mobile-card.svg"
              alt="MS Dhoni with Parul University students"
              className="w-full h-auto block"
            />
            {/* Text overlaid directly over the SVG */}
            <div className="absolute top-0 left-0 right-0 p-6 flex flex-col justify-start pointer-events-none">
              <div>
                <span className="inline-block rounded-full bg-white px-5 py-2 font-[family-name:var(--font-poppins)] font-normal text-[20px] text-[#1F1F1F]">
                  Highest package · 2027
                </span>
              </div>
              <div className="mt-3.5 flex items-end gap-1.5 text-white">
                <span className="font-[family-name:var(--font-gotham)] font-bold leading-none" style={{ fontSize: "64px" }}>₹60</span>
                <span className="mb-1.5 font-[family-name:var(--font-gotham)] font-bold text-3xl">LPA<span className="text-[#FEDB2F]">*</span></span>
              </div>
              <div className="w-full h-px bg-white/30 my-3" />
              <p className="font-[family-name:var(--font-poppins)] font-normal text-[12px] leading-relaxed text-white/90">
                Awarded to two B.Tech CSE students in a single recruitment
                cycle — the benchmark the PU ecosystem is producing today.
              </p>
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
                  Highest package · 2027
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2 text-white">
                <span className="font-[family-name:var(--font-gotham)] font-bold leading-none" style={{ fontSize: "110px" }}>₹60</span>
                <span className="mb-3 font-[family-name:var(--font-gotham)] font-bold text-5xl">LPA<span className="text-[#FEDB2F]">*</span></span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p className="font-[family-name:var(--font-poppins)] font-normal text-[16px] leading-[1.65] text-white/90">
                Awarded to two B.Tech CSE students in a single recruitment
                cycle — the benchmark the PU ecosystem is producing today.
              </p>
            </div>
          </div>

          {/* Desktop photo — wrapped to clip bottom-right corner but allow pop-out at top */}
          <div
            className="hidden sm:block absolute right-0 bottom-0 z-10 w-[62%] pointer-events-none rounded-br-[24px]"
            style={{
              top: "-200px", // Extends high up so the head is never clipped
              overflow: "hidden",
            }}
          >
            <img
              src="/Image-opt.png"
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
            <h3 className="font-sans font-extrabold text-[18px] sm:text-[40px] leading-tight text-[#1F1F1F]">
              Recruiting companies*
            </h3>
            <p className="mt-0.5 sm:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[11px] sm:text-[18px] text-zinc-500">
              Across the Parul ecosystem, every year.
            </p>
          </div>
        </div>

        {/* Stat trio */}
        <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="rounded-[20px] border border-zinc-300 bg-white px-7 py-6 text-left"
            >
              <dt className={`font-sans font-bold leading-[1.15] text-brand-blue tracking-tight ${("titleClass" in s && s.titleClass) || "text-[26px] sm:text-[28px] lg:text-[30px]"}`}>
                {s.title}
              </dt>
              <dd className="mt-3 font-[family-name:var(--font-poppins)] font-normal text-[14px] sm:text-[15px] text-ink leading-[1.45]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
