/**
 * The site's ad-conversion events. Fires the browser Pixel and the server-
 * side Conversions API together (same event_id, Meta's own recommended
 * Pixel+CAPI setup) — relayed through Kpk-Backend's /api/meta/conversions,
 * since this static site has no server of its own.
 *
 * Both halves degrade gracefully: the Pixel call is a no-op without
 * NEXT_PUBLIC_META_PIXEL_ID, and the server call just logs-and-skips without
 * the backend's META_PIXEL_ID/META_CAPI_ACCESS_TOKEN.
 *
 * Every call here uses `keepalive: true` — these events fire right as the
 * visitor clicks a link that immediately navigates them to a different
 * origin (the app, or WhatsApp), and a plain fetch() can get cancelled
 * mid-flight when the page unloads before it completes.
 */
'use client';

import { fbqTrack, getFbc, getFbp } from './metaPixel';
import { API_BASE } from './constants';

const newEventId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `evt_${Date.now()}_${Math.random().toString(16).slice(2)}`;

type ConversionEvent = 'Lead' | 'Contact';

function sendServerEvent(eventName: ConversionEvent, eventId: string) {
  fetch(`${API_BASE}/api/meta/conversions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      fbp: getFbp(),
      fbc: getFbc(),
    }),
  }).catch(() => {});
}

function track(eventName: ConversionEvent) {
  const eventId = newEventId();
  fbqTrack(eventName, undefined, eventId);
  sendServerEvent(eventName, eventId);
}

/** Fires when someone clicks through to the app to sign up — the site's main
 *  conversion now that ads land here first. */
export const trackGetStarted = () => track('Lead');

/** Fires when someone clicks through to the WhatsApp community instead —
 *  a real but lower-commitment action, kept distinct from Lead. */
export const trackJoinCommunity = () => track('Contact');
