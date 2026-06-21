"use client";

import { useState } from "react";
import { faqSchema, type FaqItem } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs: FaqItem[] = [
  {
    question: "What degree structures are offered at Parul University Goa?",
    answer: "PU Goa offers 27 programmes across eight faculties for the 2026-27 academic year, ranging from Diploma to Doctoral level. These cover Engineering, IT and Computer Science; Management Studies; Pharmacy; Nursing; Physiotherapy; Allied and Healthcare Sciences; Hotel Management and Catering Technology; and PhD. The popular courses are Cyber Security and Data Science; MBA with specialisations in Analytics and Finance; B.Pharm; B.Sc. Nursing; BPT; and BHMCT in Hotel Management and Catering Technology.",
  }
];

function FaqAccordionItem({ f, isOpen, onToggle }: { f: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-[family-name:var(--font-poppins)] text-base font-medium text-ink"
      >
        {f.question}
        <svg
          className={`shrink-0 text-[#ED383F] w-6 h-6 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F9F9F9] font-[family-name:var(--font-poppins)] py-6 sm:py-8">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-ink mb-3 section-subheading">
            FAQs
          </h2>
          <h3 className="text-[#ED383F] tracking-tight leading-tight max-w-5xl mx-auto section-heading">
            Frequently asked questions about academic programmes.
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
