import { ProgrammeData } from "./types";

export const pharmacyData: ProgrammeData = {
  slug: "pharmacy",
  title: "Pharmacy",
  hero: {
    badge: "Faculty of Pharmacy",
    title: "From molecule to medicine.",
    highlight: "Pharmacy that transforms lives.",
    subtitle: "Pioneering pharmaceutical sciences, clinical practice, and advanced research.",
    backgroundImage: "/programmes/pharmacy.jpg",
  },
  snapshotRow: [
    { title: "Duration", value: "4 yrs", subtext: "Lateral: 3 yrs" },
    { title: "Eligibility", value: "10+2 PCB/PCM", subtext: "or D.Pharm (LE)" },
    { title: "Approval", value: "PCI-aligned", subtext: "Council recognised" },
    { title: "Labs", value: "5 core", subtext: "Incl. Central Instrumentation" },
    { title: "Outcomes", value: "Pharma + Clinic", subtext: "Industry & hospital" },
  ],
  why: {
    title: "Why students choose us",
    subtitle: "The PU Goa difference.",
    cards: [
      {
        badge: "",
        title: "Central\nInstrumentation",
        description: "HPLC, UV-Vis, FTIR, dissolution apparatus and more - every student gets hands-on time."
      },
      {
        badge: "",
        title: "Community\nPharmacy Drives",
        description: "World Antibiotic Awareness Day, HIV/AIDS awareness and National Pharmacy Education Day every academic year."
      },
      {
        badge: "",
        title: "Higher Studies\nPath",
        description: "Direct route to M.Pharm, Pharm.D and MBA in Pharma Management - internal mentorship from final year."
      }
    ]
  },
  specialisations: {
    description: "Specialise in critical areas of pharmaceutical sciences.",
    items: [
      {
        id: "pharmaceutics",
        name: "Pharmaceutics",
        learn: "Formulation development, drug delivery systems, and industrial pharmacy manufacturing.",
        skills: ["Formulation Design", "Quality Assurance", "Regulatory Affairs"],
        tools: ["Dissolution Testers", "HPLC", "Spectrophotometers"],
        careers: ["Formulation Scientist", "QA/QC Manager", "Production Head"]
      },
      {
        id: "pharmacology",
        name: "Pharmacology",
        learn: "Drug actions, interactions, clinical research, and therapeutic evaluations.",
        skills: ["Clinical Trials", "Toxicology", "Data Analysis"],
        tools: ["In-vivo modeling", "Statistical Software", "Clinical databases"],
        careers: ["Clinical Research Associate", "Pharmacologist", "Regulatory Specialist"]
      }
    ]
  },
  career: {
    stats: [
      { value: "100%", label: "Placement Assistance" },
      { value: "₹7 LPA", label: "Average Package" },
      { value: "40+", label: "Pharma Recruiters" },
      { value: "Top 50", label: "National Ranking" }
    ],
    topRoles: [
      { title: "Clinical Pharmacist", tag: "HOSPITALS & MULTI-SPECIALTY CHAINS", icon: "ph:pill-fill" },
      { title: "Drug Regulatory Affairs", tag: "CDSCO, FDA PATHWAYS", icon: "ph:certificate-fill" },
      { title: "Industry Pharmacist", tag: "CIPLA, SUN, DR REDDY'S, LUPIN", icon: "ph:factory-fill" },
      { title: "Quality Assurance", tag: "GMP / GLP ENVIRONMENTS", icon: "ph:shield-check-fill" },
      { title: "Hospital Pharmacy", tag: "TERTIARY CARE & COMMUNITY", icon: "ph:hospital-fill" },
      { title: "Higher Studies", tag: "M.PHARM · PHARM.D · MBA PHARMA MGMT", icon: "ph:graduation-cap-fill" }
    ]
  },
  labs: {
    title: "Where you'll actually practise.",
    description: "",
    features: [
      { title: "Pharmacology Laboratory", description: "", image: "/labs/Pharmacy/DSC09672.jpg" },
      { title: "Pharmaceutics Laboratory", description: "", image: "/labs/Pharmacy/DSC09691.jpg" },
      { title: "Pharmacognosy and Biotechnology Laboratory", description: "", image: "/labs/Pharmacy/DSC09708.jpg" },
      { title: "Quality Assurance Laboratory", description: "", image: "/labs/Pharmacy/DSC09735.jpg" },
      { title: "Pharmacy Practice Laboratory", description: "", image: "/labs/Pharmacy/DSC09888.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Lalit Lata Jha",
    linkedin: "https://www.linkedin.com/company/parul-university-goa/",
    role: "Dean, Faculty of Pharmacy",
    bio: "Dr. Lalit Lata Jha is a renowned academician and researcher with extensive experience in pharmaceutical sciences.",
    image: "/faculties/Pharmacy/Dean.png",
    faculty: [

  {
    role: "Associate Professor",
    name: "Dr. Prabhat Dessai",
    degree: "Ph.D.",
    faculty: "Faculty of Pharmacy",
    department: "Pharmacy",
    experience: "16 Years",
    researchArea: "Quality Assurance, Analytical Techniques",
    image: "/faculties/Dr.-Prabhat-Dessai.jpg"
  },

  {
    role: "Assistant Professor",
    name: "Dr. Sanjeeta Dessai",
    degree: "Ph.D.",
    faculty: "Faculty of Pharmacy",
    department: "Pharmacy",
    experience: "6 Years",
    researchArea: "Packaging Technology, Novel drug delivery systems",
    image: "/faculties/Dr.-Sanjeeta-Dessai.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Ms. Henncia Gomes",
    degree: "M.Pharm.",
    faculty: "Faculty of Pharmacy",
    department: "Pharmacy",
    experience: "8 Years",
    image: "/faculties/Ms.-Henncia-Gomes.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Ms. Anisha Naik",
    degree: "M.Pharm.",
    faculty: "Faculty of Pharmacy",
    department: "Pharmacy",
    experience: "6 Years",
    image: "/faculties/Ms.-Anisha-Naik.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Mr. Damodar Goundkar",
    degree: "M.Pharm.",
    faculty: "Faculty of Pharmacy",
    department: "Pharmacy",
    experience: "2 Years",
    researchArea: "Neuropharmacology / Neurodegenerative Disorders",
    image: "/faculties/Mr.-Damodar-Goundkar.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Ms. Shradha Umesh Naik",
    degree: "M.Pharm.",
    faculty: "Faculty of Pharmacy",
    department: "Pharmacy",
    researchArea: "Novel Drug Delivery Systems",
    image: "/faculties/Ms.-Shradha-Umesh-Naik.jpg"
  },
]},
  faqs: [
    { question: "Do students get hospital training?", answer: "Yes, rigorous hospital and clinical training is a mandatory part of the curriculum." },
    { question: "What are the career options after B.Pharm?", answer: "Graduates can work as clinical pharmacists, research scientists, QA/QC executives in pharmaceutical manufacturing, or drug inspectors." },
    { question: "Are there research opportunities for undergraduates?", answer: "Yes, final year B.Pharm students are encouraged to participate in molecular modeling, drug formulation, and clinical research projects under faculty mentorship." },
    { question: "What is eligibility criteria for B.Pharm?", answer: "Eligibility criteria for B.Pharm is 10+2 with PCB/PCM (physics, chemistry, biology or maths) and other criterias are will be updated on the website or brochure." }
  ],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0A99C7",
    cardBg: "#FCE34B",
    cardText: "#1F2937"
  }
};
