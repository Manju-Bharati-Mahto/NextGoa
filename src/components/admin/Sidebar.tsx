import { requireAdmin, getUserPermissions } from "@/lib/adminAuth";
import SidebarMenu from "@/components/admin/SidebarMenu";
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
      permission: "blogs",
      children: [
        {
          title: "Create Blog",
          href: "/admin/blogs/create",
          permission: "blogs.create",
        },
        {
          title: "View Blogs",
          href: "/admin/blogs",
          permission: "blogs",
        },
      ],
    },
    {
      title: "Careers",
      permission: "carrers",
      children: [
        {
          title: "Create Careers",
          href: "/admin/carrers/create",
          permission: "carrers.create",
        },
        {
          title: "View Careers",
          href: "/admin/carrers",
          permission: "carrers",
        },
      ],
    },
    {
      title: "Jobs",
      href: "/admin/jobs",
      permission: "jobs",
    },
    {
      title: "Users",
      permission: "users",
      children: [
        {
          title: "Create User",
          href: "/admin/users/create",
          permission: "users.create",
        },
        {
          title: "View Users",
          href: "/admin/users",
          permission: "users",
        },
      ],
    },
    {
      title: "Pages",
      permission: "pages",
      children: [
        {
          title: "Create Page",
          href: "/admin/pages/create",
          permission: "pages.create",
        },
        {
          title: "View Pages",
          href: "/admin/pages",
          permission: "pages",
        },
      ],
    },
    {
      title: "Faculty",
      permission: "faculty",
      children: [
        {
          title: "Create Faculty",
          href: "/admin/faculty/create",
          permission: "faculty.create",
        },
        {
          title: "View Faculty",
          href: "/admin/faculty",
          permission: "faculty",
        },
      ],
    },
    {
      title: "Experts",
      permission: "experts",
      children: [
        {
          title: "Create Expert",
          href: "/admin/experts/create",
          permission: "experts.create",
        },
        {
          title: "View Experts",
          href: "/admin/experts",
          permission: "experts",
        },
      ],
    },
  ];

  const visibleMenus =
  user.role_id === 1
    ? menus
    : menus
        .map((menu) => ({
          ...menu,
          children: menu.children?.filter((child) =>
            permissions.includes(child.permission)
          ),
        }))
        .filter(
          (menu) =>
            permissions.includes(menu.permission) ||
            (menu.children && menu.children.length > 0)
        );

  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="p-5 border-b border-slate-700">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={233}
          height={26}
          className="h-7 w-auto"
          priority
        />
      </div>

      <SidebarMenu menus={visibleMenus} />
    </aside>
  );
}
