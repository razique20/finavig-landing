import Link from "next/link";

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-snow-white">
      {/* Header band */}
      <div className="relative overflow-hidden bg-ink pb-16 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-violet-light transition hover:text-white"
          >
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid lg:grid-cols-[260px_1fr] lg:px-8">
        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              On this page
            </h2>
            <nav className="mt-4 space-y-1">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 transition hover:bg-violet/10 hover:text-violet"
                >
                  {i + 1}. {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-700">{intro}</p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-ink">
                  {i + 1}. {s.title}
                </h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-3 leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b.slice(0, 32)} className="flex gap-2.5 leading-relaxed text-slate-600">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-ink/10 bg-white/70 p-6 backdrop-blur">
            <p className="text-sm text-slate-600">
              Questions? Reach us at{" "}
              <a
                href="mailto:support@finavig.app"
                className="font-semibold text-violet hover:underline"
              >
                support@finavig.app
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
