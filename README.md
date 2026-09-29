# vybe-website

The marketing site for Vybe Date — Next.js (App Router) + Tailwind CSS v4, styled with the same
"Luminescent Void" brand tokens as the app (`nightfall-navigator`).

Since there's no app-store listing yet, the one call-to-action everywhere on the site is
**"Join our WhatsApp community"**, instead of Apple/Play Store badges. No user/event counts are
shown anywhere — we're pre-launch.

## Structure

```
src/
  app/
    page.tsx                 Home page
    layout.tsx                Root layout, fonts, metadata
    globals.css                Brand tokens + legal-page typography
    legal/
      privacy/page.tsx          Privacy Policy
      terms/page.tsx             Terms & Conditions
      account-deletion/page.tsx  Account deletion instructions
  components/
    Header.tsx, Footer.tsx, WhatsAppButton.tsx, LegalShell.tsx
    PhoneFrame.tsx              A real iPhone-style frame (Dynamic Island, side
                                 buttons) wrapping an actual screenshot — pass it
                                 a `src` from public/screens/
  lib/
    constants.ts               WhatsApp link, contact email, legal doc versions
public/
  screens/                     Real screenshots of the actual app (Discover,
    discover.png, matches.png,  Matches, Chat) at iPhone size, taken from a
    chat.png                    seeded isolated test run — not illustrations.
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
npm run lint
```

## Updating things later

- **WhatsApp link / contact email** — `src/lib/constants.ts`.
- **Legal pages** — kept in sync with the app's own legal pages at
  `nightfall-navigator/src/pages/legal/`. If you change one, change the other, and bump the
  version/date constants in both places.
- **Phone mockups** — real screenshots (`public/screens/*.png`) of the actual app, taken from a
  throwaway seeded scenario (gradient placeholder photos, since real users' photos can't be used
  here) — not hand-drawn illustrations. To refresh them after a UI change, reseed and reshoot at a
  390×844 viewport, deviceScaleFactor 3, and drop the new PNGs in `public/screens/`.
- **Re-introducing stats** ("X users", "X matches") — once you have real numbers worth showing,
  add them back into the hero/CTA copy in `src/app/page.tsx`.
