# 🎨 Design Inbox — drop your Figma exports here

This folder is the **single place to upload anything from Figma** (or any design tool). I read everything in here and rebuild the site to match it exactly. Nothing in this folder is served to the public — it's reference material only (the live assets I generate from it go into [`../public/`](../public)).

> **The fastest start:** export the **whole Figma file as one PDF** (`File → Export frames to PDF…`) and drop it straight into this folder as `figma-full.pdf`. One file, every screen, and I can see the exact layout, colors, spacing, and copy. Everything below is optional polish on top of that.

---

## Where to put what

| Folder | What goes here | Best format |
|---|---|---|
| [`screens/`](screens) | **Full-page / full-frame** exports — "this is what the whole page should look like" (home, admissions, etc.) | **PNG @2x** or **PDF** |
| [`brand/`](brand) | Logo, icons, favicon, illustrations, decorative shapes (the ocean waves, badges…) | **SVG** (preferred — I can reuse the code) |
| [`components/`](components) | Single UI pieces in isolation — a button, a card, the header, the programme finder | **PNG @2x** or **SVG** |
| [`photos/`](photos) | Real photography — campus, people, classrooms | **JPG** or **PNG** |
| [`tokens/`](tokens) | Color/typography/spacing specs — a screenshot of Figma's styles panel, or a plain `.txt`/`.md` with hex codes & font sizes | screenshot, `.txt`, or `.md` |

When in doubt, just drop the file at the top level of `design/` and tell me what it is — I'll sort it.

---

## Which format, and why it matters to me

- **SVG** → *best for logos, icons, shapes.* I can open the file, read the vector code, and reproduce it crisply at any size (and recolor it with brand tokens). Always prefer SVG for anything that isn't a photo.
- **PNG (export at 2x)** → *best for showing me a layout.* I can see exact proportions, colors, and text. Use this for full screens and components. 2x = sharp enough for me to read fine details.
- **PDF** → *best for whole flows / the entire file at once.* Multi-page, vector, compact. Ideal as the "everything in one file" reference.
- **JPG** → *photos only.* Smaller than PNG for photographic content.

---

## Naming (helps me map a file → the right part of the site)

Use the page or component name. Examples:

```
screens/home.png              screens/home-mobile.png
screens/admissions.pdf
brand/logo.svg                brand/logo-white.svg
brand/icon-favicon.svg        brand/wave-divider.svg
components/header.png         components/programme-finder.png
photos/campus-hero.jpg
tokens/colors.png             tokens/typography.txt
```

If you have separate **desktop and mobile** designs, add `-mobile` (or `-desktop`) to the name — responsive behaviour matters and I'll build both breakpoints.

---

## After you upload

Tell me what you dropped in (e.g. *"home screen + logo are in `design/`"*). I'll:

1. Open and study each file.
2. Pull out the real **colors, fonts, spacing** and wire them into the Tailwind `@theme` tokens.
3. Rebuild the matching pages/components to match the design.
4. Move any production-ready asset (logo, favicon, OG image) into [`../public/`](../public) at the right size.
5. Run the build to confirm everything still ships as static HTML.

---

*Tip: if a file is too large or Figma won't export cleanly, paste a screenshot directly into the chat — that works too. This folder is just so the references live alongside the code and stay versioned.*
