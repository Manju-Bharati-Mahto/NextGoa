import React from "react";
import { InteractiveLabsLayout } from "@/components/programme-template/InteractiveLabsLayout";

export default function LabsAndLearning() {
  const labs = [
    { title: "Artificial Intelligence & Machine Learning Lab", image: "/labs/engineering/DSC03169.jpg" },
    { title: "Cyber Security & Network Forensics Lab", image: "/labs/engineering/DSC03171.jpg" },
    { title: "Cloud Computing & DevOps Lab", image: "/labs/engineering/DSC03177.jpg" },
    { title: "IoT & Embedded Systems Lab", image: "/labs/engineering/DSC03190.jpg" },
    { title: "Quantum Computing Sandbox", image: "/labs/engineering/DSC03217.jpg" },
    { title: "Data Science & Analytics Lab", image: "/labs/engineering/DSC03219.jpg" },
    { title: "Maker Space & Innovation Studio", image: "/labs/engineering/DSC03227.jpg" },
    { title: "High-Performance Computing Cluster", image: "/labs/engineering/DSC03237.jpg" },
  ];

  return (
    <InteractiveLabsLayout 
      title="Where you'll actually build."
      description="Purpose-built spaces from AI clusters to a maker studio. Theory matters. Practice ships."
      labs={labs}
    />
  );
}
