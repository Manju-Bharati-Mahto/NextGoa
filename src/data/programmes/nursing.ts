import { ProgrammeData } from "./types";

export const nursingData: ProgrammeData = {
  slug: "nursing",
  title: "Nursing",
  hero: {
    badge: "Faculty of Nursing",
    title: "Where dedication",
    highlight: "becomes healing.",
    subtitle: "Empowering the next generation of compassionate healthcare professionals.",
    backgroundImage: "/programmes/nursing.jpg",
    imagePosition: "object-center lg:object-left",
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
      { title: "Fundamentals Lab", description: "Basic nursing procedures on advanced mannequins.", image: "/labs/Nursing/DSC00047.jpg" },
      { title: "Maternal & Child Lab", description: "Specialized birthing simulators and neonatal care units.", image: "/labs/Nursing/DSC03026.jpg" },
      { title: "Community Health Lab", description: "Equipped for rural healthcare training and public health camps.", image: "/labs/Nursing/DSC03028.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Jeyalakshmi.K",
    role: "Dean - Faculty of Nursing",
    bio: "A leader in nursing education with deep clinical and academic experience across community health, midwifery and critical care nursing.",
    image: "/faculties/Nursing/Dean.png",
    faculty: [
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Medical-Surgical Nursing", image: "/faculties/Nursing/Faculty.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Community Health Nursing", image: "/faculties/Nursing/Faculty2.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Pediatric Nursing", image: "/faculties/Nursing/Faculty3.webp" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Nursing", specialities: "Medical-Surgical Nursing", image: "/faculties/Nursing/Faculty4.jpg" }
    ]
  },
  faqs: [
    { question: "Is the entrance test compulsory?", answer: "Indeed. PU Goa holds its own test, offline, for the B.Sc. Nursing seats. Eligibility criteria: You'll need 10+2 in Science with PCB to sit for it. After that, if your name's on the shortlist, the college reaches out by email and SMS." },
    { question: "What is the eligibility for B.Sc. Nursing and GNM?", answer: "These two differ a fair bit. B.Sc. Nursing asks for 10+2 with PCB and English, and your aggregate has to touch 45% at least. GNM is easier to get into. Any stream works, provided you've done English. One's a full degree. The other is a diploma, though it still leads somewhere, with decent room to grow afterwards." },
    { question: "What hostel, safety, and stipend facilities are available?", answer: "Hostels are separate for girls and boys. Security stays on through the day and night, wardens are around, the mess runs, and there's a medical room on campus if anyone falls sick. Final year brings a stipend during the internship. And when students go out for community postings, their travel gets covered too." },
    { question: "Are the programmes recognised by INC and the state council?", answer: "Indeed. Everything's run to Indian Nursing Council and Goa State Nursing Council norms. The exact approval paperwork gets shared with you once admissions start." }
  ],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0094C4",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
