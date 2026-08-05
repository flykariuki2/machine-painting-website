"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Paint Packages", href: "/paint-packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const quoteHref = pathname === "/" ? "#quote" : "/#quote";
  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-white shadow-[0_1px_12px_rgba(4,48,121,0.08)]">
      <div className="mx-auto flex h-[82px] max-w-[1240px] items-center px-5 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="The Machine Painting Co Ltd home"
          className="flex h-full shrink-0 items-center"
        >
          <Image
            src="/machine/logo7.png"
            alt="The Machine Painting Co Ltd logo"
            width={250}
            height={72}
            priority
            className="h-[68px] w-auto max-w-[250px] object-contain md:h-[72px]"
          />
        </Link>

        {/* Desktop links */}
        <nav className="ml-auto hidden items-center gap-6 text-[13px] font-extrabold text-[#043079] lg:flex xl:text-[13.5px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "relative flex h-[82px] items-center whitespace-nowrap transition-colors hover:text-[#0453b1]",
                "after:absolute after:bottom-4 after:left-0 after:h-[2px] after:bg-[#f5b400] after:transition-all",
                isActive(link.href)
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={contactHref}
            className="relative flex h-[82px] items-center whitespace-nowrap transition-colors hover:text-[#0453b1] after:absolute after:bottom-4 after:left-0 after:h-[2px] after:w-0 after:bg-[#f5b400] after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="ml-7 hidden items-center gap-3 lg:flex">
  <Link
    href="/careers"
    className="inline-flex min-h-[46px] items-center justify-center border border-[#043079]/20 bg-white px-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#043079] transition hover:border-[#f5b400] hover:bg-[#fff8df]"
  >
    Join Us
  </Link>

  <Link
    href={quoteHref}
    className="inline-flex min-h-[46px] items-center justify-center gap-3 bg-[#f5b400] px-7 text-[11px] font-extrabold text-[#043079] transition hover:bg-[#ffc62f]"
  >
    Get a Quotation
    <ArrowRight className="h-4 w-4" aria-hidden="true" />
  </Link>
</div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center border border-[#043079]/25 bg-white text-[#043079] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Brand line */}
      <div className="grid h-[3px] grid-cols-[1fr_0.5fr_0.12fr]">
        <span className="bg-[#043079]" />
        <span className="bg-[#f5b400]" />
        <span className="bg-[#cc0f06]" />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[85px] z-[110] overflow-y-auto bg-white lg:hidden">
          <div className="px-6 py-5">
            <nav className="divide-y divide-[#043079]/10 border-y border-[#043079]/10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={[
                    "flex min-h-[56px] items-center justify-between text-[15px] font-extrabold",
                    isActive(link.href)
                      ? "text-[#0453b1]"
                      : "text-[#043079]",
                  ].join(" ")}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[#f5b400]"
                    aria-hidden="true"
                  />
                </Link>
              ))}

              <Link
                href={contactHref}
                onClick={closeMenu}
                className="flex min-h-[56px] items-center justify-between text-[15px] font-extrabold text-[#043079]"
              >
                <span>Contact</span>
                <ArrowRight
                  className="h-4 w-4 text-[#f5b400]"
                  aria-hidden="true"
                />
              </Link>
            </nav>

            <Link
  href="/careers"
  onClick={closeMenu}
  className="mt-6 flex min-h-[54px] items-center justify-center border border-[#043079]/20 bg-white px-6 text-[12px] font-extrabold text-[#043079]"
>
  Join Us / Register as a Painter
</Link>

            <Link
              href={quoteHref}
              onClick={closeMenu}
              className="mt-3 flex min-h-[54px] items-center justify-center gap-3 bg-[#f5b400] px-6 text-[12px] font-extrabold text-[#043079]"
            >
              Get a Quotation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <p className="mt-6 text-center text-[11px] font-semibold text-slate-500">
              Beautiful Structures,{" "}
              <span className="font-extrabold text-[#043079]">
                Sprayed Perfectly.
              </span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}