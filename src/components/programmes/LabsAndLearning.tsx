import React from "react";
import { InteractiveLabsLayout } from "@/components/programme-template/InteractiveLabsLayout";

export default function LabsAndLearning() {
  const labs = [
    { title: "Artificial Intelligence & Machine Learning Lab", image: "/labs/Computer Engineering/DSC03169.jpg" },
    { title: "Cyber Security & Network Forensics Lab", image: "/labs/Computer Engineering/DSC03171.jpg" },
    { title: "Cloud Computing & DevOps Lab", image: "/labs/Computer Engineering/DSC03177.jpg" },
    { title: "IoT & Embedded Systems Lab", image: "/labs/Computer Engineering/DSC03190.jpg" },
    { title: "Quantum Computing Sandbox", image: "/labs/Computer Engineering/DSC03217.jpg" },
    { title: "Data Science & Analytics Lab", image: "/labs/Computer Engineering/DSC03219.jpg" },
    { title: "Maker Space & Innovation Studio", image: "/labs/Computer Engineering/DSC03227.jpg" },
    { title: "High-Performance Computing Cluster", image: "/labs/Computer Engineering/DSC03237.jpg" },
  ];

  return (
    <InteractiveLabsLayout 
      title="Where you'll actually build."
      description="Purpose-built spaces from AI clusters to a maker studio. Theory matters. Practice ships."
      labs={labs}
    />
  );
}
