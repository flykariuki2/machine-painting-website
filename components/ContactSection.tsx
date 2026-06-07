"use client";

import Image from "next/image";

type ContactSectionProps = {
  whatsappMessage: string;
};

export default function ContactSection({ whatsappMessage }: ContactSectionProps) {
  const whatsappLink = `https://wa.me/254785285828?text=${whatsappMessage}`;

  return (
    <>
      {/* QUOTE FORM SECTION */}
      <section id="quote" className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto max-w-6xl bg-[#07162d] px-6 py-11 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f97316]">
                Quote Request
              </p>

              <h2 className="max-w-lg text-3xl font-black leading-tight tracking-[-0.045em] md:text-4xl">
                Get a Practical Painting Estimate
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/75">
                Share your location, service type, and surface details. We’ll respond
                with guidance on the best finish and the next step.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex bg-[#f97316] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white hover:bg-[#ea580c]"
              >
                WhatsApp Directly
              </a>
            </div>

            <form className="bg-white p-6 text-[#07162d] shadow-xl shadow-black/20">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  placeholder="Your Name"
                  className="h-11 border border-slate-200 px-4 text-sm outline-none focus:border-[#f97316]"
                />

                <input
                  placeholder="Phone Number"
                  className="h-11 border border-slate-200 px-4 text-sm outline-none focus:border-[#f97316]"
                />

                <input
                  placeholder="Project Location"
                  className="h-11 border border-slate-200 px-4 text-sm outline-none focus:border-[#f97316]"
                />

                <select
                  defaultValue=""
                  className="h-11 border border-slate-200 px-4 text-sm outline-none focus:border-[#f97316]"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Machine Spray Painting</option>
                  <option>Waterproofing</option>
                  <option>Wall Murals</option>
                  <option>Roof Painting</option>
                  <option>Wall Skimming</option>
                </select>
              </div>

              <textarea
                placeholder="Project details e.g. wall size, number of rooms, current wall condition..."
                className="mt-4 min-h-[90px] w-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#f97316]"
              />

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center bg-[#f97316] px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white hover:bg-[#ea580c]"
              >
                Request Quote on WhatsApp
              </a>

              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Fast response via WhatsApp. Site assessment available before final quotation.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* COMPACT SCAY-STYLE CONTACT FOOTER */}
      <footer id="contact" className="bg-[#07162d] px-5 pt-9 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-b border-white/10 pb-9 lg:grid-cols-[1.05fr_1fr_0.85fr_0.85fr]">
          <div>
            <div className="inline-flex bg-white p-3">
              <Image
                src="/machine/logo.png"
                alt="The Machine Painting Co Ltd logo"
                width={118}
                height={78}
                className="h-[76px] w-[118px] object-contain"
              />
            </div>

            <h3 className="mt-5 max-w-xs text-sm font-extrabold leading-6 text-white">
              Professional Spray Painting & Finishing
            </h3>

            <p className="mt-3 max-w-xs text-[13px] leading-6 text-white/75">
              Helping homeowners, businesses, contractors, and property managers achieve
              clean, smooth, and durable wall finishes.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp The Machine Painting"
                className="grid h-8 w-8 place-items-center border border-white/15 text-xs text-white hover:border-[#f97316] hover:text-[#f97316]"
              >
                ↗
              </a>

              <a
                href="/portfolio"
                aria-label="View portfolio"
                className="grid h-8 w-8 place-items-center border border-white/15 text-xs text-white hover:border-[#f97316] hover:text-[#f97316]"
              >
                ▣
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f97316]">
              Contact
            </h4>

            <div className="space-y-3 text-[13px] leading-6 text-white/80">
              <p>Nairobi, Kenya</p>

              <p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-extrabold text-white hover:text-[#f97316]"
                >
                  WhatsApp: 0785 285 828
                </a>
                <br />
                <a href="tel:0785285828" className="hover:text-[#f97316]">
                  Call: 0785 285 828
                </a>
              </p>

              <a
                href="mailto:themachinepainting@gmail.com"
                className="block break-all hover:text-[#f97316]"
              >
                themachinepainting@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f97316]">
              Company
            </h4>

            <div className="space-y-2.5 text-[13px] text-white/80">
              <a className="block hover:text-[#f97316]" href="/">
                Home
              </a>
              <a className="block hover:text-[#f97316]" href="/about">
                About Us
              </a>
              <a className="block hover:text-[#f97316]" href="/services">
                Services
              </a>
              <a className="block hover:text-[#f97316]" href="/portfolio">
                Portfolio
              </a>
              <a className="block hover:text-[#f97316]" href="/#quote">
                Pricing
              </a>
              <a className="block hover:text-[#f97316]" href="/careers">
                We&apos;re Hiring
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f97316]">
              Legal
            </h4>

            <div className="space-y-2.5 text-[13px] text-white/80">
              <a className="block hover:text-[#f97316]" href="#">
                Privacy Policy
              </a>
              <a className="block hover:text-[#f97316]" href="#">
                Terms of Service
              </a>
              <a className="block hover:text-[#f97316]" href="#">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-4 text-[11px] text-white/60">
          © 2026 The Machine Painting Co Ltd. Professional Finishing Delivered.
        </div>
      </footer>
    </>
  );
}