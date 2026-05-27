/**
 * Student testimonial. White band; the next section (Campus Walkthrough) owns
 * the white→red wave at its top. The portrait is a placeholder avatar with a
 * yellow accent disc — drop a real photo at /public/students/riya.jpg and swap
 * the avatar block for <Image> when available.
 */
export function Testimonial() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
        <figure>
          <blockquote className="text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-3xl">
            “Hackathons here weren&apos;t optional. By placement season, I had three real projects
            to walk in with.”
          </blockquote>
          <hr className="my-6 w-16 border-t-2 border-brand" />
          <figcaption className="text-sm text-ink/70">
            <span className="block text-base font-bold text-ink">Riya S.</span>
            Software Engineer · TCS
            <span className="mt-1 block text-ink/50">B.Tech CSE · Batch 2025</span>
          </figcaption>
        </figure>

        <div className="relative mx-auto h-56 w-56">
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sunshine" />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-ocean to-ocean-deep text-6xl font-extrabold text-white ring-8 ring-white">
            R
          </div>
        </div>
      </div>
    </section>
  );
}
