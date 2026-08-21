import { ArrowRight, Clock3, Paintbrush, UserPlus, Users } from "lucide-react";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();
  const [clients, newClients, painters, newPainters] = await Promise.all([
    supabase.from("customer_enquiries").select("id", { count: "exact", head: true }),
    supabase.from("customer_enquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("painter_applications").select("id", { count: "exact", head: true }),
    supabase.from("painter_applications").select("id", { count: "exact", head: true }).eq("status", "new"),
  ]);

  const cards = [
    { label: "Total customer enquiries", value: clients.count ?? 0, icon: Users, accent: "bg-[#043079]" },
    { label: "New enquiries", value: newClients.count ?? 0, icon: UserPlus, accent: "bg-[#f5b400]" },
    { label: "Total painter applications", value: painters.count ?? 0, icon: Paintbrush, accent: "bg-[#0453b1]" },
    { label: "New painter applications", value: newPainters.count ?? 0, icon: Clock3, accent: "bg-[#cc0f06]" },
  ];

  return (
    <>
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#cc0f06]">Overview</p>
        <h1 className="mt-2 text-[30px] font-black tracking-[-.04em] text-[#043079] md:text-4xl">Dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">A simple view of current customer enquiries and painter applications.</p>
      </div>

      <section aria-label="Dashboard statistics" className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon, accent }) => (
          <article key={label} className="relative overflow-hidden rounded-sm border border-[#043079]/8 bg-white p-5 shadow-[0_12px_35px_rgba(4,48,121,.07)] md:p-6">
            <span className={`absolute inset-y-0 left-0 w-1 ${accent}`} />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="max-w-[180px] text-xs font-extrabold uppercase leading-5 tracking-[.08em] text-slate-500">{label}</p>
                <strong className="mt-4 block text-4xl font-black tracking-[-.04em] text-[#043079]">{value}</strong>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[#043079]/[.06] text-[#043079]">
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-7 grid gap-4 lg:grid-cols-2">
        <Link href="/admin/clients" className="group flex items-center justify-between gap-5 rounded-sm bg-[#043079] p-5 text-white shadow-[0_14px_35px_rgba(4,48,121,.14)] transition hover:-translate-y-0.5 hover:bg-[#0453b1] md:p-6">
          <span><strong className="block text-lg font-black">Manage Clients</strong><small className="mt-1 block text-sm leading-5 text-white/65">Search enquiries, review details, and update lead status.</small></span>
          <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-[#f5b400] transition group-hover:translate-x-1" />
        </Link>
        <Link href="/admin/painters" className="group flex items-center justify-between gap-5 rounded-sm border border-[#043079]/10 bg-white p-5 text-[#043079] shadow-[0_12px_30px_rgba(4,48,121,.06)] transition hover:-translate-y-0.5 hover:border-[#f5b400] md:p-6">
          <span><strong className="block text-lg font-black">Manage Painters</strong><small className="mt-1 block text-sm leading-5 text-slate-500">Filter the painter pool by county, specialty, and status.</small></span>
          <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-[#cc0f06] transition group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}
