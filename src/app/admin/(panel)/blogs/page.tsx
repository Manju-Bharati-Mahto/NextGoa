"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBlogs();
  }, [page, search]);

  async function loadBlogs() {

    const res = await fetch(
      `/api/admin/blogs?page=${page}&limit=${limit}&search=${search}`
    );

    const result = await res.json();

    setBlogs(result.data);
    setTotal(result.total);
    setTotalPages(result.totalPages);

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

      <div className="flex items-center justify-between mb-6">

  <h1 className="text-3xl font-bold text-gray-800">
    Blogs
  </h1>

  <div className="flex items-center gap-4">

    <input
      type="text"
      placeholder="🔍 Search blog..."
      value={search}
      onChange={(e)=>{
        setSearch(e.target.value);
        setPage(1);
      }}
      className="w-72 rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <Link
      href="/admin/blogs/new"
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow"
    >
      + Add Blog
    </Link>

  </div>

</div>

    <div className="overflow-x-auto rounded-xl border">

<table className="min-w-full">

       <thead className="bg-gray-50">

<tr>

{/* <th className="px-4 py-4 text-left font-semibold">#</th> */}
<th className="px-4 py-4 text-left font-semibold">Image</th>
<th className="px-4 py-4 text-left font-semibold">Title</th>
<th className="px-4 py-4 text-left font-semibold">Category</th>
<th className="px-4 py-4 text-center font-semibold">Status</th>
<th className="px-4 py-4 text-center font-semibold">Actions</th>

</tr>

</thead>

        <tbody>

          {blogs.map((blog) => (

          <tr
key={blog.id}
className="border-b hover:bg-gray-50 transition"
>

              {/* <td className="border p-3">
                {blog.id}
              </td> */}

              <td className="border p-3">

                <img
src={blog.featured_image}
className="w-20 h-14 rounded-lg object-cover border"
/>
              </td>

              <td className="border p-3">
                {blog.title}
              </td>

              <td className="border p-3">
               {blog.category_names}
              </td>

             <td className="border p-3">

<span
className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
${
blog.status==="published"
?"bg-green-100 text-green-700"
:"bg-orange-100 text-orange-700"
}`}
>

{blog.status}

</span>

</td>

              <td className="px-4 py-4">

<div className="flex justify-center gap-2">

<Link
href={`/admin/blogs/${blog.id}`}
className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
>

<Pencil size={18}/>

</Link>

<button
onClick={()=>deleteBlog(blog.id)}
className="h-10 w-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
>

<Trash2 size={18}/>

</button>

</div>

</td>

            </tr>

          ))}

        </tbody>

      </table>
</div>
<div className="flex justify-between items-center mt-6">

<div>

Showing {(page-1)*limit+1} -
{Math.min(page*limit,total)}
of {total}

</div>

<div className="flex gap-2">

<button
disabled={page===1}
onClick={()=>setPage(page-1)}
className="border px-4 py-2 rounded"
>

Previous

</button>

<span>

{page} / {totalPages}

</span>

<button
disabled={page===totalPages}
onClick={()=>setPage(page+1)}
className="border px-4 py-2 rounded"
>

Next

</button>

</div>

</div>
    </div>
  );
}