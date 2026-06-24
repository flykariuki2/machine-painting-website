"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const services = [
  {
    title: "Interior Painting",
    text: "Clean, smooth interior wall finishes for homes, offices, apartments, and commercial spaces.",
    icon: "⌂",
  },
  {
    title: "Exterior Painting",
    text: "Durable exterior painting that refreshes curb appeal while protecting walls from weather exposure.",
    icon: "▣",
  },
  {
    title: "Machine Spray Painting",
    text: "Precision spray painting for faster coverage, smoother application, and consistent large-surface results.",
    icon: "✦",
  },
  {
    title: "Wall Skimming / Surface Preparation",
    text: "Surface preparation, smoothing, and repair support before painting to achieve a clean final finish.",
    icon: "▦",
  },
  {
    title: "Commercial Painting",
    text: "Professional painting support for offices, apartments, buildings, warehouses, and business premises.",
    icon: "◈",
  },
  {
    title: "Renovation Painting",
    text: "Painting and finishing support for property refreshes, repainting projects, and renovation works.",
    icon: "◇",
  },
];

const projects = [
  {
    title: "Modern Exterior Refresh",
    category: "Exterior project",
    image: "/machine/project-01.jpg",
  },
  {
    title: "Premium Interior Finish",
    category: "Interior project",
    image: "/machine/project-02.jpg",
  },
  {
    title: "Commercial Wall Finish",
    category: "Commercial project",
    image: "/machine/project-003.jpg",
  },
];

const process = [
  {
    title: "Consult",
    text: "Share photos, measurements, and location.",
    icon: "01",
  },
  {
    title: "Quote",
    text: "Receive a practical estimate and timeline.",
    icon: "02",
  },
  {
    title: "Prepare",
    text: "We prepare, clean, skim, or repair surfaces.",
    icon: "03",
  },
  {
    title: "Paint",
    text: "Machine spray painting is professionally applied.",
    icon: "04",
  },
  {
    title: "Handover",
    text: "Final inspection and clean handover.",
    icon: "05",
  },
];

export default function Home() {
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("3");
  const [surface, setSurface] = useState("interior");
  const [finish, setFinish] = useState("standard");

  const estimate = useMemo(() => {
    const w = Number(width) || 0;
    const h = Number(height) || 0;

    const baseRates: Record<string, number> = {
      standard: 300,
      premium: 450,
      decorative: 700,
      roof: 350,
    };

    const surfaceMultiplier: Record<string, number> = {
      interior: 1,
      exterior: 1.15,
      roof: 1.2,
      mural: 1.8,
    };

    const rate = baseRates[finish] || 300;
    const multiplier = surfaceMultiplier[surface] || 1;

    return Math.round(w * h * rate * multiplier);
  }, [width, height, surface, finish]);

  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to request a painting quote."
  );

  return (
    <main className="overflow-hidden bg-[#f8f8f5] pt-[76px] text-[#043079]">
      <Navbar />

      {/* HERO */}
<section id="home" className="pt-0">
  <div className="grid min-h-0 bg-[#043079] lg:h-[460px] lg:grid-cols-2">
    {/* DESKTOP CONTENT BLOCK / MOBILE BOTTOM WRAPPER */}
    <div className="flex items-center px-5 py-8 text-white sm:px-8 md:px-12 lg:px-14 xl:px-16">
      <div className="max-w-lg w-full">
        {/* MOBILE ONLY TAGLINE + HEADING: Moved above the image to clear chat widgets (image_cf5977.png layout) */}
        <div className="lg:hidden">
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f5b400]">
            Professional Spray Painting in Kenya
          </p>

          <h1 className="max-w-xl text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">
            Beautiful Structures,
            <span className="block text-[#f5b400]">
              Sprayed Perfectly
            </span>
          </h1>
        </div>

        {/* MOBILE ONLY IMAGE CONTAINER: Inserted right after heading on mobile layouts */}
        <div className="relative mt-5 h-[260px] w-full overflow-hidden bg-[#043079] sm:h-[320px] lg:hidden">
          <Image
            src="/machine/hero1.jpg"
            alt="The Machine Painting Co Ltd team"
            fill
            priority
            sizes="(max-width: 1024px) 100vw"
            className="object-contain object-center scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[#043079]/5" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-[#043079]/0 via-[#043079]/85 to-[#043079]" />
        </div>

        {/* DESKTOP ONLY HEADING BLOCK: Kept perfectly intact for clean grid presentation (image_cf5d39.jpg layout) */}
        <div className="hidden lg:block">
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f5b400]">
            Professional Spray Painting in Kenya
          </p>

          <h1 className="max-w-xl text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-[44px]">
            Beautiful Structures,
            <span className="block text-[#f5b400]">
              Sprayed Perfectly
            </span>
          </h1>
        </div>

        {/* BODY DESCRIPTION AND CTAs: Clear of the widgets on mobile */}
        <p className="mt-5 max-w-md text-sm font-medium leading-6 text-white/80">
          We don&apos;t just paint walls — we bring them to life through
          professional spray painting and finishing for homes, businesses,
          apartments, and construction projects.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-[#cc0f06] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-black/10 transition duration-300 hover:bg-[#a90d06]"
          >
            Get Free Quote
          </a>

          <a
            href="/gallery"
            className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#043079]"
          >
            View Before & After
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {["Interior", "Exterior", "Spray Painting", "Commercial"].map(
            (item) => (
              <span
                key={item}
                className="border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[10px] font-bold text-white/90"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>

    {/* DESKTOP ONLY IMAGE CONTAINER */}
    <div className="relative hidden h-full overflow-hidden bg-[#043079] lg:block">
      <Image
        src="/machine/hero1.jpg"
        alt="The Machine Painting Co Ltd team"
        fill
        priority
        sizes="50vw"
        className="object-contain object-center scale-[1.025]"
      />
      <div className="absolute inset-0 bg-[#043079]/5" />
      <div className="absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-[#043079]/70 to-transparent lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-[#043079]/0 via-[#043079]/85 to-[#043079]" />
    </div>
  </div>

  <a
    href={`https://wa.me/254785285828?text=${whatsappMessage}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-lg font-black text-white shadow-2xl shadow-green-500/30"
  >
    ☎
  </a>
</section>

{/* STATS */}
<section className="relative z-20 bg-[#043079] px-5 py-5 text-white md:px-8">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 text-center md:grid-cols-4">
    {[
      ["Free", "Site estimate"],
      ["Fast", "Turnaround"],
      ["Smooth", "Surface finish"],
      ["24HR", "Quote response"],
    ].map(([value, label]) => (
      <div key={label}>
        <strong className="block text-base font-black text-[#f5b400]">
          {value}
        </strong>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
          {label}
        </span>
      </div>
    ))}
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
                Our Expertise
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
                Master-Class Painting & Finishing Solutions
              </h2>
            </div>

            <div className="hidden h-1 w-20 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-[#043079]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06] hover:shadow-xl"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#f5b400]/10 text-sm font-black text-[#043079]">
                  {service.icon}
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-[#043079]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border border-[#043079]/10 bg-[#f8f8f5] p-7 text-center md:p-9">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#cc0f06]">
              Want to compare available options?
            </p>

            <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-black tracking-[-0.04em] text-[#043079] md:text-3xl">
              Explore our paint packages and choose the best fit for your home,
              office, apartment, or commercial project.
            </h3>

            <div className="mt-6 flex justify-center">
              <a
                href="/paint-packages"
                className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
              >
                View Paint Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#f8f8f5] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Portfolio
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[#043079] md:text-5xl">
              Recent Projects
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden border border-[#043079]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06] hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#cc0f06]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#043079]">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#043079]/10 pt-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06]">
                Want to see more completed work?
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#043079]">
                Explore the gallery or request a similar finish.
              </h3>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center border border-[#043079]/20 px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition duration-300 hover:border-[#cc0f06] hover:text-[#cc0f06]"
              >
                View Recent Projects
              </a>

              <a
                href="/#quote"
                className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
              >
                Request Similar Finish
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section
        id="before-after"
        className="bg-[#043079] px-5 py-20 text-white md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden">
            <div className="grid h-[360px] grid-cols-2 overflow-hidden rounded-2xl">
              <div className="relative">
                <Image
                  src="/machine/before.jpg"
                  alt="Painting project before"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />

                <span className="absolute bottom-4 left-4 bg-[#043079] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                  Before
                </span>
              </div>

              <div className="relative">
                <Image
                  src="/machine/after.jpg"
                  alt="Painting project after"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />

                <span className="absolute bottom-4 right-4 bg-[#cc0f06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                  After
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
              Ultimate Transformation
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl">
              The “Machine” Approach: Faster. Smoother. Cleaner.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80">
              Traditional brushes leave streaks, uneven layers, and delays.
              Machine spray painting gives walls a cleaner, more consistent,
              modern finish in a fraction of the time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-white/[0.05] p-6">
                <strong className="block text-2xl font-black text-[#f5b400]">
                  50%
                </strong>
                <span className="mt-2 block text-sm text-white/70">
                  Faster application
                </span>
              </div>

              <div className="bg-white/[0.05] p-6">
                <strong className="block text-2xl font-black text-[#f5b400]">
                  No
                </strong>
                <span className="mt-2 block text-sm text-white/70">
                  Visible brush marks
                </span>
              </div>

              <div className="border-l-4 border-[#cc0f06] bg-white/[0.05] p-6 sm:col-span-2">
                <strong className="block text-2xl font-black text-[#f5b400]">
                  Clean
                </strong>
                <span className="mt-2 block text-sm text-white/70">
                  Professional finish
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/gallery"
                className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
              >
                View Full Gallery
              </a>

              <a
                href="/#quote"
                className="inline-flex items-center justify-center border border-white/20 px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#043079]"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl border border-[#043079]/10 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-12">
          <div className="text-center">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Instant Quote Guide
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[#043079] md:text-5xl">
              Instant Cost Estimator
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Get a professional estimate for your project in seconds.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-[#043079]">
              Wall Width (m)
              <input
                value={width}
                onChange={(event) => setWidth(event.target.value)}
                inputMode="decimal"
                className="mt-2 w-full border border-[#043079]/15 px-4 py-3 outline-none focus:border-[#cc0f06]"
              />
            </label>

            <label className="text-sm font-bold text-[#043079]">
              Surface Type
              <select
                value={surface}
                onChange={(event) => setSurface(event.target.value)}
                className="mt-2 w-full border border-[#043079]/15 px-4 py-3 outline-none focus:border-[#cc0f06]"
              >
                <option value="interior">Interior Wall</option>
                <option value="exterior">Exterior Wall</option>
                <option value="roof">Roof</option>
                <option value="mural">Wall Mural</option>
              </select>
            </label>

            <label className="text-sm font-bold text-[#043079]">
              Wall Height (m)
              <input
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                inputMode="decimal"
                className="mt-2 w-full border border-[#043079]/15 px-4 py-3 outline-none focus:border-[#cc0f06]"
              />
            </label>

            <label className="text-sm font-bold text-[#043079]">
              Finish Type
              <select
                value={finish}
                onChange={(event) => setFinish(event.target.value)}
                className="mt-2 w-full border border-[#043079]/15 px-4 py-3 outline-none focus:border-[#cc0f06]"
              >
                <option value="standard">Standard Smooth Wall</option>
                <option value="premium">Premium Finish</option>
                <option value="decorative">Decorative Finish</option>
                <option value="roof">Roof Painting</option>
              </select>
            </label>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              className="inline-flex rounded-full bg-[#cc0f06] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
            >
              Calculate Estimate
            </button>
          </div>

          <div className="mt-8 border border-slate-100 border-t-4 border-t-[#f5b400] bg-white p-7 text-center shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Estimated cost
            </span>

            <strong className="mt-2 block text-4xl font-black tracking-[-0.05em] text-[#cc0f06]">
              KSh {estimate.toLocaleString()}
            </strong>

            <small className="mt-3 block text-xs leading-6 text-slate-500">
              Final quote depends on surface condition, preparation work, access,
              and site assessment.
            </small>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#quote"
                className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
              >
                Request Quotation
              </a>

              <a
                href="/#site-visit"
                className="inline-flex items-center justify-center border border-slate-200 bg-white px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition duration-300 hover:border-[#cc0f06] hover:text-[#cc0f06]"
              >
                Book Site Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="bg-[#f8f8f5] px-5 py-20 text-[#043079] md:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
            Our Process
          </p>

          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#043079] md:text-5xl">
            How We Deliver a Clean Finish
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            Our streamlined process ensures maximum quality with minimum disruption.
          </p>

          <div className="mt-14 grid gap-6 border-[#043079]/10 md:grid-cols-5 md:border-t">
            {process.map((step) => (
              <article
                key={step.title}
                className="border border-[#043079]/10 bg-white p-6 md:border-0 md:bg-transparent"
              >
                <span className="mx-auto -mt-0 mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#f5b400] text-[10px] font-black text-[#043079] md:-mt-[44px]">
                  {step.icon}
                </span>

                <h3 className="text-base font-black text-[#043079]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/#site-visit"
              className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
            >
              Book Site Visit
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-[#043079]/20 px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition duration-300 hover:border-[#cc0f06] hover:text-[#cc0f06]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <FAQSection />
      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}