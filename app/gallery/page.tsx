import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const gallerySets = [
  {
    title: "Exterior Transformation",
    description:
      "A property refresh showing the difference a clean exterior repaint can make.",
    before: "/machine/before.jpg",
    after: "/machine/after.jpg",
  },
  {
    title: "Residential Finish Refresh",
    description:
      "Before and after painting work showing improved presentation and a cleaner finish.",
    before: "/machine/before2.png",
    after: "/machine/after2.png",
  },
  {
    title: "Wall Finish Transformation",
    description:
      "A practical transformation focused on improving wall appearance and surface finish.",
    before: "/machine/before3.png",
    after: "/machine/after3.png",
  },
  {
    title: "Exterior Multi-Angle Transformation",
    description:
      "Two before angles and one completed finish, arranged to show the project transformation more clearly.",
    beforeA: "/machine/before4a.png",
    beforeB: "/machine/before4b.png",
    after: "/machine/after4.png",
    special: true,
  },
  {
    title: "Property Repaint Result",
    description:
      "A repaint project showing how the final finish improves the overall property look.",
    before: "/machine/before5.png",
    after: "/machine/after5.png",
  },
  {
    title: "Clean Finish Upgrade",
    description:
      "A before and after comparison showing improved colour, surface presentation, and finish quality.",
    before: "/machine/before6.png",
    after: "/machine/after6.png",
  },
];

export default function GalleryPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to ask about your gallery and painting work."
  );

  return (
    <main className="overflow-hidden bg-[#f8f8f5] pt-[76px] text-[#043079]">
      <Navbar />

      {/* HERO */}
<section className="bg-[#043079] text-white">
  <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 lg:h-[460px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-0">
    <div>
      <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
        Gallery
      </p>

      <h1 className="max-w-4xl text-[36px] font-black leading-[1.03] tracking-[-0.05em] text-white md:text-5xl">
        See the finish behind
        <span className="block text-[#f5b400]">
          Beautiful Structures, Sprayed Perfectly
        </span>
      </h1>

      {/* MOBILE-ONLY HERO IMAGE CONTAINER */}
      <div className="relative mt-6 h-[240px] w-full overflow-hidden bg-white/5 lg:hidden">
        <Image
          src="/machine/project-01.jpg"
          alt="Exterior painting project by The Machine Painting Co Ltd"
          fill
          priority
          sizes="(max-width: 1024px) 100vw"
          className="object-contain object-center"
        />
      </div>

      <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/80">
        Explore before-and-after painting transformations by The Machine
        Painting Co Ltd, showing how clean preparation, spray painting, and
        professional finishing can refresh homes, apartments, and commercial
        properties.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="#gallery"
          className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
        >
          View Transformations
        </a>

        <a
          href="#quote"
          className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#043079]"
        >
          Request Similar Finish
        </a>
      </div>
    </div>

    {/* DESKTOP-ONLY HERO IMAGE CONTAINER */}
    <div className="relative hidden overflow-hidden bg-white/5 lg:block lg:min-h-[360px]">
      <Image
        src="/machine/project-01.jpg"
        alt="Exterior painting project by The Machine Painting Co Ltd"
        fill
        priority
        sizes="50vw"
        className="object-contain object-center"
      />
    </div>
  </div>
</section>

      {/* GALLERY INTRO */}
      <section id="gallery" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
                Before & After Gallery
              </p>

              <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
                Real transformations, arranged to show the work clearly.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                Each gallery set compares the original condition with the completed
                finish. Images are contained within fixed display areas so different
                photo sizes remain neat, consistent, and easy to compare.
              </p>
            </div>

            <div className="hidden h-1 w-20 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-10">
            {gallerySets.map((set, index) => {
              if (set.special) {
                return (
                  <article
                    key={set.title}
                    className="overflow-hidden border border-[#043079]/10 bg-[#f8f8f5] p-5 shadow-sm md:p-7"
                  >
                    <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#043079]/10 pb-6 md:flex-row md:items-end">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cc0f06]">
                          Transformation {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#043079] md:text-3xl">
                          {set.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                          {set.description}
                        </p>
                      </div>

                      <a
                        href="#quote"
                        className="inline-flex shrink-0 items-center justify-center bg-[#cc0f06] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
                      >
                        Request Similar Finish
                      </a>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="grid gap-5">
                        <div className="relative min-h-[230px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[270px]">
                          <Image
                            src={set.beforeA || ""}
                            alt={`${set.title} before angle one`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-contain object-center"
                          />

                          <span className="absolute left-4 top-4 bg-[#043079] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                            Before
                          </span>
                        </div>

                        <div className="relative min-h-[230px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[270px]">
                          <Image
                            src={set.beforeB || ""}
                            alt={`${set.title} before angle two`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-contain object-center"
                          />

                          <span className="absolute left-4 top-4 bg-[#043079] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                            Before
                          </span>
                        </div>
                      </div>

                      <div className="relative min-h-[480px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[560px]">
                        <Image
                          src={set.after}
                          alt={`${set.title} after`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-contain object-center"
                        />

                        <span className="absolute right-4 top-4 bg-[#cc0f06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                          After
                        </span>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={set.title}
                  className="overflow-hidden border border-[#043079]/10 bg-[#f8f8f5] p-5 shadow-sm md:p-7"
                >
                  <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#043079]/10 pb-6 md:flex-row md:items-end">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cc0f06]">
                        Transformation {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#043079] md:text-3xl">
                        {set.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        {set.description}
                      </p>
                    </div>

                    <a
                      href="#quote"
                      className="inline-flex shrink-0 items-center justify-center bg-[#cc0f06] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
                    >
                      Request Similar Finish
                    </a>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[320px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[420px]">
                      <Image
                        src={set.before || ""}
                        alt={`${set.title} before`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center"
                      />

                      <span className="absolute left-4 top-4 bg-[#043079] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                        Before
                      </span>
                    </div>

                    <div className="relative min-h-[320px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[420px]">
                      <Image
                        src={set.after}
                        alt={`${set.title} after`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center"
                      />

                      <span className="absolute right-4 top-4 bg-[#cc0f06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                        After
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#043079]/10 pt-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06]">
                Ready for your own transformation?
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#043079]">
                Request a quote or book a site visit using the form below.
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