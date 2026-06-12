const fs = require('fs');

const newCourses = `const allCourses = [
  // DIPLOMA
  { id: 1, title: "Diploma in Engineering", description: "3-year polytechnic diploma program.", level: "Diploma", field: "Engineering", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/ARVR Innovation Lab.png", href: "/programmes/engineering" },
  { id: 2, title: "General Nursing and Midwifery (G.N.M)", description: "3-year diploma in nursing.", level: "Diploma", field: "Nursing", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Clinical Simulation Learning.png", href: "/programmes/nursing" },
  
  // BACHELOR'S
  { id: 3, title: "B.Tech Computer Science & Engineering", description: "Bachelor of Technology with various specializations.", level: "Bachelor's", field: "Engineering", mode: "Full-Time", entranceTest: "JEE- main", image: "/programmes/ARVR Innovation Lab.png", href: "/programmes/engineering" },
  { id: 4, title: "B.Tech - Lateral Entry", description: "Direct second-year admission.", level: "Bachelor's", field: "Engineering", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/ARVR Innovation Lab.png", href: "/programmes/engineering" },
  { id: 5, title: "Bachelor of Business Administration (BBA)", description: "Undergraduate degree in business administration.", level: "Bachelor's", field: "Management", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Interactive Classroom Session.png", href: "/programmes/management-studies" },
  { id: 6, title: "BBA Honours (NEP 2020)", description: "4-year honors program with specializations.", level: "Bachelor's", field: "Management", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Interactive Classroom Session.png", href: "/programmes/management-studies" },
  { id: 7, title: "Bachelor of Pharmacy (B.Pharm.)", description: "Undergraduate pharmacy program.", level: "Bachelor's", field: "Pharmacy", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Pharmaceutical Lab Practice.png", href: "/programmes/pharmacy" },
  { id: 8, title: "B.Pharm. - Lateral Entry", description: "Direct second-year admission to pharmacy.", level: "Bachelor's", field: "Pharmacy", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Pharmaceutical Lab Practice.png", href: "/programmes/pharmacy" },
  { id: 9, title: "Bachelor of Science in Nursing", description: "Professional nursing degree.", level: "Bachelor's", field: "Nursing", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Clinical Simulation Learning.png", href: "/programmes/nursing" },
  { id: 10, title: "Post Basic B.Sc Nursing (PB-B.Sc.)", description: "Post basic nursing program.", level: "Bachelor's", field: "Nursing", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Clinical Simulation Learning.png", href: "/programmes/nursing" },
  { id: 11, title: "Bachelor of Physiotherapy (BPT)", description: "Comprehensive physiotherapy program.", level: "Bachelor's", field: "Physiotherapy", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Physiotherapy Training.png", href: "/programmes/physiotherapy" },
  { id: 12, title: "BHMCT", description: "Bachelor of Hotel Management and Catering Technology.", level: "Bachelor's", field: "Hotel Management", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Digital Classroom Excellence.png", href: "/programmes/hotel-management" },
  { id: 13, title: "Bachelor of Science - Hotel Management", description: "B.Sc degree in hospitality.", level: "Bachelor's", field: "Hotel Management", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Digital Classroom Excellence.png", href: "/programmes/hotel-management" },
  { id: 14, title: "B.Sc Hons. - Hotel Management", description: "4-year honors program.", level: "Bachelor's", field: "Hotel Management", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Digital Classroom Excellence.png", href: "/programmes/hotel-management" },
  { id: 15, title: "Bachelor of Anaesthesia & Operation Theatre Technology", description: "Allied healthcare bachelor's degree.", level: "Bachelor's", field: "Allied and Healthcare Sciences", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Advanced Science Research.png", href: "/programmes/allied-health" },
  { id: 16, title: "Bachelor of Medical Laboratory Science (BMLS)", description: "Allied healthcare bachelor's degree.", level: "Bachelor's", field: "Allied and Healthcare Sciences", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Advanced Science Research.png", href: "/programmes/allied-health" },
  
  // MASTER'S
  { id: 17, title: "Master of Business Administration (MBA)", description: "Postgraduate management degree.", level: "Master's", field: "Management", mode: "Full-Time", entranceTest: "CAT", image: "/programmes/Interactive Classroom Session.png", href: "/programmes/management-studies" },
  
  // DOCTRAL
  { id: 18, title: "Ph.D in Engineering", description: "Doctoral research program.", level: "Doctral", field: "Engineering", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Library Learning Experience.png", href: "/programmes/phd" },
  { id: 19, title: "Ph.D in Management", description: "Doctoral research program.", level: "Doctral", field: "Management", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Library Learning Experience.png", href: "/programmes/phd" },
  { id: 20, title: "Ph.D in Pharmacy", description: "Doctoral research program.", level: "Doctral", field: "Pharmacy", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Library Learning Experience.png", href: "/programmes/phd" },
  { id: 21, title: "Ph.D in Nursing", description: "Doctoral research program.", level: "Doctral", field: "Nursing", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Library Learning Experience.png", href: "/programmes/phd" },
  { id: 22, title: "Ph.D in Allied and Healthcare Sciences", description: "Doctoral research program.", level: "Doctral", field: "Allied and Healthcare Sciences", mode: "Full-Time", entranceTest: "PU Goa Enterance", image: "/programmes/Library Learning Experience.png", href: "/programmes/phd" }
];`;

const content = fs.readFileSync('/Users/apple/Downloads/NextGoa-main/src/components/programmes/ProgramFilter.tsx', 'utf8');
const newContent = content.replace(/const allCourses = \[\s*\{[\s\S]*?\];/m, newCourses);
fs.writeFileSync('/Users/apple/Downloads/NextGoa-main/src/components/programmes/ProgramFilter.tsx', newContent);
