"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is the placement record at Parul University Goa?",
    answer: "Parul University Goa has a strong placement record, with numerous top-tier companies recruiting from our campus every year. We offer dedicated career support and robust industry connections to ensure our students secure excellent opportunities.",
  },
  {
    question: "Who are the top recruiters at PU Goa?",
    answer: "Our top recruiters include leading multinational corporations, innovative startups, and major national enterprises across sectors like IT, manufacturing, finance, and consulting.",
  },
  {
    question: "What is the highest package offered to a PU graduate?",
    answer: "The highest package varies by year and programme, but our graduates consistently receive competitive offers, with top packages often matching premium industry standards for fresh talent.",
  },
  {
    question: "Are placements available for non-engineering students?",
    answer: "Absolutely. We have dedicated placement drives for all faculties including Management, Arts, Design, and Sciences, partnering with sector-specific recruiters.",
  },
  {
    question: "Are pre-placement offers available through internships?",
    answer: "Yes, many of our students secure pre-placement offers (PPOs) after successfully completing their industry internships during their final or pre-final years.",
  },
];

export default function EngineeringFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-ink font-semibold text-[20px] sm:text-[22px] tracking-wide mb-2">
            FAQs
          </h2>
          <h3 className="font-poppins font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-[#E73649]">
            Frequently asked questions about campus life.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch w-full">
          {/* Left Side: Graphic */}
          <div className="hidden lg:block w-[340px] shrink-0 relative min-h-[320px] overflow-hidden rounded-[24px] bg-[#FEDB2F]">
            <svg
              viewBox="57 102 238 228"
              fill="none"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            >
              <g opacity="0.5">
                <path d="M235.499 216.428C268.36 216.428 294.999 190.921 294.999 159.456C294.999 127.992 268.36 102.484 235.499 102.484C202.638 102.484 175.999 127.992 175.999 159.456C175.999 190.921 202.638 216.428 235.499 216.428Z" fill="white" />
                <path d="M116.5 216.428C149.361 216.428 176 190.921 176 159.456C176 127.992 149.361 102.484 116.5 102.484C83.6392 102.484 57 127.992 57 159.456C57 190.921 83.6392 216.428 116.5 216.428Z" fill="white" />
                <path d="M235.499 330.369C268.36 330.369 294.999 304.861 294.999 273.397C294.999 241.932 268.36 216.425 235.499 216.425C202.638 216.425 175.999 241.932 175.999 273.397C175.999 304.861 202.638 330.369 235.499 330.369Z" fill="white" />
                <path d="M116.5 330.369C149.361 330.369 176 304.861 176 273.397C176 241.932 149.361 216.425 116.5 216.425C83.6392 216.425 57 241.932 57 273.397C57 304.861 83.6392 330.369 116.5 330.369Z" fill="white" />
                <path d="M237.912 157.146H114.088V275.709H237.912V157.146Z" fill="#E0E0E0" />
                <path d="M235.499 216.422C202.643 216.422 176.001 241.931 176.001 273.399C176.001 241.931 149.36 216.422 116.504 216.422C149.36 216.422 176.001 190.921 176.001 159.452C176.001 190.921 202.643 216.422 235.499 216.422Z" fill="white" />
              </g>
            </svg>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-[65%] flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[16px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-medium text-ink text-[15px] sm:text-[16px] pr-4">
                      {faq.question}
                    </span>
                    <span 
                      className="shrink-0 text-[#E73649] transition-transform duration-300 ease-in-out"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 text-ink/80 text-[14px] sm:text-[15px] leading-relaxed">
                      <hr className="border-gray-100 mb-4" />
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
