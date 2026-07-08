
import Image from "next/image";
import { Eyebrow } from "./Decor";
// import { TwoThousandPlusIcon } from "./TwoThousandPlusIcon";

interface PlacementsProps {
  data: {
    eyebrow?: string;
    heading?: string;
    description?: string;

    highlightCard?: {
      badge?: string;
      package?: string;
      suffix?: string;
      description?: string;
      image?: string;
    };

    recruiting?: {
      count?: string;
      title?: string;
      description?: string;
    };

    stats?: {
      title: string;
      titleClass?: string;
      label: string;
    }[];

    aboutStats?: {
      title: string;
      titleClass?: string;
      label: string;
    }[];
  };

  variant?: "landing" | "about";
}

export function Placements({ data, variant = "landing" }: PlacementsProps) {
  const isAbout = variant === "about";

  const stats = data?.stats || [];

  const aboutExtraStats = data?.aboutStats || [];

  const highlight = data?.highlightCard || {};

  const recruiting = data?.recruiting || {};

  return (
    <section
      id="placements"
      className={
        isAbout
          ? "bg-gradient-to-b from-[#D6F0FA] via-[#F8F8F8]/50 to-brand-white -mt-10 pt-10 relative z-0"
          : "bg-brand-white"
      }
    >
      <div className="mx-auto max-w-6xl px-4 pt-15 pb-20 sm:py-15">
        <div className="flex justify-center mb-6">
          <img
            src="/Test.svg"
            alt=""
            aria-hidden="true"
            className="h-[97px] w-auto"
          />
        </div>
        <Eyebrow className="mt-3 text-ink">
          {isAbout ? "Legacy in Numbers" : "Numbers That Matter"}
        </Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          {isAbout
            ? "Excellence That Needs No Introduction!"
            : "The ecosystem in figures."}
        </h2>
        <p className="mt-3 text-center section-body text-ink">
          {isAbout
            ? "Figures from Parul University, Gujarat."
            : "Three decades of placement results, distilled."}
        </p>

        {/* ── Headline package card ────────────────────────────────────────
             Mobile  : vertical stack  - text top, photo bottom (inside card)
             Desktop : horizontal band - text left, photo overflows above right
        ──────────────────────────────────────────────────────────────────── */}

        {/* Outer wrapper: on desktop only we add pt-16 for the photo overflow */}
        <div className="relative mt-8 sm:pt-5" style={{ overflow: "visible" }}>
          {/* ── MOBILE CARD (vertical, shown below sm) ── */}
          <div
            className="sm:hidden relative mx-auto w-full rounded-[24px] bg-[#E73649] text-white shadow-lg overflow-hidden flex flex-col"
            style={{ minHeight: "330px" }}
          >
            {/* Text content */}
            <div className="p-6 pb-0 flex flex-col justify-start relative z-20">
              <div>
                <span className="whitespace-nowrap inline-block rounded-full bg-white px-4 py-2 mb-1 font-[family-name:var(--font-poppins)] font-normal text-[14px] text-[#1F1F1F]">
                  {highlight.badge}
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1 text-white">
                <span
                  className="font-[family-name:var(--font-gotham)] font-bold leading-none"
                  style={{ fontSize: "64px" }}
                >
                  {highlight.package}
                </span>
                <span className="mb-2 font-[family-name:var(--font-gotham)] font-bold text-2xl">
                  {highlight.suffix}
                  <span className="text-[#FEDB2F]">*</span>
                </span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p
                className="section-body text-white/90"
                dangerouslySetInnerHTML={{
                  __html: highlight.description || "",
                }}
              />
            </div>

            {/* Image at bottom */}
            <div className="relative mt-2 z-10 w-full flex-grow flex items-end justify-center pointer-events-none">
              {highlight.image && (
                <Image
                  src={highlight.image}
                  alt={highlight.badge || "Placement"}
                  className="w-[110%] max-w-none ml-[5%] block"
                  style={{ marginBottom: "-30px" }}
                  width={1200}
                  height={1200}
                />
              )}
            </div>
          </div>

          {/* ── DESKTOP CARD (horizontal, shown at sm+) ── */}
          <div
            className="hidden sm:block overflow-hidden rounded-[24px] bg-brand text-white shadow-lg text-left"
            style={{ minHeight: "260px", position: "relative" }}
          >
            {/* Left: text content */}
            <div
              className="p-10 flex flex-col justify-center max-w-[40%]"
              style={{ minHeight: "260px" }}
            >
              <div>
                <span className="whitespace-nowrap inline-block rounded-full bg-white px-5 py-2 font-[family-name:var(--font-poppins)] font-normal text-[20px] text-[#1F1F1F]">
                  {highlight.badge}
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2 text-white">
                <span
                  className="font-[family-name:var(--font-gotham)] font-bold leading-none"
                  style={{ fontSize: "110px" }}
                >
                  {highlight.package}
                </span>
                <span className="mb-3 font-[family-name:var(--font-gotham)] font-bold text-5xl">
                  {highlight.suffix}
                  <span className="text-[#FEDB2F]">*</span>
                </span>
              </div>
              <div className="w-full h-px bg-white/30 my-4" />
              <p
                className="section-body text-white/90"
                dangerouslySetInnerHTML={{
                  __html: highlight.description || "",
                }}
              />
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
            {highlight.image && (
              <Image
                src={highlight.image}
                alt={highlight.badge || "Placement"}
                style={{
                  position: "absolute",
                  bottom: "-38px",
                  right: 0,
                  width: "100%",
                  height: "auto",
                }}
                width={1200}
                height={1200}
              />
            )}
          </div>
        </div>

        {/* Recruiting companies line */}
        <div className="mt-8 flex items-center justify-center gap-3.5 sm:gap-8">
          {/* Left: 2200 SVG image */}
              <div
                className="flex-shrink-0"
                dangerouslySetInnerHTML={{
                  __html: recruiting.count || "",
                }}
              />

          {/* Middle: Vertical divider */}
          <div className="h-14 sm:h-[90px] w-px bg-zinc-300" />

          {/* Right: Text block */}
          <div className="text-left">
            <h3 className="font-poppins font-semibold text-[18px] sm:text-[40px] leading-tight text-[#1F1F1F]">
              {recruiting.title}
            </h3>
            <p
              className="mt-0.5 sm:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[11px] sm:text-[18px] text-zinc-500"
              dangerouslySetInnerHTML={{
                __html: recruiting.description || "",
              }}
            />
          </div>
        </div>

        {/* Stat trio - Row 1 */}
        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx === 0 ? "col-span-2 sm:col-span-1" : ""
              } flex flex-col items-center justify-center rounded-[16px] sm:rounded-[20px] border border-zinc-300 bg-white text-center shadow-sm ${
                idx === 0 ? "px-7 py-6" : "px-4 py-5 sm:px-7 sm:py-6"
              }`}
            >
              <dt
                className={`font-sans font-bold leading-[1.15] text-[#0CAADD] tracking-tight ${
                  item.titleClass || "text-[22px] sm:text-[28px] lg:text-[30px]"
                }`}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              />

              <dd className="mt-2 sm:mt-3 font-[family-name:var(--font-poppins)] font-normal text-ink leading-[1.45] text-[14px] sm:text-[15px]">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
