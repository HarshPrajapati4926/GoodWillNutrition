"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Diet Tips" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between gap-2 py-2 sm:h-18">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={56}
            height={56}
            className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
            priority
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-bold text-brand-800 sm:text-base">
              Good Will
            </span>
            <span className="truncate text-[9px] font-medium tracking-wide text-brand-600 sm:text-[11px]">
              NUTRITION &amp; WELLNESS CENTRE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            Book Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-brand-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <nav className="container-app flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-brand-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
