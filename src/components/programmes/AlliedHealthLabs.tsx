import React from "react";
import { InteractiveLabsLayout } from "@/components/programme-template/InteractiveLabsLayout";

export default function AlliedHealthLabs() {
  const labs = [
    { title: "Microbiology and Clinical Pathology Laboratory", image: "/labs/Applied and healthcare Science/DSC03110.jpg" },
    { title: "Chemistry Laboratory", image: "/labs/Applied and healthcare Science/DSC03121.jpg" },
    { title: "Central Instrumentation Laboratory", image: "/labs/Applied and healthcare Science/DSC03125.jpg" },
    { title: "MCH Laboratory", image: "/labs/Applied and healthcare Science/DSC03130.jpg" },
    { title: "Foundation and Skill Laboratory", image: "/labs/Applied and healthcare Science/DSC03132.jpg" },
    { title: "Community and Nutrition Laboratory", image: "/labs/Applied and healthcare Science/DSC03135.jpg" },
    { title: "Advanced Allied and Healthcare Sciences Laboratories", image: "/labs/Applied and healthcare Science/DSC03138.jpg" },
    { title: "Preclinical Sciences Laboratory", image: "/labs/Applied and healthcare Science/DSC03142.jpg" }
  ];

  return (
    <InteractiveLabsLayout 
      title="Where you'll actually practice."
      labs={labs}
      bgClass="bg-white"
    />
  );
}
