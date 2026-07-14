import { ProgrammeData } from "./types";
import { managementData } from "./management";
import { pharmacyData } from "./pharmacy";
import { nursingData } from "./nursing";
import { physiotherapyData } from "./physiotherapy";
import { hotelManagementData } from "./hotel-management";
import { phdData } from "./phd";

import { appliedAndHealthSciencesData } from "./applied-and-health-sciences";

const allProgrammes: Record<string, ProgrammeData> = {
  "management": managementData,
  "pharmacy": pharmacyData,
  "nursing": nursingData,
  "physiotherapy": physiotherapyData,
  "hotel-management": hotelManagementData,
  "applied-and-health-sciences": appliedAndHealthSciencesData,
  "doctorate-programs": phdData,
};

export function getProgrammeData(slug: string): ProgrammeData | undefined {
  return allProgrammes[slug];
}

export function getAllProgrammeSlugs(): string[] {
  return Object.keys(allProgrammes);
}
