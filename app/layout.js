import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";
import { personal } from "@/lib/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vijays.dev";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personal.name} — Developer`,
    template: `%s — ${personal.name}`,
  },
  description:
    "Full-stack developer and AI systems builder. I build backend systems, real-time dashboards, and AI-powered applications that handle real load from real people.",
  keywords: [
    "Vijay S",
    "Full-Stack Developer",
    "AI Systems",
    "Next.js",
    "Python",
    "YOLOv8",
    "Portfolio",
  ],
  authors: [{ name: personal.name, url: personal.github }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${personal.name} — Developer`,
    description:
      "Full-stack developer and AI systems builder. Real-world deployments at scale.",
    siteName: `${personal.name} — Portfolio`,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Developer`,
    description:
      "Full-stack developer and AI systems builder. Real-world deployments at scale.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0A0A0F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        <GrainOverlay />
        <ScrollProgress />
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
