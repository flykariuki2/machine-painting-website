import PaintersTable from "@/components/admin/PaintersTable";
import { createClient } from "@/lib/supabase/server";
import type { PainterApplication } from "@/lib/types";

export default async function PaintersPage() {
  const { data, error } = await (await createClient())
    .from("painter_applications")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#cc0f06]">Painter pool</p>
        <h1 className="mt-2 text-[30px] font-black tracking-[-.04em] text-[#043079] md:text-4xl">Painters</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Search the painter database and narrow applications by county, specialty, or review status.</p>
      </div>

      {error ? (
        <div className="mt-7 rounded-sm border border-[#cc0f06]/20 bg-[#cc0f06]/[.05] p-5 text-sm leading-6 text-[#9f0d06] shadow-sm">
          <strong className="block font-black">Applications could not be loaded</strong>
          Confirm the table and admin RLS policies are configured.
        </div>
      ) : (
        <PaintersTable painters={(data || []) as PainterApplication[]} />
      )}
    </>
  );
}
