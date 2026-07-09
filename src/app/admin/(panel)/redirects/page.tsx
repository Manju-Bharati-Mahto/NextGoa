"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRef } from "react";

interface Redirect {
  id: number;
  source_url: string;
  destination_url: string;
  redirect_type: number;
  is_active: number;
  hit_count: number;
}

export default function RedirectPage() {
  const [rows, setRows] = useState<Redirect[]>([]);

  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  const [total, setTotal] = useState(0);

  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadData();
  }, [page, search]);

  async function loadData() {
    try {
      const res = await fetch(
        `/api/admin/redirects?page=${page}&limit=${limit}&search=${search}`,
      );

      const result = await res.json();

      setRows(result.data || []);
      setTotal(result.total || 0);
      setTotalPages(result.totalPages || 1);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load redirects");
    }
  }
  async function deleteRedirect(id: number) {
    toast("Delete this redirect?", {
      description: "This action cannot be undone.",
      cancel: {
        label: "Cancel",
        onClick: () => {},
      },
      action: {
        label: "Delete",
        onClick: async () => {
          await fetch(`/api/admin/redirects/${id}`, {
            method: "DELETE",
          });

          loadData();

          toast.success("Redirect deleted successfully.");
        },
      },
    });
  }
  async function exportRedirects() {
    window.open("/api/admin/redirects/export");
  }
  async function importRedirects(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    const res = await fetch("/api/admin/redirects/import", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      toast.success(result.message);

      loadData();
    } else {
      toast.error(result.message);
    }

    e.target.value = "";
  }
  return (
    <div className="bg-light-white rounded-xl p-6">
      {/* Header */}

      <div className="flex items-center justify-between bg-white rounded-xl p-5 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Redirect Manager</h1>

          <p className="text-gray-500 mt-1">Manage website Redirect</p>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search redirection..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);

              setPage(1);
            }}
            className="form-control w-72"
          />
        
          <div className="flex items-center gap-3">
            
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-secondary"
            >
              Import
            </button>

            <button
              type="button"
              onClick={exportRedirects}
              className="btn btn-secondary"
            >
              Export
            </button>

            <Link href="/admin/redirects/create" className="btn btn-primary">
              <Plus size={18} />
              Add Redirect
            </Link>
          </div>
          <input
  ref={fileInputRef}
  type="file"
  accept=".xlsx"
  className="hidden"
  onChange={importRedirects}
/>

         
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto bg-white rounded-xl">
        <table className="min-w-full">
          <thead>
            <tr className="border-light">
              <th className="px-5 py-4 text-left">#</th>

              <th className="px-5 py-4 text-left">Source</th>

              <th className="px-5 py-4 text-left">Destination</th>
              <th className="px-5 py-4 text-left">Type</th>

              <th className="px-5 py-4 text-left">Hits</th>
              <th className="px-5 py-4 text-left">Status</th>
              <th className="px-5 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-10 text-center text-gray-500">
                  No Redirects Found
                </td>
              </tr>
            ) : (
              rows.map((item, index) => (
                <tr key={item.id} className="border-light hover:bg-gray-50">
                  <td className="px-5 py-4">
                    {(page - 1) * limit + index + 1}
                  </td>

                  <td className="px-5 py-4">{item.source_url}</td>

                  <td className="px-5 py-4">{item.destination_url}</td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                      {item.redirect_type}
                    </span>
                  </td>

                  <td className="px-5 py-4">{item.hit_count}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs ${
                        item.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/admin/redirects/${item.id}`}
                        className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                      >
                        <Pencil size={16} />
                      </Link>

                      <button
                        onClick={() => deleteRedirect(item.id)}
                        className="h-9 w-9 rounded-lg bg-red-100 text-red-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
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
