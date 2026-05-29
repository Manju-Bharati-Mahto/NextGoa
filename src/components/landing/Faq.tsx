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

function CloverMark() {
  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32" aria-hidden="true">
      <g fill="var(--color-sunshine)">
        <circle cx="60" cy="34" r="24" />
        <circle cx="60" cy="86" r="24" />
        <circle cx="34" cy="60" r="24" />
        <circle cx="86" cy="60" r="24" />
      </g>
      <circle cx="60" cy="60" r="14" fill="var(--color-sunshine-deep)" />
    </svg>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-brand-white">
      <JsonLd data={faqSchema(faqs)} />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Questions parents ask</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Straight answers before you ask.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="hidden justify-center md:flex md:pt-4">
            <CloverMark />
          </div>

          <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((f) => (
              <li key={f.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-zinc-100 text-brand transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 text-sm leading-7 text-ink/70">{f.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
