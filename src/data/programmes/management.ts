import { ProgrammeData } from "./types";

export const managementData: ProgrammeData = {
  slug: "management-studies",
  title: "Management Studies",
  hero: {
    badge: "Faculty of Management Studies",
    title: "Shape Tomorrow's Business Landscape.",
    highlight: "Develop leadership skills and strategic vision.",
    subtitle: "Hands-on business cases, industry corridors, and global degrees in Goa.",
    backgroundImage: "/programmes/mba.jpg",
  },
  snapshotRow: [
    { title: "Tracks", value: "BBA · MBA", subtext: "UG + PG under one roof" },
    { title: "BBA Duration", value: "3 / 4 yrs", subtext: "Under NEP 2020" },
    { title: "MBA Duration", value: "2 yrs", subtext: "Full-time, on-campus" },
    { title: "Specialisations", value: "10+", subtext: "Across BBA & MBA" },
    { title: "Pathways", value: "5 countries", subtext: "USA · UK · NZ · CA" },
  ],
  why: {
    title: "Why PU Goa",
    subtitle: "Management with an unfair advantage.",
    cards: [
      {
        badge: "Industry-Integrated",
        title: "Live Business\nCases",
        description: "Learn from real-world business scenarios, Harvard case studies, and corporate leaders who visit campus regularly."
      },
      {
        badge: "Future-ready",
        title: "NEP 2020 +\nGlobal Curriculum",
        description: "Curriculum designed to meet international standards. Choice-based credit system with multidisciplinary options."
      },
      {
        badge: "6 countries",
        title: "Global\nPathways",
        description: "2+2, 1+1, 3+1+1 routes to USA, UK, Germany, Australia, New Zealand and France with named partner universities."
      }
    ]
  },
  specialisations: {
    description: "Our Management Studies programmes offer diverse specialisations to align with your career goals.",
    items: [
      {
        id: "marketing",
        name: "Marketing Management",
        learn: "Consumer behavior, digital marketing strategies, brand management, and market research methodologies.",
        skills: ["Digital Marketing", "SEO/SEM", "Brand Strategy", "Market Analytics"],
        tools: ["Google Analytics", "HubSpot", "Meta Business Suite", "Hootsuite"],
        careers: ["Marketing Manager", "Brand Strategist", "Digital Marketing Lead"]
      },
      {
        id: "finance",
        name: "Finance",
        learn: "Corporate finance, investment banking, portfolio management, and financial modeling for modern enterprises.",
        skills: ["Financial Analysis", "Risk Management", "Valuation", "Taxation"],
        tools: ["Bloomberg Terminal", "Excel Advanced", "Tally", "QuickBooks"],
        careers: ["Financial Analyst", "Investment Banker", "Risk Manager"]
      },
      {
        id: "hr",
        name: "Human Resource Management",
        learn: "Talent acquisition, organizational behavior, employee relations, and HR analytics.",
        skills: ["Recruitment", "Performance Management", "Labor Laws", "HR Analytics"],
        tools: ["Workday", "SAP SuccessFactors", "BambooHR", "Tableau"],
        careers: ["HR Business Partner", "Talent Acquisition Manager", "Compensation Analyst"]
      }
    ]
  },
  career: {
    stats: [
      { value: "95%", label: "Placement Rate" },
      { value: "₹8 LPA", label: "Average Package" },
      { value: "50+", label: "Fortune 500 Recruiters" },
      { value: "20+", label: "Student Startups" }
    ],
    topRoles: [
      { title: "Business Analyst", tag: "CONSULTING & CORPORATE", icon: "ph:chart-line-up-fill" },
      { title: "Investment Associate", tag: "BANKING & PE", icon: "ph:bank-fill" },
      { title: "Marketing Manager", tag: "FMCG · TECH", icon: "ph:megaphone-fill" },
      { title: "Product Manager", tag: "TECH & STARTUPS", icon: "ph:cube-fill" },
      { title: "Operations Lead", tag: "MANUFACTURING · RETAIL", icon: "ph:gear-fill" },
      { title: "Founder / Family Business", tag: "ENTREPRENEURSHIP", icon: "ph:buildings-fill" }
    ]
  },
  labs: {
    title: "Learn in modern business environments.",
    description: "Our campus is equipped with state-of-the-art facilities that simulate real-world corporate environments.",
    features: [
      { title: "Finance Lab", description: "Equipped with Bloomberg terminals for real-time market analysis." },
      { title: "Incubation Centre", description: "Dedicated space for student entrepreneurs to develop and launch their startups." },
      { title: "Conference Rooms", description: "Boardroom-style spaces for case study discussions and presentations." }
    ],
    image: "/programmes/engineering_hero_bg.png" // Placeholder
  },
  dean: {
    name: "Dr. Kshitiz Sharma",
    role: "Dean - Faculty of Management Studies",
    bio: "A seasoned academic and management strategist with extensive experience leading business schools and consulting for global enterprises across analytics, finance and operations.",
    image: "/faculties/Management/Dean.jpg",
    faculty: [
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Marketing", specialities: "Brand Strategy, Consumer Behaviour", image: "/faculties/Management/Faculty.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., Finance", specialities: "Corporate Finance, FinTech", image: "/faculties/Management/Faculty1.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "MBA, Analytics", specialities: "Business Analytics, Data Visualization", image: "/faculties/Management/Faculty3.jpg" },
      { role: "ASSOCIATE PROFESSOR", name: "Faculty Member", degree: "Ph.D., HR", specialities: "Organizational Behaviour, HR Analytics", image: "/faculties/Management/Faculty4.jpg" }
    ]
  },
  faqs: [
    { question: "What is the admission criteria for MBA?", answer: "Admission is based on valid scores in CAT/MAT/CMAT followed by a personal interview." },
    { question: "Are there opportunities for international exchange?", answer: "Yes, we have tie-ups with universities across 6 countries for student exchange programs." },
    { question: "Does the university provide placement support?", answer: "We have a dedicated placement cell that guarantees 100% placement assistance and organizes campus drives." },
    { question: "Can I pursue a specialized MBA?", answer: "Absolutely. We offer 7 major specialisations including Finance, Marketing, HR, and Analytics, allowing you to tailor your degree to your career goals." },
    { question: "What kind of industry exposure is provided?", answer: "Students solve live business cases from Harvard, interact with corporate leaders through weekly guest lectures, and undergo a mandatory 8-week corporate internship." }
  ],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0094C4",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
