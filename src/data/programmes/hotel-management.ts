import { ProgrammeData } from "./types";

export const hotelManagementData: ProgrammeData = {
  slug: "hotel-management",
  title: "Hotel Management",
  hero: {
    badge: "Faculty of Hotel Management",
    title: "Where hospitality",
    highlight: "meets excellence.",
    subtitle: "Master the art of luxury hospitality, culinary arts, and global tourism management in India's tourism capital.",
    backgroundImage: "/programmes/hotel_management.jpg",
  },
  snapshotRow: [
    { title: "Duration", value: "3 / 4 yrs", subtext: "B.Sc · BHMCT · Honours" },
    { title: "Eligibility", value: "10+2 any stream", subtext: "English compulsory" },
    { title: "Location", value: "Goa", subtext: "India's hospitality capital" },
    { title: "Internship", value: "Embedded", subtext: "5-star partner hotels" },
    { title: "Outcomes", value: "Hotels · Cruise · Own venture", subtext: "Global mobility" },
  ],
  why: {
    title: "Why PU Goa",
    subtitle: "Learn in the heart of India's tourism hub.",
    cards: [
      {
        badge: "Goa Advantage",
        title: "Tourism\nCapital",
        description: "Study hospitality where the industry thrives. Surrounded by premium resorts and international tourists."
      },
      {
        badge: "Premium Tie-ups",
        title: "5-Star\nPlacements",
        description: "Direct industry tie-ups with Taj, Marriott, and Oberoi groups for internships and final placements."
      },
      {
        badge: "Global Pathways",
        title: "International\nCareers",
        description: "Opportunities for paid internships in Europe, Middle East, and cruise lines globally."
      }
    ]
  },
  specialisations: {
    description: "Specialize in the core pillars of the hospitality industry.",
    items: [
      {
        id: "culinary",
        name: "Culinary Arts",
        learn: "International cuisines, baking, food production management, and kitchen hygiene.",
        skills: ["Food Production", "Menu Planning", "Cost Control"],
        tools: ["Commercial Kitchens", "Baking Ovens", "POS Systems"],
        careers: ["Executive Chef", "Sous Chef", "F&B Manager"]
      },
      {
        id: "tourism",
        name: "Travel & Tourism",
        learn: "Destination management, travel agency operations, and event management.",
        skills: ["Itinerary Planning", "Event Management", "Customer Service"],
        tools: ["GDS (Amadeus/Galileo)", "CRM Software", "Booking Engines"],
        careers: ["Tour Operator", "Event Manager", "Travel Consultant"]
      }
    ]
  },
  career: {
    heading: "Where you'll cook, host, run.",
    hideSubheadingAndTopRolesTitle: true,
    stats: [
      { value: "100%", label: "Placement Assistance" },
      { value: "₹5-8 LPA", label: "Average Package" },
      { value: "30+", label: "5-Star Partners" },
      { value: "Global", label: "Internships" }
    ],
    topRoles: [
      { title: "Chef de Partie \u2192 Executive Chef", tag: "KITCHEN OPERATIONS", icon: "ph:cooking-pot-fill" },
      { title: "F&B Manager", tag: "RESTAURANT & BANQUET OPERATIONS", icon: "ph:wine-fill" },
      { title: "Front Office Manager", tag: "GUEST EXPERIENCE LEADERSHIP", icon: "ph:bell-ringing-fill" },
      { title: "Cruise Lines", tag: "ROYAL CARIBBEAN \u00b7 CARNIVAL \u00b7 PRINCESS", icon: "ph:boat-fill" },
      { title: "Cloud Kitchens & QSR", tag: "OPERATIONS & FRANCHISE", icon: "ph:storefront-fill" },
      { title: "Own Venture / Restaurateur", tag: "ENTREPRENEURIAL ROUTE", icon: "ph:briefcase-fill" }
    ]
  },

  dean: {
    name: "Dr. Prashant Sharma",
    linkedin: "https://www.linkedin.com/in/prashant-sharma-1a884b17/",
    role: "Dean, Hotel Management",
    bio: "Dr. Prashant Sharma brings extensive experience in hospitality management and education, guiding students toward excellence in global hospitality and culinary arts.",
    image: "/leaders/9911.jpg",
    faculty: []
  },
  faqs: [
    {
        question: "Is hotel management a good career?",
        answer: "It is one of the fastest-growing global sectors. Beyond hotels, graduates work in luxury retail, cruise lines, airlines, event management, and corporate facilities. It offers unmatched international mobility."
    },
    {
        question: "Why study hotel management in Goa?",
        answer: "Goa is India's most international tourist destination — luxury resorts, fine-dining restaurants, boutique hotels and a year-round F&B economy. Internships, weekend exposure and live-event banquets are all 20 minutes from campus."
    },
    {
        question: "How does salary growth look?",
        answer: "First job: 3–5 LPA in Indian luxury hotels. Cruise lines: USD 800–1500/month tax-free. By year 7–10, F&B Manager / Chef roles touch 15–25 LPA in India and significantly higher abroad."
    },
    {
        question: "What are abroad opportunities?",
        answer: "Cruise lines (Royal Caribbean, Carnival, Princess) recruit directly. Gulf luxury hotels (Taj, Marriott, IHG Dubai) recruit from Indian hospitality colleges. Europe pathways exist via Switzerland and hospitality exchange programmes."
    },
    {
        question: "What to choose between kitchen, front office, and cruise?",
        answer: "First two years are common across all functions. From year three you specialise — internships across kitchens, front office, F&B and accommodation help you discover where you thrive before committing."
    }
],
  themeColor: {
    waveBand: "#E73649", // Red theme
    waveAccent: "#C92B3C",
    cardBg: "#E73649",
    cardText: "#FFFFFF"
  }
};
