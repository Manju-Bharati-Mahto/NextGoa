"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type MenuItem = {
  title: string;
  href?: string;
  permission: string;
  children?: {
    title: string;
    href: string;
    permission: string;
  }[];
};

export default function SidebarMenu({
  menus,
}: {
  menus: MenuItem[];
}) {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>(() => {
    const current = menus.find((menu) =>
      menu.children?.some((child) => pathname.startsWith(child.href))
    );

    return current?.permission ?? null;
  });

  return (
    <nav className="p-4 space-y-1">
      {menus.map((menu) => (
        <div key={menu.permission}>
          {menu.children ? (
            <>
              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === menu.permission ? null : menu.permission
                  )
                }
                className="flex items-center justify-between w-full rounded-lg px-4 py-3 hover:bg-slate-800"
              >
                <span>{menu.title}</span>

                {openMenu === menu.permission ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {openMenu === menu.permission && (
                <div className="ml-5 mt-1 space-y-1 border-l border-slate-700 pl-3">
                  {menu.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block rounded-md px-3 py-2 text-sm transition ${
                        pathname === child.href
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={menu.href!}
              className={`block rounded-lg px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800"
              }`}
            >
              {menu.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}