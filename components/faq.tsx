"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which countries does Finavig support?",
    a: "All six GCC countries — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. Finavig natively supports each country's currency (AED, SAR, QAR, KWD, BHD, OMR) and its government authorities, from RTA and GDRFA in the UAE to ZATCA and Absher in Saudi Arabia.",
  },
  {
    q: "What platforms does Finavig support?",
    a: "Finavig is available on iOS and Android. Your data syncs through your account, so your documents and budgets follow you across devices.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Everything is encrypted in transit and at rest, stored with row-level security so only you can access your workspace. See the Privacy Policy for full details.",
  },
  {
    q: "Does AI train on my documents?",
    a: "No. Your documents are processed only to extract dates, amounts and vendors for your own tracking. We never use your data to train public AI models, and we never sell it.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. Plus includes PDF and CSV report exports for your reports, and Business adds multi-collection team data exports. Your data is always yours to take.",
  },
  {
    q: "Is Finavig free?",
    a: "Yes — the Free tier is AED 0 forever: 1 personal collection with up to 10 tracked documents, standard 30/60/90-day renewal reminders, basic budgets, plus 3 AI Executive Summaries and 2 AI Budget Planner generations per month. Plus (AED 25/month, ≈$6.99) unlocks unlimited documents, 1 company collection, 90-day cash-flow forecasts and report exports, and Business (AED 99/month, ≈$26.99) adds unlimited company workspaces, team assignment and audit history. See the pricing section above.",
  },
  {
    q: "What kinds of documents can I track?",
    a: "Trade licences, commercial registrations, visas, passports, Emirates/Civil IDs, vehicle registrations, tenancy contracts (Ejari), insurance policies and subscriptions — for yourself and for your company. You can also create custom document types with your own renewal cycles and issuing authorities.",
  },
  {
    q: "How do the 90/60/30-day alerts work?",
    a: "For every document, Finavig sends reminders at 90, 60 and 30 days before expiry. You'll see urgency colors in the app — green (safe), amber (due soon), red (expiring or expired) — alongside a fine-risk estimate if the document lapses. Plus also lets you set custom reminder alert days per document.",
  },
  {
    q: "How accurate is the cash-flow forecast?",
    a: "The 90-day forecast — included with Plus and Business — simulates your daily balance using your recurring income and expenses, plus known renewal fees. It flags dips so you can move money early. Treat it as a planning aid, not financial advice.",
  },
  {
    q: "How does the AI quota work?",
    a: "Each subscription tier includes a monthly quota of AI Executive Summaries and AI Budget Planner generations: Free gets 3 summaries and 2 plans, Plus gets 15 and 10, Business gets 40 and 25. Finavig asks for your confirmation before using a credit, and your last generated summary or plan stays available without consuming quota.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-snow-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet font-bold">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur transition hover:border-violet/30"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-violet transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
