import React from "react";

export default function PhdDoctoralProcess() {
  const steps = [
    {
      number: "1.",
      title: "Coursework",
      desc: "Mandatory PhD coursework – research methodology, RPE and discipline-specific advanced courses.",
      theme: "red"
    },
    {
      number: "2.",
      title: "DRC",
      desc: "Doctoral Research Committee approves your research proposal and supervisor allocation.",
      theme: "blue"
    },
    {
      number: "3.",
      title: "Comprehensive",
      desc: "Comprehensive examination – written and oral defence of your area of study.",
      theme: "yellow"
    },
    {
      number: "4.",
      title: "Synopsis",
      desc: "Submission of synopsis after publication of mandated peer-reviewed papers.",
      theme: "yellow"
    },
    {
      number: "5.",
      title: "Viva",
      desc: "Open viva voce defence in front of internal and external examiners.",
      theme: "red"
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] sm: py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-ink mb-3 section-subheading">
            Doctoral Process
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            Coursework to viva.
          </h3>
          <p className="text-ink/90 max-w-2xl mx-auto section-body">
            A clear, milestone-driven path from enrolment to defence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-[1100px] mx-auto">
          {steps.map((step, idx) => {
            const isRed = step.theme === "red";
            const isBlue = step.theme === "blue";
            const isYellow = step.theme === "yellow";
            
            let bottomBgClass = "";
            let bottomTextClass = "";

            if (isRed) {
              bottomBgClass = "bg-[#E73649]";
              bottomTextClass = "text-white/95";
            } else if (isBlue) {
              bottomBgClass = "bg-[#0CAADD]";
              bottomTextClass = "text-white/95";
            } else if (isYellow) {
              bottomBgClass = "bg-[#FDE047]";
              bottomTextClass = "text-ink/90";
            }

            return (
              <div 
                key={idx} 
                className={`w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col`}
              >
                <div className="bg-white p-6 sm:p-8 shrink-0 border border-black/5 border-b-0">
                  <h4 className="font-poppins font-bold text-[22px] sm:text-[26px] text-ink mb-1 leading-tight">
                    {step.number}
                  </h4>
                  <h4 className="font-poppins font-bold text-[22px] sm:text-[26px] text-ink leading-tight">
                    {step.title}
                  </h4>
                </div>
                
                <div className={`${bottomBgClass} p-6 sm:p-8 flex-grow`}>
                  <p className={`${bottomTextClass} text-[15px] sm:text-[16px] font-medium leading-relaxed`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
