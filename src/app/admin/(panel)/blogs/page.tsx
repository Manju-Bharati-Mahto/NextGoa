"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    const res = await fetch("/api/admin/blogs");
    const data = await res.json();
    setBlogs(data);
  }

  async function deleteBlog(id: number) {
    if (!confirm("Delete this blog?")) return;

    await fetch(`/api/admin/blogs/${id}`, {
      method: "DELETE",
    });

    loadBlogs();
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Blogs
        </h1>

        <Link
          href="/admin/blogs/new"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Blog
        </Link>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3 border">ID</th>

            <th className="p-3 border">
              Image
            </th>

            <th className="p-3 border">
              Title
            </th>

            <th className="p-3 border">
              Category
            </th>

            <th className="p-3 border">
              Status
            </th>

            <th className="p-3 border">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {blogs.map((blog) => (

            <tr key={blog.id}>

              <td className="border p-3">
                {blog.id}
              </td>

              <td className="border p-3">

                <img
                  src={blog.featured_image}
                  className="w-20 rounded"
                />

              </td>

              <td className="border p-3">
                {blog.title}
              </td>

              <td className="border p-3">
                {blog.category}
              </td>

              <td className="border p-3">
                {blog.status}
              </td>

              <td className="border p-3 flex gap-2">

                <Link
                  href={`/admin/blogs/${blog.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    deleteBlog(blog.id)
                  }
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}