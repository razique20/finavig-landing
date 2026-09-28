import type { Metadata } from "next";
import Link from "next/link";
import { DeleteAccountForm } from "@/components/delete-account-form";
import { Clock, FileCheck2, Lock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Account Request",
  description:
    "Request permanent deletion of your Finavig account and personal data. Requests are processed within 30 days, as described in our Privacy Policy.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/delete-account" },
};

const steps = [
  {
    icon: FileCheck2,
    title: "1. Fill in the form",
    body: "Enter the email address you use to sign in to Finavig so we can locate your account.",
  },
  {
    icon: Mail,
    title: "2. Send the email",
    body: "Submitting opens your email app with the request pre-filled — just press send.",
  },
  {
    icon: Clock,
    title: "3. Deleted within 30 days",
    body: "We verify your identity, delete your account and personal data, and email you written confirmation.",
  },
];

export default function DeleteAccountPage() {
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
            Delete your Finavig account
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">
            You can request permanent deletion of your Finavig account and all associated personal
            data at any time. Requests are completed within{" "}
            <span className="font-semibold text-white">30 days</span>, consistent with our{" "}
            <Link href="/privacy" className="font-semibold text-violet-light underline decoration-violet/40 underline-offset-4 transition hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Steps */}
        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-ink/10 bg-white/70 p-6 backdrop-blur"
            >
              <s.icon className="h-6 w-6 text-violet" />
              <h2 className="mt-3 text-base font-bold text-ink">{s.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="mt-10">
          <DeleteAccountForm />
        </div>

        {/* What gets deleted */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 bg-white p-6">
            <h2 className="flex items-center gap-2 text-base font-bold text-ink">
              <Lock className="h-5 w-5 text-violet" />
              What gets deleted
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {[
                "Your profile, sign-in credentials and account settings",
                "Budgets, transactions, categories and cash-flow data",
                "Documents, expiry dates and reminder subscriptions",
                "App preferences and notification history",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6">
            <h2 className="text-base font-bold text-ink">Before you submit</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {[
                "Deletion is permanent — account data cannot be recovered afterwards.",
                "Active subscriptions: cancel via Google Play first; deletion does not automatically cancel pending charges.",
                "Requests are completed within 30 days, except where retention is required by law (see our Privacy Policy).",
                "You'll receive a confirmation email once deletion is complete.",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
