"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const services = [
  {
    title: "Interior Masterwork",
    text: "Transform living spaces with sharp, smooth, and professionally finished wall surfaces.",
    icon: "⌂",
  },
  {
    title: "Exterior Painting",
    text: "High-quality exterior painting designed to withstand weather while maintaining vibrant curb appeal.",
    icon: "▣",
  },
  {
    title: "Machine Spray Painting",
    text: "Precision spray painting for faster coverage, smoother finishes, and consistent large-surface results.",
    icon: "✦",
  },
  {
    title: "Wall Murals",
    text: "Custom artistic wall finishes and large-scale murals that turn plain walls into memorable spaces.",
    icon: "◈",
  },
  {
    title: "Waterproofing",
    text: "Protective coating solutions for walls and surfaces exposed to moisture and weather.",
    icon: "◇",
  },
  {
    title: "Roof Painting",
    text: "Roof coating and repainting to refresh appearance and support long-term protection.",
    icon: "⌃",
  },
  {
    title: "Wall Skimming",
    text: "Surface preparation for smooth, clean, and professional paint finishes.",
    icon: "▦",
  },
  {
    title: "Building Plaster",
    text: "Plastering and minor repair support before painting and finishing.",
    icon: "▣",
  },
  {
    title: "Exterior Cleaning",
    text: "High-pressure wall cleaning and surface preparation before repainting.",
    icon: "♧",
  },
];

const projects = [
  {
    title: "Modern Exterior Refresh",
    category: "Exterior project",
    image: "/machine/project-1.jpg",
  },
  {
    title: "Premium Interior Finish",
    category: "Interior project",
    image: "/machine/project-2.jpg",
  },
  {
    title: "Commercial Wall Finish",
    category: "Commercial project",
    image: "/machine/project-3.jpg",
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
    <main className="overflow-hidden bg-[#f7f4f2] pt-[76px] text-[#07162d]">
      <Navbar />

      {/* HERO */}
<section id="home" className="pt-0">
  <div className="grid min-h-0 bg-[#07162d] lg:h-[460px] lg:grid-cols-2">
    {/* Left Content */}
    <div className="order-2 flex items-center px-5 py-10 text-white sm:px-8 md:px-12 lg:order-1 lg:px-14 xl:px-16">
      <div className="max-w-lg">
        <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#67edd8]">
          Professional Spray Painting in Kenya
        </p>

        <h1 className="max-w-xl text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl lg:text-[44px]">
          We Don&apos;t Just Paint Walls
          <span className="block text-[#67edd8]">We Bring Them To Life</span>
        </h1>

        <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/78">
          Professional spray painting and finishing for homes, businesses,
          apartments, and construction projects.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-[#f97316] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-black/10 hover:bg-[#ea580c]"
          >
            Get Free Quote
          </a>

          <a
            href="#before-after"
            className="inline-flex items-center justify-center border border-white/60 px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white hover:border-[#f97316] hover:bg-[#f97316]"
          >
            View Before & After
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {["Interior", "Exterior", "Spray Painting", "Waterproofing"].map(
            (item) => (
              <span
                key={item}
                className="border border-white/15 bg-white/[0.045] px-3.5 py-2 text-[10px] font-bold text-white/88"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative order-1 h-[280px] min-h-full overflow-hidden bg-[#07162d] sm:h-[330px] lg:order-2 lg:h-full">
      <Image
        src="/machine/hero.jpg"
        alt="The Machine Painting Co Ltd team"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain object-center scale-[1.025]"
      />

      {/* Very light tint only */}
      <div className="absolute inset-0 bg-[#07162d]/5" />

      {/* Minimal left blend */}
      <div className="absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-[#07162d]/70 to-transparent lg:block" />

      {/* Bottom cut/fill so the empty photo area becomes hero navy */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-[#07162d]/0 via-[#07162d]/85 to-[#07162d]" />
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
<section className="relative z-20 bg-[#07162d] px-5 py-5 text-white md:px-8">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 text-center md:grid-cols-4">
    {[
      ["Free", "Site estimate"],
      ["Fast", "Turnaround"],
      ["Clean", "Surface finish"],
      ["24HR", "Quote response"],
    ].map(([value, label]) => (
      <div key={label}>
        <strong className="block text-base font-black text-[#67edd8]">
          {value}
        </strong>

        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-white/65">
          {label}
        </span>
      </div>
    ))}
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f7f4f2] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#008c8c]">
                Our Expertise
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#07162d] md:text-5xl">
                Master-Class Painting & Finishing Solutions
              </h2>
            </div>

            <div className="hidden h-1 w-20 bg-[#f97316] md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#e6fbf8] text-sm font-black text-[#008c8c]">
                  {service.icon}
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-[#07162d]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#008c8c]">
              Portfolio
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[#07162d] md:text-5xl">
              Recent Projects
            </h2>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {["All Work", "Interior", "Exterior", "Commercial", "Residential"].map(
                (tab, index) => (
                  <span
                    key={tab}
                    className={`rounded-full border px-5 py-2 text-xs font-semibold ${
                      index === 0
                        ? "border-[#07162d] bg-[#07162d] text-white"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    {tab}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f97316]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-[#07162d]">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="before-after" className="bg-[#07162d] px-5 py-20 text-white md:px-8">
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
                <span className="absolute bottom-4 left-4 bg-black px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
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
                <span className="absolute bottom-4 right-4 bg-[#f97316] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                  After
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#83c400]">
              Ultimate Transformation
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl">
              The “Machine” Approach: Faster. Smoother. Cleaner.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">
              Traditional brushes leave streaks, uneven layers, and delays. Machine
              spray painting gives walls a cleaner, more consistent, modern finish in
              a fraction of the time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-white/[0.08] p-6">
                <strong className="block text-2xl font-black text-[#67edd8]">50%</strong>
                <span className="mt-2 block text-sm text-white/75">Faster application</span>
              </div>

              <div className="bg-white/[0.08] p-6">
                <strong className="block text-2xl font-black text-[#67edd8]">No</strong>
                <span className="mt-2 block text-sm text-white/75">Visible brush marks</span>
              </div>

              <div className="border-l-4 border-[#f97316] bg-white/[0.08] p-6 sm:col-span-2">
                <strong className="block text-2xl font-black text-[#67edd8]">Clean</strong>
                <span className="mt-2 block text-sm text-white/75">Professional finish</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="bg-[#f7f4f2] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-12">
          <div className="text-center">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#008c8c]">
              Instant Quote Guide
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[#07162d] md:text-5xl">
              Instant Cost Estimator
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Get a professional estimate for your project in seconds.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-[#07162d]">
              Wall Width (m)
              <input
                value={width}
                onChange={(event) => setWidth(event.target.value)}
                inputMode="decimal"
                className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-[#f97316]"
              />
            </label>

            <label className="text-sm font-bold text-[#07162d]">
              Surface Type
              <select
                value={surface}
                onChange={(event) => setSurface(event.target.value)}
                className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-[#f97316]"
              >
                <option value="interior">Interior Wall</option>
                <option value="exterior">Exterior Wall</option>
                <option value="roof">Roof</option>
                <option value="mural">Wall Mural</option>
              </select>
            </label>

            <label className="text-sm font-bold text-[#07162d]">
              Wall Height (m)
              <input
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                inputMode="decimal"
                className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-[#f97316]"
              />
            </label>

            <label className="text-sm font-bold text-[#07162d]">
              Finish Type
              <select
                value={finish}
                onChange={(event) => setFinish(event.target.value)}
                className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-[#f97316]"
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
              className="inline-flex rounded-full bg-[#07162d] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white"
            >
              Calculate Estimate
            </button>
          </div>

          <div className="mt-8 bg-[#f1eceb] p-7 text-center">
            <span className="text-sm text-slate-600">Estimated cost</span>
            <strong className="mt-2 block text-4xl font-black tracking-[-0.05em] text-[#f97316]">
              KSh {estimate.toLocaleString()}
            </strong>
            <small className="mt-3 block text-xs leading-6 text-slate-600">
              Final quote depends on surface condition, preparation work, access, and
              site assessment.
            </small>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#07162d] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#83c400]">
            Our Process
          </p>

          <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            How We Deliver a Clean Finish
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75">
            Our streamlined process ensures maximum quality with minimum disruption.
          </p>

          <div className="mt-14 grid gap-6 border-white/10 md:grid-cols-5 md:border-t">
            {process.map((step) => (
              <article key={step.title} className="bg-white/[0.06] p-6 md:bg-transparent">
                <span className="mx-auto -mt-0 mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#f97316] text-[10px] font-black text-white md:-mt-[44px]">
                  {step.icon}
                </span>
                <h3 className="text-base font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/72">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />

    </main>
  );
}