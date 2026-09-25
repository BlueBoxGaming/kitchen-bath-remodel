# Kitchen & Bath Remodel — Phase 1 marketing site

Next.js App Router site for a kitchen/bath remodeler. Company facts use `{{PLACEHOLDER}}` tokens until real values are supplied.

## Run

```bash
npm install
npm run dev
```

Build: `npm run build` · Start: `npm start`

## Tokens

Edit `src/content/site.ts` (and related modules under `src/content/`) for:

`{{COMPANY}}` `{{NAP}}` `{{PHONE}}` `{{CITY}}` `{{CITIES}}` `{{HOURS}}` `{{YEARS}}` `{{LICENSE}}` `{{INSURANCE}}` `{{WARRANTY}}` `{{SHOWROOM}}` `{{KITCHEN_RANGE}}` `{{BATH_RANGE}}` `{{FINANCING}}` `{{CREW_MODEL}}` `{{PERMITS}}` `{{CONSULT_OFFER}}` `{{PROMO}}` `{{RATING}}`

Do not invent prices, license numbers, star averages, or promotions.

## Content modules

- `src/content/projects.ts` — portfolio
- `src/content/reviews.ts` — sample review placeholders
- `src/content/process.ts` — process steps
- `src/content/faqs.ts` — kitchen/bath FAQs
- `src/content/cities.ts` — service area

## Images

Labeled placeholders in `public/images/`. Replace with consented finished-room photography before launch. Regenerate placeholders with `python scripts/generate-placeholders.py` if needed.

## Fonts

Self-hosted OFL fonts in `public/fonts/` (Fraunces + Source Sans 3). No runtime Google Fonts CSS.

## Phase 1 routes

`/` · `/kitchen-remodeling` · `/bathroom-remodeling` · `/portfolio` · `/schedule-consultation` · `/contact` · `/reviews` · `/about`
