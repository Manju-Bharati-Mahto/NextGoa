import { ProgrammeData } from "./types";
import { managementData } from "./management";
import { pharmacyData } from "./pharmacy";
import { nursingData } from "./nursing";
import { physiotherapyData } from "./physiotherapy";
import { alliedHealthData } from "./allied-health";
import { hotelManagementData } from "./hotel-management";
import { phdData } from "./phd";

const allProgrammes: Record<string, ProgrammeData> = {
  "management-studies": managementData,
  "pharmacy": pharmacyData,
  "nursing": nursingData,
  "physiotherapy": physiotherapyData,
  "allied-and-health-sciences": alliedHealthData,
  "hotel-management": hotelManagementData,
  "phd": phdData,
};

export function getProgrammeData(slug: string): ProgrammeData | undefined {
  return allProgrammes[slug];
}

export function getAllProgrammeSlugs(): string[] {
  return Object.keys(allProgrammes);
}
