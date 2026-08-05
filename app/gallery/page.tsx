import Image from "next/image";

import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

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
    "Hello The Machine Painting Co Ltd, I would like to ask about your gallery and painting work.",
  );

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
          Gallery
        </p>
      </div>

      {/* DESKTOP EYEBROW */}
      <div className="hidden items-center gap-3 md:flex">
        <span className="h-[3px] w-11 shrink-0 bg-[#cc0f06]" />

        <p className="text-[11px] font-extrabold uppercase leading-4 tracking-[0.16em] text-[#f5b400]">
          Gallery
        </p>
      </div>

      {/* MOBILE H1 — EXACT HOMEPAGE SCALE */}
      <h1 className="mt-3 font-extrabold leading-[1.01] tracking-[-0.035em] text-white md:hidden">
        <span className="block text-[27px] min-[390px]:text-[29px]">
          See the Finish Behind
        </span>

        <span className="block text-[25px] text-[#f5b400] min-[390px]:text-[27px]">
          Beautiful Transformations.
        </span>
      </h1>

      {/* DESKTOP H1 */}
      <h1 className="mt-5 hidden font-extrabold leading-[1.02] tracking-[-0.035em] text-white md:block">
        <span className="block text-[47px]">See the Finish Behind</span>

        <span className="block text-[47px] text-[#f5b400]">
          Beautiful Structures, Sprayed Perfectly
        </span>
      </h1>

      {/* MOBILE-ONLY HERO IMAGE */}
      <div className="relative mt-6 h-[240px] w-full overflow-hidden border-t-[3px] border-[#f5b400] bg-white/5 lg:hidden">
        <Image
          src="/machine/project-01.jpg"
          alt="Exterior painting project by The Machine Painting Co Ltd"
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw"
          className="object-contain object-center"
        />
      </div>

      <p className="mt-5 max-w-2xl text-[12px] leading-[19px] text-white/92 min-[390px]:text-[12.5px] md:text-[15px] md:leading-[25px]">
        Explore before-and-after painting transformations showing how careful
        preparation, spray painting, and professional finishing refresh homes,
        apartments, and commercial properties.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="#gallery"
          className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[11px] font-bold text-[#043079] transition hover:bg-[#ffc62f]"
        >
          View Transformations
        </a>

        <a
          href="#quote"
          className="inline-flex min-h-12 items-center justify-center border border-white/80 px-7 text-[11px] font-bold text-white transition hover:bg-white hover:text-[#043079]"
        >
          Request Similar Finish
        </a>
      </div>
    </div>

    {/* DESKTOP-ONLY HERO IMAGE */}
    <div className="relative hidden overflow-hidden border-t-[4px] border-[#f5b400] bg-white/5 lg:block lg:min-h-[360px]">
      <Image
        src="/machine/project-01.jpg"
        alt="Exterior painting project by The Machine Painting Co Ltd"
        fill
        priority
        quality={100}
        sizes="50vw"
        className="object-contain object-center"
      />
    </div>
  </div>
</section>

      {/* GALLERY INTRO */}
      <section id="gallery" className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#cc0f06]">
                Before &amp; After Gallery
              </p>

              <h2 className="max-w-[780px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
                Real transformations, presented clearly from start to finish.
              </h2>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-600">
                Each gallery set compares the original condition with the
                completed finish. Images remain contained within structured
                display areas so projects with different photo sizes are still
                easy to review and compare.
              </p>
            </div>

            <div className="hidden h-1.5 w-16 bg-[#f5b400] md:block" />
          </div>

          <div className="grid gap-8 md:gap-10">
            {gallerySets.map((set, index) => {
              const transformationNumber = String(index + 1).padStart(2, "0");

              if (set.special) {
                return (
                  <article
                    key={set.title}
                    className="group overflow-hidden border border-[#043079]/10 bg-[#f7f9fc] transition duration-300 hover:border-[#0453b1]/35 hover:shadow-[0_24px_60px_rgba(4,48,121,0.10)]"
                  >
                    <header className="grid gap-5 border-b border-[#043079]/10 bg-white px-5 py-6 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-8">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="grid h-8 w-8 place-items-center bg-[#043079] text-[9px] font-extrabold text-white">
                            {transformationNumber}
                          </span>

                          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cc0f06]">
                            Multi-Angle Transformation
                          </p>
                        </div>

                        <h3 className="mt-4 text-[24px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#043079] md:text-[29px]">
                          {set.title}
                        </h3>

                        <p className="mt-3 max-w-[680px] text-[14px] leading-6 text-slate-600">
                          {set.description}
                        </p>
                      </div>

                      <a
                        href="#quote"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#f5b400] px-6 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#043079] transition hover:bg-[#ffc62f]"
                      >
                        Request Similar Finish
                      </a>
                    </header>

                    <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
                      <div className="grid gap-4">
                        <div className="relative min-h-[240px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[280px]">
                          <Image
                            src={set.beforeA || ""}
                            alt={`${set.title} before angle one`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-contain object-center"
                          />

                          <span className="absolute left-4 top-4 bg-[#043079]/95 px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white">
                            Before · Angle 01
                          </span>
                        </div>

                        <div className="relative min-h-[240px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[280px]">
                          <Image
                            src={set.beforeB || ""}
                            alt={`${set.title} before angle two`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-contain object-center"
                          />

                          <span className="absolute left-4 top-4 bg-[#043079]/95 px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white">
                            Before · Angle 02
                          </span>
                        </div>
                      </div>

                      <div className="relative min-h-[500px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[580px]">
                        <Image
                          src={set.after}
                          alt={`${set.title} after`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-contain object-center"
                        />

                        <span className="absolute right-4 top-4 bg-[#f5b400] px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#043079]">
                          Completed Finish
                        </span>

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#043079]/85 via-[#043079]/25 to-transparent px-5 pb-5 pt-20">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#f5b400]">
                            Final Result
                          </p>

                          <p className="mt-1 text-[13px] font-semibold text-white">
                            Clean, consistent presentation across the completed
                            exterior.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={set.title}
                  className="group overflow-hidden border border-[#043079]/10 bg-[#f7f9fc] transition duration-300 hover:border-[#0453b1]/35 hover:shadow-[0_24px_60px_rgba(4,48,121,0.10)]"
                >
                  <header className="grid gap-5 border-b border-[#043079]/10 bg-white px-5 py-6 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-8">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center bg-[#043079] text-[9px] font-extrabold text-white">
                          {transformationNumber}
                        </span>

                        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#cc0f06]">
                          Before &amp; After
                        </p>
                      </div>

                      <h3 className="mt-4 text-[24px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#043079] md:text-[29px]">
                        {set.title}
                      </h3>

                      <p className="mt-3 max-w-[680px] text-[14px] leading-6 text-slate-600">
                        {set.description}
                      </p>
                    </div>

                    <a
                      href="#quote"
                      className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#f5b400] px-6 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#043079] transition hover:bg-[#ffc62f]"
                    >
                      Request Similar Finish
                    </a>
                  </header>

                  <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-2 lg:p-6">
                    <div className="relative min-h-[320px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[430px]">
                      <Image
                        src={set.before || ""}
                        alt={`${set.title} before`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center"
                      />

                      <span className="absolute left-4 top-4 bg-[#043079]/95 px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white">
                        Before
                      </span>

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#043079]/70 to-transparent px-5 pb-5 pt-16">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/80">
                          Original Condition
                        </p>
                      </div>
                    </div>

                    <div className="relative min-h-[320px] overflow-hidden border border-[#043079]/10 bg-white md:min-h-[430px]">
                      <Image
                        src={set.after}
                        alt={`${set.title} after`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center"
                      />

                      <span className="absolute right-4 top-4 bg-[#f5b400] px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#043079]">
                        After
                      </span>

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#043079]/82 via-[#043079]/20 to-transparent px-5 pb-5 pt-16">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#f5b400]">
                          Completed Finish
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* GALLERY CTA */}
          <div className="mt-12 overflow-hidden border border-[#043079]/10 bg-[#f7f9fc]">
            <div className="grid lg:grid-cols-[1fr_auto] lg:items-stretch">
              <div className="px-6 py-10 text-center md:px-10 md:py-12 lg:text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06] md:text-[11px]">
                  Ready for Your Own Transformation?
                </p>

                <h3 className="mt-3 max-w-[720px] text-[26px] font-extrabold leading-[1.18] tracking-[-0.04em] text-[#043079] md:text-[30px]">
                  Request a quote or arrange a site visit for a similar finish.
                </h3>

                <p className="mt-4 max-w-[660px] text-[14px] leading-6 text-slate-600">
                  Share your property location, project type, surface
                  condition, and preferred finish with our team.
                </p>
              </div>

              <div className="grid min-w-[285px] gap-3 bg-[#0453b1] px-6 py-8 md:px-8 lg:content-center">
                <a
                  href="#quote"
                  className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-white"
                >
                  Get a Quotation
                </a>

                <a
                  href="#site-visit"
                  className="inline-flex min-h-12 items-center justify-center border border-white/45 px-7 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#043079]"
                >
                  Book Site Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}