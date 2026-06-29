import type { Metadata } from "next";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";
import { AdmissionJourneyTimeline } from "@/components/admissions/AdmissionJourneyTimeline";
import { HowToApply } from "@/components/admissions/HowToApply";
import { EligibilitySection } from "@/components/admissions/EligibilitySection";
import { EntranceExaminations } from "@/components/admissions/EntranceExaminations";
import { FeePlans } from "@/components/admissions/FeePlans";
import { FinancialAid } from "@/components/admissions/FinancialAid";
import { DocumentsChecklist } from "@/components/admissions/DocumentsChecklist";
import { WhyChoosePU } from "@/components/admissions/WhyChoosePU";
import { TransportAndHostel } from "@/components/admissions/TransportAndHostel";
import { TalkToUs } from "@/components/admissions/TalkToUs";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { admissionsFaqs } from "@/data/page-faqs";

export const metadata: Metadata = {
  title: "Admissions | Parul University Goa",
  description: "Start your journey at Parul University Goa. Learn about our admission process, important dates, eligibility criteria, and fee structures.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admissions" },
        ])}
      />
      
      <AdmissionsHero />
      <AdmissionJourneyTimeline />
      <HowToApply />
      <EligibilitySection />
      <EntranceExaminations />
      <FeePlans />
      <FinancialAid />
      <DocumentsChecklist />
      <WhyChoosePU />
      <TransportAndHostel />
      <TalkToUs />
      <FinalCta />
      <Faq faqs={admissionsFaqs} />
    </main>
  );
}
