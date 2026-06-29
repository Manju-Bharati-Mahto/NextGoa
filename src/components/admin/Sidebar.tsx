import Link from "next/link";
import { requireAdmin, getUserPermissions } from "@/lib/adminAuth";
import Image from "next/image";

export default async function Sidebar() {
  const user = await requireAdmin();

  if ("status" in user) {
    return null;
  }

  let permissions: string[] = [];

  if (user.role_id !== 1) {
    permissions = await getUserPermissions(user.id);
  }

  const menus = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      permission: "dashboard",
    },
    {
      title: "Leads",
      href: "/admin/leads",
      permission: "leads",
    },
    {
      title: "Blogs",
      href: "/admin/blogs",
      permission: "blogs",
    },
    {
      title: "Jobs",
      href: "/admin/jobs",
      permission: "jobs",
    },
    {
      title: "Users",
      href: "/admin/users",
      permission: "users",
    },
  ];

  const visibleMenus =
    user.role_id === 1
      ? menus
      : menus.filter((menu) =>
          permissions.includes(menu.permission)
        );

  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="p-5 border-b border-slate-700">
        <Image
                src="/logo.svg"
                alt="Parul University Goa Logo"
                width={233}
                height={26}
                className="h-6 md:h-7 xl:h-8 [@media(min-width:1250px)_and_(max-width:1300px)]:h-6 w-auto shrink-0"
                priority
              />
      </div>

      <nav className="p-4 space-y-2">
        {visibleMenus.map((menu) => (
          <Link
            key={menu.permission}
            href={menu.href}
            className="block p-3 rounded hover:bg-slate-800"
          >
            {menu.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}