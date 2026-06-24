const faqs = [
  {
    question: "What does The Machine Painting Co Ltd do?",
    answer:
      "The Machine Painting Co Ltd provides professional painting and finishing services, including interior painting, exterior painting, machine spray painting, wall skimming and surface preparation, commercial painting, and renovation painting.",
  },
  {
    question: "Do you offer site visits before quotation?",
    answer:
      "Yes. Site assessment is available before the final quotation. This helps the team understand the surface condition, access, preparation work required, measurements, and project scope.",
  },
  {
    question: "Can I request both a quotation and a site visit?",
    answer:
      "Yes. The website form supports both quotation requests and site visit bookings. You can select the request type, service needed, project location, preferred date, and project details.",
  },
  {
    question: "What is machine spray painting?",
    answer:
      "Machine spray painting uses spray painting equipment to apply paint more evenly and efficiently, especially on larger surfaces. It helps achieve a smoother and more consistent finish compared to ordinary manual application.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. The company supports homes, apartments, offices, buildings, warehouses, commercial spaces, and renovation projects.",
  },
  {
    question: "What paint packages are available?",
    answer:
      "The key packages include One Day Painting, Commercial Painting, and Paint for Free. The right package depends on your project scope, timeline, surface condition, and finish expectations.",
  },
  {
    question: "Can painters register with the company?",
    answer:
      "Yes. Painters and skilled crew members can register through the Join Us page. Applicants are asked to provide their details and select exactly two skill areas.",
  },
  {
    question: "How do I watch project videos?",
    answer:
      "Visit the Projects page and click any project thumbnail. The project videos open on YouTube, including Westlands Office Renovations, Kihingo Village Kitsuru Villa, and Kileleshwa Apartment 360 Renovations.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#cc0f06]">
            FAQs
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] text-[#043079] md:text-5xl">
            Common Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Quick answers about quotations, site visits, painting services, packages,
            projects, and painter registration.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-[#043079]/10 bg-[#f8f8f5] p-5 shadow-sm open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black tracking-[-0.03em] text-[#043079]">
                {faq.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f5b400]/20 text-[#043079] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}