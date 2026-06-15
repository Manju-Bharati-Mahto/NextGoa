"use server";

import fs from "fs/promises";
import path from "path";

const sessionToFolder: Record<string, string> = {
  "Winter Examination 2025-26": "winter examinations",
  "Summer Examination 2025-26": "summer examinations",
  "Supplementary Examination 2025-26": "supplementary",
};

const programToFolder: Record<string, string> = {
  "B.Sc.": "bsc",
  "BCA": "bca",
  "MCA": "mca",
  "BBA": "bba",
  "B.Tech": "btech",
  "B.Pharm": "bpharm",
};

export async function getPdfs(tab: string, session: string, program: string) {
  try {
    let dirPath = "";
    let urlPrefix = "";
    
    const programFolder = programToFolder[program];

    if (tab === "Theory Schedule") {
      const sessionFolder = sessionToFolder[session];
      if (!sessionFolder || !programFolder) return [];
      dirPath = path.join(process.cwd(), "public", "examination-assets", "theory", sessionFolder, programFolder);
      urlPrefix = `/examination-assets/theory/${sessionFolder}/${programFolder}/`;
    } else if (tab === "Practical Schedule") {
      const sessionFolder = sessionToFolder[session];
      if (!sessionFolder || !programFolder) return [];
      dirPath = path.join(process.cwd(), "public", "examination-assets", "practical-schedule", sessionFolder, programFolder);
      urlPrefix = `/examination-assets/practical-schedule/${sessionFolder}/${programFolder}/`;
    } else if (tab === "Circulars") {
      dirPath = path.join(process.cwd(), "public", "examination-assets", "circular");
      urlPrefix = `/examination-assets/circular/`;
    } else {
      return [];
    }
    
    try {
      await fs.access(dirPath);
    } catch {
      return []; // Directory doesn't exist
    }

    const files = await fs.readdir(dirPath);
    const pdfs = files
      .filter(f => f.toLowerCase().endsWith('.pdf'))
      .map((file, index) => ({
        id: index + 1,
        title: file.replace(/-/g, ' ').replace(/_/g, ' ').replace('.pdf', ''),
        url: urlPrefix + encodeURIComponent(file),
      }));

    return pdfs;
  } catch (error) {
    console.error("Error reading PDFs:", error);
    return [];
  }
}
