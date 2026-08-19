"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<any[]>([]);

  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  const [total, setTotal] = useState(0);

  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadFaculty();
  }, [page, search]);

  async function loadFaculty() {
    try {
      const res = await fetch(
        `/api/admin/faculty?page=${page}&limit=${limit}&search=${search}`,
      );

      const result = await res.json();

      setFaculty(result.data || []);
      setTotal(result.total || 0);
      setTotalPages(result.totalPages || 1);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteFaculty(id: number) {
    toast("Delete this faculty page?", {
      description: "This action cannot be undone.",
      cancel: {
        label: "Cancel",
        onClick: () => {},
      },
      action: {
        label: "Delete",
        onClick: async () => {
          try {
            const res = await fetch(`/api/admin/faculty/${id}`, {
              method: "DELETE",
            });

            const result = await res.json();

            if (result.success) {
              toast.success("Faculty deleted successfully.");
              loadFaculty();
            } else {
              toast.error(result.message);
            }
          } catch {
            toast.error("Failed to delete faculty.");
          }
        },
      },
    });
  }
  return (
    <div className="bg-light-white rounded-xl p-6">
      {/* Header */}

      <div className="flex items-center justify-between bg-white rounded-xl p-5 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Faculty</h1>

          <p className="text-gray-500 mt-1">Manage website faculty</p>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search faculty..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);

              setPage(1);
            }}
            className="form-control w-72"
          />

          <Link
            href="/admin/faculty/create"
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus size={18} />
            Create Faculty
          </Link>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto bg-white rounded-xl">
        <table className="min-w-full">
          <thead>
            <tr className="border-light">
              <th className="px-5 py-4 text-left">#</th>

              <th className="px-5 py-4 text-left">Title</th>

              <th className="px-5 py-4 text-left">Slug</th>

              <th className="px-5 py-4 text-left">Status</th>

              <th className="px-5 py-4 text-left">Published</th>

              <th className="px-5 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((item, index) => (
              <tr key={`${item.id}-${index}`} className="border-light hover:bg-gray-50">
                <td className="px-5 py-4">{(page - 1) * limit + index + 1}</td>

                <td className="px-5 py-4 font-medium">{item.title}</td>

                <td className="px-5 py-4 text-gray-500">/{item.slug}</td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-gray-500">
                  {item.publish_at
                    ? new Date(item.publish_at).toLocaleDateString()
                    : "-"}
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/admin/faculty/${item.id}`}
                      className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button
                      onClick={() => deleteFaculty(item.id)}
                      className="h-9 w-9 rounded-lg bg-red-100 text-red-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      <div className="flex justify-between items-center bg-white rounded-xl p-4 mt-5">
        <div>
          Showing
          <span className="mx-1 font-semibold">{(page - 1) * limit + 1}</span>-
          <span className="mx-1 font-semibold">
            {Math.min(page * limit, total)}
          </span>
          of
          <span className="mx-1 font-semibold">{total}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn btn-light"
          >
            Previous
          </button>

          <div className="btn btn-primary">{page}</div>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="btn btn-light"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
