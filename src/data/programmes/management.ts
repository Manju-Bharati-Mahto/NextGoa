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
      { title: "Finance Lab", description: "Equipped with Bloomberg terminals for real-time market analysis.", image: "/labs/Management studies/DSC03248.jpg" },
      { title: "Incubation Centre", description: "Dedicated space for student entrepreneurs to develop and launch their startups.", image: "/labs/Management studies/DSC03255.jpg" },
      { title: "Conference Rooms", description: "Boardroom-style spaces for case study discussions and presentations.", image: "/labs/Management studies/DSC03257.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png" // Placeholder
  },
  dean: {
    name: "Dr. Kshitiz Sharma",
    linkedin: "https://in.linkedin.com/in/dr-kshitiz-sharma-blr",
    orcid: "https://orcid.org/0000-0002-1145-8979",
    role: "Dean - Faculty of Management Studies",
    bio: "A seasoned academic and management strategist with extensive experience leading business schools and consulting for global enterprises across analytics, finance and operations.",
    image: "/faculties/Management/Dean.jpg",
    faculty: [
    {
        role: "Associate Professor",
        name: "Dr. Rinki Mishra",
        degree: "Ph.D.",
        faculty: "Faculty of Management Studies",
        department: "Management",
        experience: "14 Years 5 Months",
        researchArea: "",
        image: "/faculties/Dr.-Rinki-Mishra.jpg",
        linkedin: "https://www.linkedin.com/in/dr-rinki-mishra-93533810a",
        orcid: "https://orcid.org/0000-0001-8914-207X"
    },
    {
        role: "Associate Professor",
        name: "Dr. Shaifali Garg",
        degree: "Ph.D.",
        faculty: "Faculty of Management Studies",
        department: "Management",
        experience: "",
        researchArea: "",
        image: "/faculties/Dr.-Shaifali-Garg.jpg"
    },
    {
        role: "Assistant Professor",
        name: "Dr. Rohit Mishra",
        degree: "Ph.D.",
        faculty: "Faculty of Management Studies",
        department: "Management",
        experience: "8 Years 11 Months",
        researchArea: "",
        image: "/faculties/Dr.-Rohit-Mishra.jpg",
        linkedin: "https://www.linkedin.com/in/dr-rohit-mishra-631959128",
        orcid: "https://orcid.org/0009-0000-4847-860X"
    },
    {
        role: "Assistant Professor",
        name: "Dr. Poornima BG",
        degree: "Ph.D.",
        faculty: "Faculty of Management Studies",
        department: "Management",
        experience: "14 Years 1 Months",
        researchArea: "",
        image: "/faculties/Dr.-Poornima-BG.jpg",
        linkedin: "https://www.linkedin.com/in/poornima-bg-3a51354a/"
    },
    {
        role: "Assistant Professor",
        name: "Dr. Amar Jamnekar",
        degree: "Ph.D.",
        faculty: "Faculty of Management Studies",
        department: "Management",
        experience: "4Years 5 Month",
        researchArea: "",
        image: "/faculties/Dr.-Amar-Jamnekar.jpg",
        linkedin: "https://www.linkedin.com/in/dr-amar-jamnekar-59112545",
        orcid: "https://orcid.org/0009-0002-8907-0242"
    },
    {
        role: "Assistant Professor",
        name: "Mr. Satyajitsinh Gohil",
        degree: "MBA",
        faculty: "Faculty of Management Studies",
        department: "Management",
        experience: "3 Years 6  Months",
        researchArea: "",
        image: "/faculties/Mr.-Satyajitsinh-Gohil.jpg",
        linkedin: "https://www.linkedin.com/in/prof-satyajitsinh-gohil-321500138",
        orcid: "https://orcid.org/0000-0001-6487-3511"
    }
]},
  faqs: [
    {
        question: "BBA vs BBA Honours — which one?",
        answer: "BBA is a 3-year degree; BBA Honours is a 4-year degree aligned with NEP 2020. The 4th year includes a research capstone, making it eligible for 1-year Master's programmes abroad."
    },
    {
        question: "What's the MBA work-experience requirement?",
        answer: "PU Goa MBA admits both fresh graduates and working professionals. Cohorts are mixed; work experience is preferred but not mandatory. Selection is based on CAT / MAT / CMAT / PU Goa entrance + GD-PI."
    },
    {
        question: "Average package and top recruiters?",
        answer: "PU Goa management students access the wider Parul University recruiter network of 1,000+ companies including Deloitte, EY, KPMG, HDFC Bank, ICICI, Amazon and Asian Paints."
    },
    {
        question: "How does the international 1+1 / 2+2 work?",
        answer: "BBA students complete 2 years at PU Goa and 2 years at Rowan University (USA) or Humber Polytechnic (Canada). MBA students do 1 year here and 1 year at Massey, Marywood, Nottingham Trent or Canterbury Christ Church."
    },
    {
        question: "Loan partners & scholarships?",
        answer: "Tied up with leading nationalised and private banks for education loans. Merit, sports and need-based scholarships available — counsellors map every option during admissions."
    }
],
  themeColor: {
    waveBand: "#0CAADD",
    waveAccent: "#0094C4",
    cardBg: "#0CAADD",
    cardText: "#FFFFFF"
  }
};
