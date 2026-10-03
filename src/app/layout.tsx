import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { MetaPageViewTracker } from "@/components/MetaPageViewTracker";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vybe Date — meet people at the events you're already going to",
  description:
    "Vybe Date matches you with people going to the same events as you. 18+ only. Create your free profile and start matching today.",
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
      {/* suppressHydrationWarning: browser extensions (Grammarly, etc.) inject
          their own data-* attributes onto <body> before React hydrates —
          harmless, but React would otherwise warn about the mismatch every
          time. Only suppresses warnings for this element's own attributes,
          not for anything inside it. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MetaPageViewTracker />
        {children}
      </body>
    </html>
  );
}
