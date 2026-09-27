import Image from "next/image";
import Link from "next/link";

const whatsappMessage = encodeURIComponent(
  "Hello The Machine Painting Co Ltd, I would like to make an enquiry.",
);

const whatsappLink = `https://wa.me/254785285828?text=${whatsappMessage}`;
const facebookLink = "https://web.facebook.com/profile.php?id=100090852834284";
const instagramLink = "https://www.instagram.com/the_machine_painting_kenya/";
const youtubeLink = "https://www.youtube.com/@themachinepaintingcompany";
const twitterLink = "https://x.com/TheMachinePaint";

// Inline SVGs for social media to prevent lucide-react brand icon build errors
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-[#043079] px-5 pt-12 text-white md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 border-b border-white/10 pb-9 lg:grid-cols-[1.05fr_1fr_0.85fr_0.85fr]">
        {/* Column 1: Brand */}
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

        {/* Column 2: Contact */}
        <div>
          <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
            Contact
          </h4>

          <div className="space-y-3 text-[13px] leading-6 text-slate-200">
            <p>
              <span className="font-extrabold text-white">Head Office:</span>
              <br />
              Clara Villas, 4th Avenue off Magadi Rd,
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
                href="mailto:themachinepaintingcoltd@gmail.com"
                className="block break-all font-extrabold text-white transition-colors hover:text-[#f5b400]"
              >
                themachinepaintingcoltd@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Column 3: Company */}
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
              Join Us (Careers)
            </Link>

            <Link
              className="block transition-colors hover:text-[#f5b400]"
              href="/contact-us"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 4: Social Media & Legal */}
        <div>
          <h4 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#f5b400]">
            Social Media
          </h4>

          <div className="space-y-3 text-[13px] text-slate-200">
            <a
              className="flex items-center gap-3 transition-colors hover:text-[#f5b400]"
              href={youtubeLink}
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon className="flex-shrink-0" />
              <span>YouTube: The Machine Painting Co Ltd</span>
            </a>

            <a
              className="flex items-center gap-3 transition-colors hover:text-[#f5b400]"
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="flex-shrink-0" />
              <span>Facebook: The Machine Painting Co Ltd</span>
            </a>

            <a
              className="flex items-center gap-3 transition-colors hover:text-[#f5b400]"
              href={twitterLink}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="flex-shrink-0" />
              <span>Twitter/X: @TheMachinePaint</span>
            </a>

            <a
              className="flex items-center gap-3 transition-colors hover:text-[#f5b400]"
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="flex-shrink-0" />
              <span>Instagram: the_machine_painting_kenya</span>
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
        © {new Date().getFullYear()} The Machine Painting Co Ltd. Beautiful
        Structures, Sprayed Perfectly.
      </div>
    </footer>
  );
}