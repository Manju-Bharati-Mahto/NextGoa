import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadEligibility() {
  return (
    <section className={`bg-[#f8f8f8] py-20 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-[1180px] mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#eb3b47] text-center mb-6">
          International Pathway Programmes
        </h2>
        <p className="text-gray-700 text-center max-w-4xl text-[15px] md:text-[16px] leading-relaxed mb-16">
          Through Pathway Programs, you can begin your degree at PU Goa and complete the rest at a reputable foreign partner university, earning a degree recognised worldwide. With a foreign degree, exposure to the world, and a solid Indian academic foundation, you get the best of both worlds.
        </p>

        {/* Cards Container */}
        <div className="w-full flex flex-col md:flex-row gap-6 mb-10">
          
          {/* Eligibility Card */}
          <div className="w-full md:w-[45%] flex flex-col bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#1f2022]">
            {/* Header */}
            <div className="bg-[#1f2022] p-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#24c75c] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-white text-[19px] font-semibold">Eligibility checklist</h3>
            </div>
            {/* Body */}
            <div className="p-8 flex-1">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#24c75c] mt-2.5 shrink-0"></div>
                  <span className="text-gray-800 text-[16px] sm:text-[15px] leading-snug font-medium">Minimum 7.00 CGPA on a 10-point scale<br/>(≈ 70%) at the time of application</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#24c75c] mt-2 shrink-0"></div>
                  <span className="text-gray-800 text-[16px] sm:text-[15px] leading-snug font-medium">Zero backlogs</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#24c75c] mt-2 shrink-0"></div>
                  <span className="text-gray-800 text-[16px] sm:text-[15px] leading-snug font-medium">No prior visa rejection</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#24c75c] mt-2 shrink-0"></div>
                  <span className="text-gray-800 text-[16px] sm:text-[15px] leading-snug font-medium">No pending fees</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#24c75c] mt-2 shrink-0"></div>
                  <span className="text-gray-800 text-[16px] sm:text-[15px] leading-snug font-medium">Good conduct certificate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* English Requirements Card */}
          <div className="w-full md:w-[55%] flex flex-col bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#eb3b47]">
             {/* Header */}
             <div className="bg-[#eb3b47] p-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#24c75c] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-white text-[19px] font-semibold">English-language requirements</h3>
            </div>
            {/* Body */}
            <div className="p-4 flex-1 flex flex-col justify-center">
              {/* Table */}
              <div className="w-full flex flex-col">
                <div className="flex border-b border-gray-200">
                  <div className="w-[35%] text-[#eb3b47] text-[15px] sm:text-[14px] font-medium py-4 px-3 sm:px-6 flex items-center">IELTS Academic</div>
                  <div className="w-[30%] text-gray-800 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center font-medium">6.0 - 6.5 overall</div>
                  <div className="w-[35%] text-gray-500 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center">Most partners</div>
                </div>
                <div className="flex border-b border-gray-200">
                  <div className="w-[35%] text-[#eb3b47] text-[15px] sm:text-[14px] font-medium py-4 px-3 sm:px-6 flex items-center">TOEFL iBT</div>
                  <div className="w-[30%] text-gray-800 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center font-medium">79 - 90</div>
                  <div className="w-[35%] text-gray-500 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center">Some US, Canada partners</div>
                </div>
                <div className="flex border-b border-gray-200">
                  <div className="w-[35%] text-[#eb3b47] text-[15px] sm:text-[14px] font-medium py-4 px-3 sm:px-6 flex items-center">PTE Academic</div>
                  <div className="w-[30%] text-gray-800 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center font-medium">50 - 58</div>
                  <div className="w-[35%] text-gray-500 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center">Australia, UK partners</div>
                </div>
                <div className="flex border-b border-gray-200">
                  <div className="w-[35%] text-[#eb3b47] text-[15px] sm:text-[14px] font-medium py-4 px-3 sm:px-6 flex items-center">Duolingo English Test</div>
                  <div className="w-[30%] text-gray-800 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center font-medium">105 - 115</div>
                  <div className="w-[35%] text-gray-500 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center">Selected partners</div>
                </div>
                <div className="flex">
                  <div className="w-[35%] text-[#eb3b47] text-[15px] sm:text-[14px] font-medium py-4 px-3 sm:px-6 flex items-center">English-medium 10+2</div>
                  <div className="w-[30%] text-gray-800 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center font-medium">Letter from PU Goa</div>
                  <div className="w-[35%] text-gray-500 text-[15px] sm:text-[14px] py-4 px-3 sm:px-6 border-l border-gray-200 flex items-center">UK / NZ specific</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="w-full bg-[#fdfbf2] border border-[#f3ead4] rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <div className="shrink-0 mt-0.5">
            <svg className="w-6 h-6 text-[#eb3b47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-800 text-[16px] sm:text-[15px] leading-relaxed font-medium">
              1. <span className="font-semibold">Past visa rejection:</span> a single rejection on a tourist or unrelated student visa may not disqualify you. Talk to our advisor with your case details.
            </p>
            <p className="text-gray-800 text-[16px] sm:text-[15px] leading-relaxed font-medium">
              2. Scores vary by partner. Some partners waive the English test for English-medium high-school graduates with a letter from PU Goa. Confirm partner-specific requirements with the Global Pathway advisor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
