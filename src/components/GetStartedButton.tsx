'use client';

import { PORTAL_URL } from '@/lib/constants';
import { trackGetStarted } from '@/lib/metaEvents';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

/** The site's main conversion — straight to the real app's sign-up page. */
export const GetStartedButton = ({
  className = '',
  children = 'Get started',
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <a
    href={PORTAL_URL}
    onClick={trackGetStarted}
    className={`inline-flex items-center gap-2 rounded-full bg-[var(--vybe-pink-solid)] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(255,100,130,0.35)] transition hover:brightness-110 active:scale-[0.98] ${className}`}
  >
    {children}
    <ArrowIcon />
  </a>
);
