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

  dean: {
    name: "Dr. Aravind Kumar",
    linkedin: "https://www.linkedin.com/company/parul-university-goa/",
    role: "Dean, Research & Development",
    bio: "Dr. Kumar has over 150 highly cited publications and has secured major grants from DST, SERB, and international funding agencies.",
    image: "/programmes/engineering_hero_bg.png",
    faculty: []},
  faqs: [
    {
        question: "Full-time vs part-time PhD — which can I do?",
        answer: "PU Goa offers both. Full-time scholars are expected to be on campus daily and often receive stipends or research assistantships. Part-time scholars (usually working professionals or academicians) have relaxed residency requirements but identical academic rigour."
    },
    {
        question: "How is a supervisor allocated?",
        answer: "Supervisor allocation happens after admission, based on your declared research area, supervisor availability, and the Doctoral Research Committee's review. You can express preferences during application."
    },
    {
        question: "Stipend and grants?",
        answer: "Full-time PhD scholars on externally funded projects (DST, ICMR, DBT, AICTE) receive project-linked stipends. The Intramural Research Grant (IMR) supports internal projects. APC and conference support are available across the board."
    },
    {
        question: "Publication requirement before synopsis?",
        answer: "PU Goa follows UGC norms — typically a minimum of two peer-reviewed publications (Scopus/Web of Science indexed) before synopsis submission. Discipline-specific committees may set higher bars."
    },
    {
        question: "Eligibility — NET / GATE / GPAT or PU Goa entrance?",
        answer: "A postgraduate degree in the relevant discipline with minimum 55% aggregate. UGC-NET, GATE, GPAT, CSIR-NET scores are accepted, OR you may sit for the PU Goa offline doctoral entrance examination."
    },
    {
        question: "Can I apply without a Master's?",
        answer: "No. A relevant Master's degree (M.Tech, M.Pharm, M.Sc, MBA, M.Sc Nursing, etc.) is the minimum eligibility. Integrated PhD pathways are not currently offered at PU Goa."
    }
],
  themeColor: {
    waveBand: "#E73649", // Red theme
    waveAccent: "#D62B3D",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
