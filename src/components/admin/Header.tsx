"use client";

import { useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter();

  async function logout() {

    const res = await fetch("/api/admin/logout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.success) {
      router.replace("/admin/login");
      router.refresh();
    }

  }

  return (
    <header className="h-16 bg-white border-b flex justify-between items-center px-6">

      <h1 className="font-bold text-xl">
        Goa Admin Panel
      </h1>

      <div className="flex items-center gap-4">

        <button>
          🔔
        </button>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            A
          </div>

          <button
            onClick={logout}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </header>
  );
}