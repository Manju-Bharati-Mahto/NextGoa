"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Pencil } from "lucide-react";
import { toast } from "sonner";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    loadUsers();
  }, [page, search]);

  async function loadUsers() {
    try {
      const res = await fetch(
        `/api/admin/users?page=${page}&limit=${limit}&search=${search}`,
      );

      const result = await res.json();

      setUsers(result.data || []);
      setTotal(result.total || 0);
      setTotalPages(result.totalPages || 1);
      setPermissions(result.permissions || []);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteUser(id: number) {
    toast("Delete this page?", {
      description: "This action cannot be undone.",
      cancel: {
        label: "Cancel",
        onClick: () => {},
      },
      action: {
        label: "Delete",
        onClick: async () => {
          try {
            const res = await fetch(`/api/admin/users/${id}`, {
              method: "DELETE",
            });

            const result = await res.json();

            if (result.success) {
              toast.success("Page deleted successfully.");

              loadUsers();
            } else {
              toast.error(result.message);
            }
          } catch (error) {
            console.error(error);

            toast.error("Failed to delete page.");
          }
        },
      },
    });
  }

  return (
    <div className="bg-light-white rounded-xl p-6">
      {/* Header */}

      <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>

          <p className="text-gray-500 mt-1">
            Manage admin users and permissions
          </p>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="🔍 Search user..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-72 rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <Link
          href="/admin/users/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add User
        </Link>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl bg-white">
        <table className="min-w-full">
          <thead className="bg-white-100 border-light">
            <tr>
              <th className="px-5 py-4 text-left">#</th>

              <th className="px-5 py-4 text-left">Name</th>

              <th className="px-5 py-4 text-left">Email</th>

              <th className="px-5 py-4 text-left">Role</th>

              <th className="px-5 py-4 text-left">Status</th>

              <th className="px-5 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-light hover:bg-blue-50">
                <td className="px-5 py-4">{(page - 1) * limit + index + 1}</td>

                <td className="px-5 py-4 font-medium">{user.name}</td>

                <td className="px-5 py-4">{user.email}</td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      user.role_id == 1
                        ? "!bg-purple-100 !text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role_id == 1 ? "Super Admin" : "Admin"}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status === "active" ? "Active" : "Locked"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-center">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="h-9 w-9 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                    >
                      <Pencil size={16} />
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
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
        <div className="flex justify-between items-center p-4">
          <div className="text-gray-600">
            Showing
            <span className="mx-1 font-semibold">{(page - 1) * limit + 1}</span>
            -
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
              className="px-5 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            >
              ← Previous
            </button>

            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              {page}
            </div>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-5 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Pagination */}
    </div>
  );
}
