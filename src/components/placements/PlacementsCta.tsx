import Image from "next/image";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 3h3l1 4-2 1a8.5 8.5 0 0 0 4 4l1-2 4 1v3a1 1 0 0 1-1 1A11 11 0 0 1 3 4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function PlacementsCta() {
  return (
    <section className="bg-[#F5F6F8] py-12 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[20px] shadow-sm mb-8 flex flex-col justify-center min-h-[300px]">
          <Image
            src="/hero-campus.webp"
            alt="Campus"
            fill
            className="-z-10 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />

          <div className="px-6 py-12 text-center sm:py-16">
            <span className="inline-block rounded-full bg-[#FACC15] px-5 py-2 text-[14px] font-semibold text-black mb-5">
              Admissions Open 2026
            </span>
            <h2 className="text-center text-white mb-5 section-heading">
              Be part of next placement story.
            </h2>
            <p className="mx-auto max-w-[800px] text-center text-white/90 section-body">
              Parul placements have been shaping careers and futures for over two decades. PU Goa students inherit this legacy from day one. Apply for 2026-27, speak with a career counsellor, or download the official placement report.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="bg-[#EF4444] text-white px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-red-600 transition-colors shadow-sm">
            Apply Now
          </button>
          <button className="bg-white text-black border border-gray-200 shadow-sm px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-gray-50 transition-colors">
            Chat on WhatsApp
          </button>
          <button className="bg-white text-black border border-gray-200 shadow-sm px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-gray-50 transition-colors flex items-center gap-2">
            <PhoneIcon />
            1800 890 9090
          </button>
        </div>
      </div>
    </section>
  );
}
