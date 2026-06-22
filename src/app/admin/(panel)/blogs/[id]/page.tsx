"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBlogPage() {

  const router = useRouter();

  const params = useParams();

  const id = params.id;

  const [loading, setLoading] = useState(false);

  const [pageLoading, setPageLoading] = useState(true);

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

  useEffect(() => {

    loadBlog();

  }, []);

  async function loadBlog() {

    try {

      const res = await fetch(
        `/api/admin/blogs/${id}`
      );

      const data = await res.json();

      setForm(data);

    } catch (err) {

      console.log(err);

      alert("Unable to load blog.");

    }

    setPageLoading(false);

  }

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

  async function updateBlog(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch(

        `/api/admin/blogs/${id}`,

        {

          method: "PUT",

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

      alert("Blog Updated Successfully");

      router.push("/blogs");

    } catch (err) {

      console.log(err);

      alert("Something went wrong.");

    }

    setLoading(false);

  }

  async function deleteBlog() {

    if (
      !confirm(
        "Are you sure you want to delete this blog?"
      )
    )
      return;

    try {

      const res = await fetch(

        `/api/admin/blogs/${id}`,

        {

          method: "DELETE",

        }

      );

      const result =
        await res.json();

      if (!result.success) {

        alert(result.message);

        return;

      }

      alert("Blog Deleted");

      router.push("/admin/blogs");

    } catch (err) {

      console.log(err);

    }

  }

  if (pageLoading) {

    return (

      <div className="p-8">

        Loading...

      </div>

    );

  }

  return (

    <form

      onSubmit={updateBlog}

      className="space-y-6 bg-white rounded-xl shadow p-8"

    >

      <h1 className="text-3xl font-bold">

        Edit Blog

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
          className="w-full border rounded-lg p-3 mt-1"
          required
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
          className="w-full border rounded-lg p-3 mt-1"
          required
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
          className="w-full border rounded-lg p-3 mt-1"
        />
      </div>

      {/* Featured Image */}

      <div>

        <label className="font-medium">
          Featured Image
        </label>

        <input
          type="text"
          name="featured_image"
          value={form.featured_image}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1"
        />

        {form.featured_image && (

          <img
            src={form.featured_image}
            alt=""
            className="w-56 mt-4 rounded-lg border"
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

      <hr />

      <h2 className="text-2xl font-bold">
        SEO Settings
      </h2>

      {/* Meta Title */}

      <input
        type="text"
        name="meta_title"
        value={form.meta_title}
        onChange={handleChange}
        placeholder="Meta Title"
        className="w-full border rounded-lg p-3"
      />

      {/* Meta Description */}

      <textarea
        rows={4}
        name="meta_description"
        value={form.meta_description}
        onChange={handleChange}
        placeholder="Meta Description"
        className="w-full border rounded-lg p-3"
      />

      {/* Meta Keywords */}

      <input
        type="text"
        name="meta_keywords"
        value={form.meta_keywords}
        onChange={handleChange}
        placeholder="Meta Keywords"
        className="w-full border rounded-lg p-3"
      />

      {/* Canonical */}

      <input
        type="text"
        name="canonical_url"
        value={form.canonical_url}
        onChange={handleChange}
        placeholder="Canonical URL"
        className="w-full border rounded-lg p-3"
      />

      {/* OG Title */}

      <input
        type="text"
        name="og_title"
        value={form.og_title}
        onChange={handleChange}
        placeholder="OG Title"
        className="w-full border rounded-lg p-3"
      />

      {/* OG Description */}

      <textarea
        rows={4}
        name="og_description"
        value={form.og_description}
        onChange={handleChange}
        placeholder="OG Description"
        className="w-full border rounded-lg p-3"
      />

      {/* OG Image */}

      <input
        type="text"
        name="og_image"
        value={form.og_image}
        onChange={handleChange}
        placeholder="OG Image"
        className="w-full border rounded-lg p-3"
      />

      {/* Status */}

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >

        <option value="draft">
          Draft
        </option>

        <option value="published">
          Published
        </option>

      </select>

      <div className="flex gap-4 pt-6">

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {loading
            ? "Updating..."
            : "Update Blog"}
        </button>

        <button
          type="button"
          onClick={deleteBlog}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={() =>
            router.push("/admin/blogs")
          }
          className="border px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

      </div>

    </form>

  );

}