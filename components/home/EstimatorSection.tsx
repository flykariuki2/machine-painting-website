"use client";

import { useMemo, useState } from "react";

type SurfaceType = "wall" | "ceiling";

const WALL_RATE = 350;
const CEILING_RATE = 300;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-KE", {
    maximumFractionDigits: 0,
  }).format(value);

export default function EstimatorSection() {
  const [surfaceType, setSurfaceType] =
    useState<SurfaceType>("wall");

  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("4");
  const [height, setHeight] = useState("3");
  const [quantity, setQuantity] = useState("1");

  const calculation = useMemo(() => {
    const lengthValue = Math.max(Number(length) || 0, 0);
    const widthValue = Math.max(Number(width) || 0, 0);
    const heightValue = Math.max(Number(height) || 0, 0);
    const quantityValue = Math.max(Number(quantity) || 0, 0);

    const area =
      surfaceType === "wall"
        ? ((lengthValue + widthValue) * 2) *
          heightValue *
          quantityValue
        : lengthValue * widthValue * quantityValue;

    const rate =
      surfaceType === "wall" ? WALL_RATE : CEILING_RATE;

    return {
      area,
      rate,
      total: area * rate,
    };
  }, [surfaceType, length, width, height, quantity]);

  return (
    <section
      id="quote"
      className="bg-[#f7f9fc] px-5 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#cc0f06] md:text-[11px]">
            Instant Quote Guide
          </p>

          <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] md:text-[33px]">
            Plan Your Painting Budget
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-6 text-slate-600 md:mt-4 md:text-[15px] md:leading-7">
            Enter your room dimensions to see the estimated paintable area and
            working painting cost instantly.
          </p>
        </div>

        <div className="mx-auto mt-7 grid max-w-[980px] overflow-hidden border border-[#043079]/10 bg-white shadow-[0_18px_45px_rgba(4,48,121,0.08)] md:mt-10 md:grid-cols-[1.18fr_0.82fr]">
          {/* INPUTS */}
          <div className="p-5 md:p-8">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSurfaceType("wall")}
                className={[
                  "min-h-11 border text-[11px] font-extrabold transition",
                  surfaceType === "wall"
                    ? "border-[#043079] bg-[#043079] text-white"
                    : "border-[#043079]/15 bg-white text-[#043079]",
                ].join(" ")}
              >
                Wall
              </button>

              <button
                type="button"
                onClick={() => setSurfaceType("ceiling")}
                className={[
                  "min-h-11 border text-[11px] font-extrabold transition",
                  surfaceType === "ceiling"
                    ? "border-[#043079] bg-[#043079] text-white"
                    : "border-[#043079]/15 bg-white text-[#043079]",
                ].join(" ")}
              >
                Ceiling
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:mt-6">
              <label className="grid gap-1.5 text-[11px] font-extrabold text-[#043079]">
                Length (m)
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={length}
                  onChange={(event) => setLength(event.target.value)}
                  className="h-11 w-full border border-[#043079]/15 bg-[#f8fafc] px-3 text-[14px] font-bold text-[#043079] outline-none transition focus:border-[#f5b400]"
                />
              </label>

              <label className="grid gap-1.5 text-[11px] font-extrabold text-[#043079]">
                Width (m)
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={width}
                  onChange={(event) => setWidth(event.target.value)}
                  className="h-11 w-full border border-[#043079]/15 bg-[#f8fafc] px-3 text-[14px] font-bold text-[#043079] outline-none transition focus:border-[#f5b400]"
                />
              </label>

              {surfaceType === "wall" && (
                <label className="grid gap-1.5 text-[11px] font-extrabold text-[#043079]">
                  Height (m)
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    className="h-11 w-full border border-[#043079]/15 bg-[#f8fafc] px-3 text-[14px] font-bold text-[#043079] outline-none transition focus:border-[#f5b400]"
                  />
                </label>
              )}

              <label className="grid gap-1.5 text-[11px] font-extrabold text-[#043079]">
                Quantity
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  className="h-11 w-full border border-[#043079]/15 bg-[#f8fafc] px-3 text-[14px] font-bold text-[#043079] outline-none transition focus:border-[#f5b400]"
                />
              </label>
            </div>

            <p className="mt-4 text-[10px] leading-4 text-slate-500">
              {surfaceType === "wall"
                ? "Wall area = ((Length + Width) × 2) × Height × Quantity"
                : "Ceiling area = Length × Width × Quantity"}
            </p>
          </div>

          {/* LIVE RESULT */}
          <div className="flex flex-col justify-center bg-[#043079] p-5 text-white md:p-8">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f5b400]">
              Live Working Estimate
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="border border-white/12 bg-white/[0.055] p-4">
                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
                  Paintable Area
                </span>

                <strong className="mt-1 block text-[25px] font-extrabold text-white">
                  {calculation.area.toFixed(1)}
                  <span className="ml-1 text-[12px] text-white/65">
                    sqm
                  </span>
                </strong>
              </div>

              <div className="border border-white/12 bg-white/[0.055] p-4">
                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
                  Rate
                </span>

                <strong className="mt-1 block text-[20px] font-extrabold text-[#f5b400]">
                  KSh {calculation.rate}
                </strong>

                <span className="text-[10px] text-white/55">
                  per sqm
                </span>
              </div>
            </div>

            <div className="mt-3 border-l-[4px] border-[#f5b400] bg-[#0b4b9e] p-4">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/65">
                Estimated Painting Cost
              </span>

              <strong className="mt-1 block text-[29px] font-extrabold tracking-[-0.035em] text-[#f5b400] md:text-[34px]">
                KSh {formatCurrency(calculation.total)}
              </strong>
            </div>

            <p className="mt-3 text-[10px] leading-4 text-white/55">
              This is a working guide. Final pricing may change after surface,
              preparation, access, and site requirements are assessed.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex min-h-11 items-center justify-center bg-[#f5b400] px-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#043079] transition hover:bg-white"
            >
              Request Detailed Quotation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}