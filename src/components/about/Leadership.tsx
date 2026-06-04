import { Eyebrow } from "@/components/landing/Decor";

export function Leadership() {
  return (
    <section className="bg-[#F8F8F8] py-20 sm:py-10 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Eyebrow className="text-ink">Our Leadership</Eyebrow>
          <h2 className="mt-2 font-poppins font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
            The People Leading PU Goa
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-brand/5 px-6 py-2 text-sm font-[family-name:var(--font-poppins)] text-brand hover:bg-brand/10 transition-colors">
              Founders
            </button>
            <button className="rounded-full bg-brand/5 px-6 py-2 text-sm font-[family-name:var(--font-poppins)] text-brand hover:bg-brand/10 transition-colors">
              Office Bearers
            </button>
            <button className="rounded-full bg-brand/5 px-6 py-2 text-sm font-[family-name:var(--font-poppins)] text-brand hover:bg-brand/10 transition-colors">
              Faculty Deans
            </button>
          </div>

          <h3 className="mt-12 font-poppins font-semibold text-[24px] sm:text-[32px] text-ink">
            Leadership - Parul Education Foundation
          </h3>
          <p className="mt-2 font-[family-name:var(--font-poppins)] text-sm sm:text-base text-ink/80">
            The visionaries behind the not-for-profit organisation that runs PU Goa.
          </p>
        </div>

        <div className="space-y-12">
          {/* Row 1: Devanshu Patel */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            {/* Image */}
            <div className="w-full md:w-[40%] flex-shrink-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden rounded-[20px] shadow-lg">
                <img
                  src="/DEVANSHU.webp"
                  alt="Dr. Devanshu Patel"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>
            {/* Card */}
            <div className="w-full md:w-[60%] rounded-[20px] bg-brand p-8 sm:p-12 text-white shadow-lg relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <h4 className="font-poppins font-semibold text-[32px] sm:text-[40px] leading-tight">
                  Dr. Devanshu Patel
                </h4>
                <p className="mt-1 font-[family-name:var(--font-poppins)] text-[16px] sm:text-[18px] font-normal text-white/90">
                  President, Parul Education Foundation
                </p>
                <div className="my-6 h-px w-full bg-white/30" />
                <p className="font-[family-name:var(--font-poppins)] text-[15px] sm:text-[16px] leading-relaxed text-white/95">
                  A visionary education leader guiding the growth of the Parul Education
                  Foundation and President of Parul University. He is the driving force
                  behind Parul University's National and Global Expansion.
                </p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-sunshine px-6 py-3 font-semibold text-ink transition-transform hover:scale-105">
                  Explore More <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
              
              {/* Background Silhouette Graphic */}
              <img
                src="/award.svg"
                alt=""
                className="absolute -right-8 -bottom-8 w-[200px] sm:w-[250px] opacity-10 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Row 2: Parul Patel */}
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-stretch">
            {/* Image */}
            <div className="w-full md:w-[40%] flex-shrink-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden rounded-[20px] shadow-lg">
                <img
                  src="/PARUL.webp"
                  alt="Dr. Parul Patel"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>
            {/* Card */}
            <div className="w-full md:w-[60%] rounded-[20px] bg-[#0CAADD] p-8 sm:p-12 text-white shadow-lg relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <h4 className="font-poppins font-semibold text-[32px] sm:text-[40px] leading-tight">
                  Dr. Parul Patel
                </h4>
                <p className="mt-1 font-[family-name:var(--font-poppins)] text-[16px] sm:text-[18px] font-normal text-white/90">
                  Director, Parul Education Foundation
                </p>
                <div className="my-6 h-px w-full bg-white/30" />
                <p className="font-[family-name:var(--font-poppins)] text-[15px] sm:text-[16px] leading-relaxed text-white/95">
                  Co-founder and Director of Parul Education Foundation, She is a strong
                  advocate for student-centric, not-for-profit higher education and the
                  inspiration behind the institution's name.
                </p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-sunshine px-6 py-3 font-semibold text-ink transition-transform hover:scale-105">
                  Explore More <span aria-hidden="true">&rarr;</span>
                </button>
              </div>

              {/* Background Silhouette Graphic */}
              <img
                src="/award.svg"
                alt=""
                className="absolute -right-8 -bottom-8 w-[200px] sm:w-[250px] opacity-10 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
