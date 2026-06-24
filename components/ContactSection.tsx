"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type ContactSectionProps = {
  whatsappMessage: string;
};

export default function ContactSection({ whatsappMessage }: ContactSectionProps) {
  const pathname = usePathname();

  const [requestType, setRequestType] = useState("Get a Quotation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [details, setDetails] = useState("");

  const quoteHref = pathname === "/" ? "#quote" : `${pathname}#quote`;
  const siteVisitHref = pathname === "/" ? "#site-visit" : `${pathname}#site-visit`;
  const contactHref = pathname === "/" ? "#contact" : `${pathname}#contact`;

  const whatsappLink = `https://wa.me/254785285828?text=${whatsappMessage}`;
  const facebookLink = "https://web.facebook.com/profile.php?id=100090852834284";
  const instagramLink = "https://www.instagram.com/the_machine_painting_kenya/";
  const youtubeLink = "https://www.youtube.com/@themachinepaintingcompany";

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
  }, [requestType, name, phone, location, service, preferredDate, details]);

  const formWhatsappLink = `https://wa.me/254785285828?text=${formWhatsappMessage}`;

  return (
    <>
      {/* SHARED ANCHORS: QUOTATION + SITE VISIT */}
      <div id="quote" className="scroll-mt-[96px]" />
      <div id="site-visit" className="scroll-mt-[96px]" />

      {/* QUOTE / SITE VISIT FORM SECTION */}
      <section className="bg-[#f8fafc] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl rounded-sm bg-[#043079] px-6 py-12 text-white shadow-2xl md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f5b400]">
                Project Request
              </p>

              <h2 className="max-w-lg text-3xl font-black leading-tight tracking-[-0.045em] text-white md:text-4xl">
                Request a Quotation or Book a Site Visit
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-200/90">
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

            <form className="bg-white p-6 text-slate-800 shadow-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  value={requestType}
                  onChange={(event) => setRequestType(event.target.value)}
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
                >
                  <option>Get a Quotation</option>
                  <option>Book a Site Visit</option>
                </select>

                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
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
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
                />

                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone Number"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
                />

                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Project Location"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
                />

                <input
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                  type="date"
                  className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
                />
              </div>

              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="Project details e.g. wall size, number of rooms, current wall condition, preferred timeline..."
                className="mt-4 min-h-[100px] w-full border border-[#043079]/30 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
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
                Use this form for quotations and site visit requests. Final quotation
                depends on site condition, preparation work, access, and project scope.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* COMPACT CONTACT FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/5 bg-[#043079] px-5 pt-12 text-white md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 border-b border-white/10 pb-9 lg:grid-cols-[1.05fr_1fr_0.85fr_0.85fr]">
          <div>
            <div className="inline-flex rounded-sm bg-white p-3">
              <Image
                src="/machine/logo7.png"
                alt="The Machine Painting Co Ltd logo"
                width={170}
                height={76}
                className="h-[76px] w-[170px] object-contain"
              />
            </div>

            <h3 className="mt-5 max-w-xs text-sm font-extrabold leading-6 text-white">
              Professional Spray Painting & Finishing
            </h3>

            <p className="mt-3 max-w-xs text-[13px] leading-6 text-slate-300">
              Helping homeowners, businesses, contractors, and property managers achieve
              clean, smooth, and durable wall finishes.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp The Machine Painting"
                className="grid h-8 w-8 place-items-center border border-white/20 text-xs text-white transition-colors hover:border-[#f5b400] hover:text-[#f5b400]"
              >
                ↗
              </a>

              <a
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube The Machine Painting"
                className="grid h-8 w-8 place-items-center border border-white/20 text-xs text-white transition-colors hover:border-[#f5b400] hover:text-[#f5b400]"
              >
                ▶
              </a>

              <a
                href="/gallery"
                aria-label="View gallery"
                className="grid h-8 w-8 place-items-center border border-white/20 text-xs text-white transition-colors hover:border-[#f5b400] hover:text-[#f5b400]"
              >
                ▣
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
              Contact
            </h4>

            <div className="space-y-3 text-[13px] leading-6 text-slate-200">
              <p>
                <span className="font-extrabold text-white">Head Office:</span>
                <br />
                Kasuku Villas
                <br />
                Umoja Road off Magadi Road
                <br />
                Nairobi, Kenya
              </p>

              <p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-extrabold text-white transition-colors hover:text-[#f5b400]"
                >
                  WhatsApp: 0785 285 828
                </a>
                <br />
                <a
                  href="tel:0785285828"
                  className="transition-colors hover:text-[#f5b400]"
                >
                  Call: 0785 285 828
                </a>
                <br />
                <a
                  href="tel:+254719383020"
                  className="transition-colors hover:text-[#f5b400]"
                >
                  Tel: +254 719 383 020
                </a>
                <br />
                <a
                  href="tel:+254720945088"
                  className="transition-colors hover:text-[#f5b400]"
                >
                  Tel: +254 720 945 088
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@themachinepainting.com"
                  className="block break-all font-extrabold text-white transition-colors hover:text-[#f5b400]"
                >
                  info@themachinepainting.com
                </a>

                <a
                  href="mailto:themachinepainting@gmail.com"
                  className="block break-all transition-colors hover:text-[#f5b400]"
                >
                  cc: themachinepainting@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
              Company
            </h4>

            <div className="space-y-2.5 text-[13px] text-slate-200">
              <a className="block transition-colors hover:text-[#f5b400]" href="/">
                Home
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href="/about"
              >
                About Us
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href="/paint-packages"
              >
                Paint Packages
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href="/gallery"
              >
                Gallery
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href="/projects"
              >
                Projects
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href={quoteHref}
              >
                Get a Quotation
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href={siteVisitHref}
              >
                Site Visit
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href="/careers"
              >
                Join Us
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href={contactHref}
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
              Social Media
            </h4>

            <div className="space-y-2.5 text-[13px] text-slate-200">
              <a
                className="block transition-colors hover:text-[#f5b400]"
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
              >
                YouTube: The Machine Painting Co Ltd
              </a>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href={facebookLink}
                target="_blank"
                rel="noreferrer"
              >
                Facebook: The Machine Painting Co Ltd
              </a>

              <p className="text-slate-200">
                Twitter/X:{" "}
                <span className="font-semibold text-white">@TheMachinePaint</span>
              </p>

              <a
                className="block transition-colors hover:text-[#f5b400]"
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
              >
                Instagram: the_machine_painting_kenya
              </a>
            </div>

            <div className="mt-6 space-y-2 text-[13px] text-slate-200">
              <a className="block transition-colors hover:text-[#f5b400]" href="#">
                Privacy Policy
              </a>
              <a className="block transition-colors hover:text-[#f5b400]" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-4 text-[11px] text-slate-400">
          © 2026 The Machine Painting Co Ltd. Beautiful Structures, Sprayed Perfectly.
        </div>
      </footer>
    </>
  );
}