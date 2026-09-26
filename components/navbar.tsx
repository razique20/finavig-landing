"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-12 sm:px-8"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-tight text-white transition-opacity hover:opacity-70"
        >
          Finavig
        </Link>

        {/* Desktop links — Apple-style quiet text */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-normal tracking-wide text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink transition-all duration-300 hover:bg-slate-200 md:block"
        >
          Download
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-white md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — full-width frosted sheet */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-base font-normal text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-ink"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
