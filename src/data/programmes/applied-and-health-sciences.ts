import { ProgrammeData } from "./types";
import { appliedSciencesData } from "./applied-sciences";
import { alliedHealthData } from "./allied-and-healthcare-science";

// Deep merge the two faculty's arrays where appropriate
export const appliedAndHealthSciencesData: ProgrammeData = {
  slug: "applied-and-health-sciences",
  title: "Faculty of Applied and Health Sciences",
  hero: {
    badge: "Faculty of Applied and Health Sciences",
    title: "Where Science",
    highlight: "Meets Innovation.",
    subtitle: "A blended approach to scientific innovation and healthcare excellence in Goa.",
    backgroundImage: appliedSciencesData.hero.backgroundImage,
  },
  snapshotRow: [
    ...appliedSciencesData.snapshotRow.slice(0, 3),
    ...alliedHealthData.snapshotRow.slice(0, 2),
  ],
  why: {
    title: "Why Applied and Health Sciences at PU Goa?",
    subtitle: "Where science meets healthcare.",
    cards: [
      ...appliedSciencesData.why.cards,
      ...alliedHealthData.why.cards,
    ],
  },
  specialisations: {
    description: "Explore our comprehensive range of programs across applied and healthcare sciences.",
    items: [
      ...appliedSciencesData.specialisations.items,
      ...alliedHealthData.specialisations.items,
    ],
  },
  career: {
    stats: appliedSciencesData.career.stats,
    topRoles: [
      ...appliedSciencesData.career.topRoles,
      ...alliedHealthData.career.topRoles,
    ].slice(0, 8),
  },
  labs: {
    ...appliedSciencesData.labs!,
    title: "Learn in modern scientific and healthcare environments.",
    description: "Our campus is equipped with state-of-the-art facilities that simulate advanced research and clinical laboratories.",
    features: [
      ...(appliedSciencesData.labs?.features || []),
      { title: "Microbiology and Clinical Pathology Laboratory", description: "Advanced clinical diagnostics and pathology lab.", image: "/labs/Applied and healthcare Science/DSC03110.jpg" },
      { title: "Chemistry Laboratory", description: "Comprehensive facility for chemical analysis.", image: "/labs/Applied and healthcare Science/DSC03121.jpg" },
      { title: "Central Instrumentation Laboratory", description: "Equipped with high-end analytical instruments.", image: "/labs/Applied and healthcare Science/DSC03125.jpg" },
      { title: "MCH Laboratory", description: "Dedicated maternal and child health practical space.", image: "/labs/Applied and healthcare Science/DSC03130.jpg" },
      { title: "Foundation and Skill Laboratory", description: "Build core clinical and healthcare skills.", image: "/labs/Applied and healthcare Science/DSC03132.jpg" },
      { title: "Community and Nutrition Laboratory", description: "Focus on public health and nutritional sciences.", image: "/labs/Applied and healthcare Science/DSC03135.jpg" },
      { title: "Advanced Allied and Healthcare Sciences Laboratories", description: "State-of-the-art specialized healthcare facilities.", image: "/labs/Applied and healthcare Science/DSC03138.jpg" },
      { title: "Preclinical Sciences Laboratory", description: "Foundational lab for pre-clinical practice.", image: "/labs/Applied and healthcare Science/DSC03142.jpg" }
    ]
  },
  dean: {
    name: "Faculty of Applied and Health Sciences",
    role: "Administration",
    bio: "Combining the expertise of Applied Sciences and Allied Health Sciences to offer comprehensive education and research opportunities.",
    faculty: [
      ...appliedSciencesData.dean.faculty,
      ...alliedHealthData.dean.faculty,
    ],
  },
  faqs: [
    ...appliedSciencesData.faqs,
    ...alliedHealthData.faqs,
  ],
  themeColor: appliedSciencesData.themeColor,
};
