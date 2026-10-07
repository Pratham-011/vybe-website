'use client';

import { useEffect } from 'react';
import { WHATSAPP_GROUP_URL } from '@/lib/constants';
import { trackJoinCommunity } from '@/lib/metaEvents';

/** Short pause so the Pixel can fire; the server-side event uses keepalive and survives the redirect anyway. */
const REDIRECT_DELAY_MS = 600;

export const CommunityRedirect = () => {
  useEffect(() => {
    trackJoinCommunity();
    const timer = window.setTimeout(() => window.location.replace(WHATSAPP_GROUP_URL), REDIRECT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
};
