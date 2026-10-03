export const SITE_NAME = 'Vybe Date';
export const SITE_URL = 'https://vybe-date.social';
export const CONTACT_EMAIL = 'vybe.date@gmail.com';

/** The app is live — this is the main conversion everywhere on the site:
 *  straight to sign-up. Ads land here (via the site), not the other way round. */
export const PORTAL_URL = 'https://app.vybe-date.social/auth/login';

/** Secondary, lower-commitment option for people not ready to sign up yet —
 *  "stay updated" rather than the main ask. */
export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/F2hfH5cL94QHA4wk5ImDwF';

/** Kpk-Backend's base URL — this static site has no server of its own, so ad
 *  conversion events (Lead/Contact) are relayed to Meta through the app's
 *  existing /api/meta/conversions endpoint instead of duplicating it here. */
export const API_BASE = (process.env.NEXT_PUBLIC_API_URL as string) || 'https://backendevent-h6d4gweyaadhc0hp.eastasia-01.azurewebsites.net';

export const PRIVACY_POLICY_PATH = '/legal/privacy';
export const TERMS_PATH = '/legal/terms';
export const ACCOUNT_DELETION_PATH = '/legal/account-deletion';

// Kept in sync with the app's own legal pages (nightfall-navigator/src/data/legal.ts) —
// same versioning scheme, since both documents describe the same product.
export const PRIVACY_POLICY_VERSION = '1.0';
export const PRIVACY_POLICY_EFFECTIVE_DATE = '22 September 2026';
export const TERMS_VERSION = '1.0';
export const TERMS_EFFECTIVE_DATE = '22 September 2026';
