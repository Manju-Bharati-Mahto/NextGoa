import Image from "next/image";
import Link from "next/link";

export function CampusSafety() {
  return (
    <section className="relative w-full bg-white pt-[20vw] sm: md:pt-[10vw] md: px-4 sm:px-6 lg:px-12 -mt-[5vw] z-0 overflow-hidden py-16 sm:py-24">
      {/* Top Half Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#DDF8E2] via-[#DDF8E2]/60 to-transparent h-[75%] z-0 pointer-events-none"></div>

      {/* Background Safe Graphic */}
      <div className="hidden sm:flex absolute inset-x-0 top-[10%] bottom-0 justify-center pointer-events-none z-0 opacity-20">
        <div className="relative w-full max-w-[1000px] h-full flex justify-center items-end">
          <Image
            src="/campus-life/safe3.png"
            alt="Campus Safety Graphic"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-[#1F1F1F] mb-2 section-subheading">
            Safety & Security
          </h3>
          <h2 className="leading-[1.1] text-[#1B8136] mb-4 section-heading">
            Safe for students,<br />reassuring for parents.
          </h2>
          <p className="text-[#1F1F1F]/80 max-w-none mx-auto section-body">
            Layered security across academic and residential zones, with statutory committees and a dedicated 24×7 helpline.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">

          {/* Card 1 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border-none bg-transparent">
            {/* Background SVG */}
            <img src="/safety/1.svg" alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            {/* Content */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[80%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                24x7 Security & Surveillance
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                CCTV monitoring, security staff, and emergency helpline.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border-none bg-transparent">
            <img src="/safety/2.svg" alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[80%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                Female Wardens
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                Dedicated wardens in girls' hostels with on-call response.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border-none bg-transparent">
            <img src="/safety/3.svg" alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[80%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                Hostel Access
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                Only resident students can enter their respective blocks with emergency and security 24 x 7 available.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border-none bg-transparent">
            <img src="/safety/4.svg" alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[90%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                Internal Complaints Committee
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                Statutory committee handling grievances confidentially.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Pill */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-10 bg-[#212121] rounded-2xl sm:rounded-3xl px-4 py-5 sm:px-6 sm:py-4 shadow-xl">
          <span className="font-[family-name:var(--font-poppins)] text-white font-semibold tracking-wide text-[16px] sm:text-[18px] text-center">
            Have a specific safety question?
          </span>
          <button 
            type="button"
            data-enquiry-trigger="true"
            className="w-full sm:w-auto bg-[#FEDB2F] hover:bg-white text-[#1F1F1F] font-[family-name:var(--font-poppins)] font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            Talk to a counsellor
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
