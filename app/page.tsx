import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemStrip } from "@/components/problem-strip";
import { FeaturePillars } from "@/components/feature-pillars";
import { HowItWorks } from "@/components/how-it-works";
import { BuiltForGcc } from "@/components/built-for-gcc";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Finavig",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS, Android",
  description:
    "AI-powered financial budgeting & cash-flow intelligence app with document expiry tracking and renewal alerts, built for personal users, freelancers and businesses across the GCC.",
  url: "https://finavig.app",
  image: "https://finavig.app/logo.png",
  offers: [
    { "@type": "Offer", name: "Free Tier", price: "0", priceCurrency: "AED" },
    { "@type": "Offer", name: "Plus Tier", price: "25", priceCurrency: "AED" },
    { "@type": "Offer", name: "Business Tier", price: "99", priceCurrency: "AED" },
  ],
  featureList: [
    "90-day cash flow forecast",
    "90/60/30-day renewal alerts",
    "Emirates ID & Civil ID tracking",
    "Trade licence renewal reminders",
    "Groq AI financial planner",
    "Google ML Kit OCR document scan",
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finavig",
  url: "https://finavig.app",
  logo: "https://finavig.app/logo.png",
  email: "support@finavig.app",
  description: "Financial intelligence and document expiry tracking for the GCC.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Finavig",
  url: "https://finavig.app",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which countries does Finavig support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All six GCC countries — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. Finavig natively supports each country's currency (AED, SAR, QAR, KWD, BHD, OMR) and its government authorities.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms does Finavig support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finavig is available on iOS and Android. Your data syncs through your account, so your documents and budgets follow you across devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Everything is encrypted in transit and at rest, stored with row-level security so only you can access your workspace.",
      },
    },
    {
      "@type": "Question",
      name: "Is Finavig free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Free tier is AED 0 forever: 1 personal collection with up to 10 tracked documents, standard 30/60/90-day renewal reminders, basic budgets, plus AI summaries.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of documents can I track?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trade licences, commercial registrations, visas, passports, Emirates/Civil IDs, vehicle registrations, tenancy contracts (Ejari), insurance policies and subscriptions.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ProblemStrip />
        <FeaturePillars />
        <HowItWorks />
        <BuiltForGcc />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
