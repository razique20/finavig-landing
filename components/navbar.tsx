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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6">
      <nav
        className={`mx-auto flex h-14 max-w-3xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:rounded-full sm:px-6 ${
          scrolled
            ? "border-white/10 bg-ink/90 shadow-xl shadow-ink/50 backdrop-blur-xl"
            : "border-white/10 bg-ink/60 backdrop-blur-md"
        }`}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white transition hover:text-violet-light"
        >
          Finavig
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition hover:text-violet-light"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden rounded-full bg-violet px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition hover:bg-violet-hover md:block"
        >
          Download
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile floating menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-3xl rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-xl shadow-ink/50 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-violet-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-violet px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-violet/30"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}
