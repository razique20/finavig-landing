"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";

const DELETE_EMAIL = "aethylglobal@gmail.com";

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Other",
];

type FormState = {
  fullName: string;
  email: string;
  confirmEmail: string;
  country: string;
  phone: string;
  orderNumber: string;
  reason: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  confirmEmail: "",
  country: "United Arab Emirates",
  phone: "",
  orderNumber: "",
  reason: "",
};

export function DeleteAccountForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const mailtoHref = useMemo(() => {
    const subject = `Account Deletion Request — Finavig`;
    const lines = [
      "Hello Finavig Team,",
      "",
      "I am requesting permanent deletion of my Finavig account and associated personal data.",
      "",
      `Name: ${form.fullName || "(not provided)"}`,
      `Account email: ${form.email}`,
      `Country: ${form.country}`,
      `Registered phone: ${form.phone || "(not provided)"}`,
      `Google Play order number (if any): ${form.orderNumber || "(not provided)"}`,
      `Reason (optional): ${form.reason || "(not provided)"}`,
      "",
      "Please delete my account and all associated personal data, and send me a written confirmation once deletion is complete. I understand deletion will be completed within 30 days as stated in the Finavig Privacy Policy.",
      "",
      "Regards,",
      form.fullName || form.email,
      `Requested at: ${new Date().toISOString()}`,
    ].join("\n");

    return `mailto:${DELETE_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;
  }, [form]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      setError("Please enter a valid email address — the one you use to sign in to Finavig.");
      return;
    }
    if (form.confirmEmail.trim().toLowerCase() !== form.email.trim().toLowerCase()) {
      setError("The two email addresses do not match.");
      return;
    }

    // Open the user's email client with the fully-composed deletion request.
    window.location.href = mailtoHref;
    setSubmitted(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(DELETE_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-safe-green/30 bg-white p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="mt-0.5 h-8 w-8 shrink-0 text-safe-green" />
          <div>
            <h2 className="text-xl font-bold text-ink">Your email client should be open</h2>
            <p className="mt-2 leading-relaxed text-slate-600">
              We&apos;ve prepared your deletion request to{" "}
              <a href={mailtoHref} className="font-semibold text-violet hover:underline">
                {DELETE_EMAIL}
              </a>
              . Press <strong>send</strong> in your email app to submit it.
            </p>
            <ol className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="font-semibold text-ink">1.</span> Send the pre-filled email (don&apos;t
                remove the subject line).
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-ink">2.</span> Our team verifies your identity and
                processes the request.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-ink">3.</span> Your account and personal data are
                deleted within <strong>30 days</strong>, and you receive written confirmation.
              </li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-hover"
              >
                <Mail className="h-4 w-4" />
                Re-open email draft
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setError(null);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-violet/40 hover:text-violet"
              >
                Edit my request
              </button>
            </div>
            <p className="mt-6 rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-500">
              If your device has no email app installed, copy the address below and email us manually —
              use the subject line &ldquo;Account Deletion Request — Finavig&rdquo; and include your
              account email.
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-violet/40 hover:text-violet"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-safe-green" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> {DELETE_EMAIL}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-ink">
            Full name <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => set("fullName")(e.target.value)}
            placeholder="e.g. Ahmed Al Mansouri"
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet focus:ring-2 focus:ring-violet/20"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-ink">
            Country
          </label>
          <select
            id="country"
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Account email <span className="text-danger-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet focus:ring-2 focus:ring-violet/20"
          />
          <p className="mt-1 text-xs text-slate-500">
            The email address you use to sign in to Finavig.
          </p>
        </div>

        <div>
          <label htmlFor="confirmEmail" className="block text-sm font-medium text-ink">
            Confirm account email <span className="text-danger-red">*</span>
          </label>
          <input
            id="confirmEmail"
            type="email"
            required
            autoComplete="email"
            value={form.confirmEmail}
            onChange={(e) => set("confirmEmail")(e.target.value)}
            placeholder="Re-type your account email"
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet focus:ring-2 focus:ring-violet/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Registered phone number <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+971 5X XXX XXXX"
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet focus:ring-2 focus:ring-violet/20"
          />
        </div>

        <div>
          <label htmlFor="orderNumber" className="block text-sm font-medium text-ink">
            Google Play order number <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="orderNumber"
            type="text"
            value={form.orderNumber}
            onChange={(e) => set("orderNumber")(e.target.value)}
            placeholder="GPA.XXXX-XXXX-XXXX"
            className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet focus:ring-2 focus:ring-violet/20"
          />
          <p className="mt-1 text-xs text-slate-500">
            Helps us verify paid subscriptions, if you have one.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="reason" className="block text-sm font-medium text-ink">
          Reason for deletion <span className="font-normal text-slate-400">(optional — helps us improve)</span>
        </label>
        <textarea
          id="reason"
          rows={3}
          value={form.reason}
          onChange={(e) => set("reason")(e.target.value)}
          placeholder="Tell us why you're leaving (optional)"
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet focus:ring-2 focus:ring-violet/20"
        />
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-danger-red/30 bg-danger-red/5 p-3 text-sm text-danger-red">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3 text-sm font-semibold text-white shadow transition hover:bg-violet-hover"
        >
          <Send className="h-4 w-4" />
          Submit deletion request
        </button>
        <p className="flex items-start gap-1.5 text-xs leading-relaxed text-slate-500">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-safe-green" />
          Submitting opens your email app with the request pre-filled to{" "}
          <a href={mailtoHref} className="font-medium text-violet hover:underline">
            {DELETE_EMAIL}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
