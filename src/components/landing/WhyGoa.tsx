import { Eyebrow, Wave } from "./Decor";

/**
 * "Why Goa" — cyan band arguing Goa itself is an academic advantage. The image
 * is a placeholder (drop a real campus/culture photo at /public/why-goa.jpg and
 * swap in <Image>). Owns the cyan→white wave into the International section.
 */
export function WhyGoa() {
  return (
    <section className="bg-ocean">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-deep to-ink/40 shadow-lg ring-1 ring-black/10">
          <div className="absolute -left-6 bottom-6 h-24 w-24 rounded-full bg-sunshine/80 blur-xl" />
          <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-white/20" />
        </div>

        <div className="text-white">
          <Eyebrow className="!text-left text-white/90">Why Goa</Eyebrow>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-sunshine sm:text-4xl">
            We chose Goa because no classroom can teach what Goa can.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-white/90">
            <p>
              Goa is a global tourism hub, a creative economy, a place where Indian and
              international cultures have been meeting for centuries. It hosts some of the
              country&apos;s most significant industry installations, festivals, and policy events.
              It attracts talent, ideas, and investment from across the world.
            </p>
            <p>
              For a university committed to real-world education, this is not just a beautiful
              setting. It is an academic advantage. Goa is the classroom that never closes.
            </p>
          </div>
        </div>
      </div>

      <Wave top="var(--color-ocean)" bottom="#ffffff" accent="var(--color-ocean-deep)" />
    </section>
  );
}
