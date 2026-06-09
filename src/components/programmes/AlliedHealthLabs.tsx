import React from "react";
import { InteractiveLabsLayout } from "@/components/programme-template/InteractiveLabsLayout";

export default function AlliedHealthLabs() {
  const labs = [
    { title: "Microbiology and Clinical Pathology Laboratory", image: "/applied-science/DSC03110.jpg" },
    { title: "Chemistry Laboratory", image: "/applied-science/DSC03121.jpg" },
    { title: "Central Instrumentation Laboratory", image: "/applied-science/DSC03125.jpg" },
    { title: "MCH Laboratory", image: "/applied-science/DSC03130.jpg" },
    { title: "Foundation and Skill Laboratory", image: "/applied-science/DSC03132.jpg" },
    { title: "Community and Nutrition Laboratory", image: "/applied-science/DSC03135.jpg" },
    { title: "Advanced Allied and Healthcare Sciences Laboratories", image: "/applied-science/DSC03138.jpg" },
    { title: "Preclinical Sciences Laboratory", image: "/applied-science/DSC03142.jpg" }
  ];

  return (
    <InteractiveLabsLayout 
      title="Where you'll actually practice."
      labs={labs}
    />
  );
}
