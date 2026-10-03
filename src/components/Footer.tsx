import Image from 'next/image';
import Link from 'next/link';
import { ACCOUNT_DELETION_PATH, CONTACT_EMAIL, PRIVACY_POLICY_PATH, TERMS_PATH, WHATSAPP_GROUP_URL } from '@/lib/constants';

export const Footer = () => (
  <footer className="border-t border-[var(--vybe-hairline)] bg-[var(--vybe-surface)]">
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <Image src="/vybe-mark.png" alt="" width={120} height={115} className="h-7 w-auto" />
            <span className="font-[var(--font-display)] text-base font-extrabold">vybe.date</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--vybe-text-muted)]">
            Meet people at the events you&rsquo;re already going to. Create your free profile and
            start matching today — or join our WhatsApp community to stay in the loop first.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold text-[var(--vybe-text)]">Legal</p>
            <ul className="space-y-2 text-[var(--vybe-text-muted)]">
              <li>
                <Link href={PRIVACY_POLICY_PATH} className="hover:text-[var(--vybe-text)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={TERMS_PATH} className="hover:text-[var(--vybe-text)]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href={ACCOUNT_DELETION_PATH} className="hover:text-[var(--vybe-text)]">
                  Delete your account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold text-[var(--vybe-text)]">Community</p>
            <ul className="space-y-2 text-[var(--vybe-text-muted)]">
              <li>
                <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--vybe-text)]">
                  WhatsApp group
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold text-[var(--vybe-text)]">Contact</p>
            <ul className="space-y-2 text-[var(--vybe-text-muted)]">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[var(--vybe-text)]">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[var(--vybe-hairline)] pt-6 text-xs text-[var(--vybe-text-muted)]">
        <span>© {new Date().getFullYear()} Vybe Date. All rights reserved.</span>
        <span aria-hidden>·</span>
        <span>Vybe Date is for adults 18 and older only.</span>
      </div>
    </div>
  </footer>
);
