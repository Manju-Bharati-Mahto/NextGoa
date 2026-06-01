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
          <svg className="w-full h-auto max-h-full object-contain object-bottom" viewBox="0 0 743 807" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_3090_53)">
            <path fillRule="evenodd" clipRule="evenodd" d="M730.948 31.4574C727.315 29.1887 723.165 27.8825 718.888 27.6619C714.611 27.4413 710.348 28.3136 706.501 30.1965C602.946 80.9021 468.629 70.5167 387.136 5.49934C382.667 1.93879 377.122 0 371.407 0C365.693 0 360.148 1.93879 355.679 5.49934C274.178 70.5167 139.872 80.9021 36.3057 30.1965C32.4608 28.3145 28.2001 27.4423 23.9249 27.6619C19.6498 27.8816 15.5009 29.1859 11.8691 31.4519C8.23727 33.718 5.24206 36.8712 3.16558 40.6147C1.08911 44.3581 -0.000292657 48.5685 9.3304e-07 52.8493V478.556C-0.00120266 482.982 1.16207 487.331 3.37302 491.165C49.9443 571.834 94.123 627.601 146.61 672C196.162 713.912 250.54 743.89 319.387 781.811C332.137 788.842 345.315 796.108 359.124 803.816C362.881 805.904 367.108 807 371.407 807C375.705 807 379.932 805.904 383.689 803.816C397.499 796.108 410.678 788.842 423.427 781.811C492.267 743.876 546.644 713.912 596.203 672C648.69 627.601 692.869 571.834 739.45 491.165C741.656 487.329 742.819 482.982 742.823 478.556V52.8493C742.82 48.5691 741.729 44.3598 739.652 40.6176C737.574 36.8753 734.579 33.7231 730.948 31.4574Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_i_3090_53" x="0" y="0" width="742.823" height="807" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="54.7932"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0110866 0 0 0 0 0.665208 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3090_53"/>
            </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="font-sans font-bold text-[20px] sm:text-[24px] text-[#1F1F1F] mb-2">
            Safety & Security
          </h3>
          <h2 className="font-sans font-black text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-[#1B8136] mb-4">
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
              <h3 className="font-sans font-medium text-[24px] sm:text-[32px] text-white leading-tight mb-3">
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
              <h3 className="font-sans font-medium text-[24px] sm:text-[32px] text-white leading-tight mb-3">
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
              <h3 className="font-sans font-medium text-[24px] sm:text-[32px] text-white leading-tight mb-3">
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
              <h3 className="font-sans font-medium text-[24px] sm:text-[32px] text-white leading-tight mb-3">
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
