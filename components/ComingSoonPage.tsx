import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

type ComingSoonPageProps = {
  title: string;
  description: string;
};

const whatsappMessage = encodeURIComponent(
  "Hello The Machine Painting Co Ltd, I would like to request a painting quote."
);

export default function ComingSoonPage({
  title,
  description,
}: ComingSoonPageProps) {
  return (
    <main className="overflow-hidden bg-white pt-[76px] text-[#07162d]">
      <Navbar />

      <section className="bg-[#07162d] px-5 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#67edd8]">
            Page Coming Soon
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            {description}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center bg-[#f97316] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white hover:bg-[#ea580c]"
            >
              Back to Home
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/70 px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white hover:border-[#f97316] hover:bg-[#f97316]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <ContactSection whatsappMessage={whatsappMessage} />
    </main>
  );
}