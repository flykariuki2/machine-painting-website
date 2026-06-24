import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const strengths = [
  {
    title: "Professional Spray Painting",
    text: "The company focuses on clean, smooth, and consistent spray painting finishes for residential, commercial, and renovation projects.",
  },
  {
    title: "Surface Preparation",
    text: "Good finishing starts before paint is applied. The team supports preparation work such as cleaning, smoothing, skimming, and repair support.",
  },
  {
    title: "Practical Project Guidance",
    text: "Clients receive guidance on the right approach based on project location, surface condition, finish expectations, and site requirements.",
  },
  {
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

export default function AboutPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to learn more about your painting services."
  );

  return (
    <main className="overflow-hidden bg-[#f8f8f5] pt-[76px] text-[#043079]">
      <Navbar />

      {/* HERO */}
<section className="bg-[#043079] text-white">
  <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 lg:h-[460px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-0">
    <div>
      <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
        About The Machine Painting Co Ltd
      </p>

      <h1 className="max-w-3xl text-[36px] font-black line-leading-[1.03] tracking-[-0.05em] text-white md:text-5xl">
        Beautiful Structures,
        <span className="block text-[#f5b400]">Sprayed Perfectly</span>
      </h1>

      {/* MOBILE-ONLY HERO IMAGE CONTAINER */}
      <div className="relative mt-6 h-[240px] w-full overflow-hidden bg-white/5 lg:hidden">
        <Image
          src="/machine/hero.jpg"
          alt="The Machine Painting Co Ltd team"
          fill
          priority
          sizes="(max-width: 1024px) 100vw"
          className="object-contain object-center"
        />
      </div>

      <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/80">
        The Machine Painting Co Ltd provides professional spray painting
        and finishing services for homes, offices, apartments, buildings,
        warehouses, and commercial spaces.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

    {/* DESKTOP-ONLY HERO IMAGE CONTAINER */}
    <div className="relative hidden overflow-hidden bg-white/5 lg:block lg:min-h-[360px]">
      <Image
        src="/machine/hero.jpg"
        alt="The Machine Painting Co Ltd team"
        fill
        priority
        sizes="50vw"
        className="object-contain object-center"
      />
    </div>
  </div>
</section>

      {/* COMPANY INTRO */}
      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Who We Are
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              A painting company built around speed, finish quality, and clean
              execution.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-slate-600">
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
              Our work is guided by the company promise:
              <span className="font-extrabold text-[#043079]">
                {" "}
                Beautiful Structures, Sprayed Perfectly.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#f8f8f5] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              What We Do
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              Professional painting and finishing for modern properties.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              The company works across residential and commercial environments,
              with services covering interior painting, exterior painting,
              machine spray painting, commercial painting, renovation painting,
              and wall skimming or surface preparation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="border border-[#043079]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06] hover:shadow-xl"
              >
                <div className="mb-6 h-1 w-12 bg-[#f5b400]" />

                <h3 className="text-lg font-black tracking-[-0.03em] text-[#043079]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#043079] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
                Our Approach
              </p>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl">
                A clean finish starts with the right preparation.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                Painting is not just about colour. The final result depends on
                how the surface is assessed, prepared, protected, painted, and
                inspected before handover.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {process.map((step) => (
                <article key={step.title} className="bg-white/[0.06] p-6">
                  <span className="mb-5 inline-grid h-10 w-10 place-items-center rounded-full bg-[#cc0f06] text-[10px] font-black text-white">
                    {step.label}
                  </span>

                  <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden bg-[#f8f8f5]">
            <Image
              src="/machine/project-02.jpg"
              alt="Interior painting finish by The Machine Painting Co Ltd"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Why Choose Us
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              Built for clients who care about the final finish.
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Modern painting methods for clean and consistent application.",
                "Practical guidance before the project begins.",
                "Attention to surface preparation and final presentation.",
                "Support for homes, offices, apartments, commercial spaces, and renovation projects.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[#043079]/10 pb-5"
                >
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#f5b400]" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/paint-packages"
                className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
              >
                View Paint Packages
              </a>

              <a
                href="/gallery"
                className="inline-flex items-center justify-center border border-[#043079]/20 px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition duration-300 hover:border-[#cc0f06] hover:text-[#cc0f06]"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}