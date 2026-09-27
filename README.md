# DENTEX — Landing Page (Demo)

Premium landing page for **DENTEX**, built as the first client demo for **Zen-C Solutions**.
Booking functionality is intentionally not implemented yet — every "Book Appointment" CTA
currently scrolls to the contact/CTA section, ready to be wired to a real booking flow later.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The build was verified with `npm run build` (Google Fonts
requires internet access at build time, which your dev machine will have).

## Structure

```
app/
  layout.tsx       — fonts (Manrope display + Inter body), metadata
  page.tsx          — assembles all sections in scroll order
  globals.css       — DENTEX color tokens + shared utility classes
components/          — one component per section (see brief section 27)
lib/content.ts       — ALL copy, stats and image URLs in one place
```

## Before this goes live — replace these placeholders

Everything below is clearly marked `PLACEHOLDER` in `lib/content.ts`:

- **Trust strip** — currently qualitative labels, not invented stats. Swap in real
  numbers only once the client confirms them.
- **Hero / About / Services / Signature / Before-After images** — all sourced from
  Unsplash for the demo. Replace with the client's own photography (see the
  `/public/images/dentex/...` folders sketched in the brief) so the whole site
  reads as one consistent photography collection.
- **Before / After section** — demo interaction only, generic stock imagery.
  Replace with real, patient-consented photography before launch, or remove
  the section if the client can't provide consented imagery.
- **Testimonials** — placeholder quotes and "Patient Name" — replace with real,
  consented testimonials.
- **Footer contact details & hours** — address, phone, email and hours are
  all placeholders.

## Design tokens

Colors are defined both as CSS variables (`app/globals.css`) and as Tailwind
theme colors (`tailwind.config.ts`): `deep`, `dark`, `teal`, `aqua`, `light`,
`mint`, `offwhite`, `ink` — matching the brief's palette exactly.

## Notes on scope

- Animations use Framer Motion (entrance reveals + hover states), respecting
  `prefers-reduced-motion` globally via `globals.css`.
- Lenis smooth scroll was left out since this is a new project with no existing
  Lenis setup — easy to add later (`npm i lenis`) if the client wants the extra
  scroll feel; native `scroll-behavior: smooth` is used for anchor nav in the
  meantime.
- Booking system, real photography, and real copy are the clear next steps.
