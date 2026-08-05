"use client";

import { ArrowRight, Calculator } from "lucide-react";
import { useMemo, useState } from "react";

export default function EstimatorSection() {
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("3");
  const [surface, setSurface] = useState("interior");
  const [finish, setFinish] = useState("standard");

  const estimate = useMemo(() => {
    const parsedWidth = Math.max(Number(width) || 0, 0);
    const parsedHeight = Math.max(Number(height) || 0, 0);

    const baseRates: Record<string, number> = {
      standard: 300,
      premium: 450,
      decorative: 700,
      roof: 350,
    };

    const multipliers: Record<string, number> = {
      interior: 1,
      exterior: 1.15,
      roof: 1.2,
      mural: 1.8,
    };

    return Math.round(
      parsedWidth *
        parsedHeight *
        (baseRates[finish] || 300) *
        (multipliers[surface] || 1),
    );
  }, [width, height, surface, finish]);

  const fieldClass =
    "mt-1.5 w-full min-w-0 border border-[#043079]/14 bg-[#f7f9fc] px-3 py-2.5 text-[13px] text-[#043079] outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-2 focus:ring-[#f5b400]/20 sm:px-4 sm:py-3.5 sm:text-[14px]";

  return (
    <section
      id="calculator"
      className="bg-[#f4f7fb] px-4 py-10 sm:px-5 sm:py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#cc0f06] sm:text-[11px] sm:tracking-[0.25em]">
            Instant Quote Guide
          </p>

          <h2 className="mt-2 text-[26px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#043079] sm:mt-3 sm:text-[30px] md:text-[33px]">
            Plan Your Painting Budget
          </h2>

          <p className="mx-auto mt-2 max-w-[620px] text-[12px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
            Enter approximate dimensions and your preferred finish for an
            instant working estimate.
          </p>
        </div>

        {/* MOBILE ESTIMATOR */}
        <div className="mx-auto mt-6 max-w-[520px] border border-[#043079]/12 bg-white p-4 shadow-[0_18px_45px_rgba(4,48,121,0.08)] sm:hidden">
          <div className="grid grid-cols-2 gap-3">
            <label className="min-w-0 text-[10px] font-bold text-[#043079]">
              Width (m)
              <input
                value={width}
                onChange={(event) => setWidth(event.target.value)}
                inputMode="decimal"
                className={fieldClass}
              />
            </label>

            <label className="min-w-0 text-[10px] font-bold text-[#043079]">
              Height (m)
              <input
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                inputMode="decimal"
                className={fieldClass}
              />
            </label>

            <label className="min-w-0 text-[10px] font-bold text-[#043079]">
              Surface
              <select
                value={surface}
                onChange={(event) => setSurface(event.target.value)}
                className={fieldClass}
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
                <option value="roof">Roof</option>
                <option value="mural">Mural</option>
              </select>
            </label>

            <label className="min-w-0 text-[10px] font-bold text-[#043079]">
              Finish
              <select
                value={finish}
                onChange={(event) => setFinish(event.target.value)}
                className={fieldClass}
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="decorative">Decorative</option>
                <option value="roof">Roof Coating</option>
              </select>
            </label>
          </div>

          <div className="mt-4 border-t-[3px] border-[#f5b400] bg-[#0453b1] px-4 py-4 text-white">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[8px] font-extrabold uppercase tracking-[0.17em] text-white/65">
                  Estimated Cost
                </p>

                <p className="mt-1 text-[27px] font-extrabold tracking-[-0.04em] text-[#f5b400]">
                  KES {estimate.toLocaleString()}
                </p>
              </div>

              <Calculator
                aria-hidden="true"
                className="mb-1 h-6 w-6 shrink-0 text-[#f5b400]"
              />
            </div>

            <p className="mt-1.5 text-[9px] leading-4 text-white/70">
              Final pricing depends on preparation, access and site condition.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href="#quote"
                className="inline-flex min-h-10 items-center justify-center bg-[#f5b400] px-2 text-center text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#043079]"
              >
                Request Quote
              </a>

              <a
                href="#site-visit"
                className="inline-flex min-h-10 items-center justify-center border border-white/45 px-2 text-center text-[9px] font-extrabold uppercase tracking-[0.08em] text-white"
              >
                Site Visit
              </a>
            </div>
          </div>
        </div>

        {/* TABLET AND DESKTOP ESTIMATOR */}
        <div className="mt-10 hidden overflow-hidden border border-[#043079]/12 bg-white shadow-[0_24px_65px_rgba(4,48,121,0.09)] sm:grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-8 lg:p-11">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[12px] font-bold text-[#043079]">
                Wall Width (metres)
                <input
                  value={width}
                  onChange={(event) => setWidth(event.target.value)}
                  inputMode="decimal"
                  className={fieldClass}
                />
              </label>

              <label className="text-[12px] font-bold text-[#043079]">
                Wall Height (metres)
                <input
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  inputMode="decimal"
                  className={fieldClass}
                />
              </label>

              <label className="text-[12px] font-bold text-[#043079]">
                Surface Type
                <select
                  value={surface}
                  onChange={(event) => setSurface(event.target.value)}
                  className={fieldClass}
                >
                  <option value="interior">Interior Wall</option>
                  <option value="exterior">Exterior Wall</option>
                  <option value="roof">Roof Surface</option>
                  <option value="mural">Decorative / Mural Surface</option>
                </select>
              </label>

              <label className="text-[12px] font-bold text-[#043079]">
                Finish Type
                <select
                  value={finish}
                  onChange={(event) => setFinish(event.target.value)}
                  className={fieldClass}
                >
                  <option value="standard">Standard Finish</option>
                  <option value="premium">Premium Finish</option>
                  <option value="decorative">Decorative Finish</option>
                  <option value="roof">Roof Coating</option>
                </select>
              </label>
            </div>

            <div className="mt-7">
              <a
                href="#quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#f5b400] px-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:bg-[#ffc62f]"
              >
                Request Detailed Quotation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden bg-[#0453b1] p-9 text-white lg:p-11">
            <div className="absolute right-0 top-0 h-0 w-0 border-l-[70px] border-t-[70px] border-l-transparent border-t-[#f5b400]" />

            <Calculator className="h-8 w-8 text-[#f5b400]" />

            <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/65">
              Estimated Cost
            </p>

            <p className="mt-2 text-[38px] font-extrabold tracking-[-0.04em] text-[#f5b400]">
              KES {estimate.toLocaleString()}
            </p>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-white/76">
              This is a planning estimate. Final pricing depends on surface
              condition, access, preparation work, paint system and site
              assessment.
            </p>

            <div className="mt-7 flex flex-col gap-3 xl:flex-row">
              <a
                href="#quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#f5b400] px-6 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#043079] transition hover:bg-[#ffc62f]"
              >
                Request Quotation
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#site-visit"
                className="inline-flex min-h-12 items-center justify-center border border-white/45 px-6 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#043079]"
              >
                Book Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}