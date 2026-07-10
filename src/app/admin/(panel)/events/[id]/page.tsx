"use client";

import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/forms/BlogForm";

export default function EditEventPage() {
  const params = useParams();

  return (
    <BlogForm
      blogId={Number(params.id)}
      blogType="event"
    />
  );
}
