"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const enquiryStatuses = [
  "new",
  "contacted",
  "quoted",
  "converted",
  "closed",
];

const painterStatuses = [
  "new",
  "reviewing",
  "approved",
  "rejected",
  "inactive",
];

async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return supabase;
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/admin/login");
}

export async function updateRecordStatus(formData: FormData) {
  const table = String(formData.get("table") || "");
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");

  const isCustomer = table === "customer_enquiries";
  const isPainter = table === "painter_applications";

  if (!isCustomer && !isPainter) {
    throw new Error("Invalid table.");
  }

  if (!id) {
    throw new Error("Missing record ID.");
  }

  const allowedStatuses = isCustomer
    ? enquiryStatuses
    : painterStatuses;

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid status.");
  }

  const supabase = await requireAdmin();

  const { error } = await supabase
    .from(table)
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Status update failed:", error);
    throw new Error("Status could not be updated.");
  }

  if (isCustomer) {
    revalidatePath("/admin");
    revalidatePath("/admin/clients");
  } else {
    revalidatePath("/admin");
    revalidatePath("/admin/painters");
  }
}

export async function markRecordOpened(
  table: "customer_enquiries" | "painter_applications",
  id: string,
) {
  if (!id) {
    throw new Error("Missing record ID.");
  }

  const supabase = await requireAdmin();

  if (table === "customer_enquiries") {
    const { error } = await supabase
      .from("customer_enquiries")
      .update({ status: "contacted" })
      .eq("id", id)
      .eq("status", "new");

    if (error) {
      console.error("Client open-status update failed:", error);
      throw new Error("Client status could not be updated.");
    }

    revalidatePath("/admin");
    revalidatePath("/admin/clients");
    return;
  }

  const { error } = await supabase
    .from("painter_applications")
    .update({ status: "reviewing" })
    .eq("id", id)
    .eq("status", "new");

  if (error) {
    console.error("Painter open-status update failed:", error);
    throw new Error("Painter status could not be updated.");
  }

  revalidatePath("/admin");
  revalidatePath("/admin/painters");
}