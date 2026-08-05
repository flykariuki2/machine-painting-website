import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact The Machine Painting Co Ltd for painting quotations, site visits, spray painting, wall finishing, commercial painting, and renovation painting services.",
  alternates: {
    canonical: "/contact-us",
  },
};

const whatsappMessage = encodeURIComponent(
  "Hello The Machine Painting Co Ltd, I would like to make an enquiry.",
);

export default function ContactUsPage() {
  return (
    <main className="bg-white pt-[76px] text-[#043079]">
      <Navbar />

      <section className="bg-[#f8fafc] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
                Contact Us
              </p>

              <h1 className="max-w-xl text-[33px] font-extrabold leading-tight tracking-[-0.04em] text-[#043079]">
                Let&apos;s Discuss Your Painting Project
              </h1>

              <p className="mt-5 max-w-xl text-[15px] font-normal leading-7 text-slate-600">
                Contact our team for a quotation, site assessment, project
                consultation, or more information about our professional
                painting and finishing services.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="border border-[#043079]/10 bg-white p-7">
                <h2 className="text-[20px] font-extrabold text-[#043079]">
                  Head Office
                </h2>

                <p className="mt-4 text-[15px] font-normal leading-7 text-slate-600">
                  Kasuku Villas
                  <br />
                  Umoja Road off Magadi Road
                  <br />
                  Nairobi, Kenya
                </p>
              </article>

              <article className="border border-[#043079]/10 bg-white p-7">
                <h2 className="text-[20px] font-extrabold text-[#043079]">
                  Phone &amp; WhatsApp
                </h2>

                <div className="mt-4 space-y-1 text-[15px] font-normal leading-7 text-slate-600">
                  <a
                    href={`https://wa.me/254785285828?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-colors hover:text-[#cc0f06]"
                  >
                    WhatsApp: 0785 285 828
                  </a>

                  <a
                    href="tel:+254785285828"
                    className="block transition-colors hover:text-[#cc0f06]"
                  >
                    Call: 0785 285 828
                  </a>

                  <a
                    href="tel:+254719383020"
                    className="block transition-colors hover:text-[#cc0f06]"
                  >
                    Tel: +254 719 383 020
                  </a>

                  <a
                    href="tel:+254720945088"
                    className="block transition-colors hover:text-[#cc0f06]"
                  >
                    Tel: +254 720 945 088
                  </a>
                </div>
              </article>

              <article className="border border-[#043079]/10 bg-white p-7">
                <h2 className="text-[20px] font-extrabold text-[#043079]">
                  Email
                </h2>

                <div className="mt-4 space-y-1 text-[15px] font-normal leading-7 text-slate-600">
                  <a
                    href="mailto:info@themachinepainting.com"
                    className="block break-all transition-colors hover:text-[#cc0f06]"
                  >
                    info@themachinepainting.com
                  </a>

                  <a
                    href="mailto:themachinepainting@gmail.com"
                    className="block break-all transition-colors hover:text-[#cc0f06]"
                  >
                    themachinepainting@gmail.com
                  </a>
                </div>
              </article>

              <article className="border border-[#043079]/10 bg-white p-7">
                <h2 className="text-[20px] font-extrabold text-[#043079]">
                  Working Hours
                </h2>

                <div className="mt-4 text-[15px] font-normal leading-7 text-slate-600">
                  <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 8:00 AM – 4:00 PM</p>
                  <p>Sunday: By appointment</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}