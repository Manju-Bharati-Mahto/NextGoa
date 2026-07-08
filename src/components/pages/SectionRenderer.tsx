import React from "react";
import { Hero } from "@/components/dynamic-sections/Hero";
import { StatsBar } from "@/components/dynamic-sections/StatsBar";
import { NotificationMarquee } from "@/components/dynamic-sections/NotificationMarquee";
import { Philosophy } from "@/components/dynamic-sections/Philosophy";
import { Admissions } from "@/components/dynamic-sections/Admissions";
import { Placements } from "@/components/dynamic-sections/Placements";
import { Recruiters } from "@/components/dynamic-sections/Outcomes";
import { Research } from "@/components/dynamic-sections/Research";
import { Testimonial } from "@/components/dynamic-sections/Testimonial";
import { CampusTour } from "@/components/dynamic-sections/CampusTour";
import { CampusLife } from "@/components/dynamic-sections/CampusLife";
import { WhyGoa } from "@/components/dynamic-sections/WhyGoa";
import { International } from "@/components/dynamic-sections/International";
import { News } from "@/components/dynamic-sections/News";
import { FinalCta } from "@/components/dynamic-sections/FinalCta";
import { Faq } from "@/components/dynamic-sections/Faq";
import { Banner } from "@/components/dynamic-sections/Banner";
import { VisionMission } from "@/components/dynamic-sections/VisionMission";
import { Accreditations } from "@/components/dynamic-sections/Accreditations";
import { Leadership } from "@/components/dynamic-sections/Leadership";
import { LeadershipTeam } from "@/components/dynamic-sections/LeadershipTeam";
import { FacultyDeans } from "@/components/dynamic-sections/FacultyDeans";
import { JourneyTimeline } from "@/components/dynamic-sections/JourneyTimeline";
import { ExaminationSchedules } from "@/components/dynamic-sections/ExaminationSchedules";
import { AdmissionJourneyTimeline } from "@/components/dynamic-sections/AdmissionJourneyTimeline";
import { TrendingPrograms } from "@/components/dynamic-sections/TrendingPrograms";
import { ProgrammeFinder } from "@/components/dynamic-sections/ProgrammeFinder";

interface Props {
  sections: any[];
}

export default function SectionRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => {
        const type = section.section_type || section.type;
        return (
          <React.Fragment key={section.id ?? `${type}-${index}`}>
            {(() => {
              switch (type) {
                case "hero":
                  return <Hero key={section.id} data={section.content} />;

                case "notification":
                  return (
                    <NotificationMarquee
                      key={section.id}
                      data={section.content}
                    />
                  );

                case "stats":
                  return <StatsBar key={section.id} data={section.content} />;

                case "philosophy":
                  return <Philosophy key={section.id} data={section.content} />;

                case "admissions":
                  return <Admissions key={section.id} data={section.content} />;

                case "placements":
                  return <Placements key={section.id} data={section.content} />;

                case "recruiters":
                  return <Recruiters key={section.id} data={section.content} />;

                case "programme_finder":
                  return (
                    <ProgrammeFinder key={section.id} data={section.content} />
                  );

                case "research":
                  return <Research key={section.id} data={section.content} />;

                case "testimonials":
                  return (
                    <Testimonial key={section.id} data={section.content} />
                  );

                case "campus_tour":
                  return <CampusTour key={section.id} data={section.content} />;

                case "campus_life":
                  return <CampusLife key={section.id} data={section.content} />;

                case "why_goa":
                  return <WhyGoa key={section.id} data={section.content} />;

                case "international":
                  return (
                    <International key={section.id} data={section.content} />
                  );

                case "news":
                  return <News key={section.id} data={section.content} />;

                case "final_cta":
                  return <FinalCta key={section.id} data={section.content} />;

                case "faq":
                  return <Faq key={section.id} data={section.content} />;

                case "banner":
                  return <Banner key={section.id} data={section.content} />;

                case "vision_mission":
                  return (
                    <VisionMission key={section.id} data={section.content} />
                  );

                case "accreditations":
                  return (
                    <Accreditations key={section.id} data={section.content} />
                  );

                case "leadership":
                  return <Leadership key={section.id} data={section.content} />;

                case "leadership_team":
                  return (
                    <LeadershipTeam key={section.id} data={section.content} />
                  );

                case "faculty_deans":
                  return (
                    <FacultyDeans key={section.id} data={section.content} />
                  );

                case "journey_timeline":
                  return (
                    <JourneyTimeline key={section.id} data={section.content} />
                  );

                case "examination_schedule":
                  return (
                    <ExaminationSchedules
                      key={section.id}
                      data={section.content}
                    />
                  );

                case "admission_timeline":
                  return (
                    <AdmissionJourneyTimeline
                      key={section.id}
                      data={section.content}
                    />
                  );

                case "trending_programs":
                  return (
                    <TrendingPrograms key={section.id} data={section.content} />
                  );


                  
                default:
                  return null;
              }
            })()}
          </React.Fragment>
        );
      })}
    </>
  );
}
