import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

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
  "Project consultation and scope review",
  "Site assessment or quotation guidance",
  "Surface preparation and protection",
  "Primer and paint application",
  "Final inspection and clean handover",
];

export default function PaintPackagesPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to ask about your paint packages."
  );

  return (
    <main className="overflow-hidden bg-[#f8f8f5] pt-[76px] text-[#043079]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#043079] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
            Paint Packages
          </p>

          <h1 className="max-w-4xl text-[38px] font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">
            Practical painting packages for homes, businesses, and projects.
          </h1>

          <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/80">
            Choose from practical painting options designed around speed, finish
            quality, surface preparation, and project requirements.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
            >
              Get a Quotation
            </a>

            <a
              href="#site-visit"
              className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#043079]"
            >
              Book Site Visit
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Available Packages
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              Pick the package that fits your project stage.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className="border border-[#043079]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06] hover:shadow-xl"
              >
                <p className="mb-5 inline-flex bg-[#f5b400]/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#043079]">
                  {item.label}
                </p>

                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#043079]">
                  {item.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 space-y-4">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f5b400]" />
                      <p className="text-sm leading-6 text-slate-600">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#quote"
                  className="mt-8 inline-flex w-full items-center justify-center bg-[#cc0f06] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
                >
                  Request Package Quote
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-[#f8f8f5] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
                What We Cover
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
                Painting services built around preparation, application, and
                finish quality.
              </h2>
            </div>

            <div className="hidden h-1 w-20 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceDetails.map((service) => (
              <article
                key={service.title}
                className="border border-[#043079]/10 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 h-1 w-12 bg-[#f5b400]" />

                <h3 className="text-xl font-black tracking-[-0.03em] text-[#043079]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#043079] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
              Package Process
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl">
              From estimate to clean handover.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
              Every package is guided by project scope, surface condition,
              access, preparation work, and the required finish.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border border-white/10 bg-white/[0.05] p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f5b400] text-[10px] font-black text-[#043079]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm font-semibold leading-7 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl bg-[#f8f8f5] px-6 py-14 text-center md:px-12">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#cc0f06]">
            Not sure which package fits?
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
            Share your project details and we’ll guide you to the right option.
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-[#cc0f06] px-8 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
            >
              Get a Quotation
            </a>

            <a
              href="#site-visit"
              className="inline-flex items-center justify-center border border-[#043079]/20 px-8 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition duration-300 hover:border-[#cc0f06] hover:text-[#cc0f06]"
            >
              Book Site Visit
            </a>
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}