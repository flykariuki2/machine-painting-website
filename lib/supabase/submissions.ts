import { createClient } from "@/lib/supabase/client";

export type CustomerEnquiryInput = {
  full_name: string;
  phone: string;
  email?: string | null;
  county?: string | null;
  location: string;
  service_interest?: string | null;
  property_type?: string | null;
  message?: string | null;
  estimated_area_sqm?: number | null;
  estimated_cost?: number | null;
  request_type: string;
  preferred_date?: string | null;
  source: string;
};

export type PainterApplicationInput = {
  full_name: string;
  age: number;
  phone: string;
  email?: string | null;
  county: string;
  location: string;
  specialty: string;
  years_experience?: number | null;
  availability?: string | null;
  has_spray_painting_experience?: boolean | null;
  message?: string | null;
  source: string;
};

type SupabaseInsertError = {
  message?: string;
  code?: string;
  details?: string | null;
  hint?: string | null;
};

function logInsertError(table: string, error: SupabaseInsertError) {
  if (process.env.NODE_ENV !== "development") return;

  console.error(`Supabase insert failed for ${table}`, {
    message: error.message ?? "Unknown Supabase error",
    code: error.code ?? "",
    details: error.details ?? null,
    hint: error.hint ?? null,
  });
}

export async function submitCustomerEnquiry(input: CustomerEnquiryInput) {
  const payload: CustomerEnquiryInput & { status: string } = {
    ...input,
    email: input.email?.trim() || null,
    county: input.county?.trim() || null,
    service_interest: input.service_interest?.trim() || null,
    property_type: input.property_type?.trim() || null,
    message: input.message?.trim() || null,
    estimated_area_sqm:
      typeof input.estimated_area_sqm === "number"
        ? input.estimated_area_sqm
        : null,
    estimated_cost:
      typeof input.estimated_cost === "number" ? input.estimated_cost : null,
    preferred_date: input.preferred_date?.trim() || null,
    status: "new",
  };

  const { error } = await createClient()
    .from("customer_enquiries")
    .insert(payload);

  if (error) {
    logInsertError("customer_enquiries", error);
    throw error;
  }
}

export async function submitPainterApplication(input: PainterApplicationInput) {
  const payload: PainterApplicationInput & { status: string } = {
    ...input,
    email: input.email?.trim() || null,
    years_experience:
      typeof input.years_experience === "number"
        ? input.years_experience
        : null,
    availability: input.availability?.trim() || null,
    has_spray_painting_experience:
      typeof input.has_spray_painting_experience === "boolean"
        ? input.has_spray_painting_experience
        : null,
    message: input.message?.trim() || null,
    status: "new",
  };

  const { error } = await createClient()
    .from("painter_applications")
    .insert(payload);

  if (error) {
    logInsertError("painter_applications", error);
    throw error;
  }
}
