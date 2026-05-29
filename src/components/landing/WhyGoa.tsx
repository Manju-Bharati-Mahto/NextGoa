import { Eyebrow } from "./Decor";
import { WaveBandBg } from "./WaveBand";

/**
 * "Why Goa" — cyan band arguing Goa itself is an academic advantage. Uses the
 * same scalloped wave-band background as "Our Philosophy" (blue #0CAADD band
 * with #0094C4 decorative waves); the band's bottom scallop hands off into the
 * white International section below. The image is a placeholder (drop a real
 * campus/culture photo at /public/why-goa.jpg and swap in <Image>).
 */
export function WhyGoa() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F8F8] to-[#CBEFFD]">
      {/* Background: same scalloped wave band as "Our Philosophy", same colours */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <WaveBandBg band="#0CAADD" accent="#0094C4" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-44 pb-64 md:grid-cols-2 md:gap-24 lg:gap-32">
        <div className="relative mx-auto w-full max-w-md">
          {/* Top-left blueprint crosshair (Group 3062.svg) */}
          <svg
            viewBox="0 0 420 311"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -left-14 -top-12 z-0 hidden w-[95%] sm:block"
          >
            <line x1="43.6447" x2="43.6447" y2="310.143" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <line x1="0.000380434" y1="40.8157" x2="419.648" y2="41.0414" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(-1 0 0 1 48.4208 36.9114)" fill="#FEDB2F" />
          </svg>

          {/* Bottom-right blueprint crosshair (Group 3063.svg) */}
          <svg
            viewBox="0 0 420 311"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -bottom-12 z-0 hidden w-[95%] sm:block"
          >
            <line x1="376.004" y1="310.143" x2="376.004" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <line x1="419.648" y1="269.328" x2="0.000371496" y2="269.102" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(1 0 0 -1 371.227 273.232)" fill="#FEDB2F" />
          </svg>

          {/* Yellow accent square behind the photo, anchored bottom-left */}
          <div className="absolute -bottom-[12%] -left-[12%] z-[5] h-[62%] w-[62%] rounded-[28px] bg-sunshine" />

          {/* Event photo */}
          <div className="relative z-10 overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-black/10">
            <img
              src="/why-goa.jpg"
              alt="Parul University Mission Possible event in Goa"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="text-white">
          <Eyebrow className="!text-left text-white">Why Goa</Eyebrow>
          <h2 className="mt-2 font-sans font-bold text-[32px] sm:text-[42px] leading-[1.12] tracking-tight text-sunshine">
            We chose Goa because
            <br />
            no classroom can teach
            <br />
            what Goa can.
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
    </section>
  );
}
