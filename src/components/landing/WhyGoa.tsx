import { Eyebrow } from "./Decor";

/**
 * "Why Goa" - cyan band arguing Goa itself is an academic advantage. Uses the
 * same scalloped wave-band background as "Our Philosophy" (blue #0CAADD band
 * with #0094C4 decorative waves); the band's bottom scallop hands off into the
 * white International section below. The image is a placeholder (drop a real
 * campus/culture photo at /public/why-goa.jpg and swap in <Image>).
 */
export function WhyGoa({ variant = "blue", image = "/why-goa.png" }: { variant?: "blue" | "red"; image?: string }) {
  const isRed = variant === "red";
  
  return (
    <section id="why-goa" className={`relative overflow-hidden ${isRed ? "bg-transparent" : "bg-gradient-to-b from-[#F8F8F8] to-[#CBEFFD]"} scroll-mt-24 md:scroll-mt-32`}>
      {/* Background Wavy Image from Figma */}
      {!isRed ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Blue Background */}
          <div 
            className="absolute inset-x-0 bg-[#0CAADD]" 
            style={{ 
              top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
              bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
            }} 
          />
          {/* Top Wave */}
          <div 
            className="absolute top-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Red Background */}
          <div 
            className="absolute inset-x-0 bg-[#E73649]" 
            style={{ 
              top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
              bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
            }} 
          />
          {/* Top Wave */}
          <div 
            className="absolute top-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
          </div>
        </div>
      )}

      <div 
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1fr_1.3fr] lg:grid-cols-[1fr_1.2fr] md:gap-24 lg:gap-32"
        style={{ 
          paddingTop: "clamp(5rem, 12.2vw, 600px)", 
          paddingBottom: "clamp(5rem, 13.3vw, 600px)" 
        }}
      >
        <div className="relative mx-auto w-full max-w-none lg:max-w-[550px]">
          {/* Top-left blueprint crosshair (Group 3062.svg) */}
          <svg
            viewBox="0 0 420 311"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 -translate-x-[10.2%] -translate-y-[13.1%] z-0 hidden w-[95%] sm:block"
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
            className="pointer-events-none absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 translate-x-[10.4%] translate-y-[13.8%] z-0 hidden w-[95%] sm:block"
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
              src={image}
              alt="Parul University Goa Campus Life"
              className="w-full h-auto object-contain sm:aspect-square sm:object-cover bg-white"
            />
          </div>
        </div>

        <div className="text-white">
          <Eyebrow className="!text-left text-white">Why Goa</Eyebrow>
          <h2 className="mt-2 text-sunshine sm:whitespace-nowrap !text-left section-heading">
            We chose Goa because
            <br />
            no classroom can teach
            <br />
            what Goa can.
          </h2>
          <div className="mt-5 space-y-4 section-body text-white/90">
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
