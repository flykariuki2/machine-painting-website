"use client";

import Image from "next/image";
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

  const quoteHref = pathname === "/" ? "#quote" : `${pathname}#quote`;
  const siteVisitHref =
    pathname === "/" ? "#site-visit" : `${pathname}#site-visit`;
  const contactHref = pathname === "/" ? "#contact" : `${pathname}#contact`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#043079]/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="/"
          className="flex h-[76px] shrink-0 items-center"
          aria-label="The Machine Painting Co Ltd home"
        >
          <Image
            src="/machine/logo7.png"
            alt="The Machine Painting Co Ltd logo"
            width={260}
            height={76}
            priority
            className="h-[72px] w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-6 text-[13px] font-extrabold text-[#043079] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="relative py-7 transition hover:text-[#cc0f06] after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-0 after:bg-[#f5b400] after:transition-all hover:after:w-full"
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          <a
            className="relative py-7 transition hover:text-[#cc0f06] after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-0 after:bg-[#f5b400] after:transition-all hover:after:w-full"
            href={quoteHref}
          >
            Get a Quotation
          </a>

          <a
            className="relative py-7 transition hover:text-[#cc0f06] after:absolute after:bottom-5 after:left-0 after:h-[2px] after:w-0 after:bg-[#f5b400] after:transition-all hover:after:w-full"
            href={contactHref}
          >
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/careers"
            className="inline-flex items-center justify-center border border-[#043079]/20 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#043079] transition hover:border-[#f5b400] hover:bg-[#f5b400] hover:text-[#043079]"
          >
            Join Us
          </a>

          <a
            href={siteVisitHref}
            className="inline-flex items-center justify-center bg-[#cc0f06] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-red-600/20 transition hover:bg-[#a90d06]"
          >
            Site Visit
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-[#043079]/15 bg-white text-[#043079] shadow-sm transition hover:border-[#f5b400] hover:bg-[#fff7dc] lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-[#043079] via-[#f5b400] to-[#cc0f06]" />

      {open && (
        <div className="fixed inset-0 top-[79px] z-40 bg-[#043079]/45 backdrop-blur-sm lg:hidden">
          <div className="mx-4 mt-4 max-h-[calc(100vh-112px)] overflow-y-auto rounded-sm border border-[#043079]/10 bg-white shadow-2xl">
            <div className="border-b border-[#043079]/10 bg-[#f8fafc] px-5 py-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#cc0f06]">
                Menu
              </p>
              <p className="mt-1 text-sm font-bold text-[#043079]">
                Navigate The Machine Painting Co Ltd
              </p>
            </div>

            <nav className="grid gap-2 p-4 text-sm font-bold text-[#043079]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border border-[#043079]/10 bg-white px-4 py-3.5 transition hover:border-[#f5b400] hover:bg-[#fff7dc] hover:text-[#cc0f06]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#f5b400] transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}

              <a
                href={quoteHref}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border border-[#043079]/10 bg-white px-4 py-3.5 transition hover:border-[#f5b400] hover:bg-[#fff7dc] hover:text-[#cc0f06]"
              >
                <span>Get a Quotation</span>
                <span className="text-[#f5b400] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={siteVisitHref}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border border-[#043079]/10 bg-white px-4 py-3.5 transition hover:border-[#f5b400] hover:bg-[#fff7dc] hover:text-[#cc0f06]"
              >
                <span>Site Visit Form</span>
                <span className="text-[#f5b400] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/careers"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border border-[#043079]/10 bg-white px-4 py-3.5 transition hover:border-[#f5b400] hover:bg-[#fff7dc] hover:text-[#cc0f06]"
              >
                <span>Join Us / Register as a Painter</span>
                <span className="text-[#f5b400] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={contactHref}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border border-[#043079]/10 bg-white px-4 py-3.5 transition hover:border-[#f5b400] hover:bg-[#fff7dc] hover:text-[#cc0f06]"
              >
                <span>Contact</span>
                <span className="text-[#f5b400] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <a
                  href={quoteHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center bg-[#cc0f06] px-4 py-3.5 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-red-600/20 transition hover:bg-[#a90d06]"
                >
                  Request Quote
                </a>

                <a
                  href={siteVisitHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center bg-[#043079] px-4 py-3.5 text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#f5b400] hover:text-[#043079]"
                >
                  Book Site Visit
                </a>
              </div>
            </nav>

            <div className="border-t border-[#043079]/10 bg-[#f8fafc] px-5 py-4">
              <p className="text-center text-[11px] font-semibold leading-5 text-slate-500">
                Beautiful Structures,{" "}
                <span className="font-extrabold text-[#043079]">
                  Sprayed Perfectly.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}