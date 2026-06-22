"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

    console.log("STATUS:", res.status);

const data = await res.json();

console.log("DATA:", data);

    if (data.success) {
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={login}
        className="w-[400px] rounded-xl border p-6"
      >
        <h1 className="mb-5 text-2xl font-bold">
          Admin Login
        </h1>

        <input
          className="mb-3 w-full border p-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="mb-3 w-full border p-3"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full rounded bg-black p-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}