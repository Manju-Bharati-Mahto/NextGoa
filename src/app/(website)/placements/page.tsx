import { PlacementsHero } from "@/components/placements/PlacementsHero";
import { PlacementsNumbers } from "@/components/placements/PlacementsNumbers";
import { PlacementsByTheNumbers } from "@/components/placements/PlacementsByTheNumbers";
import { AlumniStories } from "@/components/placements/AlumniStories";
import { OutcomesByFaculty } from "@/components/placements/OutcomesByFaculty";
import { InternshipsAndPPOs } from "@/components/placements/Internships";
import { BeyondPlacements } from "@/components/placements/BeyondPlacements";
import { Accreditations } from "@/components/about/Accreditations";
import { StartupEcosystem } from "@/components/placements/StartupEcosystem";
import { CareerReadiness } from "@/components/placements/CareerReadiness";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";

export const metadata = {
  alternates: {
    canonical: "/placements",
  },
  title: "Placements | Parul University Goa",
  description: "Outstanding placements at Parul University Goa with top recruiters.",
};

export default function PlacementsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <PlacementsHero />
      <PlacementsNumbers />
      <PlacementsByTheNumbers />
      <AlumniStories />
      <OutcomesByFaculty />
      <InternshipsAndPPOs />
      {/* <BeyondPlacements /> */}
      <Accreditations />
      <StartupEcosystem />
      <CareerReadiness />
      <FinalCta />
      <Faq />
    </main>
  );
}
