import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Finavig collects, why, and how your documents and financial data stay protected. Complies with the UAE PDPL (Federal Decree-Law No. 45 of 2021).",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "what-we-collect",
    title: "What we collect",
    body: [],
    bullets: [
      "Account details: email address (and optional phone number for renewal and cash alerts).",
      "Documents you upload: scans, photos, and PDFs of company and personal documents, invoices and receipts.",
      "Extracted data: dates, amounts, vendors and document types derived from your uploads.",
      "Financial records: transactions, budgets, savings envelopes and categories you create or import.",
      "Technical data: app version and platform, used to keep your installation up to date and to diagnose issues.",
    ],
  },
  {
    id: "what-we-do-not-do",
    title: "What we do NOT do",
    body: [],
    bullets: [
      "We never sell your data.",
      "We never share your documents with third parties for marketing.",
      "We do not use your documents to train public AI models.",
      "No advertising trackers, no data brokers.",
    ],
  },
  {
    id: "why-we-process-data",
    title: "Why we process data (legal basis)",
    body: [
      "To provide the service you signed up for: storing your documents, extracting expiry information, and delivering reminders you configured. Your documents belong to you; we process them on your instruction (contractual necessity) and, where applicable, with your consent (e.g., optional alerts channels).",
    ],
  },
  {
    id: "where-data-lives",
    title: "Where data lives",
    body: [
      "Documents, financial records and account data are stored in Supabase (cloud infrastructure) with encryption in transit and at rest, protected by Row Level Security so only you can access your data. AI extraction runs on document content solely to locate dates, amounts and document attributes.",
    ],
  },
  {
    id: "retention-deletion",
    title: "Retention & deletion",
    body: [
      "Your data is kept while your account is active. Deleting a document removes it from your workspace. Deleting your account initiates removal of your personal data within 30 days, except where retention is required by law.",
      "To request account deletion, use the account deletion request form at https://finavig.app/delete-account — we process verified requests within 30 days and confirm completion by email.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: [
      "You can access, correct, export, or delete your data at any time from the app (CSV/PDF export built in). Under PDPL you may also request portability, restriction or objection to processing; contact us and we will respond promptly.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "Finavig is a business and productivity tool and is not directed at children under 16. We do not knowingly collect data from children.",
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "Encryption in transit (TLS) and at rest, isolated per-user data access, and least-privilege infrastructure. No system is perfectly secure, but we design to industry standards and will notify affected users and regulators of any breach as required by UAE law.",
    ],
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: [
      "Where data is processed outside the UAE, we use providers that offer adequate safeguards consistent with PDPL requirements.",
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to this policy",
    body: [
      'Material changes will be announced in-app and the "last updated" date above revised.',
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: ["Privacy questions or requests: support@finavig.app."],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="September 2026"
      intro="Your documents and financial data are sensitive. This policy explains, in plain language, what Finavig collects, why, and how it stays protected. It complies with the UAE Federal Personal Data Protection Law (PDPL, Federal Decree-Law No. 45 of 2021)."
      sections={sections}
    />
  );
}
