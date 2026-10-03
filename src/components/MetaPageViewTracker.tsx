'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fbqTrack, initMetaPixel } from '@/lib/metaPixel';

/**
 * Loads the Meta Pixel once and fires PageView on every route change.
 * Mounted once in the root layout. A no-op until NEXT_PUBLIC_META_PIXEL_ID
 * is set.
 */
export const MetaPageViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    fbqTrack('PageView');
  }, [pathname]);

  return null;
};
