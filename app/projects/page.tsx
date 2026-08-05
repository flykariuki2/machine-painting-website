import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "Westlands Office Renovations",
    category: "Office Renovation",
    location: "Westlands, Nairobi",
    area: "288 sqm",
    image: "/machine/project1.png",
    videoUrl: "https://youtu.be/FxlAps3KwPc",
    description:
      "This project was located in the heart of Westlands, Nairobi. The landlord wanted to create a new usable office space by subdividing and subletting part of an existing hall. The empty space was converted into an extra office, with the covered area measuring approximately 288 sqm.",
    highlights: [
      "Located in Westlands, Nairobi",
      "Office subdivision and conversion",
      "Approx. 288 sqm covered area",
      "Created an additional usable office space",
    ],
  },
  {
    title: "Kihingo Village Kitsuru Villa",
    category: "Residential Villa",
    location: "Kitsuru, Nairobi",
    area: "5500 sqft townhouse on 0.7 acres",
    image: "/machine/project2.png",
    videoUrl: "https://youtu.be/3lLgStQjjwM",
    description:
      "This project was carried out at Kihingo Village in Kitsuru, a gated community with 55 houses. The property is a modern 5500 sqft, 4-bedroom all ensuite townhouse with a servant’s quarter for two, sitting on approximately 0.7 acres. The work involved renovation and painting works and took almost 8 weeks to complete.",
    highlights: [
      "Kihingo Village, Kitsuru",
      "Gated community with 55 houses",
      "5500 sqft, 4-bedroom all ensuite townhouse",
      "Servant’s quarter for two",
      "Approx. 0.7 acres",
      "Completed in almost 8 weeks",
    ],
  },
  {
    title: "Kileleshwa Apartment 360 Renovations",
    category: "Apartment Renovation",
    location: "Kileleshwa, Nairobi",
    area: "Complete apartment makeover",
    image: "/machine/project-02.jpg",
    videoUrl: "https://youtu.be/eMj8reJbSVw",
    description:
      "This project was a complete apartment makeover in Kileleshwa. The renovation covered brand new kitchen cabinets, granite countertops and floors, a freshly tiled bathroom, removal of the ceiling’s knockdown effect, floor varnishing, and final paint works. It demonstrates a 360-degree transformation from an ordinary apartment into a refreshed home.",
    highlights: [
      "Complete apartment makeover",
      "Brand new kitchen cabinets",
      "Granite countertops and floors",
      "Freshly tiled bathroom",
      "Ceiling knockdown effect removed",
      "Floor varnishing",
      "Final paint works",
    ],
  },
];

const proofPoints = [
  "Painting works",
  "Renovation works",
  "Office conversions",
  "Residential makeovers",
];

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] pt-[85px] text-[#043079]">
      <Navbar />

      {/* HERO */}
<section className="bg-[#043079] text-white">
  <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 md:px-8 lg:h-[460px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-0">
    <div>
      {/* MOBILE EYEBROW — HOMEPAGE SCALE */}
      <div className="flex items-center gap-3 md:hidden">
        <span className="h-[3px] w-9 shrink-0 bg-[#cc0f06]" />

        <p className="text-[8px] font-extrabold uppercase leading-4 tracking-[0.15em] text-[#f5b400] min-[390px]:text-[9px]">
          Projects
        </p>
      </div>

      {/* DESKTOP EYEBROW */}
      <div className="hidden items-center gap-3 md:flex">
        <span className="h-[3px] w-11 shrink-0 bg-[#cc0f06]" />

        <p className="text-[11px] font-extrabold uppercase leading-4 tracking-[0.16em] text-[#f5b400]">
          Projects
        </p>
      </div>

      {/* MOBILE H1 — EXACT HOMEPAGE SCALE */}
      <h1 className="mt-3 font-extrabold leading-[1.01] tracking-[-0.035em] text-white md:hidden">
        <span className="block text-[27px] min-[390px]:text-[29px]">
          Our Projects,
        </span>

        <span className="block text-[25px] text-[#f5b400] min-[390px]:text-[27px]">
          Painting &amp; Renovation Works
        </span>
      </h1>

      {/* DESKTOP H1 */}
      <h1 className="mt-5 hidden font-extrabold leading-[1.02] tracking-[-0.035em] text-white md:block">
        <span className="block text-[47px]">Our Projects,</span>

        <span className="block text-[47px] text-[#f5b400]">
          Painting &amp; Renovation Works
        </span>
      </h1>

      {/* MOBILE-ONLY HERO IMAGE */}
      <div className="relative mt-6 h-[240px] w-full overflow-hidden border-t-[3px] border-[#f5b400] bg-white/5 lg:hidden">
        <Image
          src="/machine/project-003.jpg"
          alt="Commercial project by The Machine Painting Co Ltd"
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#043079]/18 via-transparent to-transparent" />
      </div>

      <p className="mt-5 max-w-2xl text-[12px] leading-[19px] text-white/92 min-[390px]:text-[12.5px] md:text-[15px] md:leading-[25px]">
        Explore selected projects by The Machine Painting Co Ltd and see how
        our team has added vibrancy through painting, renovation, and finishing
        works across offices, villas, and apartments.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[11px] font-bold text-[#043079] transition hover:bg-[#ffc62f]"
        >
          View Projects
        </a>

        <Link
          href="/contact-us#quote"
          className="inline-flex min-h-12 items-center justify-center border border-white/80 px-7 text-[11px] font-bold text-white transition hover:bg-white hover:text-[#043079]"
        >
          Request Similar Project
        </Link>
      </div>
    </div>

    {/* DESKTOP-ONLY HERO IMAGE */}
    <div className="relative hidden overflow-hidden border-t-[4px] border-[#f5b400] bg-white/5 lg:block lg:min-h-[360px]">
      <Image
        src="/machine/project-003.jpg"
        alt="Commercial project by The Machine Painting Co Ltd"
        fill
        priority
        quality={100}
        sizes="50vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#043079]/16 via-transparent to-transparent" />
    </div>
  </div>
</section>

      {/* PROOF STRIP */}
      <section className="bg-[#043079] px-5 pb-8 text-white md:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-3 border-t border-white/12 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item, index) => (
            <div
              key={item}
              className={[
                "flex items-center gap-3 border px-5 py-4",
                index === 0
                  ? "border-[#f5b400]/50 bg-[#0b4b9e]"
                  : "border-white/12 bg-white/[0.045]",
              ].join(" ")}
            >
              <span
                className={[
                  "h-2 w-2 shrink-0",
                  index === 0 ? "bg-[#f5b400]" : "bg-white/45",
                ].join(" ")}
              />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/82">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
              Our Projects
            </p>

            <h2 className="max-w-xl text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
              A closer look at our latest painting and renovation works.
            </h2>

            <span className="mt-6 block h-[4px] w-16 bg-[#f5b400]" />
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-slate-600">
            <p>
              This section helps visitors understand the context and background
              of selected works by The Machine Painting Co Ltd. It offers an
              overview of the diverse range of projects the company has been
              part of, from painting works to renovation works.
            </p>

            <p>
              Each project gives an insightful glimpse into the company’s
              expertise, execution, and quality of work delivered. Explore the
              videos below to see how the team has added vibrancy and
              transformed different spaces.
            </p>

            <p>
              For more videos, visit the YouTube channel:{" "}
              <a
                href="https://www.youtube.com/@themachinepaintingcompany"
                target="_blank"
                rel="noreferrer"
                className="font-extrabold text-[#043079] underline decoration-[#f5b400] decoration-2 underline-offset-4 transition hover:text-[#0453b1]"
              >
                The Machine Painting Co Ltd.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#f7f9fc] px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Video Portfolio
              </p>

              <h2 className="max-w-[820px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Project videos showing painting, renovation, and complete
                transformation works.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                Select any project card to open its related YouTube video in a
                new tab.
              </p>
            </div>

            <div className="hidden h-1.5 w-16 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch the ${project.title} project video on YouTube`}
                className={[
                  "group flex h-full flex-col overflow-hidden border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(4,48,121,0.12)]",
                  index === 1
                    ? "border-[#0453b1] shadow-[0_18px_44px_rgba(4,83,177,0.11)]"
                    : "border-[#043079]/10 hover:border-[#0453b1]/45",
                ].join(" ")}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2f7]">
                  <Image
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-[#043079]/8 transition duration-300 group-hover:bg-[#043079]/22" />

                  <div className="absolute left-4 top-4 bg-[#043079]/95 px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white">
                    Project {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full border border-white/65 bg-white/95 text-[#043079] shadow-[0_16px_38px_rgba(4,48,121,0.25)] transition duration-300 group-hover:scale-110 group-hover:bg-[#f5b400]">
                      <span aria-hidden="true" className="ml-1 text-2xl">
                        ▶
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#043079]/90 via-[#043079]/38 to-transparent px-5 pb-5 pt-16">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#f5b400]">
                      Watch Project Video
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#0453b1]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-[20px] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#043079]">
                    {project.title}
                  </h3>

                  <div className="mt-5 grid gap-2 border-y border-[#043079]/10 py-4 text-[12px] leading-5 text-slate-500">
                    <p>
                      <span className="font-extrabold text-[#043079]">
                        Location:
                      </span>{" "}
                      {project.location}
                    </p>

                    <p>
                      <span className="font-extrabold text-[#043079]">
                        Key fact:
                      </span>{" "}
                      {project.area}
                    </p>
                  </div>

                  <p className="mt-5 text-[14px] leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-[7px] h-2 w-2 shrink-0 bg-[#f5b400]" />

                        <p className="text-[14px] leading-6 text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <span
                      className={[
                        "inline-flex min-h-11 w-full items-center justify-center px-6 text-[10px] font-extrabold uppercase tracking-[0.14em] transition",
                        index === 1
                          ? "bg-[#f5b400] text-[#043079] group-hover:bg-[#ffc62f]"
                          : "bg-[#043079] text-white group-hover:bg-[#0453b1]",
                      ].join(" ")}
                    >
                      Open Video
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* PROJECT CTA */}
          <div className="mt-12 overflow-hidden border border-[#043079]/10 bg-white">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-stretch">
              <div className="px-6 py-10 text-center md:px-10 md:py-12 lg:text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06] md:text-[11px]">
                  Planning a Similar Project?
                </p>

                <h3 className="mt-3 max-w-[720px] text-[26px] font-extrabold leading-[1.18] tracking-[-0.04em] text-[#043079] md:text-[30px]">
                  Request a quotation or arrange a site visit with our team.
                </h3>

                <p className="mt-4 max-w-[660px] text-[14px] leading-6 text-slate-600">
                  Share your location, property type, current condition, and the
                  result you would like to achieve.
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
        </div>
      </section>

      {/* COMPACT CONTACT CTA */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px] overflow-hidden border border-[#043079]/10 bg-[#f7f9fc]">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-6 py-10 md:px-10 md:py-12">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Start a Similar Project
              </p>

              <h2 className="max-w-[760px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Ready to discuss your painting, renovation, or property
                transformation?
              </h2>

              <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-slate-600">
                Request a quotation, arrange a site visit, or speak directly
                with our team about your project requirements.
              </p>
            </div>

            <div className="flex h-full min-w-[270px] items-center justify-center bg-[#043079] px-6 py-10 md:px-10">
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