"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });


const data = await res.json();


    if (data.success) {
      router.push("/admin/dashboard");
    } else {
      toast.error(data.message);
    }
  }

  return (
   <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
    style={{
      backgroundImage: "url('/campus-tour-thumbnail.webp')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

    {/* Login Card */}
    <form
      onSubmit={login}
      className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10"
    >
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/logo.svg"
          alt="Goa Logo"
          width={220}
          height={45}
          priority
        />
      </div>

      <h1 className="text-3xl font-bold text-center text-white">
        Welcome Back
      </h1>

      <p className="text-center text-gray-300 mt-2 mb-8">
        Login to Goa Admin Panel
      </p>

      {/* Email */}
      <div className="relative mb-5">
        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 pl-11 pr-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition"
        />
      </div>

      {/* Password */}
      <div className="relative mb-6">
        <Lock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 pl-11 pr-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition"
        />
      </div>

      {/* Remember */}
      {/* <div className="flex items-center justify-between mb-6 text-sm text-gray-300">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          type="button"
          className="hover:text-white"
        >
          Forgot Password?
        </button>
      </div> */}

      {/* Login */}
      <button
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
      >
        Login
      </button>

      <p className="mt-8 text-center text-xs text-gray-400">
        © 2026 Goa Admin Panel
      </p>
    </form>
  </div>
  );
}