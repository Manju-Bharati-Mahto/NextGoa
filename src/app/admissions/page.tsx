import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { cta } from "@/lib/navigation";

/**
 * Admissions page — minimal placeholder so the "Apply" CTA routes to a real
 * page (not a 404). Build out eligibility, process, fees, and the application
 * form here. Has its own metadata + breadcrumb JSON-LD per the site SEO pattern.
 */
export const metadata: Metadata = {
  title: "Admissions 2026",
  description:
    "Admissions open for 2026 at Parul University Goa — Goa's first State Private University. Explore eligibility, process, and how to apply.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admissions" },
        ])}
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Admissions · 2026
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Apply to Parul University Goa
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink/70">
          Admissions for the 2026 intake are open. The full eligibility criteria,
          application process, fee structure, and online form will live here.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={cta.brochure}
            download
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-zinc-50"
          >
            Download Brochure
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-bright"
          >
            Talk to a Counsellor
          </Link>
        </div>
      </section>
    </main>
  );
}
