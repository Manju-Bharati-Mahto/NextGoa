import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white">

      <div className="p-5 border-b border-slate-700">
        <h2 className="font-bold text-xl">
          Goa Admin
        </h2>
      </div>

      <nav className="p-4 space-y-2">

        <Link
          href="/admin/dashboard"
          className="block p-3 rounded hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/leads"
          className="block p-3 rounded hover:bg-slate-800"
        >
          Leads
        </Link>
        <Link
          href="/admin/blogs"
          className="block p-3 rounded hover:bg-slate-800"
        >
          Leads
        </Link>

        {/* <Link
          href="/users"
          className="block p-3 rounded hover:bg-slate-800"
        >
          Users
        </Link>

        <Link
          href="/admin/roles"
          className="block p-3 rounded hover:bg-slate-800"
        >
          Roles
        </Link>

        <Link
          href="/admin/settings"
          className="block p-3 rounded hover:bg-slate-800"
        >
          Settings
        </Link> */}

      </nav>

    </aside>
  );
}