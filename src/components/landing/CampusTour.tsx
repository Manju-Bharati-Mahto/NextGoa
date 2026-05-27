import { Eyebrow, Wave } from "./Decor";

/**
 * "Campus Walkthrough" — red band introducing the 3D campus tour video.
 * The video frame is a placeholder poster with a play button; wire it to the
 * real tour (YouTube embed or /public video poster) when available.
 *
 * Owns the white→red wave at its top and the red→light wave at its bottom.
 */
function PlayButton() {
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
      <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden="true">
        <path d="M2 2l18 10L2 22z" fill="var(--color-brand)" />
      </svg>
    </span>
  );
}

export function CampusTour() {
  return (
    <section id="campus-tour" className="bg-brand">
      <Wave top="#ffffff" bottom="var(--color-brand)" />

      <div className="mx-auto max-w-5xl px-6 pb-4 pt-2 text-center">
        <Eyebrow className="text-white/90">Campus Walkthrough</Eyebrow>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Step inside PU Goa.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90">
          A 3D walkthrough of the academic blocks, residences, dining hall, swimming pool, and the
          green campus that opens out to the Goan coast.
        </p>

        <a
          href="#campus-tour"
          aria-label="Watch the 3D campus tour"
          className="group mt-10 block overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10"
        >
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-emerald-700 via-green-800 to-emerald-900">
            {/* subtle foliage texture */}
            <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_30%,#a7f3d0_0,transparent_40%),radial-gradient(circle_at_70%_60%,#34d399_0,transparent_45%)]" />
            <div className="relative flex flex-col items-center">
              <PlayButton />
              <p className="mt-4 text-lg font-bold text-white">Watch 3D Campus Tour</p>
              <p className="text-sm text-white/80">Near ONGC Betul, South Goa</p>
            </div>
          </div>
        </a>
      </div>

      <Wave top="var(--color-brand)" bottom="#fafafa" className="mt-8 h-12 sm:h-20" />
    </section>
  );
}
