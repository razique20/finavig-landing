import {
  Banknote,
  BellRing,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  FolderOpen,
  Mic,
  ScanLine,
  Sparkles,
  TrendingDown,
  Wallet,
} from "lucide-react";

type Pillar = {
  icon: typeof Wallet;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

const pillars: Pillar[] = [
  {
    icon: FolderOpen,
    eyebrow: "Document Expiry & Compliance",
    title: "Every licence, visa and ID — tracked to the day",
    body: "A radar for your paperwork: urgency colors, renewal windows, fee estimates and fine-risk calculations for every document you care about.",
    points: [
      "Personal and business collections — one workspace per company",
      "Pre-configured types: Emirates/Civil ID, trade licences, visas, passports, vehicle registrations, tenancy contracts, insurance, subscriptions",
      "Fine-risk estimates if a document lapses (e.g. licence expired → fine + black points)",
      "OCR scan (Google ML Kit) extracts dates and attaches files automatically",
      "Smart reminders at 90, 60 and 30 days before every expiry",
    ],
  },
  {
    icon: Wallet,
    eyebrow: "Ledger & Cash-Flow Intelligence",
    title: "Budgets that behave, forecasts that warn you first",
    body: "Your whole financial picture in your local currency — tracked, budgeted and projected, so renewals never blindside you.",
    points: [
      "Unified income & expense ledger tagged by collection, method, category and document",
      "90-day cash-flow forecast merging habits, recurring commitments and upcoming renewal fees",
      "Category budget caps (rent, salaries, utilities, marketing…) with 80%/100% alerts",
      "Savings envelopes and automatic recurring schedules for fixed commitments",
    ],
  },
  {
    icon: BrainCircuit,
    eyebrow: "Groq AI Engine",
    title: "An executive summary and a budget plan, on demand",
    body: "Groq-powered AI reads your documents, your ledger and your goals, then writes the plan for you — at high speed.",
    points: [
      "AI Executive Summary: expiries, pending fees, spending patterns and net cash in 2–3 sentences with actionable insight cards",
      "AI Budget Planner: give a goal (e.g. \"Buy a delivery van for AED 25,000\") and a deadline — get a step-by-step plan",
      "Ready-made templates (Comfortable, Balanced, Goal-first) with a live Goal-Health score",
      "Fair monthly AI quota per tier, with a clear confirmation before each credit is used",
    ],
  },
  {
    icon: Mic,
    eyebrow: "Smart Automation",
    title: "Type it or say it. Finavig does the data entry.",
    body: "Natural-language and voice entry with GCC-tuned intelligence that learns your habits.",
    points: [
      'Natural-language quick add: "Paid 1,200 SAR for office rent today" — parsed to amount, currency, category and date',
      "Voice entry via built-in speech recognition",
      "Auto-categorization with GCC vendor dictionaries (Talabat, Salik, DEWA, Etisalat) plus habit learning",
      "Bill-spike detection: flagged when a bill runs far above your 3-month average",
    ],
  },
];

export function FeaturePillars() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet font-bold">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Four engines. One clear picture.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Documents, money, AI intelligence and automation — built together,
            not bolted on.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.eyebrow}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet/10"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1.5 text-xs font-semibold text-violet">
                <p.icon className="h-3.5 w-3.5" />
                {p.eyebrow}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.body}</p>
              <ul className="mt-6 flex-1 space-y-3.5">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safe-green" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-500">
          <Sparkles className="h-4 w-4 text-violet" />
          <span>Powered by Groq AI</span>
          <span className="text-slate-300">·</span>
          <ScanLine className="h-4 w-4 text-violet" />
          <span>Google ML Kit OCR</span>
          <span className="text-slate-300">·</span>
          <CalendarClock className="h-4 w-4 text-violet" />
          <span>90/60/30-day reminder engine</span>
          <span className="text-slate-300">·</span>
          <TrendingDown className="h-4 w-4 text-violet" />
          <span>Cash-flow dip detection</span>
          <span className="text-slate-300">·</span>
          <Banknote className="h-4 w-4 text-violet" />
          <span>All 6 GCC currencies</span>
          <span className="text-slate-300">·</span>
          <BellRing className="h-4 w-4 text-violet" />
          <span>Bill-spike alerts</span>
        </div>
      </div>
    </section>
  );
}
