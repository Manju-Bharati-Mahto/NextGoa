"use client";

import { useState } from "react";
import { faqSchema, type FaqItem } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs: FaqItem[] = [
  {
    question: "What is the placement record at Parul University Goa?",
    answer: "Parul University Goa has a strong placement record, with dedicated training and placement cells working year-round to ensure students are industry-ready and connected with top employers.",
  },
  {
    question: "Who are the top recruiters at PU Goa?",
    answer: "Our top recruiters include leading multinational corporations, tech giants, and prominent national companies across various sectors such as IT, Management, and Healthcare.",
  },
  {
    question: "What is the highest package offered to a PU graduate?",
    answer: "The highest package offered varies by year and programme, but our graduates consistently secure highly competitive salaries in top-tier companies.",
  },
  {
    question: "Are placements available for non-engineering students?",
    answer: "Yes, absolutely. We have dedicated placement drives for Management, Pharmacy, Arts, and other non-engineering faculties with equal opportunities for high-value packages.",
  },
  {
    question: "Are pre-placement offers available through internships?",
    answer: "Yes, many of our students secure Pre-Placement Offers (PPOs) during their final-year internships and industry training programmes.",
  },
];

function FaqAccordionItem({ f, isOpen, onToggle }: { f: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-[family-name:var(--font-poppins)] text-base font-medium text-ink"
      >
        {f.question}
        <span className="shrink-0 text-[#ED383F] text-2xl font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6">
          <p className="mt-1 font-[family-name:var(--font-poppins)] text-sm leading-7 text-ink/70">
            {f.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F9F9F9] pb-24 pt-10 font-[family-name:var(--font-poppins)]">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-[22px] font-bold text-ink mb-3 tracking-wide font-poppins">
            FAQs
          </h2>
          <h3 className="text-4xl sm:text-[3.2rem] font-semibold text-[#ED383F] tracking-tight leading-tight font-poppins">
            Frequently asked questions about campus life.
          </h3>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[400px_1fr] lg:items-stretch lg:gap-12">
          {/* Yellow accent card */}
          <div className="relative hidden min-h-[320px] w-full overflow-hidden rounded-[32px] bg-[#FFD523] lg:block">
            <svg
              viewBox="57 102 238 228"
              fill="none"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2"
            >
              <g opacity="0.6">
                <path d="M235.499 216.428C268.36 216.428 294.999 190.921 294.999 159.456C294.999 127.992 268.36 102.484 235.499 102.484C202.638 102.484 175.999 127.992 175.999 159.456C175.999 190.921 202.638 216.428 235.499 216.428Z" fill="white" />
                <path d="M116.5 216.428C149.361 216.428 176 190.921 176 159.456C176 127.992 149.361 102.484 116.5 102.484C83.6392 102.484 57 127.992 57 159.456C57 190.921 83.6392 216.428 116.5 216.428Z" fill="white" />
                <path d="M235.499 330.369C268.36 330.369 294.999 304.861 294.999 273.397C294.999 241.932 268.36 216.425 235.499 216.425C202.638 216.425 175.999 241.932 175.999 273.397C175.999 304.861 202.638 330.369 235.499 330.369Z" fill="white" />
                <path d="M116.5 330.369C149.361 330.369 176 304.861 176 273.397C176 241.932 149.361 216.425 116.5 216.425C83.6392 216.425 57 241.932 57 273.397C57 304.861 83.6392 330.369 116.5 330.369Z" fill="white" />
                <path d="M237.912 157.146H114.088V275.709H237.912V157.146Z" fill="#E0E0E0" />
                <path d="M235.499 216.422C202.643 216.422 176.001 241.931 176.001 273.399C176.001 241.931 149.36 216.422 116.504 216.422C149.36 216.422 176.001 190.921 176.001 159.452C176.001 190.921 202.643 216.422 235.499 216.422Z" fill="white" />
              </g>
            </svg>
          </div>

          {/* Accordion list */}
          <ul className="space-y-4">
            {faqs.map((f, i) => (
              <li key={f.question}>
                <FaqAccordionItem 
                  f={f} 
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
