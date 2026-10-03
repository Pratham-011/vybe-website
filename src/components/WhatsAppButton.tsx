'use client';

import { WHATSAPP_GROUP_URL } from '@/lib/constants';
import { trackJoinCommunity } from '@/lib/metaEvents';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.999.583 3.86 1.588 5.428L2 22l4.706-1.554A9.945 9.945 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.17 8.17 0 0 1-4.166-1.14l-.299-.177-2.79.921.933-2.72-.194-.28A8.16 8.16 0 0 1 3.8 12c0-4.52 3.68-8.2 8.201-8.2 4.52 0 8.199 3.68 8.199 8.2 0 4.52-3.679 8.2-8.199 8.2z" />
  </svg>
);

/** Secondary, lower-commitment option (the real conversion is now
 *  GetStartedButton) — set `secondary` for the de-emphasized ghost style
 *  used wherever it sits alongside the primary CTA. */
export const WhatsAppButton = ({
  className = '',
  secondary = false,
  children = 'Join our WhatsApp community',
}: {
  className?: string;
  secondary?: boolean;
  children?: React.ReactNode;
}) => (
  <a
    href={WHATSAPP_GROUP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackJoinCommunity}
    className={
      secondary
        ? `inline-flex items-center gap-2 rounded-full border border-[var(--vybe-hairline)] px-5 py-3 text-[14px] font-semibold text-[var(--vybe-text-muted)] transition hover:border-[var(--vybe-pink-soft)] hover:text-[var(--vybe-text)] ${className}`
        : `inline-flex items-center gap-2 rounded-full bg-[var(--vybe-pink-solid)] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(255,100,130,0.35)] transition hover:brightness-110 active:scale-[0.98] ${className}`
    }
  >
    <WhatsAppIcon />
    {children}
  </a>
);
