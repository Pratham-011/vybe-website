import type { Metadata } from 'next';
import { LegalShell } from '@/components/LegalShell';
import { CONTACT_EMAIL, PRIVACY_POLICY_PATH } from '@/lib/constants';

export const metadata: Metadata = { title: 'Delete your account — Vybe Date' };

export default function AccountDeletion() {
  return (
    <LegalShell title="Delete your account">
      <p className="legal-intro">
        You&rsquo;re always in control of your data. Deleting your Vybe Date account is
        permanent, immediate, and doesn&rsquo;t require contacting anyone.
      </p>

      <section className="legal-section" id="in-app">
        <h2>Delete it from the app</h2>
        <ul>
          <li>Open Vybe Date and go to your <strong>Profile</strong> tab.</li>
          <li>Scroll to <strong>Delete account</strong> and confirm.</li>
          <li>Your account is deleted immediately — there&rsquo;s no waiting period, and no admin approval needed.</li>
        </ul>
      </section>

      <section className="legal-section" id="what-is-deleted">
        <h2>What gets deleted</h2>
        <p>When you delete your account, we permanently erase:</p>
        <ul>
          <li>Your profile, photos, and profile picture.</li>
          <li>Every direct conversation and message you&rsquo;re part of — for the other person too.</li>
          <li>Your matches, connections, and swipe history.</li>
          <li>Your membership in any event group chats.</li>
          <li>Your login session — it&rsquo;s invalidated immediately, on every device.</li>
        </ul>
        <p>
          A short trail of records may be kept only where the law requires it (for example, fraud
          or dispute records), and only for as long as that requirement lasts. See our{' '}
          <a href={PRIVACY_POLICY_PATH}>Privacy Policy</a> for the full detail.
        </p>
      </section>

      <section className="legal-section" id="no-account">
        <h2>Don&rsquo;t have the app anymore, or can&rsquo;t sign in?</h2>
        <p>
          Write to us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the email
          address on your account, and we&rsquo;ll delete it for you within a few business days.
        </p>
      </section>
    </LegalShell>
  );
}
