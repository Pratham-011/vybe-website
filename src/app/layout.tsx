import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vybe Date — meet people at the events you're already going to",
  description:
    "Vybe Date matches you with people going to the same events as you. 18+ only. Currently in early access — join the WhatsApp community to be first in.",
  // No manual `icons` entry needed — favicon.ico, icon.svg and apple-icon.png
  // in this folder are Next.js's own file convention and get wired up automatically.
  openGraph: {
    title: "Vybe Date",
    description: "Meet people at the events you're already going to.",
    url: SITE_URL,
    siteName: "Vybe Date",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
