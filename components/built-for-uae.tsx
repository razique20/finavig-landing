import { Building2, Car, CreditCard, Droplets, MapPin, Phone, Receipt, Zap } from "lucide-react";

const items = [
  {
    icon: CreditCard,
    title: "Emirates ID",
    body: "Tracked to the day, with the renewal window Finavig knows you need.",
  },
  {
    icon: Building2,
    title: "Trade licences",
    body: "DED, free-zone and mainland renewals with fee estimates built in.",
  },
  {
    icon: MapPin,
    title: "Ejari & tenancy",
    body: "Contract expiries and cheques surfaced before they surprise you.",
  },
  {
    icon: Car,
    title: "RTA vehicle registration",
    body: "Mulkiya renewals with insurance and inspection reminders.",
  },
  {
    icon: Phone,
    title: "Visas & labour cards",
    body: "GDRFA, ICP and MOHRE deadlines in one radar.",
  },
  {
    icon: Zap,
    title: "DEWA & utilities",
    body: "Vendor recognition for bills, plus spike detection when they climb.",
  },
  {
    icon: Receipt,
    title: "Etisalat, Salik, Talabat…",
    body: "UAE vendor dictionaries auto-categorize your spending.",
  },
  {
    icon: Droplets,
    title: "Insurance & subscriptions",
    body: "Health, vehicle and renewals — flagged 90 days out.",
  },
];

export function BuiltForUae() {
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
            Built for the UAE
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Speaks Emirati paperwork fluently
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From GDRFA to DEWA — Finavig is AED-first and tuned to how the UAE
            actually works.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
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
