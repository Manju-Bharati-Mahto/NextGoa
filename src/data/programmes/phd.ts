import { ProgrammeData } from "./types";

export const phdData: ProgrammeData = {
  slug: "phd",
  title: "PhD",
  hero: {
    badge: "Doctoral Research",
    title: "Push the boundaries",
    highlight: "of what is known.",
    subtitle: "Advanced research opportunities with fully-funded fellowships and world-class faculty mentorship.",
    backgroundImage: "/programmes/hero-phd.png",
  },
  snapshotRow: [
    { title: "Duration", value: "3-6 Years", subtext: "Full-time / Part-time" },
    { title: "Eligibility", value: "Master's Degree", subtext: "with 55% aggregate" },
    { title: "Disciplines", value: "Multiple", subtext: "Engineering · Management · Science" },
    { title: "Funding", value: "Fellowships", subtext: "Available for full-time scholars" },
    { title: "Admissions", value: "Entrance Test", subtext: "PU-PET / UGC-NET / GATE" },
  ],
  why: {
    title: "Admissions Snapshot",
    subtitle: "Everything you need to apply.",
    cards: [
      {
        badge: "",
        title: "Intramural Research Grant (IMR)",
        description: "Internal grant funding for PhD scholars across disciplines."
      },
      {
        badge: "",
        title: "Conference Funding",
        description: "Financial support for presenting at national and international conferences."
      },
      {
        badge: "",
        title: "Publication Support",
        description: "Article Processing Charges (APC) reimbursement for peer-reviewed journal publications."
      },
      {
        badge: "",
        title: "External Project Recognition",
        description: "Recognition and infrastructure support for externally funded research projects."
      }
    ]
  },
  specialisations: {
    description: "Pursue doctoral research across diverse faculties.",
    items: [
      {
        id: "engineering-phd",
        name: "Engineering & Technology",
        learn: "Deep research in AI, Quantum Computing, Renewable Energy, and Smart Infrastructure.",
        skills: ["Advanced Data Analysis", "Academic Writing", "Grant Proposal Writing"],
        tools: ["MATLAB", "OriginLab", "Overleaf"],
        careers: ["Research Scientist", "Professor", "R&D Director"]
      },
      {
        id: "management-phd",
        name: "Management & Commerce",
        learn: "Research in consumer behavior, financial markets, organizational psychology, and entrepreneurship.",
        skills: ["Qualitative Research", "Statistical Modeling", "Survey Design"],
        tools: ["SPSS", "NVivo", "AMOS"],
        careers: ["Academician", "Policy Analyst", "Corporate Consultant"]
      }
    ]
  },
  career: {
    stats: [
      { value: "100%", label: "Placement in Academia/R&D" },
      { value: "50+", label: "Patents Filed" },
      { value: "300+", label: "Scopus Publications" },
      { value: "₹58 Cr+", label: "External Grants" }
    ],
    topRoles: [
      { 
        title: "Academic", 
        tag: "ASSISTANT PROFESSOR \u2192 ASSOCIATE PROFESSOR \u2192 PROFESSOR AT INDIAN AND OVERSEAS UNIVERSITIES.", 
        icon: "mdi:school" 
      },
      { 
        title: "Industry R&D", 
        tag: "SENIOR SCIENTIST, R&D LEAD, PRINCIPAL INVESTIGATOR AT PHARMA, BIOTECH, IT AND CONSULTING FIRMS.", 
        icon: "mdi:flask" 
      },
      { 
        title: "Postdoc & Research", 
        tag: "POSTDOCTORAL FELLOWSHIPS AT IITS, IISC, CSIR LABS, AND OVERSEAS UNIVERSITIES.", 
        icon: "mdi:microscope" 
      },
      { 
        title: "Policy & Think Tanks", 
        tag: "RESEARCH ADVISOR AND POLICY ANALYST ROLES IN GOVERNMENT AND THINK TANKS.", 
        icon: "mdi:bank" 
      }
    ]
  },
  labs: {
    title: "Dedicated research infrastructure.",
    description: "Access specialized research centers and high-performance computing clusters 24/7.",
    features: [
      { title: "Central Research Facility", description: "Houses advanced characterization and analytical instruments." },
      { title: "HPC Cluster", description: "Supercomputing resources for complex simulations and AI modeling." },
      { title: "Incubation Center", description: "Transform your research IP into a commercial startup." }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Aravind Kumar",
    role: "Dean, Research & Development",
    bio: "Dr. Kumar has over 150 highly cited publications and has secured major grants from DST, SERB, and international funding agencies.",
    image: "/programmes/engineering_hero_bg.png",
    faculty: [
      { role: "DISTINGUISHED PROFESSOR", name: "Dr. V. N. Sharma", degree: "Ph.D., Physics", specialities: "Quantum Mechanics, Material Science" },
      { role: "PROFESSOR", name: "Dr. Meenakshi Iyer", degree: "Ph.D., Biotechnology", specialities: "Genomics, Bioinformatics" },
      { role: "ASSOCIATE PROFESSOR", name: "Dr. Sanjay Dutt", degree: "Ph.D., Computer Science", specialities: "Artificial Intelligence, Data Mining" },
      { role: "ASSOCIATE PROFESSOR", name: "Dr. Priya Raj", degree: "Ph.D., Economics", specialities: "Macroeconomics, Public Policy" }
    ]
  },
  faqs: [
    { question: "Is a fellowship provided to PhD scholars?", answer: "Yes, meritorious full-time PhD scholars are eligible for the PU Research Fellowship (PURF)." },
    { question: "Can I pursue a PhD part-time?", answer: "Yes, we offer part-time PhD programs designed for working professionals and academicians." },
    { question: "Does the university fund research publications?", answer: "Yes, we provide financial support for Article Processing Charges (APC) for publishing research in high-impact Scopus or Web of Science journals." },
    { question: "What is the admission process for the PhD programme?", answer: "Admissions are based on the PU-PET entrance test, followed by an interview. Candidates who have qualified UGC-NET or GATE may be exempt from the written test." },
    { question: "Are there opportunities for interdisciplinary research?", answer: "Absolutely. We encourage interdisciplinary research and allow scholars to have co-supervisors from different departments or even international partner universities." }
  ],
  themeColor: {
    waveBand: "#E73649", // Red theme
    waveAccent: "#D62B3D",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
