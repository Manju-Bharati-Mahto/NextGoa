/**
 * Shared decorative + structural primitives for the landing sections, so every
 * section gets the same eyebrow rhythm and the same ocean-wave dividers the
 * Figma design uses to transition between coloured bands.
 */
import type { CSSProperties } from "react";

/** Small centred kicker above a section heading (e.g. "Our Philosophy"). */
export function Eyebrow({
  children,
  className = "text-ink/70",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-center text-sm font-semibold tracking-wide sm:text-base ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Wavy divider between two coloured bands. Place it at the TOP of the lower
 * section: `top` is the colour of the band above, `bottom` the band below.
 * `accent` (optional) draws a translucent second wave for depth.
 *
 * Pass CSS colour strings — hex or `var(--color-…)`.
 */
export function Wave({
  top,
  bottom,
  accent,
  className = "h-12 sm:h-20",
}: {
  top: string;
  bottom: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div aria-hidden="true" style={{ background: bottom } as CSSProperties}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`block w-full ${className}`}
      >
        {accent && (
          <path
            fill={accent}
            opacity="0.45"
            d="M0,40 C240,76 480,16 720,44 C960,72 1200,18 1440,48 L1440,0 L0,0 Z"
          />
        )}
        <path
          fill={top}
          d="M0,0 H1440 V34 C1200,72 960,18 720,44 C480,70 240,18 0,46 Z"
        />
      </svg>
    </div>
  );
}
