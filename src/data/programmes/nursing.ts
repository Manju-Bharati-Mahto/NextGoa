import { ProgrammeData } from "./types";

export const nursingData: ProgrammeData = {
  slug: "nursing",
  title: "Nursing",
  hero: {
    badge: "Faculty of Nursing",
    title: "Where dedication",
    highlight: "becomes healing.",
    subtitle: "Empowering the next generation of compassionate healthcare professionals.",
    backgroundImage: "/programmes/hero-nursing.png",
  },
  snapshotRow: [
    { title: "Duration", value: "3.5 / 4 yrs", subtext: "GNM · B.Sc. Nursing" },
    { title: "Eligibility", value: "10+2 Science", subtext: "PCB preferred" },
    { title: "Council", value: "INC-aligned", subtext: "+ State Council" },
    { title: "Posting", value: "Hospitals", subtext: "Tertiary care attached" },
    { title: "Outcomes", value: "India + Gulf + UK", subtext: "NHS pathways" },
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
        title: "Scholarships for Girl\nStudents",
        description: "Merit and need-based scholarships specifically for women in nursing - meet a counsellor to map your eligibility."
      },
      {
        badge: "",
        title: "Hospital-Attached\nPostings",
        description: "Clinical postings from second year across tertiary-care partner hospitals - paid stipend in final year internship."
      }
    ]
  },
  specialisations: {
    description: "Focus your nursing career in highly specialized healthcare fields.",
    items: [
      {
        id: "critical-care",
        name: "Critical Care Nursing",
        learn: "Advanced life support, ICU management, and emergency trauma care.",
        skills: ["Triage", "Ventilator Management", "Trauma Response"],
        tools: ["Defibrillators", "Patient Monitors", "Infusion Pumps"],
        careers: ["ICU Nurse", "ER Specialist", "Critical Care Coordinator"]
      }
    ]
  },
  career: {
    stats: [
      { value: "100%", label: "Placement Rate" },
      { value: "₹6 LPA", label: "Average Package" },
      { value: "10+", label: "International Hospital Tie-ups" },
      { value: "500+", label: "Alumni Globally" }
    ],
    topRoles: [
      { title: "Staff Nurse - Tertiary Care", tag: "APOLLO · MANIPAL · FORTIS", icon: "ph:first-aid-fill" },
      { title: "ICU / Critical Care Nurse", tag: "SPECIALISED HOSPITAL UNITS", icon: "ph:pulse-fill" },
      { title: "Community Health Nurse", tag: "PUBLIC HEALTH & PHC", icon: "ph:users-fill" },
      { title: "Nurse Educator", tag: "TEACHING & TRAINING", icon: "ph:chalkboard-teacher-fill" },
      { title: "Gulf Healthcare", tag: "UAE · SAUDI · OMAN", icon: "ph:buildings-fill" },
      { title: "UK NHS Pathways", tag: "OSCE-ROUTE REGISTERED NURSE", icon: "ph:shield-plus-fill" }
    ]
  },
  labs: {
    title: "Train in high-fidelity simulation centers.",
    description: "Our nursing labs replicate real hospital wards to ensure students build confidence and competence.",
    features: [
      { title: "Fundamentals Lab", description: "Basic nursing procedures on advanced mannequins." },
      { title: "Maternal & Child Lab", description: "Specialized birthing simulators and neonatal care units." },
      { title: "Community Health Lab", description: "Equipped for rural healthcare training and public health camps." }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Jeyalakshmi.K",
    role: "Dean - Faculty of Nursing",
    bio: "A leader in nursing education with deep clinical and academic experience across community health, midwifery and critical care nursing.",
    image: "/programmes/engineering_hero_bg.png",
    faculty: [
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Medical-Surgical Nursing" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Community Health Nursing" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Pediatric Nursing" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Medical-Surgical Nursing" }
    ]
  },
  faqs: [
    { question: "Is this degree recognized internationally?", answer: "Yes, our B.Sc Nursing is recognized by INC and qualifies you to take international licensure exams like NCLEX." },
    { question: "Are clinical rotations included in the curriculum?", answer: "Absolutely. Students undergo extensive hands-on training at our affiliated multi-specialty teaching hospital starting from the second year." },
    { question: "What is the difference between GNM and B.Sc Nursing?", answer: "GNM is a 3-year diploma focusing on general nursing and midwifery, while B.Sc Nursing is a 4-year undergraduate degree that provides a more comprehensive scientific and theoretical foundation." },
    { question: "Do you provide support for overseas placements?", answer: "Yes, we offer dedicated training for the NCLEX-RN exam and English proficiency tests (OET/IELTS) to help secure nursing roles abroad." },
    { question: "Are there opportunities for postgraduate studies?", answer: "Yes, after completing B.Sc Nursing, you can pursue M.Sc Nursing in specialized fields like Critical Care, Pediatrics, or Psychiatric Nursing." }
  ],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0094C4",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
