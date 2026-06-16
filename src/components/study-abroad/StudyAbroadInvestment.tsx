"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cta } from "@/lib/navigation";
import CostSheetModal from "./CostSheetModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadInvestment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`bg-[#f8f8f8] py-20 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-[1180px] mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-[#eb3b47] text-center mb-5 section-heading">
          Ideate & Plan your investment wisely,<br />
          one EMI at a time.
        </h2>
        <p className="text-[#1f2022] text-center mb-12 section-subheading">
          Explore Your Fees Options Carefully!
        </p>

        {/* Cards Container */}
        <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
          
          {/* Card 1 - Black */}
          <div className="w-full md:w-1/3 bg-[#232323] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:min-h-[350px] min-h-[320px]">
            <div>
              <p className="text-gray-300 text-[15px] md:text-[15px] mb-2 font-medium">PU Goa Portion</p>
              <h3 className="text-white text-[30px] md:text-3xl font-bold mb-4 leading-tight">Standard PU Goa fee</h3>
              <p className="text-gray-300 text-[16px] leading-relaxed mb-8">
                Programme fee for the years spent at PU Goa. See the admissions brochure for the 2026-27 fee structure by faculty.
              </p>
            </div>
            <div>
              <a href="/documents/Prospectus_AY_2026_27.pdf" download="Prospectus A.Y. 2026-27.pdf" className="inline-block bg-[#eb3b47] hover:bg-[#d6323c] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-colors w-max shadow-md">
                Download Prospectus
              </a>
            </div>
          </div>

          {/* Card 2 - Red */}
          <div className="w-full md:w-1/3 bg-[#eb3b47] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:min-h-[350px] min-h-[320px]">
            <div>
              <p className="text-white/90 text-[15px] md:text-[15px] mb-2 font-medium">Abroad portion</p>
              <h3 className="text-white text-[30px] md:text-3xl font-bold mb-4 leading-tight">Tuition + living costs</h3>
              <p className="text-white/90 text-[16px] leading-relaxed mb-8">
                Vary by country and partner university. Indicative figures and per-country cost sheets available on request.
              </p>
            </div>
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0ca7dd] hover:bg-[#0b92c2] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-colors w-max shadow-md"
              >
                Connect with Counsellor
              </button>
            </div>
          </div>

          {/* Card 3 - Yellow */}
          <div className="w-full md:w-1/3 bg-[#fbdc2a] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:min-h-[350px] min-h-[320px]">
            <div>
              <p className="text-gray-800 text-[15px] md:text-[15px] mb-2 font-medium">EMI & financial support</p>
              <h3 className="text-[#1f2022] text-[30px] md:text-3xl font-bold mb-4 leading-tight">Pay your way</h3>
              <p className="text-gray-800 text-[16px] leading-relaxed mb-8 font-medium">
                Semester EMIs at 8% interest.<br />
                Education loan partners. Forex via in-campus bank. Scholarship guidance for high performers.
              </p>
            </div>
            <div>
              <Link href={cta.apply} className="inline-block bg-[#232323] hover:bg-[#111111] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-colors w-max shadow-md">
                Talk to advisor
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 max-w-6xl w-full">
          {[
            'Education loan partners',
            'Currency support',
            'Forex card via in-campus bank',
            'Scholarship guidance',
            'Fee instalments'
          ].map((badge) => (
            <div key={badge} className="bg-[#f0f0f0] border border-[#e5e5e5] px-5 py-3 rounded-full text-[#4a4a4a] text-[16px] font-medium shadow-sm w-full sm:w-auto text-center">
              {badge}
            </div>
          ))}
        </div>

      </div>
      
      <CostSheetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
