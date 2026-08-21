"use client";

import { ChevronDown, Inbox, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import { updateRecordStatus } from "@/app/admin/actions";
import type { CustomerEnquiry } from "@/lib/types";

const statuses = ["new", "contacted", "quoted", "converted", "closed"];
const date = (value: string) =>
  new Intl.DateTimeFormat("en-KE", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));

export default function ClientsTable({ enquiries }: { enquiries: CustomerEnquiry[] }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const sources = [...new Set(enquiries.map((item) => item.source))].sort();
  const filtered = enquiries.filter((item) => {
    const haystack = [item.full_name, item.phone, item.email, item.location, item.county]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(search.toLowerCase()) && (!status || item.status === status) && (!source || item.source === source);
  });

  const fieldClass = "h-11 w-full rounded-sm border border-[#043079]/15 bg-[#f8fafc] px-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/10";

  return (
    <>
      <section aria-label="Client filters" className="mt-7 rounded-sm border border-[#043079]/8 bg-white p-4 shadow-[0_10px_30px_rgba(4,48,121,.06)] sm:p-5">
        <div className="mb-4 flex items-center gap-2 text-[#043079]">
          <SlidersHorizontal aria-hidden="true" className="h-4 w-4" />
          <h2 className="text-sm font-black">Search and filter</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr_200px_220px]">
          <label className="relative">
            <span className="sr-only">Search clients</span>
            <Search aria-hidden="true" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#043079]/40" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, phone, email or location" className={`${fieldClass} pl-10`} />
          </label>
          <label><span className="sr-only">Filter by status</span><select value={status} onChange={(event) => setStatus(event.target.value)} className={fieldClass}><option value="">All statuses</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span className="sr-only">Filter by source</span><select value={source} onChange={(event) => setSource(event.target.value)} className={fieldClass}><option value="">All sources</option>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
      </section>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-500">Showing <strong className="text-[#043079]">{filtered.length}</strong> of {enquiries.length}</p>
        {(search || status || source) && <button type="button" onClick={() => { setSearch(""); setStatus(""); setSource(""); }} className="text-xs font-extrabold text-[#0453b1] hover:underline">Clear filters</button>}
      </div>

      <div className="mt-3 space-y-3">
        {filtered.map((item) => (
          <details key={item.id} className="group overflow-hidden rounded-sm border border-[#043079]/10 bg-white shadow-[0_7px_22px_rgba(4,48,121,.045)] open:border-[#0453b1]/25 open:shadow-[0_12px_30px_rgba(4,48,121,.08)]">
            <summary className="relative grid cursor-pointer list-none gap-4 p-4 pr-11 transition hover:bg-[#043079]/[.018] md:grid-cols-[1.1fr_.85fr_1fr_1fr_.8fr] md:items-center md:p-5 md:pr-12">
              <span><small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">Client</small><strong className="block text-[#043079]">{item.full_name}</strong><small className="text-slate-500">{item.phone}</small></span>
              <span className="text-sm"><small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">Email</small>{item.email || "No email"}</span>
              <span className="text-sm"><small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">Location</small>{[item.location, item.county].filter(Boolean).join(", ")}</span>
              <span className="text-sm"><small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">Service</small>{item.service_interest || "Not specified"}</span>
              <span><small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">Status</small><span className="inline-flex rounded-full bg-[#0453b1]/8 px-2.5 py-1 text-xs font-extrabold capitalize text-[#0453b1]">{item.status}</span><small className="mt-1.5 block font-normal text-slate-500">{date(item.created_at)}</small></span>
              <ChevronDown aria-hidden="true" className="absolute right-4 top-5 h-4 w-4 text-[#043079]/40 transition group-open:rotate-180 md:top-1/2 md:-translate-y-1/2" />
            </summary>
            <div className="border-t border-[#043079]/10 bg-[#f8fafc] p-4 md:p-6">
              <dl className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div><dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">Request</dt><dd className="mt-1 font-semibold text-slate-700">{item.request_type}</dd></div>
                <div><dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">Source</dt><dd className="mt-1 font-semibold text-slate-700">{item.source}</dd></div>
                <div><dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">Preferred date</dt><dd className="mt-1 font-semibold text-slate-700">{item.preferred_date || "Not provided"}</dd></div>
                <div><dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">Property type</dt><dd className="mt-1 font-semibold text-slate-700">{item.property_type || "Not provided"}</dd></div>
                <div className="sm:col-span-2 lg:col-span-4"><dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">Message</dt><dd className="mt-1 whitespace-pre-wrap leading-6 text-slate-700">{item.message || "No additional details"}</dd></div>
              </dl>
              <form action={updateRecordStatus} className="mt-6 flex flex-col gap-2 border-t border-[#043079]/10 pt-5 sm:flex-row">
                <input type="hidden" name="table" value="customer_enquiries" /><input type="hidden" name="id" value={item.id} />
                <select name="status" defaultValue={item.status} className="h-11 rounded-sm border border-[#043079]/20 bg-white px-3 text-sm capitalize outline-none focus:border-[#f5b400]">{statuses.map((value) => <option key={value}>{value}</option>)}</select>
                <button className="h-11 rounded-sm bg-[#043079] px-5 text-sm font-extrabold text-white transition hover:bg-[#0453b1]">Update status</button>
              </form>
            </div>
          </details>
        ))}

        {!filtered.length && (
          <div className="rounded-sm border border-dashed border-[#043079]/15 bg-white px-5 py-12 text-center shadow-[0_7px_22px_rgba(4,48,121,.035)]">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#043079]/[.06] text-[#043079]"><Inbox aria-hidden="true" className="h-5 w-5" /></span>
            <h2 className="mt-4 font-black text-[#043079]">No enquiries found</h2>
            <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-500">No customer enquiries match the current search and filters.</p>
          </div>
        )}
      </div>
    </>
  );
}
