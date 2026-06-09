import React from "react";
import { InteractiveLabsLayout } from "@/components/programme-template/InteractiveLabsLayout";

export default function ManagementLearningEnvironment() {
  const cards = [
    {
      image: "/management/DSC03248.jpg",
      description: "Real-time market terminals for finance and analytics electives.",
      title: "Bloomberg-style finance lab"
    },
    {
      image: "/management/DSC03330.jpg",
      description: "Permanent rooms for HUL, P&G and ISB-style case wars.",
      title: "Live case competition rooms"
    },
    {
      image: "/management/DSC09616.jpg",
      description: "Marketing, supply-chain and operations simulators used in core courses.",
      title: "Simulation suites"
    },
    {
      image: "/management/DSC09840.jpg",
      description: "Working CXOs, founders and consultants in your classroom every month.",
      title: "Executive guest lectures"
    }
  ];

  return (
    <InteractiveLabsLayout 
      title="More than a classroom."
      subtitle="Learning Environment"
      labs={cards}
    />
  );
}
