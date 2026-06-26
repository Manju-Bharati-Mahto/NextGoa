"use client";

import { useEffect, useState } from "react";

type Phase = "text-in" | "text" | "text-out" | "logo-in" | "logo" | "logo-out";

const TEXT_HOLD = 1500;
const LOGO_HOLD = 1500;
const EXIT_DUR = 1500;
const ENTER_DUR = 1500;
const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const NEXT: Record<Phase, Phase> = {
  "text-in": "text",
  "text": "text-out",
  "text-out": "logo-in",
  "logo-in": "logo",
  "logo": "logo-out",
  "logo-out": "text-in",
};

const DELAY: Record<Phase, number> = {
  "text-in": ENTER_DUR,
  "text": TEXT_HOLD,
  "text-out": EXIT_DUR,
  "logo-in": ENTER_DUR,
  "logo": LOGO_HOLD,
  "logo-out": EXIT_DUR,
};

export function Hero() {
  const [phase, setPhase] = useState<Phase>("text-in");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const advance = (current: Phase) => {
      timer = setTimeout(() => {
        const next = NEXT[current];
        setPhase(next);
        advance(next);
      }, DELAY[current]);
    };
    advance("text-in");
    return () => clearTimeout(timer);
  }, []);

  // ── Derive styles — both elements always in DOM so transitions have a "from" state ──
  const textPhase = ["text-in", "text"].includes(phase)
    ? "visible"
    : phase === "text-out"
      ? "out"
      : "below"; // during logo phases: parked below, ready to rise in

  const logoPhase = ["logo-in", "logo"].includes(phase)
    ? "visible"
    : phase === "logo-out"
      ? "out"
      : "below"; // during text phases: parked below, ready to rise in

  const dur = (entering: boolean) =>
    `${entering ? ENTER_DUR : EXIT_DUR}ms ${EASING}`;

  const textEntering = phase === "text-in";
  const logoEntering = phase === "logo-in";

  const textStyle: React.CSSProperties = {
    transition: `opacity ${dur(textEntering)}, transform ${dur(textEntering)}`,
    opacity: textPhase === "visible" ? 1 : 0,
    transform: textPhase === "visible" ? "translateY(0)"
      : textPhase === "out" ? "translateY(-40px)"
        : "translateY(50px)",
    pointerEvents: textPhase === "visible" ? "auto" : "none",
  };

  const logoStyle: React.CSSProperties = {
    transition: `opacity ${dur(logoEntering)}, transform ${dur(logoEntering)}`,
    opacity: logoPhase === "visible" ? 1 : 0,
    transform: logoPhase === "visible" ? "translateY(0)"
      : logoPhase === "out" ? "translateY(-40px)"
        : "translateY(50px)",
    pointerEvents: "none",
  };

  const wrapperClass =
    "absolute top-0 left-0 right-0 z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-4 pt-48 sm:px-6 sm:pt-56 lg:pt-64 text-center";
  const logoWrapperClass =
    "absolute top-0 left-0 right-0 z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-4 pt-64 sm:px-6 sm:pt-56 lg:pt-64 text-center";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-start pt-32 overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* ── Text content — always mounted ── */}
      <div className={wrapperClass} style={textStyle}>
        <h1 className="font-[family-name:var(--font-poppins)] mx-auto w-full max-w-none text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:whitespace-nowrap">
          Some places teach you what to learn.
          <br />
          <span className="text-brand">Here, you discover who you can become.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium text-ink sm:text-lg">
          Go Beyond Degrees. Go Beyond Boundaries. Go <span className="text-brand font-bold">Goa.</span>
        </p>
        <span className="mt-8 inline-block rounded-full bg-sunshine px-6 py-2 text-sm font-bold text-ink shadow-sm">
          Admissions Open · 2026
        </span>
      </div>

      {/* ── Hero logo — always mounted ── */}
      <div className={`${logoWrapperClass} pointer-events-none`} style={logoStyle}>
        <img
          src="/hero-logo.svg"
          alt="Parul University Goa"
          className="mx-auto w-[65%] sm:w-[28%] max-w-xs h-auto"
        />
      </div>

      {/* spacer */}
      <div className="flex-1" />
    </section>
  );
}
