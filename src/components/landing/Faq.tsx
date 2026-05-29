import { faqSchema, type FaqItem } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Eyebrow } from "./Decor";

/**
 * "Questions parents ask" — an accordion built on native <details>/<summary>,
 * so it works with zero JavaScript (fully SSG, crawlable, keyboard-accessible).
 *
 * The same `faqs` array feeds both the visible accordion and the FAQPage
 * JSON-LD — Google penalises markup whose Q&As aren't on the page, so they must
 * stay in lockstep. Update copy in one place.
 */
const faqs: FaqItem[] = [
  {
    question: "Is PU Goa UGC-recognised?",
    answer:
      "Yes. Parul University Goa is established as a State Private University and is recognised by the UGC. Programmes carry their respective regulatory approvals — AICTE for engineering and management, PCI for pharmacy, INC for nursing, and NCHMCT for hotel management.",
  },
  {
    question: "Which entrance tests are accepted, by programme?",
    answer:
      "B.Tech admissions accept JEE and the PU Goa Entrance Test; management accepts CAT and MAT; pharmacy accepts GPAT; and most UG programmes accept CUET. Merit-based seats are also available where applicable.",
  },
  {
    question: "What are the fees & scholarships?",
    answer:
      "Fees vary by programme. Merit scholarships, sports scholarships, and need-based assistance are available; the admissions team shares the full fee structure and eligibility on enquiry.",
  },
  {
    question: "What are the hostel facilities and safety arrangements for girl students?",
    answer:
      "Separate girls' hostel blocks operate with 24×7 security, biometric access, in-house wardens, and CCTV-monitored common areas, alongside on-campus medical support.",
  },
  {
    question: "Who is eligible for the international pathway?",
    answer:
      "Students in good academic standing can apply for Pathway Programmes, Semester Exchanges, and Global Internships with partner universities across the USA, UK, Australia, New Zealand, Canada, France, and Germany.",
  },
  {
    question: "What's the difference between PU Goa and Parul University Gujarat?",
    answer:
      "PU Goa is Goa's first State Private University, drawing on two decades of teaching, research, and placement experience from Parul University in Gujarat while operating as its own campus on the Goan coast.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-brand-white">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Questions parents ask</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Straight answers before you ask.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[340px_1fr] md:items-stretch lg:gap-12">
          {/* Yellow accent card — stretches to match the accordion height */}
          <div className="relative hidden min-h-[320px] overflow-hidden rounded-[24px] bg-sunshine md:block">
            <svg
              viewBox="57 102 238 228"
              fill="none"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2"
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

          {/* Accordion — each item is its own card; first one open */}
          <ul className="space-y-4">
            {faqs.map((f, i) => (
              <li key={f.question}>
                <details
                  className="group rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="shrink-0 text-brand">
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 font-[family-name:var(--font-poppins)] text-sm leading-7 text-ink/70">
                    {f.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
