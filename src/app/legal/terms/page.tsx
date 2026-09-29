import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';
import { CONTACT_EMAIL, PRIVACY_POLICY_PATH, TERMS_EFFECTIVE_DATE, TERMS_VERSION } from '@/lib/constants';

export const metadata: Metadata = { title: 'Terms & Conditions — Vybe Date' };

const TOC: { id: string; label: string }[] = [
  { id: 'acceptance', label: '1. Acceptance of these terms' },
  { id: 'eligibility', label: '2. Who can use Vybe Date' },
  { id: 'the-service', label: "3. What Vybe Date is (and isn't)" },
  { id: 'your-account', label: '4. Your account' },
  { id: 'safety', label: '5. Verification and meeting people safely' },
  { id: 'conduct', label: '6. Acceptable use' },
  { id: 'your-content', label: '7. Your content' },
  { id: 'payments', label: '8. Payments and refunds' },
  { id: 'termination', label: '9. Suspension and termination' },
  { id: 'disclaimers', label: '10. Disclaimers' },
  { id: 'liability', label: '11. Limitation of liability' },
  { id: 'indemnity', label: '12. Indemnity' },
  { id: 'law', label: '13. Governing law and disputes' },
  { id: 'changes', label: '14. Changes to these terms' },
  { id: 'contact', label: '15. Contact' },
];

export default function TermsAndConditions() {
  return (
    <LegalShell title="Terms & Conditions">
      <p className="legal-meta">
        Version {TERMS_VERSION} · Effective {TERMS_EFFECTIVE_DATE}
      </p>

      <p className="legal-intro">
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of Vybe Date, an
        event-based dating and social app. By creating an account you agree to them, along with
        our <a href={PRIVACY_POLICY_PATH}>Privacy Policy</a>. If you don&rsquo;t agree, please
        don&rsquo;t use the app.
      </p>

      <nav className="legal-toc" aria-label="Sections">
        <h2>On this page</h2>
        <ol>
          {TOC.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="legal-section" id="acceptance">
        <h2>1. Acceptance of these terms</h2>
        <p>
          Creating an account, ticking the consent checkbox during sign-up, or otherwise using
          Vybe Date means you accept these Terms and our Privacy Policy in full. If you&rsquo;re
          using the app on behalf of someone else, you confirm you have their permission to do
          so.
        </p>
      </section>

      <section className="legal-section" id="eligibility">
        <h2>2. Who can use Vybe Date</h2>
        <ul>
          <li>You must be <strong>18 years old or older</strong>. We don&rsquo;t knowingly allow anyone younger to hold an account.</li>
          <li>You may hold only <strong>one account</strong>, under your real identity.</li>
          <li>The information you give us — your birth date, gender, photos and everything else on your profile — must be accurate and about you.</li>
          <li>You must not be barred from using dating or social services under any law that applies to you.</li>
        </ul>
      </section>

      <section className="legal-section" id="the-service">
        <h2>3. What Vybe Date is (and isn&rsquo;t)</h2>
        <p>
          Vybe Date helps you discover events and connect with other people going to them, based
          on a compatibility score we calculate from your profile and preferences. It is a way to
          meet people — it is <strong>not a matchmaking guarantee, a background-check service, or
          a safety certification</strong> of any person, event or venue. We don&rsquo;t guarantee
          you&rsquo;ll be matched with anyone, that any match will lead to a conversation, a date,
          or any particular outcome, or that any event listed is accurate, safe or will happen as
          described.
        </p>
      </section>

      <section className="legal-section" id="your-account">
        <h2>4. Your account</h2>
        <p>
          You&rsquo;re responsible for keeping your login credentials confidential and for
          everything that happens under your account. Tell us straight away if you think someone
          else has access to it.
        </p>
      </section>

      <section className="legal-section" id="safety">
        <h2>5. Verification and meeting people safely</h2>
        <p>
          We offer face verification to help reduce fake profiles, and a verified badge is shown
          on a profile that passes it. Verification is a signal, not a guarantee — we do not run
          criminal background checks, and we cannot confirm any user&rsquo;s identity,
          intentions, marital status or age beyond what they&rsquo;ve told us.
        </p>
        <p>
          You are solely responsible for your own safety when interacting with, or meeting, other
          users. Meet in public places, tell someone else your plans, and use your own judgement.
          Vybe Date is not responsible for the conduct of any user, on or off the app.
        </p>
      </section>

      <section className="legal-section" id="conduct">
        <h2>6. Acceptable use</h2>
        <p>You agree not to, on Vybe Date:</p>
        <ul>
          <li>Impersonate anyone, or create a profile that isn&rsquo;t genuinely you.</li>
          <li>Harass, threaten, stalk, or abuse another user.</li>
          <li>Post content that is illegal, sexually explicit involving a minor, hateful, or that infringes someone else&rsquo;s rights.</li>
          <li>Solicit money, gifts or financial information from another user, or run any commercial promotion without our permission.</li>
          <li>Scrape, mass-download, or use automated tools against the app.</li>
          <li>Try to bypass the app&rsquo;s security, rate limits, or access controls.</li>
        </ul>
        <p>
          Breaking any of these may lead to your content being removed, your account being
          suspended or permanently terminated, and, where the law requires it, being reported to
          the relevant authorities.
        </p>
      </section>

      <section className="legal-section" id="your-content">
        <h2>7. Your content</h2>
        <p>
          You keep ownership of the photos and other content you upload. By posting it, you give
          Vybe Date a licence to store it and show it to the other users your profile is visible
          to (matches, or people you&rsquo;re going to the same event with), for as long as your
          account exists. You confirm you have the right to post everything you upload, and that
          it doesn&rsquo;t infringe anyone else&rsquo;s rights.
        </p>
      </section>

      <section className="legal-section" id="payments">
        <h2>8. Payments and refunds</h2>
        <p>
          Some features of Vybe Date — including, where offered, subscriptions, in-app purchases,
          profile boosts, or paid event access — require payment. All such payments are processed
          securely and, once made, are <strong>final and non-refundable</strong>, including
          (without limitation) where:
        </p>
        <ul>
          <li>you do not receive a match, or the match you were hoping for;</li>
          <li>you&rsquo;re unhappy with the people you&rsquo;re matched or connected with, or with an event;</li>
          <li>you decide to stop using the app, delete your account, or are suspended or terminated for breaking these Terms;</li>
          <li>an event you paid to access is cancelled, changed, or doesn&rsquo;t meet your expectations — that is between you and the event organiser.</li>
        </ul>
        <p>
          The only exception is a duplicate or clearly erroneous charge caused by a fault on our
          side, which we will correct. Nothing in this section removes any statutory right you
          cannot lawfully be asked to give up under Indian consumer protection law.
        </p>
      </section>

      <section className="legal-section" id="termination">
        <h2>9. Suspension and termination</h2>
        <p>
          You can delete your account at any time from the Profile screen — this permanently
          erases your data as described in our Privacy Policy. We may suspend or terminate your
          account, without notice, if we reasonably believe you&rsquo;ve broken these Terms, put
          another user&rsquo;s safety at risk, or used the app unlawfully.
        </p>
      </section>

      <section className="legal-section" id="disclaimers">
        <h2>10. Disclaimers</h2>
        <p>
          Vybe Date is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
          warranties of any kind, express or implied, including that it will be uninterrupted,
          error-free, or that any compatibility score, match, or event listing is accurate. You
          use the app at your own risk.
        </p>
      </section>

      <section className="legal-section" id="liability">
        <h2>11. Limitation of liability</h2>
        <p>
          To the fullest extent the law allows, Vybe Date is not liable for any indirect,
          incidental or consequential loss arising from your use of the app, or from your
          interactions with other users or events found through it — including anything that
          happens at an in-person meeting. Where liability can&rsquo;t be excluded, it is limited
          to the amount you paid us, if any, in the 12 months before the claim.
        </p>
      </section>

      <section className="legal-section" id="indemnity">
        <h2>12. Indemnity</h2>
        <p>
          You agree to indemnify Vybe Date against any claim, loss or expense arising from your
          breach of these Terms, your content, or your conduct towards another user.
        </p>
      </section>

      <section className="legal-section" id="law">
        <h2>13. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of India. Subject to the grievance process below,
          the courts at Mumbai, Maharashtra have exclusive jurisdiction over any dispute.
        </p>
      </section>

      <section className="legal-section" id="changes">
        <h2>14. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time; the version and effective date at the top
          of this page always show the current one. Continuing to use the app after a change
          means you accept the updated Terms, and for material changes we&rsquo;ll ask for fresh
          consent where the law requires it.
        </p>
      </section>

      <section className="legal-section" id="contact">
        <h2>15. Contact</h2>
        <p>
          Questions about these Terms, or a complaint about a charge or another user, can be sent
          to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </LegalShell>
  );
}
