import type { Metadata } from "next";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";

/**
 * Admissions page
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
      <AdmissionsHero />
    </main>
  );
}
