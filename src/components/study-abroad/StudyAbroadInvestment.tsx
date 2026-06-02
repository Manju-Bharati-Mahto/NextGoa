import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadInvestment() {
  return (
    <section className={`bg-[#f8f8f8] py-20 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-[1180px] mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#eb3b47] text-center mb-5 leading-tight">
          Ideate & Plan your investment wisely,<br />
          one EMI at a time.
        </h2>
        <p className="text-[#1f2022] text-center text-[16px] md:text-[18px] font-medium mb-12">
          Explore your Fees Options carefully!
        </p>

        {/* Cards Container */}
        <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
          
          {/* Card 1 - Black */}
          <div className="w-full md:w-1/3 bg-[#232323] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[350px]">
            <div>
              <p className="text-gray-300 text-[14px] md:text-[15px] mb-2 font-medium">PU Goa Portion</p>
              <h3 className="text-white text-[28px] md:text-3xl font-semibold mb-4 leading-tight">Standard PU Goa fee</h3>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
                Programme fee for the years spent at PU Goa. See the admissions brochure for the 2026-27 fee structure by faculty.
              </p>
            </div>
            <div>
              <button className="bg-[#eb3b47] hover:bg-[#d6323c] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-colors w-max shadow-md">
                View admissions
              </button>
            </div>
          </div>

          {/* Card 2 - Red */}
          <div className="w-full md:w-1/3 bg-[#eb3b47] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[350px]">
            <div>
              <p className="text-white/90 text-[14px] md:text-[15px] mb-2 font-medium">Abroad portion</p>
              <h3 className="text-white text-[28px] md:text-3xl font-semibold mb-4 leading-tight">Tuition + living costs</h3>
              <p className="text-white/90 text-[15px] leading-relaxed mb-8">
                Vary by country and partner university. Indicative figures and per-country cost sheets available on request.
              </p>
            </div>
            <div>
              <button className="bg-[#0ca7dd] hover:bg-[#0b92c2] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-colors w-max shadow-md">
                Request cost sheet
              </button>
            </div>
          </div>

          {/* Card 3 - Yellow */}
          <div className="w-full md:w-1/3 bg-[#fbdc2a] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[350px]">
            <div>
              <p className="text-gray-800 text-[14px] md:text-[15px] mb-2 font-medium">EMI & financial support</p>
              <h3 className="text-[#1f2022] text-[28px] md:text-3xl font-semibold mb-4 leading-tight">Pay your way</h3>
              <p className="text-gray-800 text-[15px] leading-relaxed mb-8 font-medium">
                Semester EMIs at 8% interest.<br />
                Education loan partners. Forex via in-campus bank. Scholarship guidance for high performers.
              </p>
            </div>
            <div>
              <button className="bg-[#232323] hover:bg-[#111111] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-colors w-max shadow-md">
                Talk to advisor
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Badges */}
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl">
          {[
            'Education loan partners',
            'Currency support',
            'Forex card via in-campus bank',
            'Scholarship guidance',
            'Fee instalments'
          ].map((badge) => (
            <div key={badge} className="bg-[#f0f0f0] border border-[#e5e5e5] px-5 py-2.5 rounded-full text-[#4a4a4a] text-[15px] font-medium shadow-sm">
              {badge}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
