"use client";

import {
  ChevronDown,
  Paintbrush,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import {
  markRecordOpened,
  updateRecordStatus,
} from "@/app/admin/actions";
import type { PainterApplication } from "@/lib/types";

const statuses = ["new", "reviewing", "approved", "rejected", "inactive"];

const date = (value: string) =>
  new Intl.DateTimeFormat("en-KE", {
    dateStyle: "medium",
  }).format(new Date(value));

export default function PaintersTable({
  painters,
}: {
  painters: PainterApplication[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");
  const [county, setCounty] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [status, setStatus] = useState("");

  const counties = [...new Set(painters.map((item) => item.county))].sort();

  const specialties = [
    ...new Set(
      painters.flatMap((item) =>
        item.specialty
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean),
      ),
    ),
  ].sort();

  const filtered = painters.filter((item) => {
    const matchesSearch = `${item.full_name} ${item.phone} ${item.email || ""}`
      .toLowerCase()
      .includes(search.toLowerCase());

    return (
      matchesSearch &&
      (!county || item.county === county) &&
      (!specialty ||
        item.specialty
          .split(",")
          .map((value) => value.trim())
          .includes(specialty)) &&
      (!status || item.status === status)
    );
  });

  const fieldClass =
    "h-11 w-full rounded-sm border border-[#043079]/15 bg-[#f8fafc] px-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/10";

  const openPainter = (id: string) => {
    startTransition(async () => {
      await markRecordOpened("painter_applications", id);

      router.refresh();
    });
  };

  return (
    <>
      <section
        aria-label="Painter filters"
        className="mt-7 rounded-sm border border-[#043079]/8 bg-white p-4 shadow-[0_10px_30px_rgba(4,48,121,.06)] sm:p-5"
      >
        <div className="mb-4 flex items-center gap-2 text-[#043079]">
          <SlidersHorizontal aria-hidden="true" className="h-4 w-4" />
          <h2 className="text-sm font-black">Search and filter</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_200px_240px_180px]">
          <label className="relative">
            <span className="sr-only">Search painters</span>
            <Search
              aria-hidden="true"
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#043079]/40"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, phone or email"
              className={`${fieldClass} pl-10`}
            />
          </label>

          <label>
            <span className="sr-only">Filter by county</span>
            <select
              value={county}
              onChange={(event) => setCounty(event.target.value)}
              className={fieldClass}
            >
              <option value="">All counties</option>
              {counties.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by specialty</span>
            <select
              value={specialty}
              onChange={(event) => setSpecialty(event.target.value)}
              className={fieldClass}
            >
              <option value="">All specialties</option>
              {specialties.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className={fieldClass}
            >
              <option value="">All statuses</option>
              {statuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-500">
          Showing{" "}
          <strong className="text-[#043079]">{filtered.length}</strong> of{" "}
          {painters.length}
        </p>

        {(search || county || specialty || status) && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCounty("");
              setSpecialty("");
              setStatus("");
            }}
            className="text-xs font-extrabold text-[#0453b1] hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-3 space-y-3">
        {filtered.map((item) => (
          <details
            key={item.id}
            className="group overflow-hidden rounded-sm border border-[#043079]/10 bg-white shadow-[0_7px_22px_rgba(4,48,121,.045)] open:border-[#0453b1]/25 open:shadow-[0_12px_30px_rgba(4,48,121,.08)]"
            onToggle={(event) => {
              if (event.currentTarget.open) {
                openPainter(item.id);
              }
            }}
          >
            <summary className="relative grid cursor-pointer list-none gap-4 p-4 pr-11 transition hover:bg-[#043079]/[.018] md:grid-cols-[1fr_.75fr_.65fr_1.2fr_.75fr_.75fr] md:items-center md:p-5 md:pr-12">
              <span>
                <small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">
                  Painter
                </small>
                <strong className="block text-[#043079]">
                  {item.full_name}
                </strong>
                <small className="text-slate-500">{item.phone}</small>
              </span>

              <span className="text-sm">
                <small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">
                  Location
                </small>
                {item.county}
                <small className="block text-slate-500">
                  {item.location}
                </small>
              </span>

              <span className="text-sm">
                <small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">
                  Experience
                </small>
                {item.years_experience == null
                  ? `Age ${item.age}`
                  : `${item.years_experience} years`}
              </span>

              <span className="text-sm">
                <small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">
                  Specialty
                </small>
                {item.specialty}
              </span>

              <span className="text-sm capitalize">
                <small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">
                  Availability
                </small>
                {item.availability || "Not given"}
              </span>

              <span>
                <small className="mb-1 block text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 md:hidden">
                  Status
                </small>

                <span className="inline-flex rounded-full bg-[#0453b1]/8 px-2.5 py-1 text-xs font-extrabold capitalize text-[#0453b1]">
                  {item.status}
                </span>

                <small className="mt-1.5 block font-normal text-slate-500">
                  {date(item.created_at)}
                </small>
              </span>

              <ChevronDown
                aria-hidden="true"
                className="absolute right-4 top-5 h-4 w-4 text-[#043079]/40 transition group-open:rotate-180 md:top-1/2 md:-translate-y-1/2"
              />
            </summary>

            <div className="border-t border-[#043079]/10 bg-[#f8fafc] p-4 md:p-6">
              <dl className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">
                    Age
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-700">
                    {item.age}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">
                    Email
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-700">
                    {item.email || "Not provided"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">
                    Spray experience
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-700">
                    {item.has_spray_painting_experience == null
                      ? "Not provided"
                      : item.has_spray_painting_experience
                        ? "Yes"
                        : "No"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">
                    Source
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-700">
                    {item.source}
                  </dd>
                </div>

                <div className="sm:col-span-2 lg:col-span-4">
                  <dt className="text-xs font-extrabold uppercase tracking-[.08em] text-slate-400">
                    Message
                  </dt>
                  <dd className="mt-1 leading-6 text-slate-700">
                    {item.message || "No additional details"}
                  </dd>
                </div>
              </dl>

              <form
                action={updateRecordStatus}
                className="mt-6 flex flex-col gap-2 border-t border-[#043079]/10 pt-5 sm:flex-row"
              >
                <input
                  type="hidden"
                  name="table"
                  value="painter_applications"
                />

                <input type="hidden" name="id" value={item.id} />

                <select
                  name="status"
                  defaultValue={item.status}
                  className="h-11 rounded-sm border border-[#043079]/20 bg-white px-3 text-sm capitalize outline-none focus:border-[#f5b400]"
                >
                  {statuses.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={isPending}
                  className="h-11 rounded-sm bg-[#043079] px-5 text-sm font-extrabold text-white transition hover:bg-[#0453b1] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPending ? "Updating..." : "Update status"}
                </button>
              </form>
            </div>
          </details>
        ))}

        {!filtered.length && (
          <div className="rounded-sm border border-dashed border-[#043079]/15 bg-white px-5 py-12 text-center shadow-[0_7px_22px_rgba(4,48,121,.035)]">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#043079]/[.06] text-[#043079]">
              <Paintbrush aria-hidden="true" className="h-5 w-5" />
            </span>

            <h2 className="mt-4 font-black text-[#043079]">
              No painters found
            </h2>

            <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-500">
              No painter applications match the current search and filters.
            </p>
          </div>
        )}
      </div>
    </>
  );
}