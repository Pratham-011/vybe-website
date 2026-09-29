import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PhoneFrame } from '@/components/PhoneFrame';
import { FeatureCard } from '@/components/FeatureCard';
import { CalendarIcon, ChatIcon, ShieldIcon, SparkIcon } from '@/components/icons';

const STEPS = [
  { n: '01', title: 'Pick an event', body: 'Browse real events near you gigs, rooftop nights, meetups, pop-ups.' },
  { n: '02', title: 'Match with people going', body: 'See who else is going, and match with the ones you vibe with.' },
  { n: '03', title: 'Chat once it clicks', body: "It's mutual or nothing no cold DMs, no chat requests." },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--vybe-hairline)] bg-[var(--vybe-surface-2)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--vybe-pink)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--vybe-pink)]" />
                  Early access building in public
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--vybe-hairline)] bg-[var(--vybe-surface-2)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--vybe-text-muted)]">
                  18+ only
                </span>
              </div>

              <h1 className="mt-5 font-[var(--font-display)] text-[40px] font-extrabold leading-[1.08] tracking-tight sm:text-[52px] lg:text-[58px]">
                vybe is where <span className="text-[var(--vybe-pink)]">the spark</span> happens
              </h1>

              <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[var(--vybe-text-muted)] lg:mx-0">
                Vybe Date matches you with people going to the same events as you gigs, rooftop
                nights, meetups so there&rsquo;s already something to talk about.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <WhatsAppButton />
              </div>
              <p className="mt-3.5 text-[12.5px] text-[var(--vybe-text-muted)]">
                We&rsquo;re just getting started join the WhatsApp group to hear the moment we open up.
              </p>
            </div>

            <div className="flex justify-center">
              <PhoneFrame src="/screens/discover.png" alt="The real Vybe Date Discover screen, browsing events" className="rotate-[-2deg]" />
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────── */}
        <section className="border-y border-[var(--vybe-hairline)] bg-[var(--vybe-surface)]/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <div className="grid gap-10 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <span className="font-[var(--font-display)] text-[13px] font-bold text-[var(--vybe-pink)]">{s.n}</span>
                  <h3 className="mt-2 font-[var(--font-display)] text-[19px] font-bold">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--vybe-text-muted)]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features grid ─────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="mx-auto mb-12 max-w-lg text-center">
            <h2 className="font-[var(--font-display)] text-[30px] font-extrabold sm:text-[36px]">
              Built different from every other dating app
            </h2>
            <p className="mt-3 text-[15px] text-[var(--vybe-text-muted)]">
              Context first, swiping second.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<CalendarIcon />}
              title="Event-based matching"
              description="Every match starts with something you already have in common: the event you're both going to."
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Verified, real people"
              description="Optional face verification adds a badge to a profile, so you know who you're actually talking to."
            />
            <FeatureCard
              icon={<ChatIcon />}
              title="Chat only when it's mutual"
              description="No chat requests, no cold DMs. A conversation opens only once you've both accepted the match."
            />
            <FeatureCard
              icon={<SparkIcon />}
              title="Built for real meetups"
              description="Less endless swiping, more actually showing up somewhere and meeting people in person."
            />
          </div>
        </section>

        {/* ── Swipe showcase ────────────────────────────────────── */}
        <section className="border-y border-[var(--vybe-hairline)] bg-[var(--vybe-surface)]/60">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex justify-center">
              <PhoneFrame src="/screens/matches.png" alt="The real Vybe Date Matches screen, with pending match requests" className="rotate-[-2deg]" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-[var(--font-display)] text-[30px] font-extrabold sm:text-[36px]">
                Only match with people actually going
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--vybe-text-muted)] lg:mx-0">
                Pick an event, and you&rsquo;ll only see people who are going to that same one. No
                random strangers halfway across the city everyone in your stack is someone
                you could actually run into.
              </p>
            </div>
          </div>
        </section>

        {/* ── Chat showcase ──────────────────────────────────────── */}
        <section className="bg-[var(--vybe-surface)]/60">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 flex justify-center lg:order-1">
              <PhoneFrame src="/screens/chat.png" alt="A real Vybe Date chat conversation" className="rotate-[2deg]" />
            </div>
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h2 className="font-[var(--font-display)] text-[30px] font-extrabold sm:text-[36px]">
                A reason to say hi, built in
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--vybe-text-muted)] lg:mx-0">
                Every match already knows what event brought you together so the first message
                writes itself. No &ldquo;hey&rdquo;, no awkward silence.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--vybe-hairline)] bg-gradient-to-br from-[#241522] via-[#171717] to-[#191029] px-6 py-16 text-center sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--vybe-pink-solid)] opacity-20 blur-[100px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--vybe-purple)] opacity-20 blur-[100px]"
            />
            <h2 className="relative font-[var(--font-display)] text-[30px] font-extrabold sm:text-[40px]">
              Be one of the first in
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-[15px] text-[var(--vybe-text-muted)]">
              We&rsquo;re rolling out access in small batches. Join the WhatsApp community and
              you&rsquo;ll be the first to know the moment it opens up.
            </p>
            <div className="relative mt-8 flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
