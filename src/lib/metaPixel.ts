/**
 * Meta (Facebook/Instagram) Pixel — browser-side half of ad conversion
 * tracking, same pattern as the app (nightfall-navigator/src/lib/metaPixel.ts).
 * Pairs with the server-side Conversions API call in `metaEvents.ts` (same
 * event, same event_id, so Meta deduplicates them).
 *
 * Inert — no script loads, every call is a no-op — until
 * NEXT_PUBLIC_META_PIXEL_ID is set.
 */
'use client';

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[] };
    _fbq?: Window['fbq'];
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

let loaded = false;

/** Loads the Pixel base script and fires the initial PageView. Safe to call
 *  more than once — only does anything the first time. */
export function initMetaPixel() {
  if (loaded || !PIXEL_ID || typeof window === 'undefined') return;
  loaded = true;

  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq?.('init', PIXEL_ID);
}

/** Fires a client-side Pixel event. `eventId` must match the id sent to the
 *  server-side Conversions API call for the same real-world event, so Meta
 *  can tell they're one event reported twice, not two. */
export function fbqTrack(eventName: string, params?: Record<string, unknown>, eventId?: string) {
  if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', eventName, params || {}, eventId ? { eventID: eventId } : undefined);
}

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export const getFbp = () => readCookie('_fbp');

/** Meta's click-id cookie, with a fallback derived from `fbclid` in the URL —
 *  exactly the format Meta's own Pixel script uses — for the very first
 *  event on an ad click, before the Pixel script has set the cookie itself. */
export function getFbc(): string | undefined {
  const fromCookie = readCookie('_fbc');
  if (fromCookie) return fromCookie;
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  if (!fbclid) return undefined;
  return `fb.1.${Date.now()}.${fbclid}`;
}
