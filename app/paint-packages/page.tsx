import Link from "next/link";

import Navbar from "@/components/Navbar";

const packages = [
  {
    name: "One Day Painting",
    label: "Fast turnaround",
    description:
      "A practical painting package for clients who need a clean refresh with minimal disruption and a faster project timeline.",
    points: [
      "Ideal for homes, rooms, offices, and quick refresh projects",
      "Focused surface preparation before painting",
      "Efficient application and clean handover",
      "Best for projects where speed and neatness matter",
    ],
  },
  {
    name: "Commercial Painting",
    label: "Business & property projects",
    description:
      "Professional painting support for offices, apartments, buildings, warehouses, factories, and business premises.",
    points: [
      "Suitable for commercial buildings and large surfaces",
      "Supports interior and exterior painting needs",
      "Machine spray painting available where suitable",
      "Designed for consistent finish quality and project efficiency",
    ],
  },
  {
    name: "Paint for Free",
    label: "Flexible project option",
    description:
      "A client-friendly package designed around practical project planning, budget flexibility, and clear painting support.",
    points: [
      "Structured for clients exploring flexible painting options",
      "Helps make repainting and renovation projects easier to start",
      "Can be discussed during quotation or site assessment",
      "Final arrangement depends on project scope and approval",
    ],
  },
];

const serviceDetails = [
  {
    title: "Interior Painting",
    text: "Smooth, clean wall finishes for homes, offices, apartments, and interior commercial spaces.",
  },
  {
    title: "Exterior Painting",
    text: "Durable exterior finishes designed to improve curb appeal and protect surfaces from exposure.",
  },
  {
    title: "Machine Spray Painting",
    text: "Efficient spray application for smoother coverage, cleaner consistency, and faster large-surface work.",
  },
  {
    title: "Wall Skimming & Surface Preparation",
    text: "Preparation work that supports a better final finish through smoothing, cleaning, repair, and priming.",
  },
  {
    title: "Commercial Painting",
    text: "Painting solutions for offices, apartments, buildings, warehouses, factories, and business premises.",
  },
  {
    title: "Renovation Painting",
    text: "Painting and finishing support for property refreshes, repainting work, and renovation projects.",
  },
];

const process = [
  {
    title: "Consultation",
    text: "We review your project type, location, measurements, timing, and expected finish.",
  },
  {
    title: "Assessment",
    text: "The surface condition and preparation requirements are confirmed before final pricing.",
  },
  {
    title: "Preparation",
    text: "Surfaces are cleaned, repaired, smoothed, protected, and primed where required.",
  },
  {
    title: "Application",
    text: "Paint is applied using the most suitable method for the surface and project scope.",
  },
  {
    title: "Handover",
    text: "The completed work is inspected and presented through a clean, professional handover.",
  },
];

export default function PaintPackagesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] pt-[85px] text-[#043079]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#043079] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-36 h-[430px] w-[430px] rounded-full border-[90px] border-white/[0.035]" />
          <div className="absolute bottom-[-170px] left-[-130px] h-[390px] w-[390px] rounded-full border-[80px] border-[#f5b400]/[0.055]" />
          <div className="absolute right-[11%] top-0 h-full w-px bg-white/[0.06]" />
          <div className="absolute right-[23%] top-0 h-full w-px bg-white/[0.04]" />
        </div>

        <div className="relative mx-auto grid min-h-[500px] max-w-[1180px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="max-w-[730px]">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-11 shrink-0 bg-[#cc0f06]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#f5b400] md:text-[11px] md:tracking-[0.25em]">
                Paint Packages
              </p>
            </div>

            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white sm:text-[44px] md:text-[47px]">
              Practical Painting Options,
              <span className="block text-[#f5b400]">
                Built Around Your Project.
              </span>
            </h1>

            <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-white/82">
              Choose a practical painting package based on project speed,
              surface condition, property type, finish expectations, and the
              level of preparation required.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us#quote"
                className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-8 text-[11px] font-extrabold text-[#043079] transition hover:bg-[#ffc62f]"
              >
                Get a Quotation
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/contact-us#site-visit"
                className="inline-flex min-h-12 items-center justify-center border border-white/55 px-8 text-[11px] font-extrabold text-white transition hover:bg-white hover:text-[#043079]"
              >
                Book Site Visit
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="border border-white/12 bg-white/[0.055] p-7 backdrop-blur-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5b400]">
                Package Selection Guide
              </p>

              <div className="mt-6 divide-y divide-white/12">
                {[
                  ["01", "Speed", "How quickly the project must be completed"],
                  ["02", "Surface", "Condition and preparation requirements"],
                  ["03", "Property", "Residential, commercial, or renovation"],
                  ["04", "Finish", "Expected appearance and durability"],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[38px_1fr] gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="grid h-8 w-8 place-items-center bg-[#f5b400] text-[9px] font-extrabold text-[#043079]">
                      {number}
                    </span>

                    <div>
                      <strong className="text-[15px] font-extrabold text-white">
                        {title}
                      </strong>

                      <p className="mt-1 text-[13px] leading-5 text-white/68">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid h-[4px] grid-cols-[1fr_0.5fr_0.12fr]">
          <span className="bg-[#043079]" />
          <span className="bg-[#f5b400]" />
          <span className="bg-[#cc0f06]" />
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[760px]">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Available Packages
              </p>

              <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Pick the option that best fits your current project.
              </h2>

              <p className="mt-4 max-w-[690px] text-[15px] leading-7 text-slate-600">
                Each package is adjusted according to the actual surface,
                property size, preparation work, access, paint system, and
                expected finish.
              </p>
            </div>

            <span className="hidden h-1.5 w-16 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item, index) => (
              <article
                key={item.name}
                className={[
                  "group relative flex h-full flex-col overflow-hidden border bg-white p-6 transition duration-300 md:p-8",
                  index === 1
                    ? "border-[#0453b1] shadow-[0_22px_52px_rgba(4,83,177,0.13)]"
                    : "border-[#043079]/10 hover:-translate-y-1 hover:border-[#0453b1]/45 hover:shadow-[0_20px_48px_rgba(4,48,121,0.10)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute inset-x-0 top-0 h-[3px]",
                    index === 1
                      ? "bg-[#f5b400]"
                      : "bg-transparent transition group-hover:bg-[#f5b400]",
                  ].join(" ")}
                />

                <div className="flex items-start justify-between gap-4">
                  <p className="inline-flex bg-[#f5b400]/15 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#043079]">
                    {item.label}
                  </p>

                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#0453b1]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.035em] text-[#043079]">
                  {item.name}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 flex-1 space-y-4">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-[7px] h-2 w-2 shrink-0 bg-[#f5b400]" />

                      <p className="text-[14px] leading-6 text-slate-600">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact-us#quote"
                  className={[
                    "mt-8 inline-flex min-h-12 w-full items-center justify-center px-5 text-center text-[10px] font-extrabold uppercase tracking-[0.13em] transition",
                    index === 1
                      ? "bg-[#f5b400] text-[#043079] hover:bg-[#ffc62f]"
                      : "bg-[#043079] text-white hover:bg-[#0453b1]",
                  ].join(" ")}
                >
                  Request Package Quote
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-[760px] text-center text-[12px] leading-5 text-slate-500">
            Package names provide general guidance. Final scope, timing, and
            pricing are confirmed after reviewing the actual project
            requirements.
          </p>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-[#f7f9fc] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[780px]">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                What We Cover
              </p>

              <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Painting services built around preparation, application, and
                finish quality.
              </h2>
            </div>

            <span className="hidden h-1.5 w-16 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden border border-[#043079]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0453b1]/45 hover:shadow-[0_18px_42px_rgba(4,48,121,0.08)] md:p-7"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] bg-transparent transition group-hover:bg-[#f5b400]" />

                <div className="flex items-center justify-between">
                  <span className="h-1 w-12 bg-[#f5b400]" />

                  <span className="text-[9px] font-extrabold tracking-[0.14em] text-[#0453b1]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#043079]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t-[3px] border-[#cc0f06] bg-[#043079] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#f5b400]">
              Package Process
            </p>

            <h2 className="max-w-[520px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-white md:text-[33px]">
              From initial estimate to a clean project handover.
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-white/74">
              Every package is guided by project scope, surface condition,
              access, preparation work, paint requirements, and the expected
              finish.
            </p>

            <Link
              href="/contact-us#site-visit"
              className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-[#ffc62f]"
            >
              Arrange a Site Visit
            </Link>
          </div>

          <div className="grid gap-4">
            {process.map((item, index) => (
              <article
                key={item.title}
                className={[
                  "grid grid-cols-[44px_1fr] gap-4 border p-5 transition sm:grid-cols-[52px_1fr] sm:p-6",
                  index === 2
                    ? "border-[#f5b400]/55 bg-[#0b4b9e]"
                    : "border-white/12 bg-white/[0.055] hover:bg-white/[0.08]",
                ].join(" ")}
              >
                <span
                  className={[
                    "grid h-11 w-11 place-items-center text-[10px] font-extrabold sm:h-12 sm:w-12",
                    index === 2
                      ? "bg-[#f5b400] text-[#043079]"
                      : "bg-white/10 text-[#f5b400]",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[17px] font-extrabold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-white/72">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px] overflow-hidden border border-[#043079]/10 bg-[#f7f9fc]">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-stretch">
            <div className="px-6 py-10 text-center md:px-10 md:py-12 lg:text-left">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Not Sure Which Package Fits?
              </p>

              <h2 className="max-w-[760px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Share your project details and we’ll guide you to the most
                practical option.
              </h2>

              <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-slate-600">
                Tell us about the property, location, approximate size, current
                surface condition, and preferred completion period.
              </p>
            </div>

            <div className="grid min-w-[285px] gap-3 bg-[#0453b1] px-6 py-8 md:px-8 lg:content-center">
              <Link
                href="/contact-us#quote"
                className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-white"
              >
                Get a Quotation
              </Link>

              <Link
                href="/contact-us#site-visit"
                className="inline-flex min-h-12 items-center justify-center border border-white/45 px-7 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#043079]"
              >
                Book Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}