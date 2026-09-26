import {
  AlertTriangle,
  BellRing,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Folder,
  LineChart,
  Wallet,
} from "lucide-react";

const chips = [
  { icon: LineChart, label: "90-day cash forecast" },
  { icon: BellRing, label: "90/60/30-day alerts" },
  { icon: CalendarClock, label: "OCR scan & voice entry" },
];

function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] rotate-2">
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-violet/40 via-violet/20 to-transparent blur-2xl" />

      <div className="overflow-hidden rounded-[2.5rem] border border-white/15 bg-ink p-2 shadow-2xl shadow-violet/20 ring-1 ring-white/10">
        <div className="rounded-[2rem] bg-snow-white p-5">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet">
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <div>
              <div className="text-sm font-bold text-ink">Personal</div>
              <div className="text-[11px] text-slate-500">UAE · AED</div>
            </div>
          </div>

          {/* Overview card */}
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-ink to-ink-light p-4 shadow-inner">
            <div className="text-[11px] text-slate-300">September 2026 Overview</div>
            <div className="mt-1 text-2xl font-bold text-violet-light">AED 1,800.00</div>
            <div className="mt-1 text-[10px] text-slate-400">Net Cash Flow</div>
            <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-[11px]">
              <span className="text-slate-300">
                Income <span className="font-semibold text-white">6,000</span>
              </span>
              <span className="text-slate-300">
                Spend <span className="font-semibold text-white">4,200</span>
              </span>
            </div>
          </div>

          {/* Stat tiles */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: Folder, label: "Docs", value: "5", tone: "text-safe-green" },
              { icon: AlertTriangle, label: "Due soon", value: "1", tone: "text-warning-amber" },
              { icon: Clock, label: "≤30 days", value: "0", tone: "text-safe-green" },
            ].map(({ icon: Icon, label, value, tone }) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-center"
              >
                <Icon className={`mx-auto h-4 w-4 ${tone}`} />
                <div className={`mt-1 text-sm font-bold ${tone}`}>{value}</div>
                <div className="text-[9px] text-slate-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Renewal rows */}
          <div className="mt-3 space-y-2">
            {[
              { name: "Work Visa", sub: "GDRFA · 18/9/2027", days: "363d", tone: "text-safe-green" },
              { name: "Emirates ID", sub: "ICP · 18/9/2027", days: "363d", tone: "text-safe-green" },
            ].map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5"
              >
                <div>
                  <div className="text-xs font-semibold text-ink">{r.name}</div>
                  <div className="text-[10px] text-slate-500">{r.sub}</div>
                </div>
                <span className={`text-xs font-bold ${r.tone}`}>{r.days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  icon: Icon,
  value,
  label,
  tone,
}: {
  icon: typeof Folder;
  value: string;
  label: string;
  tone: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <Icon className={`h-5 w-5 ${tone}`} />
      <div className="mt-2 text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-28 sm:pt-32 lg:pb-28">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-violet/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-xs font-medium text-violet-light">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Built for the GCC · 6 currencies
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every renewal.{" "}
            <span className="bg-gradient-to-r from-violet-light via-violet to-violet-hover bg-clip-text text-transparent">
              Every dirham.
            </span>{" "}
            One dashboard.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Finavig forecasts your cash flow and tracks every document expiry —
            trade licences, visas, civil IDs, insurance — with alerts 90/60/30
            days before they&apos;re due. Built for personal users, freelancers
            and businesses across the GCC.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-ink transition hover:bg-slate-100 shadow-md shadow-violet/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.05 20.28c-.98.95-2.05.86-3.08.41-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.11 15.09 2.8 7.31 8.7 6.99c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.18 4.4zM12.03 7c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-slate-500">
                  Download on the
                </span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-ink transition hover:bg-slate-100 shadow-md shadow-violet/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 20.5V3.5c0-.6.34-1.11.84-1.35L13.7 12 3.84 21.85c-.5-.24-.84-.75-.84-1.35zm13.81-5.38L6.05 21.34 14.54 12.85l2.27 2.27zm3.35-4.31c.34.27.59.68.59 1.19s-.22.93-.57 1.2l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.29zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-slate-500">
                  Get it on
                </span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="group flex items-center gap-1.5 text-sm font-semibold text-violet-light transition hover:text-white"
            >
              See how it works
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-violet-light" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mock + floating stat cards */}
        <div className="relative mt-4 lg:mt-0">
          <DashboardMock />

          <div className="absolute -left-2 top-16 hidden w-40 sm:block lg:-left-10">
            <MiniStat icon={Folder} value="5" label="Documents" tone="text-safe-green" />
          </div>
          <div className="absolute -right-2 bottom-24 hidden w-44 sm:block lg:-right-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-violet-light" />
                <span className="text-xs text-slate-400">This month</span>
              </div>
              <div className="mt-1.5 text-lg font-bold text-white">
                AED 1,800 <span className="text-xs font-normal text-safe-green">net</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-6 hidden items-center gap-2 rounded-full border border-safe-green/30 bg-safe-green/10 px-3.5 py-1.5 backdrop-blur sm:flex">
            <CheckCircle2 className="h-3.5 w-3.5 text-safe-green" />
            <span className="text-xs font-medium text-safe-green">
              All documents on track
            </span>
          </div>
          <div className="absolute right-4 top-2 hidden items-center gap-2 rounded-full border border-warning-amber/30 bg-warning-amber/10 px-3.5 py-1.5 backdrop-blur sm:flex">
            <AlertTriangle className="h-3.5 w-3.5 text-warning-amber" />
            <span className="text-xs font-medium text-warning-amber">Due soon</span>
          </div>
          <div className="absolute -bottom-2 right-10 hidden items-center gap-2 rounded-full border border-danger-red/30 bg-danger-red/10 px-3.5 py-1.5 backdrop-blur lg:flex">
            <Clock className="h-3.5 w-3.5 text-danger-red" />
            <span className="text-xs font-medium text-danger-red">Expiring</span>
          </div>
        </div>
      </div>
    </section>
  );
}
