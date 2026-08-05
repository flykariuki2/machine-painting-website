import Image from "next/image";
import Link from "next/link";

const whatsappMessage = encodeURIComponent(
  "Hello The Machine Painting Co Ltd, I would like to make an enquiry.",
);

const whatsappLink = `https://wa.me/254785285828?text=${whatsappMessage}`;

const facebookLink =
  "https://web.facebook.com/profile.php?id=100090852834284";

const instagramLink =
  "https://www.instagram.com/the_machine_painting_kenya/";

const youtubeLink =
  "https://www.youtube.com/@themachinepaintingcompany";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-[#043079] px-5 pt-12 text-white md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 border-b border-white/10 pb-9 lg:grid-cols-[1.05fr_1fr_0.85fr_0.85fr]">
        <div>
          <div className="inline-flex rounded-sm bg-white p-3">
            <Image
              src="/machine/logo7.png"
              alt="The Machine Painting Co Ltd logo"
              width={170}
              height={76}
              className="h-[76px] w-[170px] object-contain"
            />
          </div>

          <h3 className="mt-5 max-w-xs text-sm font-extrabold leading-6 text-white">
            Professional Spray Painting &amp; Finishing
          </h3>

          <p className="mt-3 max-w-xs text-[13px] leading-6 text-slate-300">
            Helping homeowners, businesses, contractors, and property managers
            achieve clean, smooth, and durable wall finishes.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact The Machine Painting on WhatsApp"
              className="grid h-8 w-8 place-items-center border border-white/20 text-xs text-white transition-colors hover:border-[#f5b400] hover:text-[#f5b400]"
            >
              ↗
            </a>

            <a
              href={youtubeLink}
              target="_blank"
              rel="noreferrer"
              aria-label="The Machine Painting on YouTube"
              className="grid h-8 w-8 place-items-center border border-white/20 text-xs text-white transition-colors hover:border-[#f5b400] hover:text-[#f5b400]"
            >
              ▶
            </a>

            <Link
              href="/gallery"
              aria-label="View The Machine Painting gallery"
              className="grid h-8 w-8 place-items-center border border-white/20 text-xs text-white transition-colors hover:border-[#f5b400] hover:text-[#f5b400]"
            >
              ▣
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
            Contact
          </h4>

          <div className="space-y-3 text-[13px] leading-6 text-slate-200">
            <p>
              <span className="font-extrabold text-white">Head Office:</span>
              <br />
              Kasuku Villas
              <br />
              Umoja Road off Magadi Road
              <br />
              Nairobi, Kenya
            </p>

            <p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="font-extrabold text-white transition-colors hover:text-[#f5b400]"
              >
                WhatsApp: 0785 285 828
              </a>

              <br />

              <a
                href="tel:+254785285828"
                className="transition-colors hover:text-[#f5b400]"
              >
                Call: 0785 285 828
              </a>

              <br />

              <a
                href="tel:+254719383020"
                className="transition-colors hover:text-[#f5b400]"
              >
                Tel: +254 719 383 020
              </a>

              <br />

              <a
                href="tel:+254720945088"
                className="transition-colors hover:text-[#f5b400]"
              >
                Tel: +254 720 945 088
              </a>
            </p>

            <p>
              <a
                href="mailto:info@themachinepainting.com"
                className="block break-all font-extrabold text-white transition-colors hover:text-[#f5b400]"
              >
                info@themachinepainting.com
              </a>

              <a
                href="mailto:themachinepainting@gmail.com"
                className="block break-all transition-colors hover:text-[#f5b400]"
              >
                cc: themachinepainting@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
            Company
          </h4>

          <nav
            aria-label="Footer company links"
            className="space-y-2.5 text-[13px] text-slate-200"
          >
            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/"
            >
              Home
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/about"
            >
              About Us
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/paint-packages"
            >
              Paint Packages
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/gallery"
            >
              Gallery
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/projects"
            >
              Projects
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/contact-us#quote"
            >
              Get a Quotation
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/contact-us#site-visit"
            >
              Site Visit
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/careers"
            >
              Join Us
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/contact-us"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
            Social Media
          </h4>

          <div className="space-y-2.5 text-[13px] text-slate-200">
            <a
              className="block transition-colors hover:text-[#f5b400]"
              href={youtubeLink}
              target="_blank"
              rel="noreferrer"
            >
              YouTube: The Machine Painting Co Ltd
            </a>

            <a
              className="block transition-colors hover:text-[#f5b400]"
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              Facebook: The Machine Painting Co Ltd
            </a>

            <p>
              Twitter/X:{" "}
              <span className="font-semibold text-white">
                @TheMachinePaint
              </span>
            </p>

            <a
              className="block transition-colors hover:text-[#f5b400]"
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
            >
              Instagram: the_machine_painting_kenya
            </a>
          </div>

          <div className="mt-6 space-y-2 text-[13px] text-slate-200">
            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-4 text-[11px] text-slate-400">
        © 2026 The Machine Painting Co Ltd. Beautiful Structures, Sprayed
        Perfectly.
      </div>
    </footer>
  );
}