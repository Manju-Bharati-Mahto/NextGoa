import { ProgrammeData } from "./types";

export const alliedHealthData: ProgrammeData = {
  slug: "allied-and-healthcare-science",
  title: "Allied and Healthcare Sciences",
  hero: {
    badge: "Allied and Healthcare Sciences",
    title: "Where science",
    highlight: "serves humanity.",
    subtitle: "Powering the backbone of modern diagnostics, surgical assistance, and critical care.",
    backgroundImage: "/programmes/hero-allied-and-healthcare-science.png",
  },
  snapshotRow: [
    { title: "Duration", value: "3/4 yrs", subtext: "+ 2 yrs M.Sc" },
    { title: "Eligibility", value: "10+2 Science", subtext: "PCB / PCMB" },
    { title: "Programmes", value: "5 distinct", subtext: "B.Sc · B.AOTT · B.MLS · M.Sc" },
    { title: "Labs", value: "8+ labs", subtext: "Incl. Central Instrumentation" },
    { title: "Outcomes", value: "Hospital + Industry", subtext: "Diagnostic + R&D" },
  ],
  why: {
    title: "Why PU Goa",
    subtitle: "Diagnostic precision meets clinical excellence.",
    cards: [
      {
        badge: "Hospital Training",
        title: "Clinical\nRotations",
        description: "Mandatory clinical rotations in diagnostic labs and operation theaters of partner hospitals."
      },
      {
        badge: "High Demand",
        title: "100%\nPlacement",
        description: "Massive global shortage of paramedical staff ensures immediate placement upon graduation."
      },
      {
        badge: "Advanced Tech",
        title: "Modern\nEquipment",
        description: "Learn on the same advanced imaging and diagnostic machines used in top corporate hospitals."
      }
    ]
  },
  specialisations: {
    description: "Choose your paramedical specialty.",
    items: [
      {
        id: "mlt",
        name: "Medical Laboratory Technology (MLT)",
        learn: "Hematology, biochemistry, microbiology, and advanced pathology diagnostics.",
        skills: ["Blood Analysis", "Microbial Culture", "Quality Control"],
        tools: ["Auto-analyzers", "Microscopes", "Centrifuges"],
        careers: ["Lab Technologist", "Pathology Assistant", "Research Assistant"]
      },
      {
        id: "ott",
        name: "Anesthesia and Operation Theatre Technology",
        learn: "Surgical assistance, sterilization protocols, and anesthesia equipment management.",
        skills: ["Surgical Prep", "Anesthesia Assistance", "Infection Control"],
        tools: ["Anesthesia Workstations", "Sterilizers", "Surgical Instruments"],
        careers: ["OT Technologist", "Anesthesia Technician", "Surgical Assistant"]
      }
    ]
  },
  career: {
    stats: [
      { value: "100%", label: "Placement Rate" },
      { value: "₹4-7 LPA", label: "Starting Package" },
      { value: "50+", label: "Diagnostic Chains" },
      { value: "Global", label: "Demand" }
    ],
    topRoles: [
      { title: "MLT - Diagnostic Labs", tag: "B.MLS · LAL PATH · METROPOLIS", icon: "ph:test-tube-fill" },
      { title: " Anaesthesia Technologist", tag: "B.AOTT", icon: "ph:graduation-cap-fill" },
      { title: "Biotech R&D Scientist", tag: "M.SC. BIOTECH · PHARMA + RESEARCH", icon: "ph:dna-fill" },
      { title: "Microbiologist", tag: "HOSPITALS · FOOD + PHARMA QC", icon: "ph:microscope-fill" },
      { title: "Higher Studies / Research", tag: "B.SC. HONS → M.SC. → PH.D.", icon: "ph:graduation-cap-fill" },
      { title: "Public Health Lab", tag: "ENTREPRENEURIAL ROUTE", icon: "ph:briefcase-fill" }
    ]
  },
  labs: {
    title: "Advanced paramedical laboratories.",
    description: "Our labs are equipped with industry-standard diagnostic and clinical equipment.",
    features: [
      { title: "Pathology Lab", description: "Fully functional setup for hematology and biochemistry tests.", image: "/labs/Applied and healthcare Science/DSC03110.jpg" },
      { title: "Mock OT", description: "Simulated operation theater for training in surgical assistance.", image: "/labs/Applied and healthcare Science/DSC03125.jpg" },
      { title: "Radiology Suite", description: "Training setups for X-ray, Ultrasound, and basic MRI principles.", image: "/labs/Applied and healthcare Science/DSC03157.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Anupam Kumar",
    linkedin: "https://www.linkedin.com/in/dr-anupam-kumar/",
    role: "Dean, Faculty of Applied and Healthcare Sciences",
    bio: "At the faculty of Applied and Healthcare Sciences we are dedicated to advancing knowledge, fostering innovation, and improving the environment, health and well-being of our society through cutting-edge research, education, and practice.",
    image: "/faculties/Applied and Healthcare Sciences/Dean.jpg",
    faculty: [
    {
        role: "Assistant Professor",
        name: "Dr. Manasi Pawaskar",
        degree: "Ph.D.",
        faculty: "Faculty of Applied and Health Sciences",
        department: "Applied and Health Sciences",
        experience: "2 Years",
        researchArea: "",
        image: "/faculties/Dr.-Manasi-Pawaskar.jpg"
    },
    {
        role: "Assistant Professor",
        name: "Dr. Abhinaba Ghosh",
        degree: "Ph.D.",
        faculty: "Faculty of Applied and Health Sciences",
        department: "Applied and Health Sciences",
        experience: "1 Years  8 Months",
        researchArea: "",
        image: "/faculties/Dr.-Abhinaba-Ghosh.jpg"
    },
    {
        role: "Assistant Professor",
        name: "Dr. Monalisa Chowdhury",
        degree: "Ph.D.",
        faculty: "Faculty of Applied and Health Sciences",
        department: "Applied and Health Sciences",
        experience: "5 Months",
        researchArea: "",
        image: "/faculties/Dr.-Monalisa-Chowdhury.jpg"
    },
    {
        role: "Assistant Professor",
        name: "Ms. Dhruvi Patel",
        degree: "M.Sc.",
        faculty: "Faculty of Applied and Health Sciences",
        department: "Applied and Health Sciences",
        experience: "7 Years",
        researchArea: "",
        image: "/faculties/Ms.-Dhruvi-Patel.jpg"
    },
    {
        role: "Assistant Professor",
        name: "Ms. Veda Paranjape",
        degree: "M.Sc.",
        faculty: "Faculty of Applied and Health Sciences",
        department: "Applied and Health Sciences",
        experience: "",
        researchArea: "",
        image: "/faculties/Ms.-Veda-Paranjape.jpg"
    }
]},
  faqs: [
    {
        question: "B.AOTT vs B.MLS — what's the difference?",
        answer: "B.AOTT (Anesthesia & Operation Theatre Technology) trains you to assist surgeons and manage OT equipment. B.MLS (Medical Laboratory Science) focuses on diagnostics, pathology, blood banking and clinical microbiology. Both have high hospital demand."
    },
    {
        question: "B.Sc. vs B.Sc. Honours?",
        answer: "B.Sc. is 3 years and broader. B.Sc. Honours is 4 years under NEP 2020 with a specialisation (Biotech or Micro) and a research capstone. Honours qualifies you for foreign Master's programmes that need a 4-year UG and gives an academic edge for M.Sc./Ph.D. admissions."
    },
    {
        question: "Career paths after M.Sc. Biotech?",
        answer: "R&D scientist (pharma, agri-biotech, food), QC/QA in biopharma manufacturing, clinical research associate, biotech sales, regulatory affairs, or Ph.D. for academic research."
    },
    {
        question: "Hospital postings and stipend?",
        answer: "B.AOTT and B.MLS include a one-year paid internship across partner hospitals. Earlier semesters include unpaid clinical exposure under supervision."
    },
    {
        question: "Do I need an entrance test?",
        answer: "Most Allied Health programmes are merit-based on 10+2 marks. Some programmes have a PU Goa entrance evaluation — admissions counsellors will confirm by programme."
    }
],
  themeColor: {
    waveBand: "#E73649", // Red theme
    waveAccent: "#C92B3C",
    cardBg: "#E73649",
    cardText: "#FFFFFF"
  }
};
