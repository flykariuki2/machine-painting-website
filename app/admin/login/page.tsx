import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#f3f6fa] px-4 py-10 sm:px-5">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#043079_0%,#043079_55%,#f5b400_55%,#f5b400_82%,#cc0f06_82%)]" />
      <div aria-hidden="true" className="absolute -right-36 -top-36 h-96 w-96 rounded-full bg-[#0453b1]/[.06]" />
      <div aria-hidden="true" className="absolute -bottom-44 -left-40 h-96 w-96 rounded-full bg-[#f5b400]/10" />

      <section className="relative w-full max-w-[460px] overflow-hidden rounded-sm border border-[#043079]/10 bg-white shadow-[0_26px_80px_rgba(4,48,121,.14)]">
        <div className="flex items-center justify-between gap-5 border-b border-[#043079]/10 bg-[#043079] px-6 py-5 sm:px-8">
          <span className="flex h-14 w-[148px] items-center justify-center rounded-sm bg-white px-3 shadow-sm">
            <Image src="/machine/logo7.png" alt="The Machine Painting Co Ltd" width={2172} height={724} className="h-auto w-full" priority />
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-[#f5b400]">
            <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#cc0f06]">Secure internal access</p>
          <h1 className="mt-3 text-[30px] font-black tracking-[-.04em] text-[#043079]">Admin sign in</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">Use your pre-created Supabase administrator account to continue.</p>
          <Suspense fallback={<p className="mt-8 text-sm text-slate-500">Loading sign-in…</p>}>
            <LoginForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
