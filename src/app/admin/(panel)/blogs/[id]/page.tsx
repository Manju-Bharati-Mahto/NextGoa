"use client";

import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";

export default function EditBlogPage() {

  const params = useParams();

  return (
    <BlogForm
      blogId={Number(params.id)}
    />
  );

}