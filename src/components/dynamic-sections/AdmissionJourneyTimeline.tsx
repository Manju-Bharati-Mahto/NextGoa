"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  data: any;
}

export function AdmissionJourneyTimeline({ data }: Props) {
  const router = useRouter();

  const steps = useMemo(() => data?.steps || [], [data]);

  const selectorButtons = useMemo(() => data?.selectorButtons || [], [data]);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [data]);

  const currentStepData = steps?.[activeStep] || {};

  const handleStepSelect = (step: number) => {
    if (step < 0 || step >= steps.length) return;

    setActiveStep(step);

    setTimeout(() => {
      if (window.innerWidth < 1024) {
        document.getElementById(`timeline-step-${step}`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        document.getElementById("timeline-view")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 150);
  };

  const handleNextPhaseClick = () => {
    if (activeStep < steps.length - 1) {
      handleStepSelect(activeStep + 1);
    } else {
      router.push(data?.nextUrl || "/campus");
    }
  };

  return (
    <section className="w-full bg-[#faf9f6] px-4 sm:px-8 xl:px-16 py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}

        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">{data?.eyebrow}</h2>

          <h3 className="text-brand mb-4 section-heading">{data?.heading}</h3>

          <p className="text-ink section-body">{data?.description}</p>
        </div>

        {/* Selection Box */}

        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between md:items-start gap-6 md:gap-12 mb-16 shadow-sm w-full mx-auto max-w-[1200px]">
          {/* Left */}

          <div className="md:w-1/3 text-center md:text-left">
            <h4 className="font-semibold text-3xl sm:text-2xl text-ink mb-2 font-poppins font-bold">
              {data?.selectionHeading}
            </h4>

            <p className="text-gray-500 text-lg sm:text-base leading-relaxed">
              {data?.selectionDescription}
            </p>
          </div>

          <div className="md:w-px md:self-stretch bg-gray-200 hidden md:block" />

          {/* Buttons */}

          <div className="w-full md:w-2/3 flex overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-3 justify-start md:flex-wrap md:justify-start scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {selectorButtons.map((button: any, index: number) => (
              <button
                key={index}
                onClick={() =>
                 handleStepSelect(button.step ?? index)
                }
                className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeStep === (button.step ?? index)
                    ? "bg-[#00aee8] text-white"
                    : "bg-gray-100 text-ink hover:bg-gray-200"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id="timeline-view"
          className="scroll-mt-24 md:scroll-mt-32"
          aria-hidden="true"
        />
        {/* ───────── Desktop Timeline ───────── */}

        <div className="hidden lg:block">
          {/* Timeline */}

          <div className="relative mb-16 w-full mx-auto max-w-[1200px] px-8">
            {/* Background Line */}

            <div className="absolute top-[26px] left-[8%] right-[8%] h-[3px] bg-gray-200 rounded-full z-0" />

            {/* Active Line */}

            <div
              className="absolute top-[26px] left-[8%] h-[3px] bg-[#00aee8] rounded-full transition-all duration-500 z-0"
              style={{
                width:
                  steps.length > 1
                    ? `${(activeStep / (steps.length - 1)) * 84}%`
                    : "0%",
              }}
            />

            <div className="flex justify-between relative z-10">
              {steps.map((step: any, index: number) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <div
                    key={step.id || index}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => handleStepSelect(index)}
                  >
                    {/* Circle */}

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 mb-4 ${
                        isActive
                          ? "bg-brand text-white scale-110 shadow-[0_0_0_8px_rgba(238,54,79,0.15)] z-20"
                          : isPast
                            ? "bg-white text-[#00aee8] border-2 border-[#00aee8] z-10"
                            : "bg-white text-gray-400 border-2 border-gray-100 group-hover:border-gray-300 group-hover:text-ink z-10"
                      }`}
                    >
                      <span
                        className="material-symbols-rounded"
                        style={{
                          fontSize: isActive ? "28px" : "22px",
                        }}
                      >
                        {step.icon || "assignment"}
                      </span>
                    </div>

                    {/* Step */}

                    <div className="text-center w-32">
                      <p
                        className={`text-[13px] font-bold mb-0.5 tracking-wide uppercase ${
                          isActive || isPast ? "text-brand" : "text-gray-400"
                        }`}
                      >
                        Step {index + 1}
                      </p>

                      <p
                        className={`text-sm font-semibold leading-tight ${
                          isActive ? "text-ink font-bold" : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto max-w-[1200px]">
            {/* Red Card */}

            <div className="bg-[#ee364f] rounded-[24px] p-8 sm:p-10 text-white min-h-[225px] flex flex-col justify-between shadow-md transition-all duration-300">
              <div
                key={activeStep}
                className="animate-fade-in h-full flex flex-col justify-between"
              >
                <div>
                  <p className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-2">
                    Step {activeStep + 1} of {steps.length}
                  </p>

                  <h4 className="text-3xl sm:text-4xl font-bold mb-3 font-poppins">
                    {currentStepData.redCardTitle}
                  </h4>

                  <p className="text-white/90 text-[17px] leading-relaxed max-w-md">
                    {currentStepData.redCardDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* White Card */}

            <div className="bg-white rounded-[24px] border border-gray-200 p-8 sm:p-10 min-h-[225px] flex flex-col justify-between shadow-sm transition-all duration-300">
              <div
                key={activeStep}
                className="animate-fade-in h-full flex flex-col justify-between"
              >
                <div>
                  <p className="text-brand font-bold text-sm uppercase tracking-widest mb-2">
                    {currentStepData.whiteCardTitle}
                  </p>

                  <p className="text-ink text-xl font-medium mb-6 leading-relaxed">
                    {currentStepData.whiteCardDescription}
                  </p>
                </div>

                <div>
                  <button
                    onClick={handleNextPhaseClick}
                    className="bg-[#00aee8] hover:bg-[#0095c7] text-white font-semibold rounded-full px-7 py-3 transition-colors inline-block text-sm"
                  >
                    {currentStepData.nextButtonLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ───────── MOBILE / TABLET TIMELINE ───────── */}

        <div className="lg:hidden w-full max-w-[600px] mx-auto">
          <div className="relative mt-8">
            {/* Vertical Line */}

            <div className="absolute left-[18px] top-6 bottom-6 w-0.5 bg-[#e0f2fe]" />

            <div className="space-y-6">
              {steps.map((step: any, index: number) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <div
                    key={step.id || index}
                    id={`timeline-step-${index}`}
                    className="relative pl-10 pr-2 transition-all duration-300"
                  >
                    {/* Timeline Dot */}

                    <div className="absolute left-[9px] top-6 w-5 h-5 z-10 flex items-center justify-center">
                      {isActive ? (
                        <div className="w-6 h-6 rounded-full border-2 border-[#00aee8] bg-white flex items-center justify-center shadow-sm -ml-0.5 -mt-0.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#00aee8]" />
                        </div>
                      ) : isPast ? (
                        <div className="w-5 h-5 rounded-full border-2 border-[#00aee8] bg-white" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-200 bg-white" />
                      )}
                    </div>

                    {/* Card */}

                    <div
                      onClick={() => handleStepSelect(index)}
                      className={`w-full rounded-2xl p-5 text-left cursor-pointer transition-all duration-300 shadow-sm ${
                        isActive
                          ? "bg-[#ee364f] text-white shadow-md scale-[1.01]"
                          : "bg-white hover:bg-gray-50 border border-gray-100 text-ink"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span
                            className={`text-[12px] font-bold uppercase tracking-wider ${
                              isActive ? "text-brand-yellow" : "text-brand"
                            }`}
                          >
                            Step {index + 1}
                          </span>

                          <h4
                            className={`text-xl sm:text-base font-bold font-poppins ${
                              isActive ? "text-white" : "text-ink"
                            }`}
                          >
                            {step.title}
                          </h4>
                        </div>

                        <div
                          className={`p-1.5 rounded-full ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "bg-gray-50 text-gray-400"
                          }`}
                        >
                          <span
                            className="material-symbols-rounded"
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            {step.icon || "assignment"}
                          </span>
                        </div>
                      </div>

                      {/* Expand */}

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="mt-4 pt-4 border-t border-white/20 animate-fade-in">
                            <p className="text-white/90 text-base sm:text-sm leading-relaxed mb-4">
                              {step.redCardDescription}
                            </p>

                            <div className="bg-white/10 rounded-xl p-3.5 mb-4">
                              <span className="block text-[12px] font-bold uppercase tracking-wider text-brand-yellow mb-1">
                                {step.whiteCardTitle}
                              </span>

                              <p className="text-white text-[15px] leading-relaxed">
                                {step.whiteCardDescription}
                              </p>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();

                                if (index < steps.length - 1) {
                                  handleStepSelect(index + 1);
                                } else {
                                  router.push(data?.nextUrl || "/campus");
                                }
                              }}
                              className="w-full bg-white hover:bg-gray-100 text-ink font-semibold text-sm sm:text-xs rounded-full py-3 transition-colors shadow-sm"
                            >
                              {step.nextButtonLabel}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
