import { ProgrammeData } from "./types";

export const physiotherapyData: ProgrammeData = {
  slug: "physiotherapy",
  title: "Physiotherapy",
  hero: {
    badge: "Faculty of Physiotherapy",
    title: "Where movement",
    highlight: "meets recovery.",
    subtitle: "Master the science of biomechanics, rehabilitation, and sports medicine.",
    backgroundImage: "/programmes/physiotherapy.jpg",
  },
  snapshotRow: [
    { title: "Duration", value: "4.5 yrs", subtext: "Incl. internship" },
    { title: "Eligibility", value: "10+2 Science", subtext: "PCB preferred" },
    { title: "Council", value: "IAP-aligned", subtext: "Indian Assoc. of Physio" },
    { title: "Clinic", value: "On-campus", subtext: "Live rehab centre" },
    { title: "Specialism", value: "Sports Physio", subtext: "Strong recruiting angle" },
  ],
  why: {
    title: "Why students choose us",
    subtitle: "The PU Goa difference.",
    cards: [
      {
        badge: "",
        title: "In-House Rehab\nClinic",
        description: "A working physiotherapy and rehabilitation centre on campus - students treat real patients from semester one under supervision."
      },
      {
        badge: "",
        title: "Sports Physio\nSpecialism",
        description: "Sports physiotherapy is the fastest-growing specialism in India. Pulled forward in the curriculum with dedicated sports-injury labs."
      },
      {
        badge: "",
        title: "Community Health\nCamps",
        description: "Preventive-care and early-intervention camps run by students every semester for the surrounding community."
      }
    ]
  },
  specialisations: {
    description: "Master specialized domains in physical therapy.",
    items: [
      {
        id: "ortho",
        name: "Orthopedic Physiotherapy",
        learn: "Musculoskeletal injuries, post-operative rehabilitation, and manual therapy techniques.",
        skills: ["Joint Mobilization", "Kinesio Taping", "Ergonomic Assessment"],
        tools: ["Traction Units", "Ultrasound Therapy", "Dynamometers"],
        careers: ["Orthopedic Physiotherapist", "Ergonomist", "Clinic Head"]
      }
    ]
  },
  career: {
    stats: [
      { value: "100%", label: "Placement & Practice Setup" },
      { value: "₹5-8 LPA", label: "Starting Package" },
      { value: "50+", label: "Partner Clinics" },
      { value: "20+", label: "Sports Clubs" }
    ],
    topRoles: [
      { title: "Sports Physiotherapist", tag: "TEAMS · ACADEMIES · FRANCHISES", icon: "ph:person-simple-run-fill" },
      { title: "Musculoskeletal Therapist", tag: "CLINICS & HOSPITALS", icon: "ph:bone-fill" },
      { title: "Neuro-Rehab Therapist", tag: "STROKE & SPINAL RECOVERY", icon: "ph:brain-fill" },
      { title: "Cardio-Pulmonary Physio", tag: "ICU & POST-OP", icon: "ph:heartbeat-fill" },
      { title: "Pediatric Physio", tag: "DEVELOPMENTAL REHAB", icon: "ph:baby-fill" },
      { title: "Own Clinic / Wellness", tag: "ENTREPRENEURIAL ROUTE", icon: "ph:storefront-fill" }
    ]
  },
  labs: {
    title: "State-of-the-art rehabilitation centers.",
    description: "Practice in fully equipped labs that mirror top-tier physiotherapy clinics.",
    features: [
      { title: "Electrotherapy Lab", description: "Equipped with SWD, IFT, TENS, and advanced laser therapy units.", image: "/labs/Physiotherapy/DSC00025.jpg" },
      { title: "Exercise Therapy Lab", description: "Features complete resistance training, suspension therapy, and gait training tracks.", image: "/labs/Physiotherapy/DSC00034.jpg" },
      { title: "Biomechanics Lab", description: "Advanced motion analysis and ergonomics testing equipment.", image: "/labs/Physiotherapy/DSC03244.jpg" },
      { title: "Neurological Rehabilitation Lab", description: "Specialized equipment for neuro-motor recovery and balance training.", image: "/labs/Physiotherapy/DSC03245.jpg" }
    ],
    image: "/programmes/engineering_hero_bg.png"
  },
  dean: {
    name: "Dr. Aseem Yadav",
    linkedin: "https://www.linkedin.com/in/dr-aseem-yadav-1a84a1317/",
    role: "Dean - Faculty of Physiotherapy",
    bio: "A clinician-educator with extensive experience in musculoskeletal rehabilitation, sports physiotherapy and community physiotherapy programmes.",
    image: "/faculties/Physiotherapy/Dean.jpg",
    faculty: [
  {
    role: "Professor",
    name: "Dr. Sandipkumar Rameshbhai Parekh",
    degree: "Ph.D.",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    experience: "12 Years",
    researchArea: "Aquatic Physiotherapy, Musculoskeletal and Sports Physiotherapy",
    image: "/faculties/Dr.-Sandipkumar-Rameshbhai-Parekh.jpg"
  },
  {
    role: "Associate Professor",
    name: "Dr. Dharmang D Vyas (PT)",
    degree: "Ph.D.",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    experience: "13 Years",
    researchArea: "Musculoskeletal and Sports Physiotherapy",
    image: "/faculties/Dr.-Dharmang-D-Vyas--PT-.jpg"
  },
  {
    role: "Associate Professor",
    name: "Dr. Jeyaganesh V (PT)",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    experience: "11 Years",
    researchArea: "Stroke Rehabilitation, Neuro Rehabilitation",
    image: "/faculties/Dr.-Jeyaganesh-V--PT-.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Dr. Laxmi Kamat",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    researchArea: "Rehabilitation",
    image: "/faculties/Dr.-Laxmi-Kamat.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Dr. Amiya Dessai",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    image: "/faculties/Dr.-Amiya-Dessai.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Dr. Vaishanavi Dessai",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    researchArea: "Neurology, Pediatrics",
    image: "/faculties/Dr.-Vaishanavi-Dessai.jpg"
  },
  {
    role: "Assistant Professor",
    name: "Dr. Prachi Brave",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    researchArea: "Musculoskeletal Disorders",
    image: "/faculties/Dr.-Prachi-Brave.jpg"
  },
  {
    role: "Clinical Instructor",
    name: "Dr. Darpan Vanavi",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    researchArea: "Sports",
    image: "/faculties/Dr.-Darpan-Vanavi.jpg"
  },
  {
    role: "Clinical Intsructor",
    name: "Dr. Parmar Hardikkumar Arjunbhai",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    experience: "2 Years",
    image: "/faculties/Dr.-Parmar-Hardikkumar-Arjunbhai.jpg"
  },
  {
    role: "Clinical Instructor",
    name: "Dr. Patel Manan Narendrakumar",
    degree: "MPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    image: "/faculties/Dr.-Patel-Manan-Narendrakumar.jpg"
  },
  {
    role: "Clinical Instructor",
    name: "Dr.Lugella Fernandes",
    degree: "BPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    researchArea: "Sports",
    image: "/faculties/Dr.Lugella-Fernandes.jpg"
  },
  {
    role: "Clinical Intsructor",
    name: "Dr. Divya Tekwani",
    degree: "BPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    researchArea: "Musculoskeletal Disorders",
    image: "/faculties/Dr.-Divya-Tekwani.jpg"
  },
  {
    role: "Clinical Intsructor",
    name: "Dr. Krimisha Jay Chauhan",
    degree: "BPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    experience: "4 Years",
    researchArea: "Neurology, Pediatrics",
    image: "/faculties/Dr.-Krimisha-Jay-Chauhan.jpg"
  },
  {
    role: "Clinical Intsructor",
    name: "Dr. Chirag Makvana",
    degree: "BPT",
    faculty: "Faculty of Physiotherapy",
    department: "Physiotherapy",
    image: "/faculties/Dr.-Chirag-Makvana.jpg"
  },
]},
  faqs: [
    { question: "Is a clinical internship mandatory?", answer: "Yes, a 6-month rotatory clinical internship is mandatory to complete the BPT degree." },
    { question: "Do students get hands-on experience?", answer: "Absolutely. Students treat real patients under expert supervision at our active in-house OPD and specialized rehabilitation centers." },
    { question: "Can I specialize in Sports Physiotherapy?", answer: "Yes, Sports Physiotherapy is one of our most popular MPT specialisations. We also have official medical partnerships with local sports leagues for practical exposure." },
    { question: "What career paths are available after a BPT?", answer: "Graduates can work in multi-specialty hospitals, sports clubs, corporate ergonomics consulting, or set up their own independent private practice." }
  ],
  themeColor: {
    waveBand: "#E73649",
    waveAccent: "#C92B3C",
    cardBg: "#E73649",
    cardText: "#FFFFFF"
  }
};
