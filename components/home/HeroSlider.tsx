"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  mobileTitle?: string;
  mobileHighlightedTitle?: string;
  description: string;
  mobileDescription?: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  tags: string[];
};

type TransitionDirection = "next" | "previous";

const slides: HeroSlide[] = [
  {
    id: "exterior",
    eyebrow: "Professional Spray Painting in Kenya",
    title: "Beautiful Structures,",
    highlightedTitle: "Sprayed Perfectly",
    description:
      "We bring walls to life through professional spray painting and finishing for homes, businesses, apartments, and construction projects.",
    mobileDescription:
      "Professional spray painting and finishing for homes, apartments, businesses, and construction projects.",
    desktopImage: "/machine/hero-exterior-desktop.png",
    mobileImage: "/machine/hero-exterior-mobile.png",
    imageAlt:
      "Professional painters in blue overalls spray painting a modern residential exterior",
    primaryLabel: "Get a Free Quote",
    primaryHref: "#quote",
    secondaryLabel: "View Before & After",
    secondaryHref: "#before-after",
    tags: ["Interior", "Exterior", "Spray Painting", "Commercial"],
  },
  {
    id: "team",
    eyebrow: "Professional Painting & Finishing Team",
    title: "Prepared Carefully.",
    highlightedTitle: "Finished Professionally.",
    mobileTitle: "Prepared Carefully.",
    mobileHighlightedTitle: "Finished Professionally.",
    description:
      "Our trained team combines careful preparation, machine-assisted application, clean execution, and a professional handover.",
    mobileDescription:
      "A skilled team focused on careful preparation, clean execution, and a professional finish.",
    desktopImage: "/machine/hero-team-desktop.png",
    mobileImage: "/machine/hero-team-mobile.png",
    imageAlt:
      "The Machine Painting Co Ltd professional painting and finishing team",
    primaryLabel: "Request a Quotation",
    primaryHref: "#quote",
    secondaryLabel: "Explore Our Services",
    secondaryHref: "#services",
    tags: ["Preparation", "Precision", "Clean Execution", "Handover"],
  },
];

const AUTO_PLAY_DELAY = 7000;
const INTERACTION_PAUSE = 6500;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] =
    useState<TransitionDirection>("next");
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);

  const changeSlide = useCallback(
    (
      nextIndex: number,
      nextDirection: TransitionDirection,
    ) => {
      const normalizedIndex =
        ((nextIndex % slides.length) + slides.length) %
        slides.length;

      if (normalizedIndex === activeIndex) {
        return;
      }

      setPreviousIndex(activeIndex);
      setDirection(nextDirection);
      setActiveIndex(normalizedIndex);
    },
    [activeIndex],
  );

  const showSlide = useCallback(
    (index: number) => {
      if (index === activeIndex) {
        return;
      }

      const nextDirection =
        index > activeIndex ? "next" : "previous";

      changeSlide(index, nextDirection);
    },
    [activeIndex, changeSlide],
  );

  const showNextSlide = useCallback(() => {
    changeSlide(activeIndex + 1, "next");
  }, [activeIndex, changeSlide]);

  const showPreviousSlide = useCallback(() => {
    changeSlide(activeIndex - 1, "previous");
  }, [activeIndex, changeSlide]);

  const pauseAfterInteraction = useCallback(() => {
    setIsPaused(true);

    if (resumeTimer.current !== null) {
      window.clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = window.setTimeout(() => {
      setIsPaused(false);
    }, INTERACTION_PAUSE);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener(
      "change",
      updateMotionPreference,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference,
      );
    };
  }, []);

  useEffect(() => {
    if (
      isPaused ||
      reducedMotion ||
      slides.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(
      showNextSlide,
      AUTO_PLAY_DELAY,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, reducedMotion, showNextSlide]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current !== null) {
        window.clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    pauseAfterInteraction();
    showPreviousSlide();
  };

  const handleNext = () => {
    pauseAfterInteraction();
    showNextSlide();
  };

  const handleIndicator = (index: number) => {
    pauseAfterInteraction();
    showSlide(index);
  };

  const handleTouchStart = (
    event: TouchEvent<HTMLElement>,
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (
    event: TouchEvent<HTMLElement>,
  ) => {
    const startX = touchStartX.current;
    const endX =
      event.changedTouches[0]?.clientX ?? null;

    touchStartX.current = null;

    if (startX === null || endX === null) {
      return;
    }

    const distance = startX - endX;

    if (Math.abs(distance) < 45) {
      return;
    }

    pauseAfterInteraction();

    if (distance > 0) {
      showNextSlide();
    } else {
      showPreviousSlide();
    }
  };

  return (
    <section
      id="home"
      aria-label="The Machine Painting Co Ltd introduction"
      className="relative h-[calc(100svh-79px)] min-h-[560px] w-full overflow-hidden bg-[#043079]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;
        const isPrevious = previousIndex === index;

        const incomingX =
          direction === "next"
            ? "-translate-x-[42px]"
            : "translate-x-[42px]";

        const mobileIncomingX =
          direction === "next"
            ? "-translate-x-[26px]"
            : "translate-x-[26px]";

        return (
          <article
            key={slide.id}
            aria-hidden={!isActive}
            className={[
              "absolute inset-0",
              reducedMotion
                ? "transition-none"
                : "transition-opacity duration-[2200ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
              isActive
                ? "pointer-events-auto z-10 opacity-100"
                : isPrevious
                  ? "pointer-events-none z-20 opacity-0"
                  : "pointer-events-none z-0 opacity-0",
            ].join(" ")}
          >
            {/* MOBILE PORTRAIT IMAGE */}
            <div
              className={[
                "absolute inset-0 bg-[#dbe5f1] md:hidden",
                reducedMotion
                  ? "transition-none"
                  : "transition-[transform,opacity] duration-[2400ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                isActive
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                  : isPrevious
                    ? "translate-x-0 translate-y-0 scale-100 opacity-0"
                    : `${mobileIncomingX} translate-y-4 scale-[1.006] opacity-0`,
              ].join(" ")}
            >
              <Image
                src={slide.mobileImage}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* DESKTOP LANDSCAPE IMAGE */}
            <div
              className={[
                "absolute inset-0 hidden bg-[#043079] md:block",
                reducedMotion
                  ? "transition-none"
                  : "transition-[transform,opacity] duration-[2400ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                isActive
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                  : isPrevious
                    ? "translate-x-0 translate-y-0 scale-100 opacity-0"
                    : `${incomingX} translate-y-5 scale-[1.006] opacity-0`,
              ].join(" ")}
            >
              <Image
                src={slide.desktopImage}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* SHARED BLUE TREATMENT */}
            <div className="pointer-events-none absolute inset-0 bg-[#043079]/38" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,48,121,0.88)_0%,rgba(4,48,121,0.70)_28%,rgba(4,48,121,0.32)_58%,rgba(4,48,121,0.12)_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02275f]/38 via-transparent to-transparent" />

            {/* MOBILE TEXT BLOCK */}
            <div className="relative z-20 h-full md:hidden">
              <div className="w-[78%] max-w-[330px] px-5 pt-[clamp(36px,5.5vh,54px)]">
                {/* EYEBROW */}
                <div
                  className={[
                    "flex items-center gap-3",
                    reducedMotion
                      ? "transition-none"
                      : "transition-[transform,opacity] duration-[1650ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                    isActive
                      ? "translate-x-0 opacity-100 delay-[250ms]"
                      : isPrevious
                        ? "translate-x-0 opacity-0"
                        : `${mobileIncomingX} opacity-0`,
                  ].join(" ")}
                >
                  <span className="h-[3px] w-9 shrink-0 bg-[#cc0f06]" />

                  <p className="text-[8px] font-extrabold uppercase leading-4 tracking-[0.15em] text-[#f5b400] min-[390px]:text-[9px]">
                    {slide.eyebrow}
                  </p>
                </div>

                {/* TITLE */}
                <h1 className="mt-3 font-extrabold leading-[1.01] tracking-[-0.035em] text-white">
                  <span
                    className={[
                      "block text-[27px] min-[390px]:text-[29px]",
                      reducedMotion
                        ? "transition-none"
                        : "transition-[transform,opacity] duration-[1750ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                      isActive
                        ? "translate-x-0 opacity-100 delay-[400ms]"
                        : isPrevious
                          ? "translate-x-0 opacity-0"
                          : `${mobileIncomingX} opacity-0`,
                    ].join(" ")}
                  >
                    {slide.mobileTitle ??
                      slide.title}
                  </span>

                  <span
                    className={[
                      "block whitespace-nowrap text-[25px] text-[#f5b400] min-[390px]:text-[27px]",
                      reducedMotion
                        ? "transition-none"
                        : "transition-[transform,opacity] duration-[1800ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                      isActive
                        ? "translate-x-0 opacity-100 delay-[520ms]"
                        : isPrevious
                          ? "translate-x-0 opacity-0"
                          : `${mobileIncomingX} opacity-0`,
                    ].join(" ")}
                  >
                    {slide.mobileHighlightedTitle ??
                      slide.highlightedTitle}
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className={[
                    "mt-3 max-w-[300px] text-[12px] leading-[19px] text-white/92 min-[390px]:text-[12.5px]",
                    reducedMotion
                      ? "transition-none"
                      : "transition-[transform,opacity] duration-[1800ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                    isActive
                      ? "translate-x-0 opacity-100 delay-[680ms]"
                      : isPrevious
                        ? "translate-x-0 opacity-0"
                        : `${mobileIncomingX} opacity-0`,
                  ].join(" ")}
                >
                  {slide.mobileDescription ??
                    slide.description}
                </p>
              </div>
            </div>

            {/* DESKTOP CONTENT BLOCK */}
            <div className="relative z-20 mx-auto hidden h-full w-full max-w-[1220px] items-center px-14 xl:px-0 md:flex">
              <div className="w-full max-w-[580px]">
                {/* EYEBROW */}
                <div
                  className={[
                    "flex items-center gap-3",
                    reducedMotion
                      ? "transition-none"
                      : "transition-[transform,opacity] duration-[1650ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                    isActive
                      ? "translate-x-0 opacity-100 delay-[250ms]"
                      : isPrevious
                        ? "translate-x-0 opacity-0"
                        : `${incomingX} opacity-0`,
                  ].join(" ")}
                >
                  <span className="h-[3px] w-11 shrink-0 bg-[#cc0f06]" />

                  <p className="text-[11px] font-extrabold uppercase leading-4 tracking-[0.16em] text-[#f5b400]">
                    {slide.eyebrow}
                  </p>
                </div>

                {/* TITLE */}
                <h1 className="mt-5 font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
                  <span
                    className={[
                      "block text-[47px]",
                      reducedMotion
                        ? "transition-none"
                        : "transition-[transform,opacity] duration-[1750ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                      isActive
                        ? "translate-x-0 opacity-100 delay-[400ms]"
                        : isPrevious
                          ? "translate-x-0 opacity-0"
                          : `${incomingX} opacity-0`,
                    ].join(" ")}
                  >
                    {slide.title}
                  </span>

                  <span
                    className={[
                      "block text-[47px] text-[#f5b400]",
                      reducedMotion
                        ? "transition-none"
                        : "transition-[transform,opacity] duration-[1800ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                      isActive
                        ? "translate-x-0 opacity-100 delay-[520ms]"
                        : isPrevious
                          ? "translate-x-0 opacity-0"
                          : `${incomingX} opacity-0`,
                    ].join(" ")}
                  >
                    {slide.highlightedTitle}
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className={[
                    "mt-5 max-w-[530px] text-[15px] leading-[25px] text-white/92",
                    reducedMotion
                      ? "transition-none"
                      : "transition-[transform,opacity] duration-[1800ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                    isActive
                      ? "translate-x-0 opacity-100 delay-[680ms]"
                      : isPrevious
                        ? "translate-x-0 opacity-0"
                        : `${incomingX} opacity-0`,
                  ].join(" ")}
                >
                  {slide.description}
                </p>

                {/* BUTTONS */}
                <div
                  className={[
                    "mt-7 flex flex-wrap gap-3",
                    reducedMotion
                      ? "transition-none"
                      : "transition-[transform,opacity] duration-[1750ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                    isActive
                      ? "translate-x-0 opacity-100 delay-[850ms]"
                      : isPrevious
                        ? "translate-x-0 opacity-0"
                        : `${incomingX} opacity-0`,
                  ].join(" ")}
                >
                  <a
                    href={slide.primaryHref}
                    className="inline-flex min-h-12 items-center justify-center bg-[#f5b400] px-7 text-[15px] font-bold text-[#043079] transition hover:bg-[#ffc62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {slide.primaryLabel}

                    <span
                      aria-hidden="true"
                      className="ml-2"
                    >
                      →
                    </span>
                  </a>

                  <a
                    href={slide.secondaryHref}
                    className="inline-flex min-h-12 items-center justify-center border border-white/80 bg-transparent px-7 text-[15px] font-bold text-white transition hover:bg-white hover:text-[#043079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {slide.secondaryLabel}
                  </a>
                </div>

                {/* TAGS */}
                <div
                  className={[
                    "mt-7 flex flex-wrap gap-x-6 gap-y-3",
                    reducedMotion
                      ? "transition-none"
                      : "transition-[transform,opacity] duration-[1700ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                    isActive
                      ? "translate-x-0 opacity-100 delay-[1000ms]"
                      : isPrevious
                        ? "translate-x-0 opacity-0"
                        : `${incomingX} opacity-0`,
                  ].join(" ")}
                >
                  {slide.tags.map((tag) => (
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

            {/* MOBILE CTA ROW */}
            <div
              className={[
                "absolute bottom-[82px] left-5 right-5 z-30 grid grid-cols-2 gap-2 md:hidden",
                reducedMotion
                  ? "transition-none"
                  : "transition-[transform,opacity] duration-[1750ms] ease-[cubic-bezier(0.45,0,0.55,1)]",
                isActive
                  ? "translate-y-0 opacity-100 delay-[850ms]"
                  : isPrevious
                    ? "translate-y-0 opacity-0"
                    : "translate-y-3 opacity-0",
              ].join(" ")}
            >
              <a
                href={slide.primaryHref}
                className="inline-flex min-h-11 items-center justify-center bg-[#f5b400] px-3 text-center text-[11px] font-bold text-[#043079] transition hover:bg-[#ffc62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {slide.primaryLabel}
              </a>

              <a
                href={slide.secondaryHref}
                className="inline-flex min-h-11 items-center justify-center border border-white/85 bg-[#043079]/10 px-3 text-center text-[11px] font-bold text-white transition hover:bg-white hover:text-[#043079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {slide.secondaryLabel}
              </a>
            </div>
          </article>
        );
      })}

      {/* DESKTOP SIDE ARROWS */}
      <button
        type="button"
        onClick={handlePrevious}
        aria-label="Show previous hero slide"
        className="absolute left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/55 bg-[#043079]/48 text-white transition hover:border-[#f5b400] hover:bg-[#f5b400] hover:text-[#043079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:grid"
      >
        <ChevronLeft
          aria-hidden="true"
          className="h-6 w-6"
        />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Show next hero slide"
        className="absolute right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/55 bg-[#043079]/48 text-white transition hover:border-[#f5b400] hover:bg-[#f5b400] hover:text-[#043079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:grid"
      >
        <ChevronRight
          aria-hidden="true"
          className="h-6 w-6"
        />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() =>
                handleIndicator(index)
              }
              aria-label={`Show hero slide ${
                index + 1
              }`}
              aria-current={
                isActive ? "true" : undefined
              }
              className={[
                "h-[4px] transition-all duration-500",
                isActive
                  ? "w-11 bg-[#f5b400]"
                  : "w-6 bg-white/65 hover:bg-white",
              ].join(" ")}
            />
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-[3px] w-full bg-[#cc0f06]" />
    </section>
  );
}