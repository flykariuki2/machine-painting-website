import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

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
  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to ask about your projects and painting work."
  );

  return (
    <main className="overflow-hidden bg-[#f8f8f5] pt-[76px] text-[#043079]">
      <Navbar />

      {/* HERO */}
<section className="bg-[#043079] text-white">
  <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 lg:h-[460px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-0">
    <div>
      <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
        Projects
      </p>

      <h1 className="max-w-3xl text-[36px] font-black leading-[1.03] tracking-[-0.05em] text-white md:text-6xl">
        Our Projects,
        <span className="block text-[#f5b400]">
          Painting & Renovation Works
        </span>
      </h1>

      {/* MOBILE-ONLY HERO IMAGE CONTAINER (Matches image_ceef48.png structure) */}
      <div className="relative mt-6 h-[240px] w-full overflow-hidden bg-white/5 lg:hidden">
        <Image
          src="/machine/project-003.jpg"
          alt="Commercial project by The Machine Painting Co Ltd"
          fill
          priority
          sizes="(max-width: 1024px) 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#043079]/35 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 bg-[#043079]/85 p-4 backdrop-blur-sm">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            Video Project Portfolio
          </p>
          <p className="mt-1 text-xs font-semibold leading-5 text-white/90">
            Click any project thumbnail below to open the project video on YouTube.
          </p>
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/80">
        Explore selected projects by The Machine Painting Co Ltd and see
        how our team has added vibrancy through painting, renovation, and
        finishing works across offices, villas, and apartments.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
        >
          View Projects
        </a>

        <a
          href="#quote"
          className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#043079]"
        >
          Request Similar Project
        </a>
      </div>
    </div>

    {/* DESKTOP-ONLY HERO IMAGE CONTAINER */}
    <div className="relative hidden overflow-hidden bg-white/5 lg:block lg:min-h-[360px]">
      <Image
        src="/machine/project-003.jpg"
        alt="Commercial project by The Machine Painting Co Ltd"
        fill
        priority
        sizes="50vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#043079]/35 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 bg-[#043079]/85 p-5 backdrop-blur-sm">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
          Video Project Portfolio
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-white/90">
          Click any project thumbnail below to open the project video on
          YouTube.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* PROOF STRIP */}
      <section className="bg-[#043079] px-5 pb-8 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/[0.04] px-5 py-4"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/75">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Our Projects
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              A closer look at our latest works.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              This section helps visitors understand the context and background
              of selected works by The Machine Painting Co Ltd. It offers an
              overview of the diverse range of projects the company has been
              part of, from painting works to renovation works.
            </p>

            <p>
              Each project gives an insightful glimpse into the company’s
              expertise, execution, and quality of work delivered. Explore the
              videos below to see how the team has added vibrancy and transformed
              different spaces.
            </p>

            <p>
  For more videos, visit the YouTube channel:{" "}
  <a
    href="https://www.youtube.com/@themachinepaintingcompany"
    target="_blank"
    rel="noreferrer"
    className="font-extrabold text-[#043079] underline decoration-[#f5b400] decoration-2 underline-offset-4 transition hover:text-[#cc0f06]"
  >
    The Machine Painting Co Ltd.
  </a>
</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#f8f8f5] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
                Video Portfolio
              </p>

              <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
                Project videos showing painting, renovation, and transformation
                works.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                Click once on any project thumbnail to open the related YouTube
                video in a new tab.
              </p>
            </div>

            <div className="hidden h-1 w-20 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden border border-[#043079]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06] hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f8f5]">
                  <Image
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-[#043079]/10 transition duration-300 group-hover:bg-[#043079]/25" />

                  <div className="absolute left-4 top-4 bg-[#cc0f06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                    Project {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[#cc0f06] shadow-2xl transition duration-300 group-hover:scale-110">
                      <span className="ml-1 text-2xl">▶</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#043079]/95 via-[#043079]/55 to-transparent p-5 pt-16">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
                      Click to Watch Video
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#cc0f06]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em] text-[#043079]">
                    {project.title}
                  </h3>

                  <div className="mt-4 grid gap-2 border-y border-[#043079]/10 py-4 text-xs font-bold text-slate-500">
                    <p>
                      <span className="text-[#043079]">Location:</span>{" "}
                      {project.location}
                    </p>
                    <p>
                      <span className="text-[#043079]">Key fact:</span>{" "}
                      {project.area}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f5b400]" />
                        <p className="text-sm leading-6 text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 inline-flex items-center justify-center bg-[#043079] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 group-hover:bg-[#cc0f06]">
                    Open Video
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#043079]/10 pt-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06]">
                Planning a similar project?
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#043079]">
                Request a quotation or book a site visit using the form below.
              </h3>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
              >
                Get a Quotation
              </a>

              <a
                href="#site-visit"
                className="inline-flex items-center justify-center border border-[#043079]/20 px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition duration-300 hover:border-[#cc0f06] hover:text-[#cc0f06]"
              >
                Book Site Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}