"use client";

import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/forms/BlogForm";

export default function EditNewsPage() {
  const params = useParams();

  return (
    <BlogForm
      blogId={Number(params.id)}
      blogType="news"
    />
  );
}
