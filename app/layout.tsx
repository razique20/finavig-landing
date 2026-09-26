import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://finavig.app"),
  title: {
    default: "Finavig — Every renewal. Every dirham. One dashboard.",
    template: "%s — Finavig",
  },
  description:
    "Finavig forecasts your cash flow and tracks every document expiry — trade licences, visas, civil IDs, insurance — with alerts 90/60/30 days before they're due. Built for the GCC: UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman.",
  applicationName: "Finavig",
  authors: [{ name: "Finavig Team", url: "https://finavig.app" }],
  generator: "Next.js",
  keywords: [
    "Finavig",
    "GCC budgeting app",
    "UAE budgeting app",
    "document expiry tracking",
    "cash flow forecast",
    "trade licence renewal",
    "Emirates ID reminder",
    "ZATCA deadlines",
    "AI budget planner",
    "Saudi Arabia budgeting",
    "Qatar document tracker",
    "Kuwait civil ID renewal",
    "Bahrain Sijilat renewal",
    "Oman mulkiya expiry",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Finavig",
  publisher: "Finavig",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Finance & Productivity",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finavig.app",
    siteName: "Finavig",
    title: "Finavig — Every renewal. Every dirham. One dashboard.",
    description:
      "AI-powered budgeting & document expiry tracking for the GCC. 90-day cash-flow forecasts, 90/60/30-day renewal alerts and Groq AI planning across all six Gulf countries.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Finavig App Logo - GCC Budgeting & Document Expiry Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finavig — Every renewal. Every dirham. One dashboard.",
    description:
      "AI-powered budgeting & document expiry tracking for the GCC. 90-day cash-flow forecasts, 90/60/30-day renewal alerts and Groq AI planning across all six Gulf countries.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="flex min-h-screen flex-col font-grotesk">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
