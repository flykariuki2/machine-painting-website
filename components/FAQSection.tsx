const faqs = [
  ["What does The Machine Painting Co Ltd do?", "We provide interior and exterior painting, machine spray painting, wall skimming and surface preparation, commercial painting, and renovation painting."],
  ["Do you offer site visits before quotation?", "Yes. A site assessment helps us understand measurements, surface condition, access, preparation work, and the full project scope before final pricing."],
  ["What is machine spray painting?", "It uses professional spray equipment to apply paint efficiently and evenly, especially across larger surfaces, helping achieve a smooth and consistent finish."],
  ["Do you handle residential and commercial projects?", "Yes. We support homes, apartments, offices, buildings, warehouses, commercial spaces, and renovation projects."],
  ["What paint packages are available?", "Our packages include One Day Painting, Commercial Painting, and Paint for Free. The best option depends on your scope, timeline, surface condition, and finish expectations."],
];

export default function FAQSection() {
  return <section className="section-shell bg-[#f4f6f9]"><div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><p className="eyebrow">Frequently Asked Questions</p><h2 className="section-title">Practical Answers Before You Begin</h2><p className="mt-5 text-[15px] leading-[25px] text-[#6f8094]">Still need clarity? Send us your location and project details for direct guidance.</p></div><div className="border-t border-[#043079]/14">{faqs.map(([question,answer])=><details key={question} className="group border-b border-[#043079]/14 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[18px] font-bold text-[#043079]"><span>{question}</span><span className="grid h-8 w-8 shrink-0 place-items-center bg-white text-[#cc0f06] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-[15px] leading-[25px] text-[#6f8094]">{answer}</p></details>)}</div></div></section>;
}
