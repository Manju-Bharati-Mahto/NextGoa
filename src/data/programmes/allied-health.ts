import { ProgrammeData } from "./types";

export const alliedHealthData: ProgrammeData = {
  slug: "allied-health",
  title: "Allied and Healthcare Sciences",
  hero: {
    badge: "Allied and Healthcare Sciences",
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
    role: "Dean, Faculty of Applied and Healthcare Sciences",
    bio: "At the faculty of Applied and Healthcare Sciences we are dedicated to advancing knowledge, fostering innovation, and improving the environment, health and well-being of our society through cutting-edge research, education, and practice.",
    image: "/faculties/Applied and Healthcare Sciences/Dean.jpg",
    faculty: [
      { role: "PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Healthcare Sciences", specialities: "-------------", image: "/faculties/Applied and Healthcare Sciences/Faculty.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Healthcare Sciences", specialities: "-------------", image: "/faculties/Applied and Healthcare Sciences/Faculty2.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Healthcare Sciences", specialities: "-------------", image: "/faculties/Applied and Healthcare Sciences/Faculty3.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Faculty of Applied and Healthcare Sciences", specialities: "-------------", image: "/faculties/Applied and Healthcare Sciences/Faculty4.jpg" }
    ]
  },
  faqs: [
    { question: "What is the core difference between B.AOTT and B.MLS?", answer: "They sit in two very different parts of a hospital. B.AOTT trains you for the operation theatre. Think surgical assistance, handling the anaesthesia equipment, keeping the OT running in order. Subsequently, B.MLS is the lab side instead. You're working in diagnostics here, so pathology, biochemistry, and microbiology testing make up most of it." },
    { question: "What is the difference between B.Sc. and B.Sc. Honours?", answer: "B.Sc. runs for three years and keeps things broad, giving you a wide spread of learning & expertise. Honours stretches to four years under NEP 2020, and that extra time goes into a specialisation plus a research part at the end. It can count toward eligibility for international Master's programmes and the more advanced academic routes." },
    { question: "What career opportunities are available after M.Sc. Biotechnology?", answer: "Depends on interest solely. Some graduates head into research and development, others into quality control and assurance. Clinical research and regulatory affairs are common as well. There's also the sales side of biotechnology if that suits you. And if you'd rather stay in academics, doctoral study and research are perfect for building a career." },
    { question: "Do these programmes include hospital postings and stipends?", answer: "Indeed, both do. B.AOTT and B.MLS bring in clinical exposure and opportunities via partner hospitals. The big part is a one-year paid internship, and before that, the earlier semesters give you supervised practical training to build up to it." }
  ],
  themeColor: {
    waveBand: "#1F1F1F", // Black theme
    waveAccent: "#333333",
    cardBg: "#1F1F1F",
    cardText: "#FFFFFF"
  }
};
