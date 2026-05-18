<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Salsa — agent rules

Rules for any AI assistant generating code in this repo. Read this before touching UI.

## Before any UI work

1. Read [`PRODUCT.md`](./PRODUCT.md) — voice, audience, register, anti-references.
2. Read [`DESIGN.md`](./DESIGN.md) — tokens, type scale, components, do/don't.
3. Visit `/system` in the running app — every primitive, every variant, 16 composed patterns. The live reference.

## When composing UI

- **Import primitives from `@/components/ui/*`. Never re-implement `<button>`, `<input>`, etc.**
- Use design tokens: `bg-primary`, `text-foreground`, `border-border`, `bg-card`. The only exception is `diet.colorHex` as an inline style (data, not design).
- Parkinsans for headlines, dish names, chef names. Never for body.
- Albert Sans for everything that isn't a headline or data.
- JetBrains Mono *only* for data: kcal, macros, day counters, timestamps, order IDs.
- `tabular-nums` on any number column.
- "Meal plan" / "meal kit" / "subscription box" are **banned** in copy. Salsa is a chef service.

Inputs sit on warm card surfaces. Always use the shadcn `<Input>` primitive — it fills `bg-background` (solid neutral white) by design, never transparent.

## Adding components

- `npx shadcn@latest add <name>` — installs into `src/components/ui/`, respects the Vega preset and tokens from `components.json` and `globals.css`. Use this first.
- **Don't** run `shadcn init` — it overwrites `globals.css` and destroys the token system.
- Editing `src/components/ui/<file>.tsx` updates every page that imports it. That's the contract.
- New patterns (e.g., a multi-step shell) go in `src/components/<feature>/`. If reusable across surfaces, also drop an instance into `src/components/system/showcase/cards.tsx` so it appears in `/system/patterns`.

## Reflex-reject

Bail and restart if your first instinct produces any of these:

- Italic-serif hero h1 set in Fraunces, Recoleta, or similar.
- Uppercase letter-spaced eyebrow chip above a hero.
- Salmon as a flat full-bleed hero background. Salmon is an **accent**, never a wash.
- A grid of cards with circular emoji badges + `rounded-2xl` chrome.
- Per-diet color theming baked into components. Diets are data; they identify through name, photography, and `colorHex` swatch only.
- Inline hex / oklch colors anywhere in component code.
- "Meal plan," "meal kit," or "subscription box" copy.
- Inter, Geist, Geist Mono, Plus Jakarta Sans, Space Grotesk — AI-cliche typography, forbidden.

## Using Impeccable

The `/impeccable craft <surface>` skill reads `PRODUCT.md` and `DESIGN.md` automatically when both sit at repo root. They do — no extra config needed.

Install: `npx skills add pbakaus/impeccable`.

## Feature-specific guides

- Booking flow → see [`BOOKING.md`](./BOOKING.md).
- Figma kit parity → see [`FIGMA-DS.md`](./FIGMA-DS.md).
