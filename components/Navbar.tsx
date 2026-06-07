"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const contactHref = isHome ? "#contact" : `${pathname}#contact`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="/"
          className="flex h-full shrink-0 items-center"
          aria-label="The Machine Painting Co Ltd home"
        >
          <Image
            src="/machine/logo.png"
            alt="The Machine Painting Co Ltd logo"
            width={220}
            height={76}
            priority
            className="h-[62px] w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="hover:text-[#f97316]" href={link.href}>
              {link.label}
            </a>
          ))}

          <a className="hover:text-[#f97316]" href="/#quote">
            Pricing
          </a>

          <a className="hover:text-[#f97316]" href={contactHref}>
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/careers"
            className="inline-flex items-center justify-center border border-slate-200 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#07162d] hover:border-[#f97316] hover:text-[#f97316]"
          >
            We&apos;re Hiring
          </a>

          <a
            href="/#quote"
            className="inline-flex items-center justify-center bg-[#f97316] px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-orange-500/20 hover:bg-[#ea580c]"
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-slate-200 text-[#07162d] lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3 text-sm font-bold text-[#07162d]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border border-slate-100 px-4 py-3 hover:border-[#f97316] hover:text-[#f97316]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#quote"
              onClick={() => setOpen(false)}
              className="border border-slate-100 px-4 py-3 hover:border-[#f97316] hover:text-[#f97316]"
            >
              Pricing
            </a>

            <a
              href={contactHref}
              onClick={() => setOpen(false)}
              className="border border-slate-100 px-4 py-3 hover:border-[#f97316] hover:text-[#f97316]"
            >
              Contact
            </a>

            <a
              href="/careers"
              onClick={() => setOpen(false)}
              className="border border-slate-100 px-4 py-3 hover:border-[#f97316] hover:text-[#f97316]"
            >
              We&apos;re Hiring
            </a>

            <a
              href="/#quote"
              onClick={() => setOpen(false)}
              className="bg-[#f97316] px-4 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-white"
            >
              Get Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}