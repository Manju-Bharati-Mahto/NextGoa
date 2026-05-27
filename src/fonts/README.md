# Fonts

**Gotham** is the brand typeface, self-hosted from this folder and wired up in
[`src/lib/fonts.ts`](../lib/fonts.ts) via `next/font/local`. It's exposed as the
CSS variable `--font-gotham`, which `globals.css` maps onto Tailwind's
`font-sans`, so every element uses it by default.

## Weights in use

| File                    | CSS weight | Used for                  |
| ----------------------- | ---------- | ------------------------- |
| `Gotham-Book.otf`       | 400        | Body text                 |
| `Gotham-Medium.otf`     | 500        | Sub-labels, nav           |
| `Gotham-Bold.otf`       | 700        | Buttons, sub-headings     |
| `Gotham-Black.otf`      | 800        | Hero headline, big titles |

(+ matching `*Italic.otf` for each.) The remaining weights present here (Thin,
XLight, Light, Ultra) aren't loaded yet — add them to `fonts.ts` if a design
calls for them.

> **No SemiBold:** this Gotham set has no 600 weight, so Tailwind's
> `font-semibold` resolves to 700 (Bold) per CSS font-matching.

## Notes

- `OFL.txt` is the **Poppins** Open Font License. Gotham is a **commercial**
  typeface — ensure you hold a valid web-embedding license for it.
- The `Poppins-*.ttf` files in this folder are **unused** (the project was
  briefly on Poppins). Safe to delete if you don't want them as a fallback.
