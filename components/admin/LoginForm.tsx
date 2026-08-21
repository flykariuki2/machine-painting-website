"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");

    try {
      const { error: signInError } = await createClient().auth.signInWithPassword({ email, password });
      if (signInError) throw signInError;
      const next = searchParams.get("next");
      router.replace(next?.startsWith("/admin") ? next : "/admin");
      router.refresh();
    } catch {
      setError("Sign-in failed. Check your email and password and try again.");
      setSubmitting(false);
    }
  }

  const inputClass = "h-12 w-full rounded-sm border border-[#043079]/15 bg-[#f8fafc] pl-11 pr-4 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/10";

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
      <label className="grid gap-2 text-sm font-extrabold text-[#043079]">
        Email address
        <span className="relative">
          <Mail aria-hidden="true" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#043079]/45" />
          <input required name="email" type="email" autoComplete="email" placeholder="admin@example.com" className={inputClass} />
        </span>
      </label>
      <label className="grid gap-2 text-sm font-extrabold text-[#043079]">
        Password
        <span className="relative">
          <LockKeyhole aria-hidden="true" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#043079]/45" />
          <input required name="password" type="password" autoComplete="current-password" placeholder="Enter your password" className={inputClass} />
        </span>
      </label>
      {error && <p aria-live="polite" className="rounded-sm border border-[#cc0f06]/15 bg-[#cc0f06]/[.05] px-4 py-3 text-sm font-semibold leading-5 text-[#a70d06]">{error}</p>}
      <button disabled={submitting} className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#f5b400] px-6 text-sm font-extrabold text-[#043079] shadow-[0_10px_24px_rgba(245,180,0,.2)] transition hover:bg-[#ffc62f] disabled:cursor-not-allowed disabled:opacity-60">
        <LogIn aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
        {submitting ? "Signing in..." : "Sign in securely"}
      </button>
    </form>
  );
}
