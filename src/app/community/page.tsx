import type { Metadata } from 'next';
import Image from 'next/image';
import { WHATSAPP_GROUP_URL } from '@/lib/constants';
import { CommunityRedirect } from '@/components/CommunityRedirect';

/** vybe-date.social/community — a shareable short link that forwards to the WhatsApp community. */
export const metadata: Metadata = {
  title: 'Join the Vybe Date community',
  description: 'Event updates, new cities and early access — join the Vybe Date WhatsApp community.',
  alternates: { canonical: '/community/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Join the Vybe Date community',
    description: 'Event updates, new cities and early access — on WhatsApp.',
    url: '/community/',
    siteName: 'Vybe Date',
    type: 'website',
  },
};

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      {/* No-JS fallback; with JS, CommunityRedirect goes first (after tracking). */}
      <meta httpEquiv="refresh" content={`3;url=${WHATSAPP_GROUP_URL}`} />
      <CommunityRedirect />
      <Image src="/vybe-mark.png" alt="Vybe Date" width={64} height={64} priority />
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Taking you to WhatsApp…</h1>
      <p className="max-w-sm text-[15px] text-[var(--vybe-text-muted)]">
        Joining the Vybe Date community for event updates and new cities.
      </p>
      <a
        href={WHATSAPP_GROUP_URL}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--vybe-pink-solid)] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(255,100,130,0.35)] transition hover:brightness-110"
      >
        Open WhatsApp
      </a>
    </main>
  );
}
