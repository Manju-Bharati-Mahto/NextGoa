import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgrammeData, getAllProgrammeSlugs } from "@/data/programmes";

import { DynamicHero } from "@/components/programme-template/DynamicHero";
import { DynamicSnapshotRow } from "@/components/programme-template/DynamicSnapshotRow";
import { DynamicCareerOutcomes } from "@/components/programme-template/DynamicCareerOutcomes";
import { DynamicSpecialisations } from "@/components/programme-template/DynamicSpecialisations";
import { DynamicWhyPUGoa } from "@/components/programme-template/DynamicWhyPUGoa";
import { DynamicLabsAndLearning } from "@/components/programme-template/DynamicLabsAndLearning";
import { DynamicDeanAndFaculty } from "@/components/programme-template/DynamicDeanAndFaculty";

import RecruitersAndDestinations from "@/components/programmes/RecruitersAndDestinations";
import ProgrammePicker from "@/components/programmes/ProgrammePicker";
import PharmacyProgrammePicker from "@/components/programmes/PharmacyProgrammePicker";
import ManagementProgrammePicker from "@/components/programmes/ManagementProgrammePicker";
import AppliedSciencesProgrammePicker from "@/components/programmes/AppliedSciencesProgrammePicker";
import HotelManagementProgrammePicker from "@/components/programmes/HotelManagementProgrammePicker";
import NursingProgrammePicker from "@/components/programmes/NursingProgrammePicker";
import PhysiotherapyProgrammePicker from "@/components/programmes/PhysiotherapyProgrammePicker";
import PhysiotherapyAccreditation from "@/components/programmes/PhysiotherapyAccreditation";
import PhysiotherapyNetwork from "@/components/programmes/PhysiotherapyNetwork";
import NursingAccreditation from "@/components/programmes/NursingAccreditation";
import AlliedHealthAccreditation from "@/components/programmes/AlliedHealthAccreditation";
import HotelManagementAccreditation from "@/components/programmes/HotelManagementAccreditation";
import NursingDestinations from "@/components/programmes/NursingDestinations";
import PharmacyAccreditation from "@/components/programmes/PharmacyAccreditation";
import StudyAbroadModels from "@/components/study-abroad/StudyAbroadModels";
import AdmissionsSnapshot from "@/components/programmes/AdmissionsSnapshot";
import { DynamicFaq } from "@/components/programme-template/DynamicFaq";
import ManagementSpecialisations from "@/components/programmes/ManagementSpecialisations";
import ManagementLearningEnvironment from "@/components/programmes/ManagementLearningEnvironment";
import { FinalCta } from "@/components/landing/FinalCta";
import HotelManagementDestinations from "@/components/programmes/HotelManagementDestinations";

import AlliedHealthProgrammePicker from "@/components/programmes/AlliedHealthProgrammePicker";
import PhdResearchAreas from "@/components/programmes/PhdResearchAreas";
import PhdEntranceNotice from "@/components/programmes/PhdEntranceNotice";
import PhdDoctoralProcess from "@/components/programmes/PhdDoctoralProcess";

import AlliedHealthLabs from "@/components/programmes/AlliedHealthLabs";

export async function generateStaticParams() {
  const slugs = getAllProgrammeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getProgrammeData(slug);
  if (!data) return { title: "Programme Not Found | Parul University Goa" };

  return {
    title: `${data.title} | Parul University Goa`,
    description: `Explore our ${data.title} programme.`,
  };
}

export default async function DynamicProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getProgrammeData(slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-white font-[family-name:var(--font-poppins)]">
      
      <DynamicHero data={data.hero} />
      
      {data.slug !== "phd" && (
        <DynamicSnapshotRow data={data.snapshotRow} />
      )}

      <DynamicCareerOutcomes 
        data={data.career} 
        themeColor={data.themeColor} 
        topBgColor={data.slug === "phd" ? "#FFFFFF" : "#FDE047"} 
        isPhdLayout={data.slug === "phd"}
      />

      {data.slug === "pharmacy" ? (
        <PharmacyProgrammePicker />
      ) : data.slug === "nursing" ? (
        <NursingProgrammePicker />
      ) : data.slug === "physiotherapy" ? (
        <PhysiotherapyProgrammePicker />
      ) : data.slug === "management-studies" ? (
        <ManagementProgrammePicker />
      ) : data.slug === "allied-healthcare" ? (
        <AlliedHealthProgrammePicker />
      ) : data.slug === "hotel-management" ? (
        <HotelManagementProgrammePicker />
      ) : data.slug === "applied-sciences" ? (
        <AppliedSciencesProgrammePicker />
      ) : data.slug === "phd" ? (
        <>
          <PhdResearchAreas />
          <PhdEntranceNotice />
        </>
      ) : (
        <ProgrammePicker />
      )}

      {data.slug === "pharmacy" && (
        <PharmacyAccreditation />
      )}
      
      {data.slug === "physiotherapy" && (
        <PhysiotherapyAccreditation />
      )}
      
      {data.slug === "allied-healthcare" && (
        <AlliedHealthAccreditation />
      )}

      {data.slug === "hotel-management" && (
        <HotelManagementAccreditation />
      )}

      {data.slug === "management-studies" ? (
        <ManagementSpecialisations />
      ) : data.slug !== "pharmacy" && data.slug !== "nursing" && data.slug !== "physiotherapy" && data.slug !== "allied-healthcare" && data.slug !== "hotel-management" && data.slug !== "phd" ? (
        <DynamicSpecialisations data={data.specialisations} />
      ) : null}

      {data.slug === "nursing" && (
        <DynamicWhyPUGoa 
          data={data.why} 
          themeColor={data.themeColor} 
          useThickWave={true}
          isWider={true}
          reducedPadding={true}
        />
      )}

      {data.slug === "nursing" && (
        <NursingAccreditation />
      )}

      {data.slug !== "physiotherapy" && data.slug !== "allied-healthcare" && data.slug !== "hotel-management" && data.slug !== "phd" && (
        <RecruitersAndDestinations slug={data.slug} />
      )}

      {(data.slug === "physiotherapy" || data.slug === "allied-healthcare") && (
        <PhysiotherapyNetwork />
      )}

      {data.slug === "nursing" && (
        <NursingDestinations />
      )}

      {data.slug === "management-studies" && (
        <ManagementLearningEnvironment />
      )}

      {data.slug === "phd" && (
        <PhdDoctoralProcess />
      )}

      {data.slug !== "management-studies" && data.slug !== "pharmacy" && data.slug !== "nursing" && data.slug !== "hotel-management" && (
        <DynamicWhyPUGoa 
          data={data.why} 
          themeColor={data.themeColor} 
          useThickWave={data.slug === "allied-healthcare" || data.slug === "applied-sciences" || data.slug === "physiotherapy"}
          isWider={data.slug === "applied-sciences" || data.slug === "nursing" || data.slug === "physiotherapy"}
          reducedPadding={data.slug === "applied-sciences" || data.slug === "nursing" || data.slug === "physiotherapy"}
          bottomBgColor={data.slug === "applied-sciences" ? "#EAF7FD" : undefined}
        />
      )}

      {data.labs && data.slug !== "management-studies" && data.slug !== "allied-healthcare" && data.slug !== "phd" && (
        <DynamicLabsAndLearning data={data.labs} />
      )}

      {data.slug === "allied-healthcare" && (
        <AlliedHealthLabs />
      )}

      {data.slug !== "nursing" && data.slug !== "physiotherapy" && data.slug !== "allied-healthcare" && data.slug !== "hotel-management" && data.slug !== "pharmacy" && data.slug !== "phd" && (
        <StudyAbroadModels />
      )}

      {data.slug === "hotel-management" && (
        <HotelManagementDestinations />
      )}

      {data.slug !== "phd" && (
        <DynamicDeanAndFaculty data={data.dean} />
      )}

      {data.slug !== "phd" && (
        <AdmissionsSnapshot />
      )}

      <DynamicFaq data={data.faqs} />

      <FinalCta 
        eyebrow="Admissions Open 2026"
        title={data.slug === "nursing" ? "Ready to begin nursing?" : data.slug === "pharmacy" ? "Ready to enter pharmacy?" : data.slug === "physiotherapy" ? "Ready to start physio?" : data.slug === "allied-healthcare" ? "Ready to start allied and healthcare sciences?" : data.slug === "hotel-management" ? "Ready to enter hospitality?" : data.slug === "phd" ? "Begin your doctoral journey." : "Ready to lead?"}
        description={data.slug === "phd" ? "PU Goa entrance and PhD admissions are open for the 2026-27 cycle." : "Admissions are open for the 2026-27 academic year."}
        actions={[
          { label: "Apply Now", href: "/apply", variant: "primary" },
          { label: "Talk to Counsellor", href: "#", variant: "dark", triggerEnquiry: true },
          { label: "Chat on WhatsApp", href: "https://wa.me/919558210145", variant: "dark" },
          { label: "1800 890 9090", href: "tel:18008909090", variant: "dark", icon: "phone" }
        ]}
      />
    </main>
  );
}
