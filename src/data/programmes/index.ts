import { ProgrammeData } from "./types";
import { managementData } from "./management";
import { pharmacyData } from "./pharmacy";
import { nursingData } from "./nursing";
import { physiotherapyData } from "./physiotherapy";
import { alliedHealthData } from "./allied-health";
import { hotelManagementData } from "./hotel-management";
import { phdData } from "./phd";

import { appliedSciencesData } from "./applied-sciences";

const allProgrammes: Record<string, ProgrammeData> = {
  "management-studies": managementData,
  "pharmacy": pharmacyData,
  "nursing": nursingData,
  "physiotherapy": physiotherapyData,
  "allied-health": alliedHealthData,
  "hotel-management": hotelManagementData,
  "applied-sciences": appliedSciencesData,
  "phd": phdData,
};

export function getProgrammeData(slug: string): ProgrammeData | undefined {
  return allProgrammes[slug];
}

export function getAllProgrammeSlugs(): string[] {
  return Object.keys(allProgrammes);
}
