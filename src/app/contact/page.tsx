import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact" },
};

import ContactOffices from "@/components/contact/ContactOffices";

import GetInTouch from "@/components/contact/GetInTouch";

export default function ContactUs() {
  return (
    <main className="flex-1 overflow-x-hidden font-poppins">
      <section 
        className="relative flex min-h-screen flex-col items-center justify-center pt-20 overflow-hidden bg-[url('/hero-campus.webp')] bg-cover bg-bottom bg-no-repeat"
      >
        {/* Light gradient overlay to ensure text is readable if sky gets too bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl px-4 text-center pb-20">
          <h1 className="font-poppins mx-auto w-full max-w-none text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-[1.1] tracking-tight text-[#111111]">
            Contact Us
          </h1>
        </div>

        {/* Bottom fade to transition smoothly into the next section (white) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent pointer-events-none" />
      </section>

      {/* General Contact Information Section */}
      <section className="w-full bg-[#FDFCF8] pb-24 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <img src="/contact/contact1.svg" alt="University Logo" className="w-24 h-auto mb-4" />
            <h2 className="text-[#E74C5E] font-bold text-[32px] sm:text-[40px] tracking-tight font-poppins">
              General Contact Information
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left Card - Address */}
            <a 
              href="https://www.google.com/maps/place/Parul+University+Goa/@15.1288025,73.946826,502m/data=!3m1!1e3!4m6!3m5!1s0x3bbe4d7ef23d2303:0xaebb37dd7e075d01!8m2!3d15.1287554!4d73.9477978!16s%2Fg%2F11xw2ktbks?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-2/5 bg-[#E74C5E] rounded-[24px] p-8 text-white flex flex-col justify-center shadow-sm hover:shadow-lg transition-all cursor-pointer block"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E74C5E" className="w-6 h-6 transform -translate-y-[1px]">
                  <path d="M12 2L21 21L12 17L3 21L12 2Z" />
                </svg>
              </div>
              <h3 className="text-[#FCE34B] font-semibold text-[22px] mb-4 font-poppins">
                Parul University,
              </h3>
              <div className="w-full h-px bg-white/30 mb-5" />
              <p className="text-[15px] leading-relaxed font-poppins">
                Goa Near ONGC, Betul,<br />
                Taluka - Quepem, Dist - Kushavati<br />
                Goa - 403723
              </p>
            </a>

            {/* Right Column */}
            <div className="w-full lg:w-3/5 flex flex-col gap-6">
              
              {/* Top Card - Email */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=admissions@goa.paruluniversity.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FCE34B] rounded-[24px] p-6 sm:p-8 flex items-center gap-6 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-[52px] h-[40px] bg-[#222222] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FCE34B" className="w-6 h-6">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                </div>
                <p className="text-[#111111] font-bold text-[18px] sm:text-[22px] break-all sm:break-normal font-poppins">
                  admissions@goa.paruluniversity.ac.in
                </p>
              </a>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row gap-6 h-full">
                
                {/* Phone Card */}
                <a 
                  href="tel:18008909090"
                  className="bg-[#222222] rounded-[24px] p-6 sm:p-8 flex-1 flex items-center gap-6 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-[20px] sm:text-[24px] font-poppins">
                    18008909090
                  </p>
                </a>

                {/* Decorative Cyan Card */}
                <div className="flex-1 min-h-[144px]">
                  <img 
                    src="/contact/contact2.svg" 
                    alt="Contact Decoration" 
                    className="w-full h-full object-cover rounded-[24px] shadow-sm"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Regional Offices Section with Animated Waves */}
      <section className="relative w-full">
        {/* The Blue Section */}
        <div className="relative w-full z-10 pointer-events-none">
          {/* Blue Background Layers */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Top white-to-blue wave */}
            <div className="absolute top-0 left-0 right-0 h-[clamp(50px,8vw,500px)] overflow-hidden bg-[#FDFCF8]">
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
            
            {/* Middle Solid Blue Fill */}
            <div 
              className="absolute inset-x-0 bg-[#0CAADD]" 
              style={{
                top: "calc(clamp(50px, 8vw, 500px) - 1.5px)",
                bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)"
              }}
            />
            
            {/* Bottom yellow-to-blue wave */}
            <div className="absolute bottom-0 left-0 right-0 h-[clamp(50px,8vw,500px)] overflow-hidden bg-[#FEDB2F]">
              <div className="w-full h-full" style={{ transform: "scaleY(-1)" }}>
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
            </div>
          </div>

          {/* Content Layer - Grid of Cards */}
          <div 
            className="relative z-10 mx-auto max-w-5xl px-6 w-full pointer-events-auto"
            style={{ 
              paddingTop: "clamp(5rem, 12vw, 200px)", 
              paddingBottom: "clamp(5rem, 12vw, 200px)" 
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Card 1 */}
              <div className="bg-[#CF4153] rounded-[20px] p-8 text-white shadow-md flex flex-col gap-4 font-poppins">
                <h3 className="text-[#FCE34B] text-[24px] font-bold">Panjim</h3>
                <div className="w-full h-px bg-white/20 my-1" />
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span className="font-semibold">Rohan Nanodkar</span>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rohan.nanodkar19784@paruluniversity.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    rohan.nanodkar19784@paruluniversity.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+916353211070" className="hover:underline">+91 6353211070</a>
                </div>
                <div className="flex items-start gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="leading-relaxed">F-31 and F-32, 1st Floor, Block C, Alfran Plaza, Opp. Don Bosco High School, Panjim - 403001, Goa</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#CF4153] rounded-[20px] p-8 text-white shadow-md flex flex-col gap-4 font-poppins">
                <h3 className="text-[#FCE34B] text-[24px] font-bold uppercase">Sindhudurg</h3>
                <div className="w-full h-px bg-white/20 my-1" />
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span className="font-semibold">Prathmesh Ghatkar</span>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=prathamesh.ghatkar39870@paruluniversity.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    prathamesh.ghatkar39870@paruluniversity.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+919274388498" className="hover:underline">+91 9274388498</a>
                </div>
                <div className="flex items-start gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="leading-relaxed">Office No. S-33, First Floor, Rameshwar Plaza, Near Moti Talav, Sawantwadi- 416510, Sindhudurg, Maharashtra</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#CF4153] rounded-[20px] p-8 text-white shadow-md flex flex-col gap-4 font-poppins">
                <h3 className="text-[#FCE34B] text-[24px] font-bold uppercase">Kolhapur</h3>
                <div className="w-full h-px bg-white/20 my-1" />
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span className="font-semibold">Suraj Koushik</span>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=suraj.koushik38877@paruluniversity.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    suraj.koushik38877@paruluniversity.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+919274412923" className="hover:underline">+91 9274412923</a>
                </div>
                <div className="flex items-start gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="leading-relaxed">Office No. -304, C.s. No. 455 B/1, Matoshree Plaza, E Ward, Venus Corner, Station Road, Shahupuri, Kolhapur-416001, Maharashtra</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#CF4153] rounded-[20px] p-8 text-white shadow-md flex flex-col gap-4 font-poppins">
                <h3 className="text-[#FCE34B] text-[24px] font-bold">Panjim</h3>
                <div className="w-full h-px bg-white/20 my-1" />
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span className="font-semibold">Pavan Manurkar</span>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=pavan.manurkar38928@paruluniversity.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    pavan.manurkar38928@paruluniversity.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+919274398117" className="hover:underline">+91 9274398117</a>
                </div>
                <div className="flex items-start gap-3 text-[14px]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="leading-relaxed">Office No. 202, Lakshmi Chambers, Opposite Zillha Parishad, Sangli Miraj Road, Sangli-416416, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <ContactOffices />

      <GetInTouch />
    </main>
  );
}
