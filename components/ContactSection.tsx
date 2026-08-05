"use client";

import { useMemo, useState } from "react";

type ContactSectionProps = {
  whatsappMessage?: string;
};

export default function ContactSection({
  whatsappMessage,
}: ContactSectionProps) {
  const [requestType, setRequestType] = useState("Get a Quotation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [details, setDetails] = useState("");

  const defaultWhatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to request a painting quote.",
  );

  const whatsappLink = `https://wa.me/254785285828?text=${
    whatsappMessage || defaultWhatsappMessage
  }`;

  const formWhatsappMessage = useMemo(() => {
    const lines = [
      `Hello The Machine Painting Co Ltd, I would like to submit a ${requestType.toLowerCase()} request.`,
      "",
      `Name: ${name || "-"}`,
      `Phone Number: ${phone || "-"}`,
      `Project Location: ${location || "-"}`,
      `Service Needed: ${service || "-"}`,
      `Preferred Site Visit Date: ${preferredDate || "-"}`,
      "",
      `Project Details: ${details || "-"}`,
    ];

    return encodeURIComponent(lines.join("\n"));
  }, [
    requestType,
    name,
    phone,
    location,
    service,
    preferredDate,
    details,
  ]);

  const formWhatsappLink = `https://wa.me/254785285828?text=${formWhatsappMessage}`;

  return (
    <>
      <div id="quote" className="scroll-mt-[96px]" />
      <div id="site-visit" className="scroll-mt-[96px]" />

      <section className="section-shell bg-white">
        <div className="site-container relative overflow-hidden bg-[#043079] px-6 py-12 text-white shadow-[0_28px_80px_rgba(4,48,121,.18)] md:px-10 lg:px-12">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f5b400]">
                Project Request
              </p>

              <h2 className="max-w-lg text-[33px] font-extrabold leading-tight tracking-[-0.045em] text-white">
                Request a Quotation or Book a Site Visit
              </h2>

              <p className="mt-5 max-w-lg text-[15px] font-normal leading-7 text-slate-200/90">
                Share your location, service type, and project details. You can
                request a quotation or book a site visit using the same form.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex bg-[#f5b400] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition-colors duration-200 hover:bg-white hover:text-[#043079]"
              >
                WhatsApp Directly
              </a>
            </div>

            <form
              className="border-t-[4px] border-[#cc0f06] bg-white p-6 text-slate-800 shadow-2xl md:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  value={requestType}
                  onChange={(event) => setRequestType(event.target.value)}
                  aria-label="Request type"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
                >
                  <option>Get a Quotation</option>
                  <option>Book a Site Visit</option>
                </select>

                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  aria-label="Service needed"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
                >
                  <option value="">Select Service</option>
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Machine Spray Painting</option>
                  <option>Wall Skimming / Surface Preparation</option>
                  <option>Commercial Painting</option>
                  <option>Renovation Painting</option>
                </select>

                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your Name"
                  aria-label="Your name"
                  autoComplete="name"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
                />

                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone Number"
                  aria-label="Phone number"
                  type="tel"
                  autoComplete="tel"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
                />

                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Project Location"
                  aria-label="Project location"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
                />

                <input
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                  type="date"
                  aria-label="Preferred site visit date"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
                />
              </div>

              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="Project details e.g. wall size, number of rooms, current wall condition, preferred timeline..."
                aria-label="Project details"
                className="mt-4 min-h-[100px] w-full border border-[#043079]/30 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#cc0f06] focus:ring-1 focus:ring-[#cc0f06]"
              />

              <a
                href={formWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center bg-[#043079] px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#f5b400] hover:text-[#043079]"
              >
                Submit Request on WhatsApp
              </a>

              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Use this form for quotations and site visit requests. Final
                quotation depends on site condition, preparation work, access,
                and project scope.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}