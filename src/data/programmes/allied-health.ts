import { ProgrammeData } from "./types";

export const alliedHealthData: ProgrammeData = {
  slug: "allied-health",
  title: "Allied and Health Sciences",
  hero: {
    badge: "Faculty of Allied Health Sciences",
    title: "Where science",
    highlight: "serves humanity.",
    subtitle: "Powering the backbone of modern diagnostics, surgical assistance, and critical care.",
    backgroundImage: "/programmes/hero-allied-health.png",
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
        name: "Operation Theater Technology",
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
      { title: "OT Technician", tag: "B.AOTT · HOSPITAL SURGICAL UNITS", icon: "ph:bandaids-fill" },
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
      { title: "Pathology Lab", description: "Fully functional setup for hematology and biochemistry tests.", image: "/applied-science/DSC03110.jpg" },
      { title: "Mock OT", description: "Simulated operation theater for training in surgical assistance.", image: "/applied-science/DSC03125.jpg" },
      { title: "Radiology Suite", description: "Training setups for X-ray, Ultrasound, and basic MRI principles.", image: "/applied-science/DSC03157.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png"
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
    { question: "What is the scope of Allied Health Sciences?", answer: "Paramedical professionals are the backbone of healthcare. They assist doctors in diagnostics, surgeries, and critical care, with immense demand globally." },
    { question: "Do these programmes include hospital training?", answer: "Yes, all our allied health degrees include mandatory clinical rotations in diagnostic labs and operation theaters of our partner hospitals." },
    { question: "What is Medical Laboratory Technology (MLT)?", answer: "MLT focuses on the analysis of bodily fluids, tissues, and cells to diagnose diseases. It covers hematology, biochemistry, and microbiology." },
    { question: "Are allied health degrees recognized for government jobs?", answer: "Yes, our paramedical degrees are recognized by the State Paramedical Council, making graduates fully eligible for government healthcare roles." },
    { question: "Can I upgrade from a Diploma to a B.Sc degree?", answer: "Yes, we offer lateral entry programs that allow diploma holders in allied health sciences to directly enter the second year of the respective B.Sc programme." }
  ],
  themeColor: {
    waveBand: "#1F1F1F", // Black theme
    waveAccent: "#333333",
    cardBg: "#1F1F1F",
    cardText: "#FFFFFF"
  }
};
