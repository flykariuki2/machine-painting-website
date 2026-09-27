"use client";

import { CheckCircle2, MessageCircle, MapPin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { FormEvent, useMemo, useRef, useState } from "react";

// Optional: Keep this if you still want to save a copy in your Supabase database
import { submitCustomerEnquiry } from "@/lib/supabase/submissions";

type ContactSectionProps = { whatsappMessage?: string };
type FormState = "idle" | "error" | "success";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Machine Spray Painting",
  "Wall Skimming / Surface Preparation",
  "Commercial Painting",
  "Renovation Painting",
  "Parking Lot / Line Marking",
  "Industrial / Warehouse Painting",
  "Other",
];

const propertyTypes = [
  "Home / Residential",
  "Apartment",
  "Office",
  "Commercial Property",
  "Warehouse / Industrial",
  "Parking Area",
  "Other",
];

export default function ContactSection({ whatsappMessage }: ContactSectionProps) {
  const [requestType, setRequestType] = useState("Request a Quotation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [county, setCounty] = useState("");
  const [service, setService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");
  const [savedWhatsappLink, setSavedWhatsappLink] = useState("");
  const lastSubmission = useRef(0);
  const pathname = usePathname();

  const defaultWhatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to request a painting quote."
  );
  const whatsappLink = `https://wa.me/254785285828?text=${whatsappMessage || defaultWhatsappMessage}`;

  const formWhatsappLink = useMemo(() => {
    const lines = [
      `Hello The Machine Painting Co Ltd, I submitted a ${requestType.toLowerCase()} request on your website.`,
      "",
      `Name: ${name || "-"}`,
      `Phone Number: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `Project Location: ${location || "-"}`,
      `County: ${county || "-"}`,
      `Service Needed: ${service || "-"}`,
      `Property Type: ${propertyType || "-"}`,
      `Preferred Site Visit Date: ${preferredDate || "-"}`,
      "",
      `Project Details: ${details || "-"}`,
    ];
    return `https://wa.me/254785285828?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [county, details, email, location, name, phone, preferredDate, propertyType, requestType, service]);

  function resetForm() {
    setRequestType("Request a Quotation");
    setName("");
    setPhone("");
    setEmail("");
    setLocation("");
    setCounty("");
    setService("");
    setPropertyType("");
    setPreferredDate("");
    setDetails("");
    setFeedback("");
    setFormState("idle");
    setSavedWhatsappLink("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");
    setFormState("idle");

    if (name.trim().length < 2) {
      setFormState("error");
      setFeedback("Please enter your full name.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setFormState("error");
      setFeedback("Please enter a valid phone number.");
      return;
    }
    if (!location.trim() || !service) {
      setFormState("error");
      setFeedback("Please select a service and enter the project location.");
      return;
    }
    if (Date.now() - lastSubmission.current < 10000) {
      setFormState("error");
      setFeedback("Your request was just submitted. Please wait a moment before trying again.");
      return;
    }

    setSubmitting(true);
    try {
      // 1. Send the email via our Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || "Not provided",
          county: county.trim() || "Not provided",
          location: location.trim(),
          service_interest: service,
          property_type: propertyType || "Not provided",
          message: details.trim() || "No additional details",
          request_type: requestType,
          preferred_date: requestType === "Book a Site Visit" && preferredDate ? preferredDate : "Not provided",
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error("Failed to send email");

      // 2. Optional: Keep saving to Supabase for your database records
      try {
        await submitCustomerEnquiry({
          full_name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || null,
          county: county.trim() || null,
          location: location.trim(),
          service_interest: service,
          property_type: propertyType || null,
          message: details.trim() || null,
          estimated_area_sqm: null,
          estimated_cost: null,
          request_type: requestType,
          preferred_date: requestType === "Book a Site Visit" && preferredDate ? preferredDate : null,
          source: pathname === "/" ? "homepage_quote" : "contact_form",
        });
      } catch (dbError) {
        console.warn("Supabase save failed, but email was sent:", dbError);
      }

      lastSubmission.current = Date.now();
      setSavedWhatsappLink(formWhatsappLink);
      setFormState("success");
      setFeedback("Thank you. Your request has been received and routed to themachinepaintingcoltd@gmail.com. Our team will contact you shortly.");
    } catch {
      setFormState("error");
      setFeedback("We could not process your request. Please try again or contact us directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = "h-12 w-full border border-[#043079]/20 bg-white px-3.5 text-sm text-slate-900 outline-none transition focus:border-[#f5b400] focus:ring-4 focus:ring-[#f5b400]/10";
  const labelClass = "grid gap-1.5 text-xs font-extrabold text-[#043079]";

  return (
    <>
      <div id="site-visit" className="scroll-mt-[96px]" />
      <section className="section-shell bg-white">
        <div className="site-container relative overflow-hidden bg-[#043079] px-5 py-10 text-white shadow-[0_28px_80px_rgba(4,48,121,.18)] sm:px-6 md:px-10 md:py-12 lg:px-12">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10">
            
            {/* Left Column: Info */}
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f5b400]">Project Request</p>
              <h2 className="max-w-lg text-[30px] font-extrabold leading-tight tracking-[-0.045em] text-white md:text-[33px]">Request a Quotation or Book a Site Visit</h2>
              <p className="mt-4 max-w-lg text-[14px] leading-6 text-slate-200/90 md:mt-5 md:text-[15px] md:leading-7">
                Tell us what you need and where the project is located. All client submissions, quotations, site visits, and general inquiries are securely routed to{" "}
                <span className="font-semibold text-[#f5b400]">themachinepaintingcoltd@gmail.com</span>. We will review the details and contact you shortly.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-slate-200/90">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#f5b400]" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-white">Head Office</p>
                    <p className="text-sm">Clara Villas, 4th Avenue off Magadi Rd, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-200/90">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#f5b400]" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-white">Email Us</p>
                    <a href="mailto:themachinepaintingcoltd@gmail.com" className="text-sm text-[#f5b400] transition hover:underline">
                      themachinepaintingcoltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#f5b400] px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#043079] transition hover:bg-white">
                <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp Directly
              </a>
            </div>

            {/* Right Column: Form */}
            <div id="quote" className="scroll-mt-[96px]">
              {formState === "success" ? (
                <div className="border-t-4 border-[#f5b400] bg-white p-6 text-center text-slate-800 shadow-2xl sm:p-8">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#0453b1]/10 text-[#0453b1]">
                    <CheckCircle2 aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-black tracking-[-.03em] text-[#043079]">Request received</h3>
                  <p aria-live="polite" className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">{feedback}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a href={savedWhatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#f5b400] px-5 text-xs font-extrabold text-[#043079]">
                      <MessageCircle aria-hidden="true" className="h-4 w-4" /> Follow up on WhatsApp
                    </a>
                    <button type="button" onClick={resetForm} className="min-h-12 border border-[#043079]/20 px-5 text-xs font-extrabold text-[#043079] transition hover:border-[#043079]">
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form className="border-t-4 border-[#cc0f06] bg-white p-5 text-slate-800 shadow-2xl sm:p-6 md:p-8" onSubmit={handleSubmit}>
                  <p className="mb-5 text-xs leading-5 text-slate-500"><span className="font-extrabold text-[#cc0f06]">*</span> Required fields</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClass}>Full Name <span className="text-[#cc0f06]">*</span><span><input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" autoComplete="name" className={fieldClass} /></span></label>
                    <label className={labelClass}>Phone Number <span className="text-[#cc0f06]">*</span><span><input required value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="e.g. 0712 345 678" type="tel" autoComplete="tel" className={fieldClass} /></span></label>
                    <label className={labelClass}>Email Address <span><input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Optional" type="email" autoComplete="email" className={fieldClass} /></span></label>
                    <label className={labelClass}>County <span><input value={county} onChange={(event) => setCounty(event.target.value)} placeholder="e.g. Nairobi" autoComplete="address-level1" className={fieldClass} /></span></label>
                    <label className={labelClass}>Project Location <span className="text-[#cc0f06]">*</span><span><input required value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Estate, area or town" autoComplete="address-level2" className={fieldClass} /></span></label>
                    <label className={labelClass}>Service Required <span className="text-[#cc0f06]">*</span><span><select required value={service} onChange={(event) => setService(event.target.value)} className={fieldClass}><option value="">Select service</option>{services.map((item) => <option key={item}>{item}</option>)}</select></span></label>
                    <label className={labelClass}>Project / Property Type <span><select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} className={fieldClass}><option value="">Select type (optional)</option>{propertyTypes.map((item) => <option key={item}>{item}</option>)}</select></span></label>
                    <label className={labelClass}>Request Type <span className="text-[#cc0f06]">*</span><span><select value={requestType} onChange={(event) => { setRequestType(event.target.value); if (event.target.value !== "Book a Site Visit") setPreferredDate(""); }} className={fieldClass}><option>Request a Quotation</option><option>Book a Site Visit</option><option>General Enquiry</option></select></span></label>
                    {requestType === "Book a Site Visit" && <label className={`${labelClass} sm:col-span-2`}>Preferred Site Visit Date <span><input value={preferredDate} onChange={(event) => setPreferredDate(event.target.value)} type="date" min={new Date().toISOString().split("T")[0]} className={fieldClass} /></span></label>}
                  </div>
                  <label className={`${labelClass} mt-4`}>Short Project Description <textarea value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Briefly describe the project, wall condition, size, or preferred timeline..." className="min-h-[96px] w-full resize-y border border-[#043079]/20 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f5b400] focus:ring-4 focus:ring-[#f5b400]/10" /></label>
                  {formState === "error" && <p aria-live="polite" className="mt-4 border-l-4 border-[#cc0f06] bg-[#cc0f06]/[.05] px-4 py-3 text-sm font-semibold leading-5 text-[#a70d06]">{feedback}</p>}
                  <button type="submit" disabled={submitting} className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-[#043079] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#f5b400] hover:text-[#043079] disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting request..." : "Submit Request"}</button>
                  <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">Your request is saved securely and forwarded to themachinepaintingcoltd@gmail.com.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}