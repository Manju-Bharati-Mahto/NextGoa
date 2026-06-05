import { Eyebrow } from "@/components/landing/Decor";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-transparent z-10">
            <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div 
          className="absolute inset-x-0 bg-[#0CAADD]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 120px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 120px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 120px)" }}
        >
          <img
            src="/88.svg"
            alt=""
            className="absolute top-0 left-0 w-full h-auto"
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 120px)" }}
        >
          <img
            src="/88.svg"
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-20 pb-24 sm:pt-40 sm:pb-48 md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.2fr_1fr] md:gap-24 lg:gap-32">
        {/* Left Side: Text */}
        <div className="text-white order-2 md:order-1">
          <Eyebrow className="!text-left text-white">Who We Are</Eyebrow>
          <h2 className="mt-2 text-sunshine !text-left section-heading">
            The Goan Chapter Of
            <br />
            Excellence
          </h2>
          <div className="mt-5 space-y-4 text-white/90 section-body">
            <p>
              Parul University Goa is a not-for-profit institution, committed to academic
              excellence, real-world readiness, and lifelong growth. We are built for
              students who want more than a certificate or degree; we make career
              stories that shape futures.
            </p>
            <p>
              Our state-of-the-art campus is a perfect amalgamation of innovation &
              functional thinking, located near the coast of South Goa. The location was
              chosen with a vision to place our Engineering students in India's energy
              sector. It puts our Hotel Management students at the doorstep of Goa's
              world-class hospitality industry. More importantly, it immerses every
              student in a living, breathing ecosystem that no textbook could ever
              replicate.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative mx-auto w-full max-w-none lg:max-w-[550px] order-1 md:order-2">
          {/* Top-Right blueprint crosshair */}
          <svg
            viewBox="0 0 420 311"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 translate-x-[10.2%] -translate-y-[13.1%] z-0 hidden w-[95%] sm:block"
          >
            <line x1="376.004" y1="0" x2="376.004" y2="310.143" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <line x1="0" y1="40.8157" x2="419.648" y2="41.0414" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(1 0 0 1 370.24 35.0513)" fill="#FEDB2F" />
          </svg>

          {/* Bottom-Left blueprint crosshair */}
          <svg
            viewBox="0 0 420 311"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 -translate-x-[10.4%] translate-y-[13.8%] z-0 hidden w-[95%] sm:block"
          >
            <line x1="43.6447" y1="0" x2="43.6447" y2="310.143" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <line x1="0" y1="269.328" x2="419.648" y2="269.102" stroke="#fff" strokeWidth="1.41431" strokeDasharray="14.14 14.14" strokeOpacity="0.6" />
            <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(-1 0 0 -1 49.4091 275.092)" fill="#FEDB2F" />
          </svg>

          {/* Yellow accent square behind the photo, anchored bottom-right */}
          <div className="absolute -bottom-[12%] -right-[12%] z-[5] h-[62%] w-[62%] rounded-[28px] bg-sunshine" />

          {/* Event photo */}
          <div className="relative z-10 overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-black/10">
            <img
              src="/why-goa.jpg"
              alt="Parul University Goa Student"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
