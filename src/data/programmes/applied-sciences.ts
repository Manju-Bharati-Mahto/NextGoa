import { ProgrammeData } from "./types";

export const appliedSciencesData: ProgrammeData = {
  slug: "applied-sciences",
  title: "Applied Sciences",
  hero: {
    badge: "Faculty of Applied Sciences",
    title: "Discover the Science of Life.",
    highlight: "Advance healthcare and biotechnology.",
    subtitle: "Hands-on laboratory experience, cutting-edge research, and real-world applications in Goa.",
    backgroundImage: "/programmes/applied_sciences.jpg",
  },
  snapshotRow: [
    { title: "Tracks", value: "B.Sc. · M.Sc.", subtext: "UG + PG under one roof" },
    { title: "B.Sc. Duration", value: "3 / 4 yrs", subtext: "Under NEP 2020" },
    { title: "M.Sc. Duration", value: "2 yrs", subtext: "Full-time, on-campus" },
    { title: "Specialisations", value: "2 Core", subtext: "Biotech & Microbiology" },
    { title: "Labs", value: "State-of-the-art", subtext: "Advanced equipment" },
  ],
  why: {
    title: "Why PU Goa",
    subtitle: "Applied Sciences with an unfair advantage.",
    cards: [
      {
        badge: "Research-Driven",
        title: "Advanced\nLaboratories",
        description: "Learn in modern labs equipped with cutting-edge tools for genetic engineering, microbiology, and molecular biology."
      },
      {
        badge: "Future-ready",
        title: "NEP 2020 +\nGlobal Curriculum",
        description: "Curriculum designed to meet international standards. Choice-based credit system with multidisciplinary options."
      },
      {
        badge: "Industry-Aligned",
        title: "Clinical & Pharma\nExposure",
        description: "Direct exposure to clinical diagnostics, pharmaceutical industries, and biomanufacturing processes."
      }
    ]
  },
  specialisations: {
    description: "Our Applied Sciences programmes offer core specialisations to align with your research and career goals.",
    items: [
      {
        id: "biotechnology",
        name: "Biotechnology",
        learn: "Genetic engineering, molecular biology, bioinformatics, and bioprocess engineering.",
        skills: ["DNA Sequencing", "Cell Culture", "Bioinformatics", "Genetic Modification"],
        tools: ["PCR", "Microarrays", "Bioreactors", "CRISPR techniques"],
        careers: ["Biotechnologist", "Research Scientist", "Bioinformatics Analyst"]
      },
      {
        id: "microbiology",
        name: "Microbiology",
        learn: "Microbial genetics, immunology, virology, and industrial microbiology.",
        skills: ["Microbial Culture", "Pathogen Identification", "Immunological Assays", "Quality Control"],
        tools: ["Microscopes", "Autoclaves", "Spectrophotometers", "Incubators"],
        careers: ["Microbiologist", "Clinical Laboratory Scientist", "Quality Assurance Analyst"]
      }
    ]
  },
  career: {
    stats: [
      { value: "100%", label: "Placement Assistance" },
      { value: "₹6 LPA", label: "Average Package" },
      { value: "30+", label: "Pharma & Biotech Recruiters" },
      { value: "Top", label: "Research Labs" }
    ],
    topRoles: [
      { title: "Research Scientist", tag: "R&D", icon: "ph:microscope-fill" },
      { title: "Clinical Researcher", tag: "HEALTHCARE", icon: "ph:heartbeat-fill" },
      { title: "Quality Control Analyst", tag: "PHARMA", icon: "ph:check-circle-fill" },
      { title: "Biotech Consultant", tag: "CONSULTING", icon: "ph:briefcase-fill" },
      { title: "Data Analyst", tag: "BIOINFORMATICS", icon: "ph:chart-bar-fill" },
      { title: "Academician", tag: "EDUCATION", icon: "ph:book-open-fill" }
    ]
  },
  labs: {
    title: "Learn in modern scientific environments.",
    description: "Our campus is equipped with state-of-the-art facilities that simulate advanced research laboratories.",
    features: [
      { title: "Molecular Biology Lab", description: "Equipped with advanced tools for DNA and RNA analysis." },
      { title: "Microbiology Lab", description: "Dedicated space for culturing and studying microorganisms." },
      { title: "Bioinformatics Center", description: "High-performance computing for biological data analysis." }
    ],
    image: "/programmes/engineering_hero_bg.png" // Placeholder
  },
  dean: {
    name: "Dr. Anupam Kumar",
    role: "Dean, Faculty of Applied and Health Sciences",
    bio: "At the faculty of Applied and Health Sciences we are dedicated to advancing knowledge, fostering innovation, and improving the environment, health and well-being of our society through cutting-edge research, education, and practice.",
    image: "/faculties/Applied and Health Sciences/Dean.jpg",
    faculty: [
      { role: "PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Health Sciences", specialities: "-------------", image: "/faculties/Applied and Health Sciences/Faculty.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Health Sciences", specialities: "-------------", image: "/faculties/Applied and Health Sciences/Faculty2.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Health Sciences", specialities: "-------------", image: "/faculties/Applied and Health Sciences/Faculty3.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Health Sciences", specialities: "-------------", image: "/faculties/Applied and Health Sciences/Faculty4.jpg" }
    ]
  },
  faqs: [
    { question: "What are the career prospects after B.Sc. Biotechnology?", answer: "Graduates can work in research labs, pharmaceutical companies, clinical diagnostics, or pursue higher studies like M.Sc. or Ph.D." },
    { question: "Is hands-on laboratory experience provided?", answer: "Yes, our curriculum heavily emphasizes practical laboratory sessions in state-of-the-art facilities." },
    { question: "Are there opportunities for industry internships?", answer: "We facilitate internships with leading biotech and pharma companies during the course." }
  ],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0094C4",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
