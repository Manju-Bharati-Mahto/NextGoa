import React from "react";

export function FinancialAid() {
  return (
    <section className="w-full bg-[#f8f8f8] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="font-poppins font-bold text-4xl sm:text-[56px] text-[#e73649] text-center mb-12">
          Financial Aid &amp; Payment Options
        </h2>

        {/* Cards Row */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 mb-12 justify-center items-stretch">
          {/* Card 1: Online Payment */}
          <div className="w-full md:w-[50.86%] flex-shrink-0 relative aspect-[590/230]">
            <img 
              src="/admissions/payment-1.svg" 
              alt="Online Payment Options background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative z-10 w-full h-full flex flex-col justify-start items-end p-6 sm:p-8">
              <div className="w-[50%] sm:w-[45%] xl:w-[42%] flex flex-col h-full">
                <div>
                  <h4 className="font-poppins font-semibold text-white text-[24px] sm:text-[28px] mb-2 leading-tight">Online Payment</h4>
                  <p className="font-[family-name:var(--font-poppins)] text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    Drop your details below - a counsellor will call you within 24 hours.
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase">Card</span>
                  <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase">UPI</span>
                  <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase">Net Banking</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2: Education Loans */}
          <div className="w-full md:w-[24.57%] flex-shrink-0 relative aspect-[285/230]">
            <img 
              src="/admissions/payment-2.svg" 
              alt="Education Loans background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-start">
              <div>
                <h4 className="font-poppins font-semibold text-white text-[24px] sm:text-[28px] mb-2 leading-tight">Education<br />Loans</h4>
                <p className="font-[family-name:var(--font-poppins)] text-white text-[14px] sm:text-[16px] leading-[1.4] pr-2">
                  Drop your details below - a counsellor will call you within 24 hours.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase">HDFC</span>
                <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase">Avanse</span>
                <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase">Auxilo</span>
              </div>
            </div>
          </div>
          
          {/* Card 3: Instalment Plans */}
          <div className="w-full md:w-[24.57%] flex-shrink-0 relative aspect-[285/230]">
            <img 
              src="/admissions/payment-3.svg" 
              alt="Instalment Plans background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-start">
              <div>
                <h4 className="font-poppins font-semibold text-ink text-[24px] sm:text-[28px] mb-3 leading-tight">Instalment<br />Plans</h4>
                <p className="font-[family-name:var(--font-poppins)] text-ink text-[14px] sm:text-[16px] leading-[1.4] pr-2">
                  Available where<br />applicable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="bg-[#1f1f1f] rounded-2xl px-4 py-3 sm:px-6 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 overflow-hidden">
          <p className="font-[family-name:var(--font-poppins)] text-white text-[14px] sm:text-[16px] xl:text-[18px] md:whitespace-nowrap truncate">
            <span className="font-bold">Refund policy:</span> Fee refunds processed in line with UGC norms. Read the full refund policy in the prospectus.
          </p>
          <button className="flex-shrink-0 bg-[#e73649] hover:bg-[#ff3148] text-white font-sans font-medium text-[16px] sm:text-[18px] py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Fees Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
