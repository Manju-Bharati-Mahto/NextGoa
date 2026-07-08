"use client";

import { ChevronDown, ChevronRight, Trash2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import AddSectionDropdown from "@/components/admin/builder/AddSectionModal";
import HeroSection from "@/components/admin/sections/HeroSection";
import StatsSection from "@/components/admin/sections/StatsSection";
import NotificationMarqueeSection from "@/components/admin/sections/NotificationMarqueeSection";
import PhilosophySection from "@/components/admin/sections/PhilosophySection";
import AdmissionsSection from "@/components/admin/sections/AdmissionsSection";
import PlacementsSection from "@/components/admin/sections/PlacementsSection";
import RecruitersSection from "@/components/admin/sections/RecruitersSection";
import ResearchSection from "@/components/admin/sections/ResearchSection";
import TestimonialSection from "@/components/admin/sections/TestimonialSection";
import CampusTourSection from "@/components/admin/sections/CampusTourSection";
import CampusLifeSection from "@/components/admin/sections/CampusLifeSection";
import WhyGoaSection from "@/components/admin/sections/WhyGoaSection";
import InternationalSection from "@/components/admin/sections/InternationalSection";
import NewsSection from "@/components/admin/sections/NewsSection";
import FinalCtaSection from "@/components/admin/sections/FinalCtaSection";
import FAQSection from "@/components/admin/sections/FAQSection";
import BannerSection from "@/components/admin/sections/BannerSection";
import VisionMissionSection from "@/components/admin/sections/VisionMissionSection";
import AccreditationsSection from "@/components/admin/sections/AccreditationsSection";
import LeadershipSection from "@/components/admin/sections/LeadershipSection";
import LeadershipTeamSection from "@/components/admin/sections/LeadershipTeamSection";
import FacultyDeansSection from "@/components/admin/sections/FacultyDeansSection";
import JourneyTimelineSection from "@/components/admin/sections/JourneyTimelineSection";
import ExaminationScheduleSection from "@/components/admin/sections/ExaminationScheduleSection";
import AdmissionTimelineSection from "@/components/admin/sections/AdmissionTimelineSection";
import TrendingProgramSection from "@/components/admin/sections/TrendingProgramSection";
import ProgrammeFinderSection from "@/components/admin/sections/ProgrammeFinderSection";

interface Section {
  id: string;
  type: string;
  title: string;
  status: number;
  content: any;
}

interface Props {
  sections: any[];
  setSections: React.Dispatch<React.SetStateAction<any[]>>;
  module?: "pages" | "faculty";
}
interface SortableSectionProps {
  section: Section;
  children: (props: { attributes: any; listeners: any }) => React.ReactNode;
}

function SortableSection({ section, children }: SortableSectionProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: section.id,
    });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {children({
        attributes,
        listeners,
      })}
    </div>
  );
}

export default function SectionBuilder({
  sections,
  setSections,
  module = "pages",
}: Props) {
  const [openSection, setOpenSection] = useState<number | null>(null);
  function toggleSection(index: number) {
    const updated = [...sections];

    updated[index].status = updated[index].status === 1 ? 0 : 1;

    setSections(updated);
  }
  function removeSection(index: number) {
    setSections((prev) => prev.filter((_, i) => i !== index));
  }
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setSections((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);

      const newIndex = items.findIndex((i) => i.id === over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <>
      <div className="cards-admin-text p-5">
        <div className="cards-admin-header flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold mb-6"></h2>

          <AddSectionDropdown setSections={setSections} module={module} />
        </div>

        {sections.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <h3 className="text-lg font-semibold">No Sections Added</h3>

            <p className="text-gray-500 mt-2">
              Click below to start building this page.
            </p>

            <div className="mt-5 flex justify-center">
              <AddSectionDropdown setSections={setSections} module={module} />
            </div>
          </div>
        ) : (
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sections.map((s) => s.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <SortableSection key={section.id} section={section}>
                    {({ attributes, listeners }) => (
                      <div
                        key={section.id}
                        className="rounded-xl border-light-all bg-white"
                      >
                        <div className="flex items-center justify-between p-4">
                          {/* Left */}
                          <div className="flex items-center gap-4">
                            {/* Drag */}
                            <button
                              type="button"
                              {...attributes}
                              {...listeners}
                              className="cursor-grab active:cursor-grabbing text-gray-500"
                            >
                              <GripVertical size={18} />
                            </button>

                            <span className="font-semibold">
                              {section.title}
                            </span>
                          </div>

                          {/* Right */}
                          <div className="flex items-center gap-3">
                            {/* Collapse */}
                            <button
                              type="button"
                              onClick={() =>
                                setOpenSection(
                                  openSection === index ? null : index,
                                )
                              }
                              className="text-gray-500 hover:text-black"
                            >
                              {openSection === index ? (
                                <ChevronDown size={18} />
                              ) : (
                                <ChevronRight size={18} />
                              )}
                            </button>

                            {/* Hide / Show */}
                            <button
                              type="button"
                              onClick={() => toggleSection(index)}
                              className="text-gray-500 hover:text-black"
                            >
                              {section.status === 1 ? (
                                <Eye size={18} />
                              ) : (
                                <EyeOff size={18} className="text-gray-400" />
                              )}
                            </button>
                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() => removeSection(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>

                        {openSection === index && (
                          <div className="border-light-t p-5">
                            {section.type === "hero" && (
                              <HeroSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "notification" && (
                              <NotificationMarqueeSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}

                            {section.type === "stats" && (
                              <StatsSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "philosophy" && (
                              <PhilosophySection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "admissions" && (
                              <AdmissionsSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "placements" && (
                              <PlacementsSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "recruiters" && (
                              <RecruitersSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "programme_finder" && (
                              <ProgrammeFinderSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "research" && (
                              <ResearchSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "testimonials" && (
                              <TestimonialSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "campus_tour" && (
                              <CampusTourSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "campus_life" && (
                              <CampusLifeSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "why_goa" && (
                              <WhyGoaSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "international" && (
                              <InternationalSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "news" && (
                              <NewsSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}

                            {section.type === "final_cta" && (
                              <FinalCtaSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}

                            {section.type === "faq" && (
                              <FAQSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}

                            {section.type === "banner" && (
                              <BannerSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "vision_mission" && (
                              <VisionMissionSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "accreditations" && (
                              <AccreditationsSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "leadership" && (
                              <LeadershipSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "leadership_team" && (
                              <LeadershipTeamSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "faculty_deans" && (
                              <FacultyDeansSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "journey_timeline" && (
                              <JourneyTimelineSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "examination_schedule" && (
                              <ExaminationScheduleSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "admission_timeline" && (
                              <AdmissionTimelineSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];
                                  updated[index].content = content;
                                  setSections(updated);
                                }}
                              />
                            )}
                            {section.type === "trending_programs" && (
                              <TrendingProgramSection
                                data={section.content}
                                onChange={(content) => {
                                  const updated = [...sections];

                                  updated[index].content = content;

                                  setSections(updated);
                                }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </SortableSection>
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </>
  );
}
