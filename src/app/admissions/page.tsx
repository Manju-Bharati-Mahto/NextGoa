import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";

/**
 * Admissions page.
 */
export const metadata: Metadata = {
  title: "Admissions 2026",
  description:
    "Admissions open for 2026 at Parul University Goa — Goa's first State Private University. Explore eligibility, process, and how to apply.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admissions" },
        ])}
      />
      <AdmissionsHero />
    </main>
  );
}
