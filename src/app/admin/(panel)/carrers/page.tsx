"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function CareersPostingPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // States for custom Delete Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedJobToDelete, setSelectedJobToDelete] = useState<any>(null);

  useEffect(() => {
    loadJobs();
  }, [page, search]);

  async function loadJobs() {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/carrers?page=${page}&limit=${limit}&search=${search}`
      );
      const result = await res.json();
      setJobs(result.data || []);
      setTotal(result.total || 0);
      setTotalPages(result.totalPages || 1);
    } catch (err) {
      console.log("Error loading jobs:", err);
    } finally {
      setLoading(false);
    }
  }

  // Trigger modal open
  const openDeleteModal = (job: any) => {
    setSelectedJobToDelete(job);
    setIsDeleteModalOpen(true);
  };

  // Perform backend soft delete call
  const confirmDelete = async () => {
    if (!selectedJobToDelete) return;
    try {
      const res = await fetch(`/api/admin/carrers/${selectedJobToDelete.id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (result.success) {
        // Reload jobs listings
        loadJobs();
      } else {
        alert(result.message || "Failed to delete job posting");
      }
    } catch (err: any) {
      alert(err.message || "An error occurred");
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedJobToDelete(null);
    }
  };

  return (
    <div className="bg-light-white rounded-xl p-6 relative min-h-[500px]">
      {/* Header with Search and Actions */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-6 bg-white rounded-xl p-4 gap-4 shadow-sm border border-gray-100">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Careers Posting</h1>
          <p className="text-gray-500 mt-1">
            Manage and upload job postings on the university website
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search postings by title, department..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full sm:w-72 rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          <Link
            href="/admin/carrers/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 font-medium shadow transition-all shrink-0"
          >
            <Plus size={18} />
            Add Job
          </Link>
        </div>
      </div>

      {/* Table Listings */}
      <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-5 py-4 text-left font-semibold text-gray-700 text-sm">#</th>
              <th className="px-5 py-4 text-left font-semibold text-gray-700 text-sm">Title</th>
              <th className="px-5 py-4 text-left font-semibold text-gray-700 text-sm">Department</th>
              <th className="px-5 py-4 text-left font-semibold text-gray-700 text-sm">Position</th>
              <th className="px-5 py-4 text-left font-semibold text-gray-700 text-sm">Location</th>
              <th className="px-5 py-4 text-left font-semibold text-gray-700 text-sm">Type</th>
              <th className="px-5 py-4 text-center font-semibold text-gray-700 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 relative">
            {loading ? (
              <tr>
                <td colSpan={7} className="px-5 py-16 text-center text-gray-500 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    Loading job postings...
                  </div>
                </td>
              </tr>
            ) : jobs.length > 0 ? (
              jobs.map((job, index) => (
                <tr
                  key={job.id}
                  className="hover:bg-blue-50/50 transition duration-150"
                >
                  <td className="px-5 py-4 text-gray-600 text-sm">
                    {(page - 1) * limit + index + 1}
                  </td>
                  <td className="px-5 py-4 font-semibold text-gray-800 text-sm">
                    {job.title}
                  </td>
                  <td className="px-5 py-4 text-gray-600 text-sm">
                    {job.department}
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      {job.position}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-600 text-sm">
                    {job.location}
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        job.type === "On-site"
                          ? "bg-green-50 text-green-700"
                          : job.type === "Remote"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {job.type}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/admin/carrers/${job.id}`}
                        className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        onClick={() => openDeleteModal(job)}
                        className="h-9 w-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-5 py-12 text-center text-gray-500 text-sm bg-gray-50/50">
                  No job postings found matching search.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {!loading && total > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-100 gap-4">
            <div className="text-gray-600 text-sm">
              Showing{" "}
              <span className="font-semibold">{(page - 1) * limit + 1}</span> -{" "}
              <span className="font-semibold">
                {Math.min(page * limit, total)}
              </span>{" "}
              of <span className="font-semibold">{total}</span> Job Postings
            </div>
            <div className="flex items-center gap-3">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent font-medium text-gray-600 transition"
              >
                ← Previous
              </button>
              <div className="bg-blue-600 text-white px-3.5 py-1.5 rounded-lg text-sm font-semibold">
                {page} / {totalPages}
              </div>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent font-medium text-gray-600 transition"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Premium Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedJobToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 transition-opacity animate-fade">
          <div className="absolute inset-0" onClick={() => setIsDeleteModalOpen(false)} />
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md p-6 overflow-hidden relative z-10 animate-scale-up">
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <div className="p-3 bg-red-50 rounded-full">
                <Trash2 size={24} />
              </div>
              <h3 className="text-xl font-bold">Delete Job Posting</h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Are you sure you want to delete the <span className="font-semibold text-gray-800">{selectedJobToDelete.title}</span>? This action is secure and uses soft deletion to remove the listing from public view.
            </p>
            
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedJobToDelete(null);
                }}
                className="px-4.5 py-2 text-sm rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="px-4.5 py-2 text-sm rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium shadow-sm transition"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
