import {
  Building2,
  Car,
  CreditCard,
  FileText,
  Globe,
  MapPin,
  Phone,
  Receipt,
} from "lucide-react";

const countries = [
  {
    flag: "🇦🇪",
    name: "United Arab Emirates",
    currency: "AED",
    authorities: "RTA · GDRFA · MOHRE · ICP · Dubai Municipality · DED",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    currency: "SAR",
    authorities: "ZATCA · Absher · Qiwa · Muqeem · CR",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    currency: "QAR",
    authorities: "Metrash2 · Ministry of Interior · MOCI",
  },
  {
    flag: "🇰🇼",
    name: "Kuwait",
    currency: "KWD",
    authorities: "PACI (Civil ID) · MOI Kuwait · PAM",
  },
  {
    flag: "🇧🇭",
    name: "Bahrain",
    currency: "BHD",
    authorities: "Sijilat · LMRA · iGA",
  },
  {
    flag: "🇴🇲",
    name: "Oman",
    currency: "OMR",
    authorities: "ROP · Invest Easy · Ministry of Labour",
  },
];

const features = [
  {
    icon: Globe,
    title: "One app, six currencies",
    body: "Pick your country and every calculation, money parse and AI prompt adapts to AED, SAR, QAR, KWD, BHD or OMR.",
  },
  {
    icon: CreditCard,
    title: "IDs & civil cards",
    body: "Emirates ID, Kuwait Civil ID and GCC-wide ID cards tracked to the day with renewal windows.",
  },
  {
    icon: Building2,
    title: "Trade licences & CR",
    body: "DED, free-zone and mainland renewals, CR updates and municipality permits with fee estimates built in.",
  },
  {
    icon: Phone,
    title: "Visas & labour cards",
    body: "GDRFA, ICP, Muqeem, LMRA, PAM and Ministry of Labour deadlines in one radar.",
  },
  {
    icon: Car,
    title: "Vehicle registrations",
    body: "RTA mulkiya and GCC-wide vehicle renewals, with insurance and inspection reminders.",
  },
  {
    icon: MapPin,
    title: "Tenancy & Ejari",
    body: "Contract expiries surfaced before they surprise you.",
  },
  {
    icon: Receipt,
    title: "GCC vendor dictionaries",
    body: "Talabat, Salik, DEWA, Etisalat and more — vendors recognized so spending auto-categorizes itself.",
  },
  {
    icon: FileText,
    title: "Custom document types",
    body: "Any document with a renewal cycle and issuing authority can be tracked, not just the presets.",
  },
];

export function BuiltForGcc() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-light font-bold">
            Built for the GCC
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Speaks GCC paperwork fluently
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From GDRFA to ZATCA — Finavig is tuned to the authorities, currencies
            and vendors of all six Gulf countries.
          </p>
        </div>

        {/* Country grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-violet/50 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl leading-none" aria-hidden>
                    {c.flag}
                  </span>
                  <span className="font-semibold text-white">{c.name}</span>
                </div>
                <span className="rounded-full border border-violet/30 bg-violet/20 px-2.5 py-1 text-xs font-bold text-violet-light">
                  {c.currency}
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                {c.authorities}
              </p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-violet/50 hover:bg-white/10"
            >
              <Icon className="h-6 w-6 text-violet-light" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
