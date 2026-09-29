import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';
import { CONTACT_EMAIL, PRIVACY_POLICY_EFFECTIVE_DATE, PRIVACY_POLICY_VERSION, TERMS_PATH } from '@/lib/constants';

export const metadata: Metadata = { title: 'Privacy Policy — Vybe Date' };

const TOC: { id: string; label: string }[] = [
  { id: 'who-we-are', label: '1. Who we are' },
  { id: 'what-we-collect', label: '2. What we collect' },
  { id: 'why-we-collect-it', label: '3. Why we collect it, and our legal basis' },
  { id: 'how-we-share-it', label: '4. Who we share it with' },
  { id: 'retention', label: '5. How long we keep it' },
  { id: 'your-rights', label: '6. Your rights as a Data Principal' },
  { id: 'security', label: '7. How we protect it' },
  { id: 'children', label: '8. Age requirement' },
  { id: 'cross-border', label: '9. Where your data is processed' },
  { id: 'cookies', label: '10. Cookies and local storage' },
  { id: 'breach', label: '11. If something goes wrong' },
  { id: 'changes', label: '12. Changes to this policy' },
  { id: 'contact', label: '13. Grievance Officer & contact' },
];

export default function PrivacyPolicy() {
  return (
    <LegalShell title="Privacy Policy">
      <p className="legal-meta">
        Version {PRIVACY_POLICY_VERSION} · Effective {PRIVACY_POLICY_EFFECTIVE_DATE}
      </p>

      <p className="legal-intro">
        Vybe Date (&ldquo;Vybe Date&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) runs an
        event-based dating and social app. This policy explains what personal data we collect
        when you use it, why, who we share it with, and the rights you have over it under
        India&rsquo;s <strong>Digital Personal Data Protection Act, 2023 (&ldquo;DPDP
        Act&rdquo;)</strong> and other applicable law. In the DPDP Act&rsquo;s terms, Vybe Date
        is the <strong>Data Fiduciary</strong> and you are the <strong>Data Principal</strong>.
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

      <section className="legal-section" id="who-we-are">
        <h2>1. Who we are</h2>
        <p>
          Vybe Date is a mobile and web app that helps people meet through the events
          they&rsquo;re both going to. This policy covers the app at vybe.date and its
          supporting services. For anything about your data, write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section className="legal-section" id="what-we-collect">
        <h2>2. What we collect</h2>
        <p>Only what the app needs to work, and nothing bought or gathered from anywhere else.</p>
        <h3>Account and identity</h3>
        <ul>
          <li>Name, email address, and a hashed (never plain-text) password, or your Google account details if you sign in with Google.</li>
          <li>Birth date and gender — used to confirm you&rsquo;re 18 or over and to run the hard filters in matching.</li>
        </ul>
        <h3>Profile</h3>
        <ul>
          <li>Photos and your profile picture.</li>
          <li>Interests, height, education, lifestyle habits, and the partner preferences you set for matching.</li>
          <li>A verification selfie and its pass/fail result, if you complete face verification.</li>
        </ul>
        <h3>Location</h3>
        <ul>
          <li>The area, city and country you type in, or that we work out from your device location.</li>
          <li>
            If you allow it, your device&rsquo;s GPS coordinates — rounded to roughly 110 metres
            and used only to measure distance for matching. It is never shown to other people,
            who only ever see your city.
          </li>
        </ul>
        <h3>Activity</h3>
        <ul>
          <li>The events you swipe on, your matches, and the connections you accept, reject or block.</li>
          <li>Messages you send in chat, and when you&rsquo;ve read a message.</li>
        </ul>
        <h3>Technical</h3>
        <ul>
          <li>Your IP address and basic device/browser information, logged for security and abuse prevention.</li>
          <li>The login session stored on your device so you stay signed in.</li>
        </ul>
      </section>

      <section className="legal-section" id="why-we-collect-it">
        <h2>3. Why we collect it, and our legal basis</h2>
        <p>
          We process your personal data on the basis of the consent you give when you create
          your account, for these purposes:
        </p>
        <ul>
          <li>
            <strong>Running your account</strong> — signing you in, keeping your session secure,
            and letting you edit or delete your profile.
          </li>
          <li>
            <strong>Matching</strong> — scoring compatibility between you and other people going
            to the same event, using your profile, interests, habits, preferences and distance.
          </li>
          <li>
            <strong>Events and chat</strong> — showing you relevant events, and delivering
            messages once you&rsquo;ve matched with someone.
          </li>
          <li>
            <strong>Safety</strong> — running face verification, and reviewing reports of abuse
            or fake accounts.
          </li>
          <li>
            <strong>Support and legal compliance</strong> — responding to you, and meeting our
            obligations under the DPDP Act, consumer protection law, and other applicable
            regulation.
          </li>
        </ul>
        <p>
          You can withdraw your consent at any time by deleting your account (see{' '}
          <a href="#your-rights">Your rights</a>). Withdrawing consent doesn&rsquo;t undo
          processing we already did before you withdrew it, and it means we can no longer
          provide the parts of the service that depend on that data.
        </p>
      </section>

      <section className="legal-section" id="how-we-share-it">
        <h2>4. Who we share it with</h2>
        <p>We never sell your personal data. It is shared only in these ways:</p>
        <ul>
          <li>
            <strong>People you&rsquo;ve matched with</strong> see a limited version of your
            profile — your name, age, photos, interests, education, habits and verification
            badge. They never see your email, exact address, coordinates or your search
            preferences.
          </li>
          <li>
            <strong>Service providers</strong> who process data on our behalf under contract: our
            image hosting and delivery provider (photos and videos), our database and app hosting
            providers, our email provider (for OTPs and account emails), and OpenStreetMap&rsquo;s
            Nominatim service (to turn coordinates or a typed address into an area/city/country —
            it receives only the coordinates or text needed for that one lookup).
          </li>
          <li>
            <strong>Google</strong>, if you choose to sign in with a Google account.
          </li>
          <li>
            <strong>Law enforcement or regulators</strong>, only when we&rsquo;re legally
            required to, or to protect the rights, property or safety of our users or the public.
          </li>
        </ul>
      </section>

      <section className="legal-section" id="retention">
        <h2>5. How long we keep it</h2>
        <p>
          We keep your data for as long as your account is active, or as long as we need it for
          the purposes above — whichever is relevant.
        </p>
        <p>
          When you delete your account, we permanently erase your profile and photos, every
          direct conversation and message you&rsquo;re part of (for the other person too), your
          matches and connections, your swipe history, and remove your membership from any event
          group chats. Your login session is also invalidated immediately. A short trail of
          records may be kept only where the law requires it (for example, fraud or dispute
          records), and only for as long as that requirement lasts.
        </p>
      </section>

      <section className="legal-section" id="your-rights">
        <h2>6. Your rights as a Data Principal</h2>
        <p>Under the DPDP Act, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> a summary of the personal data we hold about you and how we process it.</li>
          <li><strong>Correct, complete or update</strong> inaccurate or outdated data — most of this you can edit directly in your profile.</li>
          <li><strong>Erase</strong> your personal data, by deleting your account from the Profile screen at any time.</li>
          <li><strong>Withdraw your consent</strong> to our processing, as easily as you gave it.</li>
          <li><strong>Nominate</strong> another individual to exercise these rights on your behalf if you die or become incapacitated.</li>
          <li>
            <strong>Grievance redressal</strong> — raise a complaint with us first (see{' '}
            <a href="#contact">Grievance Officer &amp; contact</a>), and take it to the Data
            Protection Board of India if you&rsquo;re not satisfied with our response.
          </li>
        </ul>
        <p>To exercise any of these, other than deleting your account yourself, write to us at the address in section 13.</p>
      </section>

      <section className="legal-section" id="security">
        <h2>7. How we protect it</h2>
        <ul>
          <li>Passwords are hashed, never stored in plain text.</li>
          <li>Traffic between the app and our servers is encrypted (HTTPS).</li>
          <li>Device location is rounded before it&rsquo;s stored, so it can&rsquo;t pinpoint your home.</li>
          <li>Other people&rsquo;s photos on the app resist right-click, drag and long-press saving, and are served as resized copies rather than full-resolution originals.</li>
          <li>Access to personal data inside our systems is limited to what each part of the app needs to function.</li>
        </ul>
        <p>
          No system is perfectly secure, and we can&rsquo;t guarantee absolute security — but we
          work to keep these protections current.
        </p>
      </section>

      <section className="legal-section" id="children">
        <h2>8. Age requirement</h2>
        <p>
          Vybe Date is for people 18 and older only. We check this at sign-up and don&rsquo;t
          knowingly collect data from anyone under 18. If we learn an account belongs to someone
          under 18, we suspend it and delete the associated data.
        </p>
      </section>

      <section className="legal-section" id="cross-border">
        <h2>9. Where your data is processed</h2>
        <p>
          Some of the service providers listed in section 4 may process data on servers outside
          India. The DPDP Act allows this except to countries the Central Government specifically
          restricts, and we choose providers that maintain appropriate safeguards for personal
          data.
        </p>
      </section>

      <section className="legal-section" id="cookies">
        <h2>10. Cookies and local storage</h2>
        <p>
          We don&rsquo;t use third-party advertising or tracking cookies. The app stores your
          login session, and, while you&rsquo;re signing up, your in-progress answers, in your
          browser&rsquo;s local storage so you don&rsquo;t lose them on a refresh. This data
          stays on your device and is never sent to anyone but our own servers.
        </p>
      </section>

      <section className="legal-section" id="breach">
        <h2>11. If something goes wrong</h2>
        <p>
          If a personal data breach affects you, we will notify the Data Protection Board of
          India and affected users as required under the DPDP Act, describing what happened and
          what we&rsquo;re doing about it.
        </p>
      </section>

      <section className="legal-section" id="changes">
        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The version and effective date at the top
          of this page always reflect the current one. For material changes — anything that
          changes what we collect or why — we&rsquo;ll let you know in the app, and ask for fresh
          consent where the law requires it.
        </p>
      </section>

      <section className="legal-section" id="contact">
        <h2>13. Grievance Officer &amp; contact</h2>
        <p>
          For privacy questions, to exercise your rights, or to raise a formal grievance under
          the DPDP Act, write to our Grievance Officer at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We aim to acknowledge every
          grievance within 7 days and resolve it within 30 days.
        </p>
      </section>

      <p className="legal-footer">
        This Privacy Policy works together with our <a href={TERMS_PATH}>Terms &amp; Conditions</a>,
        which also apply to your use of Vybe Date.
      </p>
    </LegalShell>
  );
}
