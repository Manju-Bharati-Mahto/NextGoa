import { ProgrammeData } from "./types";

export const hotelManagementData: ProgrammeData = {
  slug: "hotel-management",
  title: "Hotel Management",
  hero: {
    badge: "Faculty of Hotel Management",
    title: "Where hospitality",
    highlight: "meets excellence.",
    subtitle: "Master the art of luxury hospitality, culinary arts, and global tourism management in India's tourism capital.",
    backgroundImage: "/programmes/hero-hotel-management.png",
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
  labs: {
    subtitle: "Training Facilities",
    title: "Where you'll actually plate, host, run.",
    description: "Hands-on experience in simulated luxury hospitality environments.",
    features: [
      { title: "Food Production Lab", description: "Industrial-grade kitchens for Indian, Continental and Asian cuisines - same equipment you'll see in a 5-star hotel." },
      { title: "Bakery & Confectionery Studio", description: "Dedicated patisserie and bread-making space with deck ovens, proofers and chocolate-tempering setups." },
      { title: "Model Hotel Rooms", description: "Real housekeeping training rooms - bedmaking, turndown, amenity setup, fault-finding under supervision." },
      { title: "Training Restaurant", description: "Live-cover training restaurant where students plate, serve and run service for real guests." },
      { title: "Mocktail & Bar Lab", description: "Bartending station with full glassware, garnish prep and mixology training." },
      { title: "Front Office Suite", description: "Live PMS terminals (Opera/IDS-style) for check-in, check-out, GRC and revenue training." }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Prashant Sharma",
    role: "Dean, Hotel Management",
    bio: "Dr. Prashant Sharma brings extensive experience in hospitality management and education, guiding students toward excellence in global hospitality and culinary arts.",
    faculty: [
      { role: "EXECUTIVE CHEF", name: "Chef Rahul Khanna", degree: "BHMCT, Culinary Arts", specialities: "Continental Cuisine, Advanced Baking" },
      { role: "ASSOCIATE PROFESSOR", name: "Ms. Neha Kapoor", degree: "MBA, Hospitality", specialities: "Rooms Division, Revenue Management" },
      { role: "ASSISTANT PROFESSOR", name: "Mr. David Fernandes", degree: "M.Sc., Tourism", specialities: "Destination Management, Travel Agency Ops" },
      { role: "F&B DIRECTOR", name: "Mr. Sanjeev Nair", degree: "Diploma, Food & Beverage", specialities: "Mixology, Fine Dining Operations" }
    ]
  },
  faqs: [
    { question: "Do we get to intern in 5-star hotels?", answer: "Yes, we guarantee internships in premium 5-star properties across India and abroad." },
    { question: "What kind of practical facilities are on campus?", answer: "Our campus features commercial-grade training kitchens, a mock bar, a training restaurant, and a model guest room to provide real-world hospitality experience." },
    { question: "Are there international career opportunities?", answer: "Absolutely. The hospitality industry is global. We offer opportunities for paid internships in Europe, the Middle East, and on international cruise lines." },
    { question: "Can I specialize in Culinary Arts?", answer: "Yes, Culinary Arts is a major specialization where you will master international cuisines, baking, and food production management." },
    { question: "What is the difference between BHMCT and B.Sc in Hotel Management?", answer: "BHMCT is a comprehensive 4-year professional degree covering all aspects of hospitality management, while B.Sc is typically a 3-year degree with a more focused academic approach." }
  ],
  themeColor: {
    waveBand: "#E73649", // Red theme
    waveAccent: "#C92B3C",
    cardBg: "#E73649",
    cardText: "#FFFFFF"
  }
};
