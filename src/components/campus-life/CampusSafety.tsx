import Image from "next/image";
import Link from "next/link";

export function CampusSafety() {
  return (
    <section className="relative w-full bg-white pt-[12vw] pb-24 md:pt-[10vw] md:pb-32 px-6 lg:px-12 -mt-[5vw] z-0 overflow-hidden">
      {/* Top Half Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#DDF8E2] via-[#DDF8E2]/60 to-transparent h-[75%] z-0 pointer-events-none"></div>

      {/* Background Safe Graphic */}
      <div className="absolute inset-x-0 top-[10%] bottom-0 flex justify-center pointer-events-none z-0 opacity-50">
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
          <h3 className="font-poppins font-semibold text-[20px] sm:text-[24px] text-[#1F1F1F] mb-2">
            Safety & Security
          </h3>
          <h2 className="font-poppins font-bold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-[#1B8136] mb-4">
            Safe for students,<br />reassuring for parents.
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/80 text-[15px] sm:text-[18px] max-w-none mx-auto leading-relaxed">
            Layered security across academic and residential zones, with statutory committees and a dedicated 24×7 helpline.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/10 shadow-lg">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A64A4]/90 via-[#4A64A4]/70 to-transparent z-10"></div>
            {/* Content */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[70%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                24x7 Security & Surveillance
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                CCTV monitoring, security staff, and emergency helpline.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/10 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[#598448]/90 via-[#598448]/70 to-transparent z-10"></div>
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[70%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                Female Wardens
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                Dedicated wardens in girls' hostels with on-call response.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/10 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[#94552A]/90 via-[#94552A]/70 to-transparent z-10"></div>
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[70%]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] text-white leading-tight mb-3">
                Hostel Access
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[14px] sm:text-[16px] max-w-[90%]">
                Only resident students can enter their respective blocks with emergency and security 24 x 7 available.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[4/3] lg:aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/10 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[#393C41]/90 via-[#393C41]/70 to-transparent z-10"></div>
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-20 max-w-[70%]">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 bg-[#212121] rounded-2xl sm:rounded-3xl px-4 py-5 sm:px-6 sm:py-4 shadow-xl">
          <span className="font-[family-name:var(--font-poppins)] text-white font-semibold tracking-wide text-[16px] sm:text-[18px]">
            Have a specific safety question?
          </span>
          <button className="bg-[#FEDB2F] hover:bg-white text-[#1F1F1F] font-[family-name:var(--font-poppins)] font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2">
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
