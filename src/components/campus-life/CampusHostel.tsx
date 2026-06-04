import { Icon } from '@iconify/react';

export function CampusHostel() {
  return (
    <section className="relative w-full z-10">
      {/* Background for the top part (above the top wave) */}
      <div className="absolute inset-x-0 top-0 h-[10vw] bg-[#F8F8F8] z-0 pointer-events-none" />

      {/* Background Red Wavy Image from Figma */}
      <img
        src="/70.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-12 flex flex-col items-center pt-40 pb-32 lg:pt-56 lg:pb-48">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h3 className="text-white mb-2 section-subheading">
            Hostels & Residences
          </h3>
          <h2 className="leading-[1.1] text-[#FEDB2F] mb-6 section-heading">
            Your home at PU Goa.
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto section-body">
            On-campus residential blocks designed around safety, study and<br className="hidden sm:block" /> community. Separate accommodation for males and females.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch mb-10 lg:mb-12">
          
          {/* Left: Image with Decorative Elements */}
          <div className="relative w-full lg:w-[32%] mx-auto max-w-[500px] lg:max-w-none mt-12 lg:mt-0 shrink-0">
            
            {/* Decorative Frame SVG */}
            <svg
              viewBox="0 0 519 520"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute -top-[27.5%] -left-[27.5%] w-[127.5%] h-[127.5%] z-0"
            >
              <rect x="271" y="271" width="239" height="238" rx="16" transform="rotate(180 271 271)" fill="#FEDB2F"/>
              <line x1="293.293" y1="112" x2="293.293" y2="-3.09108e-08" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
              <line x1="251" y1="69.2928" x2="519" y2="69.2928" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
              <circle cx="294.009" cy="69.3235" r="5.76442" transform="rotate(180 294.009 69.3235)" fill="#FEDB2F"/>
              <line y1="-0.707157" x2="112" y2="-0.707157" transform="matrix(-1 4.37114e-08 4.37114e-08 1 112 295)" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
              <line y1="-0.707157" x2="268" y2="-0.707157" transform="matrix(-8.74228e-08 1 1 8.74228e-08 70 252)" stroke="#F8F8F8" strokeWidth="1.41431" strokeDasharray="14.14 14.14"/>
              <circle cx="5.76442" cy="5.76442" r="5.76442" transform="matrix(0 -1 -1 0 75.0887 300.773)" fill="#FEDB2F"/>
            </svg>
            
            {/* Image Container */}
            <div className="relative z-10 w-full aspect-square overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-black/10">
              <img 
                src="/campus-life/carousel/2.png" 
                alt="Hostel Campus" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info Card */}
          <div className="w-full lg:w-[68%] bg-[#1F1F1F] rounded-[32px] p-8 sm:p-12 lg:px-16 lg:py-10 shadow-2xl flex flex-col justify-center">
            <div className="font-[family-name:var(--font-poppins)] text-[#E73649] text-[15px] sm:text-[18px] mb-3">
              Residential blocks
            </div>
            <h3 className="font-poppins font-semibold text-[28px] sm:text-[36px] text-white leading-[1.2] tracking-tight mb-3">
              What you get in your room.
            </h3>
            
            <div className="flex flex-col">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-1.5 border-b border-white/10">
                <div className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] text-[15px] sm:text-[16px]">Boys' Hostel</div>
                <div className="font-[family-name:var(--font-poppins)] text-white/90 text-[15px] sm:text-[16px] sm:col-span-2">Multiple residential blocks.</div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-1.5 border-b border-white/10">
                <div className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] text-[15px] sm:text-[16px]">Girls' Hostel</div>
                <div className="font-[family-name:var(--font-poppins)] text-white/90 text-[15px] sm:text-[16px] sm:col-span-2">Separate blocks with female warden.</div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-1.5 border-b border-white/10">
                <div className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] text-[15px] sm:text-[16px]">Room types</div>
                <div className="font-[family-name:var(--font-poppins)] text-white/90 text-[15px] sm:text-[16px] sm:col-span-2">Luxurious triple sharing with attached washroom</div>
              </div>
              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-1.5 border-b border-white/10">
                <div className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] text-[15px] sm:text-[16px]">Furnishing</div>
                <div className="font-[family-name:var(--font-poppins)] text-white/90 text-[15px] sm:text-[16px] sm:col-span-2">Bed, mattress, study desk, wardrobe, fan, lighting</div>
              </div>
              {/* Row 5 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 pt-1.5">
                <div className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] text-[15px] sm:text-[16px]">Storage</div>
                <div className="font-[family-name:var(--font-poppins)] text-white/90 text-[15px] sm:text-[16px] sm:col-span-2">In-room lockable storage · luggage room</div>
              </div>
            </div>
          </div>

        </div>

        {/* Features Pills Row */}
        <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 lg:mb-12">
          {[
            { text: 'Wifi', icon: 'mdi:wifi' },
            { text: 'Power back-up', icon: 'mdi:upload' },
            { text: 'RO drinking water', icon: 'mdi:water' },
            { text: 'Laundry', icon: 'mdi:tshirt-crew' },
            { text: 'Housekeeping', icon: 'mdi:home-heart' }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 bg-[#FEDB2F] rounded-full px-6 py-3 sm:px-8 sm:py-3.5 shadow-lg cursor-default">
              <Icon icon={feature.icon} className="text-[#1F1F1F] text-[20px] sm:text-[24px]" />
              <span className="font-[family-name:var(--font-poppins)] font-bold text-[#1F1F1F] text-[15px] sm:text-[17px] tracking-tight">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="w-full bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="flex-1 px-8 py-8 sm:px-16 sm:py-12 flex flex-col justify-center">
            <h3 className="font-poppins font-semibold text-[28px] sm:text-[36px] text-[#E73649] mb-4 leading-tight">
              Hostel fees & room plans
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/80 text-[16px] sm:text-[18px] leading-relaxed max-w-md">
              Full pricing, sharing options and inclusions are listed inside the admissions brochure.
            </p>
          </div>
          
          {/* Right: Actions */}
          <div className="md:w-[40%] bg-[#0CAADD] px-8 py-8 sm:px-16 sm:py-12 flex flex-col items-center justify-center gap-5">
            <button className="w-full max-w-[320px] bg-[#FEDB2F] hover:bg-white text-[#1F1F1F] font-[family-name:var(--font-poppins)] font-semibold text-[16px] sm:text-[18px] px-8 py-5 rounded-full transition-colors flex items-center justify-center gap-3 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Admission Brochure
            </button>
            <a href="#" className="font-[family-name:var(--font-poppins)] text-white/90 hover:text-white text-[14px] sm:text-[15px] transition-colors underline underline-offset-4">
              Talk to counsellor
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
