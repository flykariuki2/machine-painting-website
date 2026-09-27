"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  category: string;
  image: string;
};

type ProjectsCarouselProps = {
  projects: Project[];
};

export default function ProjectsCarousel({
  projects,
}: ProjectsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const container = carouselRef.current;

    if (!container) return;

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    setCanScrollLeft(container.scrollLeft > 8);
    setCanScrollRight(
      container.scrollLeft < maxScroll - 8,
    );
  };

  useEffect(() => {
    const container = carouselRef.current;

    if (!container) return;

    updateScrollState();

    container.addEventListener(
      "scroll",
      updateScrollState,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      updateScrollState,
    );

    return () => {
      container.removeEventListener(
        "scroll",
        updateScrollState,
      );

      window.removeEventListener(
        "resize",
        updateScrollState,
      );
    };
  }, []);

  const move = (
    direction: "left" | "right",
  ) => {
    const container = carouselRef.current;

    if (!container) return;

    const firstCard =
      container.querySelector<HTMLElement>(
        "[data-project-card]",
      );

    const gap =
      window.innerWidth >= 768 ? 24 : 16;

    const amount = firstCard
      ? firstCard.offsetWidth + gap
      : container.clientWidth * 0.9;

    container.scrollBy({
      left:
        direction === "right"
          ? amount
          : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-10 md:mt-12">
      {/* CAROUSEL */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              data-project-card
              className="group w-[88%] shrink-0 snap-start overflow-hidden border border-[#043079]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06]/35 hover:shadow-[0_20px_45px_rgba(4,48,121,0.10)] sm:w-[62%] md:w-[calc((100%_-_3rem)/3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 767px) 88vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />

                <div className="absolute left-3 top-3 bg-[#043079] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
                  {project.category}
                </div>
              </div>

              <div className="px-5 py-5">
                <h3 className="text-[19px] font-extrabold tracking-[-0.025em] text-[#043079]">
                  {project.title}
                </h3>

                <div className="mt-4 h-[2px] w-7 bg-[#f5b400]" />
              </div>
            </article>
          ))}
        </div>

        {/* MOBILE LEFT EDGE CONTROL */}
        <button
          type="button"
          onClick={() => move("left")}
          aria-label="View previous project"
          disabled={!canScrollLeft}
          className={[
            "absolute left-2 top-[42%] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center border border-white/60 bg-[#043079]/80 text-white shadow-lg backdrop-blur-sm transition md:hidden",
            canScrollLeft
              ? "opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <ChevronLeft
            aria-hidden="true"
            className="h-5 w-5"
          />
        </button>

        {/* MOBILE RIGHT EDGE CONTROL */}
        <button
          type="button"
          onClick={() => move("right")}
          aria-label="View next project"
          disabled={!canScrollRight}
          className={[
            "absolute right-2 top-[42%] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center border border-white/60 bg-[#043079]/80 text-white shadow-lg backdrop-blur-sm transition md:hidden",
            canScrollRight
              ? "opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <ChevronRight
            aria-hidden="true"
            className="h-5 w-5"
          />
        </button>

        {/* MOBILE EDGE HINT */}
        {canScrollRight && (
          <div className="pointer-events-none absolute bottom-3 right-0 top-0 w-8 bg-gradient-to-l from-white/65 to-transparent md:hidden" />
        )}
      </div>

      {/* MOBILE SWIPE HINT */}
      <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
        <span className="h-1 w-1 rounded-full bg-[#f5b400]" />

        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#043079]/55">
          Swipe to explore more projects
        </p>

        <ChevronRight
          aria-hidden="true"
          className="h-3.5 w-3.5 text-[#043079]/45"
        />
      </div>
    </div>
  );
}