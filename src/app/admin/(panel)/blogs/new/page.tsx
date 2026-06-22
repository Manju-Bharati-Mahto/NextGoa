"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",

    featured_image: "",

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

  async function saveBlog(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch(
        "/api/admin/blogs",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const result =
        await res.json();

      if (!result.success) {

        alert(result.message);

        setLoading(false);

        return;
      }

      alert("Blog Created");

      router.push(
        "/blogs"
      );

    } catch (err) {

      console.log(err);

      alert(
        "Something went wrong."
      );

    }

    setLoading(false);

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
          Featured Image URL
        </label>

        <input
          type="text"
          name="featured_image"
          value={form.featured_image}
          onChange={handleChange}
          placeholder="/uploads/blog.jpg"
          className="w-full border rounded-lg p-3 mt-1"
        />

        {form.featured_image && (

          <img
            src={form.featured_image}
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

        <textarea
          rows={15}
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
        />

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
            type="text"
            name="og_image"
            value={form.og_image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1"
          />

          {form.og_image && (

            <img
              src={form.og_image}
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