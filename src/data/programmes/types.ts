export interface HeroData {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  backgroundImage: string;
  imagePosition?: string;
}

export interface SnapshotRowCard {
  title: string;
  value: string;
  subtext: string;
}

export interface WhyCard {
  badge: string;
  title: string;
  description: string;
}

export interface WhyData {
  title: string;
  subtitle: string;
  cards: WhyCard[];
}

export interface SpecialisationItem {
  id: string;
  name: string;
  learn: string;
  skills: string[];
  tools: string[];
  careers: string[];
}

export interface SpecialisationsData {
  description: string;
  items: SpecialisationItem[];
}

export interface CareerStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface TopRole {
  title: string;
  tag: string;
  icon: string;
}

export interface CareerOutcomesData {
  heading?: string;
  subheading?: string;
  hideSubheadingAndTopRolesTitle?: boolean;
  stats: CareerStat[];
  topRoles: TopRole[];
}

export interface LabFeature {
  title: string;
  description: string;
  image?: string;
}

export interface LabsData {
  subtitle?: string;
  title: string;
  description: string;
  features: LabFeature[];
  image: string;
}

export interface FacultyMember {
  role: string;
  name: string;
  degree: string;
  specialities: string;
  image?: string;
}

export interface DeanData {
  name: string;
  role: string;
  bio: string;
  image?: string;
  faculty: FacultyMember[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProgrammeData {
  slug: string;
  title: string;
  hero: HeroData;
  snapshotRow: SnapshotRowCard[];
  why: WhyData;
  specialisations: SpecialisationsData;
  career: CareerOutcomesData;
  labs: LabsData;
  dean: DeanData;
  faqs: FaqItem[];
  themeColor: {
    waveBand: string;
    waveAccent: string;
    cardBg: string;
    cardText: string;
  };
}
