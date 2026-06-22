"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false, });

export default function NewBlogPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [ogImageFile, setOgImageFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    canonical_url: "",
    og_title: "",
    og_description: "",
    og_image: "",
    status: "draft",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {

    const { name, value } = e.target;

    setForm(prev => ({

      ...prev,

      [name]: value,

      ...(name === "title"
        ? {
            slug: value
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-"),
          }
        : {}),

    }));

  }

  async function saveBlog(e: React.FormEvent) {
  e.preventDefault();

  if (!form.title.trim()) {
    alert("Title is required.");
    return;
  }

  if (
    !form.content ||
    form.content === "<p><br></p>" ||
    form.content.trim() === ""
  ) {
    alert("Content is required.");
    return;
  }

  if (!imageFile) {
    alert("Please select a featured image.");
    return;
  }

  setLoading(true);

  try {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (imageFile) {
      formData.append("featured_image", imageFile);
    }

    if (ogImageFile) {
      formData.append("og_image", ogImageFile);
    }

    const res = await fetch("/api/admin/blogs/create", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to create blog.");
    }

    alert("Blog created successfully.");

    router.push("/blogs");
  } catch (error) {
    console.error(error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
}

  return (

    <form
      onSubmit={saveBlog}
      className="space-y-6 bg-white rounded-xl shadow p-8"
    >

      <h1 className="text-3xl font-bold">
        Create Blog
      </h1>
            {/* Title */}

      <div>

        <label className="font-medium">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mt-1"
        />

      </div>

      {/* Slug */}

      <div>

        <label className="font-medium">
          Slug
        </label>

        <input
          type="text"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mt-1"
        />

      </div>

      {/* Category */}

      <div>

        <label className="font-medium">
          Category
        </label>

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Admissions"
          className="w-full border rounded-lg p-3 mt-1"
        />

      </div>

      {/* Featured Image */}

      <div>

        <label className="font-medium">
          Featured Image
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3 mt-1"
          onChange={(e) => {
            if (e.target.files?.length) {
              setImageFile(e.target.files[0]);
            }
          }}
        />

        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Featured Image Preview"
            className="w-56 rounded-lg mt-4 border"
          />
        )}

      </div>

      {/* Excerpt */}

      <div>

        <label className="font-medium">
          Excerpt
        </label>

        <textarea
          rows={4}
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
        />

      </div>

      {/* Content */}

      <div>

        <label className="font-medium">
          Content
        </label>

        <ReactQuill theme="snow" value={form.content} onChange={(value) => setForm((prev) => ({ ...prev, content: value, })) } className="mt-2 " />

      </div>

      {/* Status */}

      <div>

        <label className="font-medium">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
        >

          <option value="draft">
            Draft
          </option>

          <option value="published">
            Published
          </option>

        </select>

      </div>
            {/* SEO Settings */}

      <div className="border-t pt-8">

        <h2 className="text-2xl font-bold mb-6">
          SEO Settings
        </h2>

        {/* Meta Title */}

        <div className="mb-5">

          <label className="font-medium">
            Meta Title
          </label>

          <input
            type="text"
            name="meta_title"
            value={form.meta_title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>

        {/* Meta Description */}

        <div className="mb-5">

          <label className="font-medium">
            Meta Description
          </label>

          <textarea
            rows={4}
            name="meta_description"
            value={form.meta_description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>

        {/* Meta Keywords */}

        <div className="mb-5">

          <label className="font-medium">
            Meta Keywords
          </label>

          <input
            type="text"
            name="meta_keywords"
            value={form.meta_keywords}
            onChange={handleChange}
            placeholder="keyword1, keyword2, keyword3"
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>

        {/* Canonical URL */}

        <div className="mb-5">

          <label className="font-medium">
            Canonical URL
          </label>

          <input
            type="text"
            name="canonical_url"
            value={form.canonical_url}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>

        {/* OG Title */}

        <div className="mb-5">

          <label className="font-medium">
            Open Graph Title
          </label>

          <input
            type="text"
            name="og_title"
            value={form.og_title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>

        {/* OG Description */}

        <div className="mb-5">

          <label className="font-medium">
            Open Graph Description
          </label>

          <textarea
            rows={4}
            name="og_description"
            value={form.og_description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
          />

        </div>

        {/* OG Image */}

        <div className="mb-5">

           <label className="font-medium">
            Open Graph Image
          </label>

          <input
            type="file"
            accept="image/*"
            className="w-full border rounded-lg p-3 mt-1"
            onChange={(e) => {
              if (e.target.files?.length) {
                setOgImageFile(e.target.files[0]);
              }
            }}
          />

          {ogImageFile && (
            <img
              src={URL.createObjectURL(ogImageFile)}
              alt="OG Preview"
              className="w-56 rounded-lg mt-4 border"
            />
          )}

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 pt-6">

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {loading
            ? "Saving..."
            : "Save Blog"}
        </button>

        <button
          type="button"
          onClick={() =>
            router.push("/blogs")
          }
          className="border px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

      </div>

    </form>

  );

}