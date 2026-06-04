import type { Metadata } from "next";
import { CampusLifeHero } from "@/components/campus-life/CampusLifeHero";
import { CampusFacilities } from "@/components/campus-life/CampusFacilities";
import { CampusCarousel } from "@/components/campus-life/CampusCarousel";
import { CampusZones } from "@/components/campus-life/CampusZones";
import { CampusHostel } from "@/components/campus-life/CampusHostel";
import { CampusSafety } from "@/components/campus-life/CampusSafety";
import { CampusAcademicSpaces } from "@/components/campus-life/CampusAcademicSpaces";
import { CampusStudentLife } from "@/components/campus-life/CampusStudentLife";
import { CampusLocation } from "@/components/campus-life/CampusLocation";
import { Faq } from "@/components/landing/Faq";

export const metadata: Metadata = {
  title: "Campus Life",
  description: "Experience vibrant campus life at Parul University Goa - where learning and living become one with nature.",
  alternates: { canonical: "/campus-life" },
};

export default function CampusLifePage() {
  return (
    <main>
      <CampusLifeHero />
      <CampusFacilities />
      <CampusCarousel />
      <CampusZones />
      <CampusHostel />
      <CampusSafety />
      <CampusAcademicSpaces />
      <CampusStudentLife />
      <CampusLocation />
      <Faq />
    </main>
  );
}
