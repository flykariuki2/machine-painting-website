import Image from "next/image";
import Link from "next/link";

import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import EstimatorSection from "@/components/home/EstimatorSection";
import HeroSlider from "@/components/home/HeroSlider";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";

const services = [
  {
    title: "Interior Painting",
    text: "Clean, smooth interior wall finishes for homes, offices, apartments, and commercial spaces.",
    svg: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    text: "Durable exterior painting that refreshes curb appeal while protecting walls from weather exposure.",
    svg: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7"
        />
      </svg>
    ),
  },
  {
    title: "Machine Spray Painting",
    text: "Precision spray painting for faster coverage, smoother application, and consistent large-surface results.",
    svg: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Wall Skimming / Surface Preparation",
    text: "Surface preparation, smoothing, and repair support before painting to achieve a clean final finish.",
    svg: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Painting",
    text: "Professional painting support for offices, apartments, buildings, warehouses, and business premises.",
    svg: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    title: "Renovation Painting",
    text: "Painting and finishing support for property refreshes, repainting projects, and renovation works.",
    svg: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
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
  {
    title: "Parking Lot Painting",
    category: "Parking & Markings",
    image: "/machine/parking-lot-painting.png",
  },
  {
    title: "Warehouse Exterior Painting",
    category: "Industrial Exterior",
    image: "/machine/warehouse-exterior-painting.png",
  },
  {
    title: "Warehouse Interior Finish",
    category: "Industrial Interior",
    image: "/machine/warehouse-interior-finish.png",
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
  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to request a painting quote.",
  );

  return (
    <main className="overflow-hidden bg-[#f7f9fc] pt-[85px] text-[#043079]">
      <Navbar />

      <HeroSlider />

      {/* TRUST STRIP */}
      <section
        aria-label="Service assurances"
        className="border-b border-[#043079]/10 bg-white"
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
          {[
            {
              value: "Free",
              label: "Site Estimate",
              text: "Clear assessment before final pricing.",
            },
            {
              value: "Fast",
              label: "Turnaround",
              text: "Efficient application for projects of different sizes.",
            },
            {
              value: "Smooth",
              label: "Surface Finish",
              text: "Consistent coverage with fewer visible marks.",
            },
            {
              value: "24HR",
              label: "Quote Response",
              text: "Prompt feedback after receiving project details.",
            },
          ].map((item, index) => (
            <article
              key={item.label}
              className={[
                "px-5 py-6 md:px-7 md:py-8",
                index % 2 === 0
                  ? "border-r border-[#043079]/10"
                  : "",
                index < 2
                  ? "border-b border-[#043079]/10 md:border-b-0"
                  : "",
                index < 3
                  ? "md:border-r md:border-[#043079]/10"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#f5b400]" />

                <strong className="text-[20px] font-extrabold text-[#043079]">
                  {item.value}
                </strong>
              </div>

              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#043079]/70">
                {item.label}
              </p>

              <p className="mt-2 hidden text-[13px] leading-5 text-slate-500 sm:block">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid gap-5 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Our Expertise
              </p>

              <h2 className="max-w-3xl text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Master-Class Painting &amp; Finishing Solutions
              </h2>
            </div>

            <div className="hidden h-1.5 w-16 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={[
                  "group relative overflow-hidden border bg-white p-6 transition duration-300 md:p-8",
                  index === 2
                    ? "border-[#0453b1] shadow-[0_20px_45px_rgba(4,83,177,0.12)]"
                    : "border-[#043079]/10 hover:-translate-y-1 hover:border-[#cc0f06]/45 hover:shadow-[0_18px_40px_rgba(4,48,121,0.10)]",
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute left-0 top-0 h-[3px] w-full transition",
                    index === 2
                      ? "bg-[#f5b400]"
                      : "bg-transparent group-hover:bg-[#cc0f06]",
                  ].join(" ")}
                />

                <div
                  className={[
                    "mb-5 flex h-11 w-11 items-center justify-center",
                    index === 2
                      ? "bg-[#f5b400] text-[#043079]"
                      : "bg-[#043079] text-white",
                  ].join(" ")}
                >
                  {service.svg}
                </div>

                <h3 className="text-[20px] font-extrabold tracking-[-0.025em] text-[#043079]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PAINT PACKAGES BAND */}
      <section className="bg-[#0453b1] px-5 py-14 text-center md:px-8 md:py-16">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f5b400] md:text-[11px]">
            Want to compare available options?
          </p>

          <h2 className="mx-auto mt-4 max-w-[760px] text-[27px] font-extrabold leading-[1.18] tracking-[-0.04em] text-white md:text-[33px]">
            Explore our paint packages and choose the best fit for your home,
            office, apartment, or commercial project.
          </h2>

          <Link
            href="/paint-packages"
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-8 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-[#ffc62f]"
          >
            View Paint Packages
          </Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
              Portfolio
            </p>

            <h2 className="text-[30px] font-extrabold tracking-[-0.04em] text-[#043079] md:text-[33px]">
              Recent Projects
            </h2>
          </div>

          <ProjectsCarousel projects={projects} />

          {/* CENTRED PROJECT CTA */}
          <div className="mt-12 border border-[#043079]/10 bg-[#f7f9fc] px-5 py-10 text-center md:px-10 md:py-12">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06] md:text-[11px]">
              Want to see more completed work?
            </p>

            <h3 className="mx-auto mt-3 max-w-[650px] text-[25px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#043079] md:text-[30px]">
              Explore the gallery or request a similar finish.
            </h3>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center bg-[#0453b1] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#043079]"
              >
                View Recent Projects
              </Link>

              <a
                href="#quote"
                className="inline-flex min-h-12 items-center justify-center border border-[#043079]/25 bg-white px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:border-[#f5b400] hover:bg-[#f5b400]"
              >
                Request Similar Finish
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT VIDEO */}
      <section className="bg-[#f7f9fc] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Work in Motion
              </p>

              <h2 className="max-w-[520px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                See the painting process beyond the finished photo.
              </h2>

              <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-slate-600">
                Watch our team working on a real painting project and see the
                preparation, application, and attention to finish behind the
                final result.
              </p>

              <Link
                href="/projects"
                className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#043079] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#0453b1]"
              >
                Explore More Projects
              </Link>
            </div>

            <div className="overflow-hidden border border-[#043079]/10 bg-[#043079] shadow-[0_22px_55px_rgba(4,48,121,0.12)]">
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black object-cover"
              >
                <source
                  src="/machine/project-video-interior-painting.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section
        id="before-after"
        className="border-t-[3px] border-[#cc0f06] bg-[#043079] px-5 py-16 text-white md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
          {/* Mobile section introduction */}
          <div className="mb-8 lg:hidden">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#f5b400]">
              Ultimate Transformation
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-[1.14] tracking-[-0.045em] text-white">
              The “Machine” Approach: Faster. Smoother. Cleaner.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden">
              <div className="grid h-[330px] grid-cols-2 overflow-hidden border border-white/15 md:h-[390px]">
                <div className="relative">
                  <Image
                    src="/machine/before.jpg"
                    alt="Painting project before"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />

                  <span className="absolute bottom-4 left-4 bg-[#cc0f06] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
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

                  <span className="absolute bottom-4 right-4 bg-[#f5b400] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079]">
                    After
                  </span>
                </div>
              </div>
            </div>

            <div>
              {/* Desktop section introduction */}
              <div className="hidden lg:block">
                <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#f5b400]">
                  Ultimate Transformation
                </p>

                <h2 className="max-w-2xl text-[33px] font-extrabold leading-[1.14] tracking-[-0.045em] text-white">
                  The “Machine” Approach: Faster. Smoother. Cleaner.
                </h2>
              </div>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/78">
                Traditional brushes leave streaks, uneven layers, and delays.
                Machine spray painting gives walls a cleaner, more consistent,
                modern finish in a fraction of the time.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/12 bg-[#0b4b9e] p-6">
                  <strong className="block text-[28px] font-extrabold text-[#f5b400]">
                    50%
                  </strong>

                  <span className="mt-1 block text-[13px] font-semibold text-white/76">
                    Faster application
                  </span>
                </div>

                <div className="border border-white/12 bg-[#0b4b9e] p-6">
                  <strong className="block text-[28px] font-extrabold text-[#f5b400]">
                    Zero
                  </strong>

                  <span className="mt-1 block text-[13px] font-semibold text-white/76">
                    Visible brush marks
                  </span>
                </div>

                <div className="border border-white/12 border-l-[4px] border-l-[#cc0f06] bg-[#0b4b9e] p-6 sm:col-span-2">
                  <strong className="block text-[23px] font-extrabold text-white">
                    Clean &amp; Precise Finish
                  </strong>

                  <span className="mt-1 block text-[13px] font-semibold text-white/76">
                    Uniform coverage across every square metre
                  </span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/gallery"
                  className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-[#ffc62f]"
                >
                  View Full Gallery
                </Link>

                <a
                  href="#quote"
                  className="inline-flex min-h-12 items-center justify-center border border-white/35 px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#043079]"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EstimatorSection />

      {/* PROCESS */}
      <section
        id="process"
        className="bg-white px-5 py-16 text-[#043079] md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
            Our Process
          </p>

          <h2 className="text-[30px] font-extrabold tracking-[-0.04em] text-[#043079] md:text-[33px]">
            How We Deliver a Clean Finish
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
            Our streamlined process ensures maximum quality with minimum
            disruption.
          </p>

          <div className="relative mt-12 grid gap-4 md:grid-cols-5">
            <div className="pointer-events-none absolute left-10 right-10 top-5 hidden border-t border-dashed border-[#043079]/20 md:block" />

            {process.map((step, index) => (
              <article
                key={step.title}
                className={[
                  "relative z-10 border bg-white p-5 text-left transition md:text-center",
                  index === 3
                    ? "border-[#f5b400] shadow-[0_15px_35px_rgba(245,180,0,0.13)]"
                    : "border-[#043079]/10 hover:border-[#cc0f06]/35",
                ].join(" ")}
              >
                <span
                  className={[
                    "mb-4 grid h-10 w-10 place-items-center text-[11px] font-extrabold md:mx-auto",
                    index === 3
                      ? "bg-[#f5b400] text-[#043079]"
                      : "bg-[#043079] text-white",
                  ].join(" ")}
                >
                  {step.icon}
                </span>

                <h3 className="text-[17px] font-extrabold text-[#043079]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#site-visit"
              className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-[#ffc62f]"
            >
              Book Site Visit
            </a>

            <Link
              href="/contact-us"
              className="inline-flex min-h-12 items-center justify-center border border-[#043079]/25 px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:border-[#0453b1] hover:bg-[#0453b1] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}