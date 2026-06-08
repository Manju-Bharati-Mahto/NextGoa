export interface Job {
  id: number;
  department: string;
  position: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    department: "Faculty of Applied Sciences",
    position: "Administration",
    title: "Assistant Director - Academic",
    location: "Vadodara",
    type: "On-site",
    description: "Parul University invites applications from qualified and passionate candidates for the positions of Professor, Associate Professor, and Assistant Professor for the Academic",
  },
  {
    id: 2,
    department: "Faculty of Engineering",
    position: "Teaching",
    title: "Professor of Computer Science",
    location: "Goa",
    type: "On-site",
    description: "Seeking experienced faculty members to lead the computer science department and mentor students in modern software engineering practices.",
  },
  {
    id: 3,
    department: "Admissions Office",
    position: "Non Teaching",
    title: "Senior Admissions Counselor",
    location: "Ahmedabad",
    type: "Hybrid",
    description: "Looking for an enthusiastic admissions counselor to guide prospective students and their families through the enrollment process.",
  },
  {
    id: 4,
    department: "Research & Development",
    position: "Research",
    title: "Postdoctoral Researcher",
    location: "Vadodara",
    type: "Remote",
    description: "Postdoctoral research position available for candidates with a strong background in renewable energy and sustainable technologies.",
  },
  {
    id: 5,
    department: "Sports Department",
    position: "Coaching",
    title: "Head Basketball Coach",
    location: "Rajkot",
    type: "On-site",
    description: "Head coach required for the university basketball team. Must have at least 5 years of professional coaching experience.",
  },
  {
    id: 6,
    department: "IT Services",
    position: "Technical",
    title: "Systems Administrator",
    location: "Goa",
    type: "Hybrid",
    description: "Systems administrator needed to manage campus network infrastructure and provide technical support to faculty and students.",
  },
];
