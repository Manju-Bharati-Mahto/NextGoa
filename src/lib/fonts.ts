import localFont from "next/font/local";
import { Poppins } from "next/font/google";

/**
 * Poppins - used for specific typographic elements per brand guidelines.
 */
export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

/**
 * Gotham — the brand typeface, self-hosted from src/fonts via next/font/local.
 * Exposed as the CSS variable --font-gotham, which globals.css maps onto
 * Tailwind's `font-sans`, so every element inherits it by default.
 *
 * Note: this Gotham set has no SemiBold (600). Tailwind's `font-semibold` (600)
 * therefore resolves to the nearest available weight (700/Bold) per the CSS
 * font-matching algorithm. Declared weights: 300 / 400 / 500 / 700 / 800.
 */
export const gotham = localFont({
  src: [
    { path: "../fonts/Gotham-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Gotham-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../fonts/Gotham-Book.otf", weight: "400", style: "normal" },
    { path: "../fonts/Gotham-BookItalic.otf", weight: "400", style: "italic" },
    { path: "../fonts/Gotham-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Gotham-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../fonts/Gotham-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/Gotham-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../fonts/Gotham-Black.otf", weight: "800", style: "normal" },
    { path: "../fonts/Gotham-BlackItalic.otf", weight: "800", style: "italic" },
  ],
  variable: "--font-gotham",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});
