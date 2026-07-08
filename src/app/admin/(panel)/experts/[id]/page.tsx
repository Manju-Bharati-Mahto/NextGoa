"use client";

import { useParams } from "next/navigation";
import ExpertForm from "@/components/admin/forms/ExpertForm";

export default function EditExpertPage() {
  const params = useParams();

  return (
    <ExpertForm
      expertId={Number(params.id)}
    />
  );
}