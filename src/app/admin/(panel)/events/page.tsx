"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function EventsPage() {
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
      `/api/admin/events?page=${page}&limit=${limit}&search=${search}`
    );

    const result = await res.json();

    setBlogs(result.data);
    setTotal(result.total);
    setTotalPages(result.totalPages);

  }

  async function deleteBlog(id: number) {
    if (!confirm("Delete this event?")) return;

    await fetch(`/api/admin/events/${id}`, {
      method: "DELETE",
    });

    loadBlogs();
  }

  return (
    <div className="bg-light-white p-6">
    <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4">
       <h1 className="text-3xl font-bold text-gray-800">
          Events
       </h1>
       <div className="flex items-center gap-4">
          <input
             type="text"
             placeholder="🔍 Search event..."
             value={search}
             onChange={(e)=>{
          setSearch(e.target.value);
          setPage(1);
          }}
          className="w-72 rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Link
             href="/admin/events/new"
             className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow"
             >
          + Add Event
          </Link>
       </div>
    </div>
    <div className="overflow-x-auto rounded-xl bg-white">
       <table className="min-w-full">
          <thead className="bg-white-50 border-light">
             <tr>
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
                className="border-light hover:bg-gray-50 transition border-light"
                >
                <td className="p-3">
                   <img
                      src={blog.featured_image}
                      className="w-20 h-14 rounded-lg object-cover border"
                      />
                </td>
                <td className="p-3">
                   {blog.title}
                </td>
                <td className="p-3">
                   {blog.category_names}
                </td>
                <td className="p-3">
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
                         href={`/admin/events/${blog.id}`}
                         className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                         >
                      <Pencil size={18}/>
                      </Link>
                      <button
                         onClick={()=>
                         deleteBlog(blog.id)}
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
       <div className="flex justify-between items-center p-3">
          <div>
             Showing {(page-1)*limit+1} - {Math.min(page*limit,total)} of {total}
          </div>
          <div className="flex gap-2">
             <button disabled={page===1} onClick={()=>setPage(page-1)} className="border px-4 py-2 rounded" >
             Previous
             </button>
             <span>{page} / {totalPages}</span>
             <button disabled={page===totalPages} onClick={()=>setPage(page+1)} className="border px-4 py-2 rounded" >
             Next
             </button>
          </div>
       </div>
    </div>
 </div>
  );
}
