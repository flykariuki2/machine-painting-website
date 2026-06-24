"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const skills = [
  "Interior & Exterior Wall Painting",
  "Special Effect",
  "Wallmaster",
  "Masonry Works",
  "Sprayer",
  "Skimming",
  "Electrical Works",
  "Plumbing Works",
];

const expectations = [
  {
    title: "Reliable Site Teams",
    text: "We are building a database of painters and skilled tradespeople who can be considered for future projects.",
  },
  {
    title: "Clear Skill Matching",
    text: "Applicants must select exactly two skill areas so the company can match people to the right type of work.",
  },
  {
    title: "Project-Based Opportunities",
    text: "Suitable applicants may be contacted when a project requires their skill set, location, and availability.",
  },
];

export default function CareersPage() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [county, setCounty] = useState("");
  const [estate, setEstate] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const whatsappMessage = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to ask about painter registration."
  );

  const canSubmit =
    fullName.trim() &&
    age.trim() &&
    county.trim() &&
    estate.trim() &&
    phone.trim() &&
    selectedSkills.length === 2 &&
    !submitting;

  function toggleSkill(skill: string) {
    setSelectedSkills((current) => {
      if (current.includes(skill)) {
        return current.filter((item) => item !== skill);
      }

      if (current.length >= 2) {
        return current;
      }

      return [...current, skill];
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setFeedback("Please fill all fields and select exactly two skills.");
      return;
    }

    const webhookUrl = process.env.NEXT_PUBLIC_PAINTER_REGISTRATION_WEBHOOK;

    if (!webhookUrl) {
      setFeedback("Form is ready. Add the n8n webhook URL to activate submissions.");
      return;
    }

    setSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submitted_at: new Date().toISOString(),
          name: fullName.trim(),
          age: age.trim(),
          county: county.trim(),
          estate: estate.trim(),
          phone_number: phone.trim(),
          skill_1: selectedSkills[0],
          skill_2: selectedSkills[1],
          status: "new",
          source: "website_join_us_form",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFeedback("Application submitted successfully.");
      setFullName("");
      setAge("");
      setCounty("");
      setEstate("");
      setPhone("");
      setSelectedSkills([]);
    } catch {
      setFeedback("Submission failed. Please try again or contact the company directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="overflow-hidden bg-[#f8f8f5] pt-[76px] text-[#043079]">
      <Navbar />

      <section className="bg-[#043079] px-5 py-14 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f5b400]">
            Join Us
          </p>

          <h1 className="max-w-4xl text-[38px] font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">
            Register as a Painter or Skilled Crew Member
          </h1>

          <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/80">
            The Machine Painting Co Ltd is building a painter and crew database
            for future project opportunities. Submit your details and select
            exactly two skill areas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#register"
              className="inline-flex items-center justify-center bg-[#cc0f06] px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a90d06]"
            >
              Register Now
            </a>

            <a
              href="#requirements"
              className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#043079]"
            >
              View Requirements
            </a>
          </div>
        </div>
      </section>

      <section id="requirements" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Painter Database
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              Help us understand your county, estate, contact details, and strongest skills.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              This registration helps the company keep an organized record of
              painters and skilled tradespeople who may be considered for future
              painting, finishing, repair, and site support work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {expectations.map((item) => (
              <article
                key={item.title}
                className="border border-[#043079]/10 bg-[#f8f8f5] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cc0f06] hover:shadow-xl"
              >
                <div className="mb-6 h-1 w-12 bg-[#f5b400]" />

                <h3 className="text-xl font-black tracking-[-0.03em] text-[#043079]">
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

      <section id="register" className="bg-[#f8f8f5] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
              Register as a Painter
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
              Submit your details for future project consideration.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Fill in your details carefully. The skill set section allows
              exactly two selections, as requested by the company.
            </p>

            <div className="mt-7 border-l-4 border-[#f5b400] bg-white p-5 text-sm leading-7 text-slate-600">
              <strong className="block text-[#043079]">Important:</strong>
              Select exactly two skills. You cannot submit with fewer or more
              than two skill areas.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 text-slate-800 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Name"
                className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
              />

              <input
                value={age}
                onChange={(event) => setAge(event.target.value)}
                placeholder="Age"
                inputMode="numeric"
                className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
              />

              <input
                value={county}
                onChange={(event) => setCounty(event.target.value)}
                placeholder="County"
                className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
              />

              <input
                value={estate}
                onChange={(event) => setEstate(event.target.value)}
                placeholder="Estate You Live In"
                className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
              />

              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Tel No."
                className="h-11 border border-[#043079]/30 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400] sm:col-span-2"
              />
            </div>

            <div className="mt-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black text-[#043079]">Skill Set</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Select exactly two skills.
                  </p>
                </div>

                <span
                  className={`text-xs font-extrabold ${
                    selectedSkills.length === 2 ? "text-[#043079]" : "text-[#cc0f06]"
                  }`}
                >
                  {selectedSkills.length}/2 selected
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => {
                  const checked = selectedSkills.includes(skill);
                  const disabled = !checked && selectedSkills.length >= 2;

                  return (
                    <label
                      key={skill}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm font-semibold transition ${
                        checked
                          ? "border-[#043079] bg-[#f5b400]/15 text-[#043079]"
                          : disabled
                            ? "border-slate-200 bg-slate-50 text-slate-400"
                            : "border-[#043079]/20 bg-white text-slate-700 hover:border-[#cc0f06]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={() => toggleSkill(skill)}
                        className="h-4 w-4 accent-[#cc0f06]"
                      />
                      {skill}
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`mt-6 inline-flex w-full items-center justify-center px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors duration-200 ${
                canSubmit
                  ? "bg-[#043079] text-white hover:bg-[#f5b400] hover:text-[#043079]"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>

            {feedback && (
              <p className="mt-3 text-center text-xs font-semibold leading-5 text-[#043079]">
                {feedback}
              </p>
            )}

            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              Suitable applicants may be contacted when a relevant project
              opportunity is available.
            </p>
          </form>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}