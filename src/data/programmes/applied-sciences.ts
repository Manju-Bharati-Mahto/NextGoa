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
      { title: "Molecular Biology Lab", description: "Equipped with advanced tools for DNA and RNA analysis.", image: "/labs/Applied and healthcare Science/DSC03130.jpg" },
      { title: "Microbiology Lab", description: "Dedicated space for culturing and studying microorganisms.", image: "/labs/Applied and healthcare Science/DSC03132.jpg" },
      { title: "Bioinformatics Center", description: "High-performance computing for biological data analysis.", image: "/labs/Applied and healthcare Science/DSC03135.jpg" },
      { title: "Advanced Research Lab", description: "State-of-the-art facilities for interdisciplinary research.", image: "/labs/Applied and healthcare Science/DSC03138.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png" // Placeholder
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
    image: "/faculties/Dr.-Manasi-Pawaskar.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Dr. Abhinaba Ghosh",
    degree: "Ph.D.",
    faculty: "Faculty of Applied and Health Sciences",
    department: "Applied and Health Sciences",
    experience: "1 Years",
    image: "/faculties/Dr.-Abhinaba-Ghosh.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Dr. Monalisa Chowdhury",
    degree: "Ph.D.",
    faculty: "Faculty of Applied and Health Sciences",
    department: "Applied and Health Sciences",
    image: "/faculties/Dr.-Monalisa-Chowdhury.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Ms. Dhruvi Patel",
    degree: "M.Sc.",
    faculty: "Faculty of Applied and Health Sciences",
    department: "Applied and Health Sciences",
    experience: "7 Years",
    image: "/faculties/Ms.-Dhruvi-Patel.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Ms. Veda Paranjape",
    degree: "M.Sc.",
    faculty: "Faculty of Applied and Health Sciences",
    image: "/faculties/Ms.-Veda-Paranjape.jpg"
  },
]},
  faqs: [
    {
      question: "What is the core difference between B.AOTT and B.MLS?",
      answer: "They sit in two very different parts of a hospital. B.AOTT trains you for the operation theatre. Think surgical assistance, handling the anaesthesia equipment, keeping the OT running in order. Subsequently, B.MLS is the lab side instead. You're working in diagnostics here, so pathology, biochemistry, and microbiology testing make up most of it."
    },
    {
      question: "What is the difference between B.Sc. and B.Sc. Honours?",
      answer: "B.Sc. runs for three years and keeps things broad, giving you a wide spread of learning & expertise. Honours stretches to four years under NEP 2020, and that extra time goes into a specialisation plus a research part at the end. It can count toward eligibility for international Master's programmes and the more advanced academic routes."
    },
    {
      question: "What career opportunities are available after M.Sc. Biotechnology?",
      answer: "Depends on interest solely. Some graduates head into research and development, others into quality control and assurance. Clinical research and regulatory affairs are common as well. There's also the sales side of biotechnology if that suits you. And if you'd rather stay in academics, doctoral study and research are perfect for building a career."
    },
    {
      question: "Do these programmes include hospital postings and stipends?",
      answer: "Indeed, both do. B.AOTT and B.MLS bring in clinical exposure and opportunities via partner hospitals. The big part is a one-year paid internship, and before that, the earlier semesters give you supervised practical training to build up to it."
    }
  ],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0094C4",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
