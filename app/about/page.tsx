import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";

const strengths = [
  {
    number: "01",
    title: "Professional Spray Painting",
    text: "The company focuses on clean, smooth, and consistent spray painting finishes for residential, commercial, and renovation projects.",
  },
  {
    number: "02",
    title: "Surface Preparation",
    text: "Good finishing starts before paint is applied. The team supports preparation work such as cleaning, smoothing, skimming, and repair support.",
  },
  {
    number: "03",
    title: "Practical Project Guidance",
    text: "Clients receive guidance on the right approach based on project location, surface condition, finish expectations, and site requirements.",
  },
  {
    number: "04",
    title: "Clean Handover",
    text: "Each project is approached with the goal of delivering a neat finish, final inspection, and a clean handover experience.",
  },
];

const process = [
  {
    label: "01",
    title: "Assessment",
    text: "Understanding the project location, surface condition, measurements, and expected finish.",
  },
  {
    label: "02",
    title: "Preparation",
    text: "Preparing the surface through cleaning, smoothing, skimming, repairs, and protection where required.",
  },
  {
    label: "03",
    title: "Application",
    text: "Applying paint using professional methods, including machine spray painting where suitable.",
  },
  {
    label: "04",
    title: "Inspection",
    text: "Reviewing the finished work and ensuring the client receives a clean, presentable handover.",
  },
];

const reasons = [
  "Modern painting methods for clean and consistent application.",
  "Practical guidance before the project begins.",
  "Attention to surface preparation and final presentation.",
  "Support for homes, offices, apartments, commercial spaces, and renovation projects.",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] pt-[85px] text-[#043079]">
      <Navbar />

      {/* HERO — SAME BEHAVIOUR AS HOMEPAGE, WITHOUT SLIDER */}
<section
  aria-label="About The Machine Painting Co Ltd"
  className="relative h-[calc(100svh-79px)] min-h-[560px] w-full overflow-hidden bg-[#043079]"
>
  {/* MOBILE PORTRAIT IMAGE */}
  <div className="absolute inset-0 bg-[#dbe5f1] md:hidden">
    <Image
      src="/machine/hero-team-mobile.png"
      alt="The Machine Painting Co Ltd professional painting and finishing team"
      fill
      priority
      sizes="100vw"
      className="object-contain object-center"
    />
  </div>

  {/* DESKTOP LANDSCAPE IMAGE */}
  <div className="absolute inset-0 hidden bg-[#043079] md:block">
    <Image
      src="/machine/hero-team-desktop.png"
      alt="The Machine Painting Co Ltd professional painting and finishing team"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  {/* EXACT HOMEPAGE BLUE TREATMENT */}
  <div className="pointer-events-none absolute inset-0 bg-[#043079]/38" />

  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,48,121,0.88)_0%,rgba(4,48,121,0.70)_28%,rgba(4,48,121,0.32)_58%,rgba(4,48,121,0.12)_100%)]" />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02275f]/38 via-transparent to-transparent" />

  {/* MOBILE TEXT BLOCK — EXACT HOMEPAGE POSITIONING */}
  <div className="relative z-20 h-full md:hidden">
    <div className="w-[78%] max-w-[330px] px-5 pt-[clamp(36px,5.5vh,54px)]">
      <div className="flex items-center gap-3">
        <span className="h-[3px] w-9 shrink-0 bg-[#cc0f06]" />

        <p className="text-[8px] font-extrabold uppercase leading-4 tracking-[0.15em] text-[#f5b400] min-[390px]:text-[9px]">
          About The Machine Painting Co Ltd
        </p>
      </div>

      <h1 className="mt-3 font-extrabold leading-[1.01] tracking-[-0.035em] text-white">
        <span className="block text-[27px] min-[390px]:text-[29px]">
          Meet the Team Behind
        </span>

        <span className="block whitespace-nowrap text-[25px] text-[#f5b400] min-[390px]:text-[27px]">
          Professional Finishes.
        </span>
      </h1>

      <p className="mt-3 max-w-[300px] text-[12px] leading-[19px] text-white/92 min-[390px]:text-[12.5px]">
        A skilled team focused on careful preparation, clean execution, and a
        professional finish.
      </p>
    </div>
  </div>

  {/* DESKTOP CONTENT BLOCK — EXACT HOMEPAGE LAYOUT */}
  <div className="relative z-20 mx-auto hidden h-full w-full max-w-[1220px] items-center px-14 xl:px-0 md:flex">
    <div className="w-full max-w-[580px]">
      <div className="flex items-center gap-3">
        <span className="h-[3px] w-11 shrink-0 bg-[#cc0f06]" />

        <p className="text-[11px] font-extrabold uppercase leading-4 tracking-[0.16em] text-[#f5b400]">
          About The Machine Painting Co Ltd
        </p>
      </div>

      <h1 className="mt-5 font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
        <span className="block text-[47px]">
          Meet the Team Behind
        </span>

        <span className="block text-[47px] text-[#f5b400]">
          Professional Finishes.
        </span>
      </h1>

      <p className="mt-5 max-w-[530px] text-[15px] leading-[25px] text-white/92">
        We combine careful surface preparation, machine-assisted application,
        clean execution, and professional project handover to deliver smooth,
        consistent finishes.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/contact-us#quote"
          className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[15px] font-bold text-[#043079] transition hover:bg-[#ffc62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Request a Quotation

          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>

        <Link
          href="/paint-packages"
          className="inline-flex min-h-12 items-center justify-center border border-white/80 bg-transparent px-7 text-[15px] font-bold text-white transition hover:bg-white hover:text-[#043079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Explore Our Services
        </Link>
      </div>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
        {[
          "Preparation",
          "Precision",
          "Clean Execution",
          "Professional Handover",
        ].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/88"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 bg-[#f5b400]"
            />

            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* MOBILE CTA ROW — EXACT HOMEPAGE POSITION */}
  <div className="absolute bottom-[82px] left-5 right-5 z-30 grid grid-cols-2 gap-2 md:hidden">
    <Link
      href="/contact-us#quote"
      className="inline-flex min-h-11 items-center justify-center bg-[#f5b400] px-3 text-center text-[11px] font-bold text-[#043079] transition hover:bg-[#ffc62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      Request a Quotation
    </Link>

    <Link
      href="/paint-packages"
      className="inline-flex min-h-11 items-center justify-center border border-white/85 bg-[#043079]/10 px-3 text-center text-[11px] font-bold text-white transition hover:bg-white hover:text-[#043079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      Explore Our Services
    </Link>
  </div>

  <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-[3px] w-full bg-[#cc0f06]" />
</section>

      {/* COMPANY INTRO */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
              Who We Are
            </p>

            <h2 className="max-w-[540px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
              A painting company built around speed, finish quality, and clean
              execution.
            </h2>

            <span className="mt-6 block h-[4px] w-16 bg-[#f5b400]" />
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-slate-600">
            <p>
              The Machine Painting Co Ltd helps property owners, businesses,
              contractors, and developers achieve cleaner, smoother, and more
              professional wall finishes through modern painting methods and
              practical project execution.
            </p>

            <p>
              The company is positioned around making painting easier, faster,
              and more reliable for clients who want a strong finish without
              unnecessary disruption. From interior walls to exterior surfaces
              and commercial premises, the focus is on proper preparation,
              efficient application, and a finish that improves the look and
              feel of the property.
            </p>

            <p>
              Our work is guided by the company promise:{" "}
              <strong className="font-extrabold text-[#043079]">
                Beautiful Structures, Sprayed Perfectly.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#f7f9fc] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[760px]">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                What We Do
              </p>

              <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Professional painting and finishing for modern properties.
              </h2>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-600">
                The company works across residential and commercial
                environments, with services covering interior painting,
                exterior painting, machine spray painting, commercial
                painting, renovation painting, and wall skimming or surface
                preparation.
              </p>
            </div>

            <span className="hidden h-1.5 w-16 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item, index) => (
              <article
                key={item.title}
                className={[
                  "group relative overflow-hidden border bg-white p-6 transition duration-300 md:p-7",
                  index === 0
                    ? "border-[#0453b1] shadow-[0_18px_42px_rgba(4,83,177,0.11)]"
                    : "border-[#043079]/10 hover:-translate-y-1 hover:border-[#0453b1]/45 hover:shadow-[0_18px_42px_rgba(4,48,121,0.09)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute inset-x-0 top-0 h-[3px]",
                    index === 0
                      ? "bg-[#f5b400]"
                      : "bg-transparent transition group-hover:bg-[#f5b400]",
                  ].join(" ")}
                />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0453b1]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-[20px] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#043079]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t-[3px] border-[#cc0f06] bg-[#043079] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#f5b400]">
              Our Approach
            </p>

            <h2 className="max-w-[520px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-white md:text-[33px]">
              A clean finish starts with the right preparation.
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-white/76">
              Painting is not just about colour. The final result depends on
              how the surface is assessed, prepared, protected, painted, and
              inspected before handover.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((step, index) => (
              <article
                key={step.title}
                className={[
                  "border border-white/12 p-6 transition",
                  index === 2
                    ? "bg-[#0b4b9e] shadow-[0_18px_40px_rgba(0,0,0,0.13)]"
                    : "bg-white/[0.055] hover:bg-white/[0.08]",
                ].join(" ")}
              >
                <span
                  className={[
                    "grid h-10 w-10 place-items-center text-[10px] font-extrabold",
                    index === 2
                      ? "bg-[#f5b400] text-[#043079]"
                      : "bg-white/10 text-[#f5b400]",
                  ].join(" ")}
                >
                  {step.label}
                </span>

                <h3 className="mt-5 text-[20px] font-extrabold tracking-[-0.025em] text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-white/72">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
<section className="bg-white px-5 py-16 md:px-8 md:py-20">
  <div className="mx-auto max-w-[1180px]">
    {/* Mobile heading first */}
    <div className="mb-8 lg:hidden">
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
        Why Choose Us
      </p>

      <h2 className="max-w-[560px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079]">
        Built for clients who care about the final finish.
      </h2>

      <span className="mt-5 block h-[4px] w-14 bg-[#f5b400]" />
    </div>

    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className="relative min-h-[360px] overflow-hidden bg-[#f7f9fc] md:min-h-[470px]">
        <Image
          src="/machine/project-02.jpg"
          alt="Interior painting finish by The Machine Painting Co Ltd"
          fill
          quality={100}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#043079]/80 to-transparent px-6 pb-6 pt-20">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            Clean. Smooth. Professional.
          </p>
        </div>
      </div>

      <div>
        {/* Desktop heading */}
        <div className="hidden lg:block">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
            Why Choose Us
          </p>

          <h2 className="max-w-[560px] text-[33px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079]">
            Built for clients who care about the final finish.
          </h2>

          <span className="mt-5 block h-[4px] w-14 bg-[#f5b400]" />
        </div>

        <div className="mt-0 lg:mt-8">
          {reasons.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 border-b border-[#043079]/10 py-5 first:pt-0"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center bg-[#f5b400] text-[10px] font-extrabold text-[#043079]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[15px] leading-7 text-slate-600">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/paint-packages"
            className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-[#ffc62f]"
          >
            View Paint Packages
          </Link>

          <Link
            href="/gallery"
            className="inline-flex min-h-12 items-center justify-center border border-[#043079]/25 bg-white px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:border-[#0453b1] hover:bg-[#0453b1] hover:text-white"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT CTA */}
      <section className="bg-[#f7f9fc] px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1180px] overflow-hidden border border-[#043079]/10 bg-white">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-6 py-10 md:px-10 md:py-12">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Start Your Project
              </p>

              <h2 className="max-w-[700px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Ready to discuss your painting or finishing requirements?
              </h2>

              <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-slate-600">
                Request a quotation, book a site visit, or speak directly with
                our team about your project.
              </p>
            </div>

            <div className="flex h-full min-w-[270px] items-center justify-center bg-[#0453b1] px-6 py-10 md:px-10">
              <Link
                href="/contact-us"
                className="inline-flex min-h-12 w-full items-center justify-center bg-[#f5b400] px-7 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-white"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}