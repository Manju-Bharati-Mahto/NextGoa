"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Bell,
  Search,
  Moon,
  ChevronDown,
  Menu,
  User,
  KeyRound,
  LogOut,
} from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const pageTitle =
    pathname
      .split("/")
      .pop()
      ?.replace(/-/g, " ")
      ?.replace(/\b\w/g, (l) => l.toUpperCase()) || "Dashboard";

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-5">

        <button className="hidden lg:flex h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-100 items-center justify-center transition">
          <Menu size={20} />
        </button>

        <div>

          <h2 className="text-2xl font-semibold">
            {pageTitle}
          </h2>

          <p className="text-sm text-gray-500">
            Goa Admin Panel
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="hidden xl:flex relative w-[380px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="form-control search-input"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Notification */}

        <button className="relative h-11 w-11 rounded-full hover:bg-gray-100 flex items-center justify-center transition">

          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Dark Mode */}

        <button className="h-11 w-11 rounded-full hover:bg-gray-100 flex items-center justify-center transition">

          <Moon size={20} />

        </button>

        <div className="h-10 w-px bg-gray-200"></div>

        {/* User Dropdown */}

        <div
          className="relative"
          ref={menuRef}
        >

          <button
            onClick={() =>
              setOpenMenu(!openMenu)
            }
            className="flex items-center gap-3"
          >

            <div className="h-11 w-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">

              A

            </div>

            <div className="hidden md:block text-left">

              <h4 className="font-semibold">
                Admin
              </h4>

              <p className="text-xs text-gray-500">
                Super Admin
              </p>

            </div>

            <ChevronDown
              size={18}
              className={`transition ${
                openMenu
                  ? "rotate-180"
                  : ""
              }`}
            />

          </button>

          {openMenu && (

            <div className="absolute right-0 mt-3 w-60 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden z-50">

              <div className="px-5 py-4 border-b">

                <h4 className="font-semibold">

                  Admin

                </h4>

                <p className="text-sm text-gray-500">

                  admin@gmail.com

                </p>

              </div>

              <Link
                href="/admin/profile"
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 transition"
              >

                <User size={18} />

                My Profile

              </Link>

              <Link
                href="/admin/change-password"
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 transition"
              >

                <KeyRound size={18} />

                Change Password

              </Link>

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition"
              >

                <LogOut size={18} />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}