import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { logout } from "@/app/admin/actions";
import AdminNav from "@/components/admin/AdminNav";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#f3f6fa] text-slate-800">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#043079] text-white shadow-[0_8px_28px_rgba(4,48,121,.16)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-5 md:px-8">
          <Link href="/admin" className="flex min-w-0 items-center gap-3" aria-label="Machine Painting Admin dashboard">
            <span className="flex h-12 w-[104px] shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white px-2 shadow-sm sm:w-[120px]">
              <Image src="/machine/logo7.png" alt="The Machine Painting Co Ltd" width={2172} height={724} className="h-auto w-full" priority />
            </span>
            <span className="hidden min-w-0 sm:block">
              <strong className="block truncate text-sm font-black tracking-[-.02em] md:text-base">Machine Painting Admin</strong>
              <small className="mt-0.5 block text-[10px] font-bold uppercase tracking-[.16em] text-white/55">Internal workspace</small>
            </span>
          </Link>

          <form action={logout}>
            <button className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-white/20 px-3 text-xs font-extrabold text-white/80 transition hover:border-white hover:bg-white hover:text-[#043079] md:px-4 md:text-sm">
              <LogOut aria-hidden="true" className="h-4 w-4" strokeWidth={2.3} />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </form>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] overflow-x-auto px-2 sm:px-3 md:px-6">
            <AdminNav />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-4 py-7 sm:px-5 md:px-8 md:py-10">{children}</main>
    </div>
  );
}
