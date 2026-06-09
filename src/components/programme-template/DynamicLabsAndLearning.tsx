import React from "react";
import { LabsData } from "@/data/programmes/types";
import { InteractiveLabsLayout } from "./InteractiveLabsLayout";

export function DynamicLabsAndLearning({ data }: { data: LabsData }) {
  const labs = data.features.map(f => ({
    title: f.title,
    image: f.image,
    description: f.description
  }));

  return (
    <InteractiveLabsLayout 
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      labs={labs}
    />
  );
}
