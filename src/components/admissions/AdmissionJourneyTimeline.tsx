"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TimelineStep {
  id: string;
  title: string;
  icon: string;
  redCardTitle: string;
  redCardDescription: string;
  whiteCardTitle: string;
  whiteCardDescription: string;
  nextButtonLabel: string;
}

const steps: TimelineStep[] = [
  {
    id: "step-1",
    title: "Applications Open",
    icon: "assignment",
    redCardTitle: "Applications Open",
    redCardDescription: "Choose your programme and check eligibility.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "Submit your application at goa.paruluniversity.ac.in.",
    nextButtonLabel: "Go to Phase 2 →",
  },
  {
    id: "step-2",
    title: "PU Goa Entrance Test",
    icon: "description",
    redCardTitle: "PU Goa Entrance Test",
    redCardDescription: "Appear for the mandatory entrance examination.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "Wait for the application window to close.",
    nextButtonLabel: "Go to Phase 3 →",
  },
  {
    id: "step-3",
    title: "Last Date to Apply",
    icon: "event",
    redCardTitle: "Last Date to Apply",
    redCardDescription: "Ensure your application is submitted before the deadline.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "The university will evaluate applications.",
    nextButtonLabel: "Go to Phase 4 →",
  },
  {
    id: "step-4",
    title: "Merit List",
    icon: "verified",
    redCardTitle: "Merit List",
    redCardDescription: "Check the official merit list announcement for your selection status.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "Shortlisted candidates will be invited for counselling.",
    nextButtonLabel: "Go to Phase 5 →",
  },
  {
    id: "step-5",
    title: "Counselling Window",
    icon: "group",
    redCardTitle: "Counselling Window",
    redCardDescription: "Attend the counselling session for document verification and seat allocation.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "Confirm your admission by paying the required fees.",
    nextButtonLabel: "Go to Phase 6 →",
  },
  {
    id: "step-6",
    title: "Fee Payment Deadline",
    icon: "currency_rupee",
    redCardTitle: "Fee Payment Deadline",
    redCardDescription: "Complete the fee payment to secure your allotted seat.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "Get ready for your academic journey to begin.",
    nextButtonLabel: "Go to Phase 7 →",
  },
  {
    id: "step-7",
    title: "Orientation & Classes Begin",
    icon: "menu_book",
    redCardTitle: "Orientation & Classes Begin",
    redCardDescription: "Attend the orientation program and start your classes.",
    whiteCardTitle: "What's next",
    whiteCardDescription: "Welcome to Parul University Goa! Start exploring campus life.",
    nextButtonLabel: "Explore Campus →",
  },
];

export function AdmissionJourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const handlePillClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const handleNextPhaseClick = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const currentStepData = steps[activeStep];

  return (
    <section className="w-full bg-[#faf9f6] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">2026-27 timeline</h2>
          <h3 className="text-brand mb-4 section-heading">Your Admission Journey, Your Way!</h3>
          <p className="text-ink section-body">Pick your current stage and then follow the next action!</p>
        </div>

        {/* Selection Box */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between lg:items-start gap-6 lg:gap-12 mb-20 shadow-sm w-full mx-auto max-w-[1200px]">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h4 className="font-semibold text-xl text-ink mb-2 font-poppins">Where are you right now?</h4>
            <p className="text-gray-600">Select your current status, the timeline, process card, and next step update altogether.</p>
          </div>
          
          <div className="lg:w-px lg:h-24 bg-gray-300 hidden lg:block"></div>

          <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-start gap-3">
            <button 
              onClick={() => handlePillClick(0)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeStep === 0 ? 'bg-[#00aee8] text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'}`}
            >
              I AM A BEGINNER
            </button>
            <button 
              onClick={() => handlePillClick(1)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeStep === 1 ? 'bg-[#00aee8] text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'}`}
            >
              SUBMITTED APPLICATION
            </button>
            <button 
              onClick={() => handlePillClick(3)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeStep === 3 ? 'bg-[#00aee8] text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'}`}
            >
              DONE WITH ENTRANCE TEST
            </button>
            <button 
              onClick={() => handlePillClick(4)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeStep === 4 ? 'bg-[#00aee8] text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'}`}
            >
              AWAITING MERIT LIST
            </button>
            <button 
              onClick={() => handlePillClick(5)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeStep === 5 ? 'bg-[#00aee8] text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'}`}
            >
              COMPLETED COUNSELLING
            </button>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mb-20 w-full mx-auto px-4 sm:px-12">
          {/* Progress Bar Background */}
          <div className="absolute top-8 left-[6%] right-[6%] h-2 bg-[#e0f2fe] rounded-full z-0"></div>
          
          {/* Active Progress Bar */}
          <div 
            className="absolute top-8 left-[6%] h-2 bg-[#00aee8] rounded-full transition-all duration-500 z-0"
            style={{ width: `calc(${(activeStep / (steps.length - 1)) * 100}% - ${(activeStep / (steps.length - 1)) * 12}%)` }}
          ></div>

          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              
              return (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 mb-4 ${
                      isActive 
                        ? 'bg-brand text-white scale-110 shadow-md ring-8 ring-brand/10' 
                        : isPast
                          ? 'bg-white text-ink border-2 border-[#00aee8]'
                          : 'bg-white text-gray-400 group-hover:text-ink border-2 border-transparent'
                    }`}
                  >
                    <span className="material-symbols-rounded" style={{ fontSize: isActive ? '32px' : '24px' }}>
                      {step.icon}
                    </span>
                  </div>
                  
                  <div className="text-center w-32">
                    <p className={`text-sm font-bold mb-1 ${isActive || isPast ? 'text-brand' : 'text-brand/60'}`}>
                      Step {index + 1}
                    </p>
                    <p className={`text-[13px] font-semibold leading-tight ${isActive ? 'text-ink' : 'text-gray-600'}`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">
          {/* Red Card */}
          <div className="bg-[#ee364f] rounded-[20px] p-8 sm:px-12 sm:py-10 text-white min-h-[220px] flex flex-col justify-start transition-all duration-300 transform shadow-lg">
            <p className="text-brand-yellow font-medium mb-3">Step {activeStep + 1}</p>
            <h4 className="text-3xl sm:text-4xl font-semibold mb-3 font-poppins">{currentStepData.redCardTitle}</h4>
            <p className="text-white/90 text-lg leading-relaxed">
              {currentStepData.redCardDescription}
            </p>
          </div>

          {/* White Card */}
          <div className="bg-white rounded-[20px] border border-gray-200 p-8 sm:px-12 sm:py-10 min-h-[220px] flex flex-col justify-start transition-all duration-300 transform shadow-sm relative overflow-hidden">
            <p className="text-brand font-medium mb-3">{currentStepData.whiteCardTitle}</p>
            <p className="text-ink text-xl mb-6 leading-relaxed">
              {currentStepData.whiteCardDescription}
            </p>
            
            <div>
              <button 
                onClick={handleNextPhaseClick}
                className="bg-[#00aee8] hover:bg-[#0095c7] text-white font-medium rounded-full px-6 py-2.5 transition-colors inline-block"
              >
                {currentStepData.nextButtonLabel}
              </button>
            </div>
            
            {/* Background pattern/decorations for the white card (optional) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
