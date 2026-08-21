"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

const enquiryStatuses = ["new", "contacted", "quoted", "converted", "closed"];
const painterStatuses = ["new", "reviewing", "approved", "rejected", "inactive"];

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateRecordStatus(formData: FormData) {
  const table = String(formData.get("table"));
  const id = String(formData.get("id"));
  const status = String(formData.get("status"));
  const isCustomer = table === "customer_enquiries";
  const allowed = isCustomer ? enquiryStatuses : painterStatuses;

  if ((!isCustomer && table !== "painter_applications") || !id || !allowed.includes(status)) {
    throw new Error("Invalid status update.");
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { error } = await supabase.from(table).update({ status }).eq("id", id);
  if (error) throw new Error("Status could not be updated.");

  revalidatePath(isCustomer ? "/admin/clients" : "/admin/painters");
  revalidatePath("/admin");
}
