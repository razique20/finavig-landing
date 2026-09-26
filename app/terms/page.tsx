import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing your use of Finavig — the financial and document intelligence platform for UAE businesses and individuals.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    id: "the-service",
    title: "The service",
    body: [
      "Finavig lets you upload company and personal documents (trade licences, visas, invoices, receipts, tenancy agreements and more), automatically extracts dates, amounts and vendors with AI, tracks spending, budgets and cash-flow forecasts, and sends renewal reminders. Features may evolve; material changes will be communicated in-app or on this site.",
    ],
  },
  {
    id: "your-account",
    title: "Your account",
    body: [
      "You are responsible for the accuracy of the email you register and for keeping your password secure. One account per person; company data belongs to the registering organisation. You must be at least 16 years old to use Finavig.",
    ],
  },
  {
    id: "your-documents-data",
    title: "Your documents & data",
    body: [
      "You keep full ownership of everything you upload. We process your documents only to provide the service — expiry extraction, reminders, renewal tracking — and never sell your data.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: [
      "Do not upload documents you are not authorised to handle, attempt to access other users' data, reverse-engineer or abuse the service, or use it to store unlawful content. We may suspend accounts that violate these terms.",
    ],
  },
  {
    id: "insights-are-assistance",
    title: "Insights are assistance, not professional advice",
    body: [
      "Finavig highlights upcoming deadlines, spending patterns and cash projections, but it does not replace professional legal, PRO, accounting, tax or compliance advice. Always confirm deadlines with the issuing authority and figures with your accountant. Finavig is not liable for fines, penalties or losses arising from missed deadlines where reminders were delivered as configured.",
    ],
  },
  {
    id: "availability-changes",
    title: "Availability & changes",
    body: [
      'The service is provided "as is" and we aim for high availability but do not guarantee uninterrupted access. We may add, change, or discontinue features; material changes to these terms will be communicated in advance.',
    ],
  },
  {
    id: "fees",
    title: "Fees",
    body: [
      "Core tracking features are provided free of charge; optional premium features or payment services may be introduced with clear pricing disclosed before purchase.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    body: [
      "You can delete your account at any time from the profile screen. We may suspend or terminate accounts that violate these terms. On termination, sections concerning data ownership, disclaimers and liability survive.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Finavig's aggregate liability for any claim relating to the service is limited to the amount you paid us in the 12 months preceding the claim (or AED 100 if no fees were paid).",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the United Arab Emirates. Disputes are subject to the exclusive jurisdiction of the UAE courts.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Questions about these terms: support@finavig.app.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="September 2026"
      intro="These terms govern your use of Finavig — the financial and document intelligence platform for UAE businesses and individuals. By creating an account, downloading, or using the app or website, you agree to these terms."
      sections={sections}
    />
  );
}
