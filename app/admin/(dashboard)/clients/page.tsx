import ClientsTable from "@/components/admin/ClientsTable";
import { createClient } from "@/lib/supabase/server";
import type { CustomerEnquiry } from "@/lib/types";

export default async function ClientsPage() {
  const { data, error } = await (await createClient())
    .from("customer_enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#cc0f06]">Customer enquiries</p>
        <h1 className="mt-2 text-[30px] font-black tracking-[-.04em] text-[#043079] md:text-4xl">Clients</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Review incoming requests, find customer details quickly, and keep each enquiry status current.</p>
      </div>

      {error ? (
        <div className="mt-7 rounded-sm border border-[#cc0f06]/20 bg-[#cc0f06]/[.05] p-5 text-sm leading-6 text-[#9f0d06] shadow-sm">
          <strong className="block font-black">Enquiries could not be loaded</strong>
          Confirm the table and admin RLS policies are configured.
        </div>
      ) : (
        <ClientsTable enquiries={(data || []) as CustomerEnquiry[]} />
      )}
    </>
  );
}
