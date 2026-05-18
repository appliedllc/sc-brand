# Salsa — Design System

A reference for the dev team. This file follows the Google Stitch `DESIGN.md` format and is also read by Impeccable before any visual work.

> **Note on tokens.** All colors below are CSS custom properties defined in `app/globals.css`. Reference them as `bg-primary`, `text-foreground`, `border-border`, etc. — never hardcode hex or OKLCH values in components.

---

## 1. Overview

Salsa is a private-chef service. The design system is **warm, confident, not clinical** — modern wellness DTC with a single editorial accent (Parkinsans display) that signals *chef* without going full magazine.

**Foundations:**

- **Stack:** Next.js + shadcn/ui (Vega preset, Radix primitives), Tailwind v4
- **Surfaces:** Neutral off-white page; champagne-tinted cards (the only warm surface); neutral grey for muted / secondary / borders; mauve foreground (warm near-black) for text.
- **Radius:** medium (10px base, scaled per token)
- **Mode:** light + dark, both supported

**One-line aesthetic:** confident, warm, and chef-led, with one signature color (salmon `#DD5239`) and a quiet supporting palette of sage, walnut, and champagne. Warmth lives on cards, not on the page.

---

## 2. Colors

All colors are defined in OKLCH for predictable lightness and perceptual uniformity.

### Brand

| Token | Light | Dark | Use |
|---|---|---|---|
| `--primary` | `oklch(0.61 0.185 31)` (≈ `#DD5239`) | `oklch(0.66 0.175 31)` | Primary CTAs, brand marks, key callouts. |
| `--primary-foreground` | neutral off-white `oklch(0.99 0 0)` | dark mauve | Text on primary surfaces. |

The salmon is **the** Salsa color. Used at full saturation only on CTAs, brand marks, and one signature callout per surface. Never as a full-bleed hero background.

### Surfaces & text

| Token | Light value | Use |
|---|---|---|
| `--background` | `oklch(0.99 0 0)` — neutral off-white | Page background. Pure neutral, lets cards carry the warmth. Deep warm-black in dark. |
| `--foreground` | `oklch(0.18 0.012 30)` — warm near-black | Primary text. Subtle mauve warmth that doesn't compete with surfaces. |
| `--card` | `oklch(0.97 0.006 80)` — pale champagne | Card / panel surface. The **only** warm surface in light mode; this is where Salsa's warmth lives. |
| `--popover` | `oklch(0.99 0 0)` — matches background | Dropdowns, tooltips, dialogs. Deliberately neutral so overlays sit cleanly above warm cards. |
| `--muted` | `oklch(0.96 0 0)` — neutral light grey | Subdued surface (input backgrounds, disabled states). |
| `--muted-foreground` | `oklch(0.52 0.014 30)` | Secondary text, captions, metadata. |
| `--secondary` | `oklch(0.95 0 0)` — neutral grey | Secondary button surface, soft badges. |
| `--accent` | `oklch(0.94 0 0)` — neutral grey | shadcn's low-emphasis hover surface. Neutral, **not** brand-coloured. |
| `--border` | `oklch(0.92 0 0)` — neutral hairline | All hairline dividers and component borders. |
| `--input` | `oklch(0.92 0 0)` — matches border | Input border. Inputs themselves fill `bg-background` (solid neutral white) — never transparent. |
| `--ring` | `oklch(0.61 0.185 31 / 0.45)` | Focus ring. Salmon at 45% alpha. |

### Supporting palette — brand accents

These three named accents extend the brand beyond the primary. They are **diet-independent**: each carries a brand role, not a persona assignment.

| Token | Color | Role | Used for |
|---|---|---|---|
| `--sage` | Muted sage green `oklch(0.68 0.05 145)` | Plant, fresh, gentle | Food-positive states (added to plan, organic tag), illustration, "gentle" cues |
| `--walnut` | Deep warm brown `oklch(0.35 0.04 50)` | Grounding, chef, depth | Dark surfaces, alternative to pure black, chart axis, footer |
| `--champagne` | Warm pale gold `oklch(0.85 0.05 80)` | Warmth, premium, glow | Subtle hover wash, decorative panels, premium tier accents |

Reference as `bg-sage`, `text-walnut`, `border-champagne` (Tailwind auto-generates utilities from the `--color-*` tokens in `@theme`).

### How diets identify visually (no per-diet tokens)

**Diets are data, not design.** The system never carries diet-specific theme classes. Instead each diet record in the database has:

```ts
type Diet = {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  colorHex: string;   // a swatch from the brand palette, e.g. #6BA77F (sage)
};
```

The `colorHex` is used only for:

- A small swatch next to the diet name (12×12, `rounded-sm`)
- An optional 4px accent border on diet-detail page headers
- A dot on diet badges

Per-diet personality comes from **photography and copy**, not from a re-themed component library. Adding a diet = inserting a row. Removing a diet = deleting a row. The design system never changes.

### Chart palette

`--chart-1` through `--chart-5` map to: salmon, sage, walnut, champagne, slate. Use in this order so charts feel intentional and on-brand. Slate is the cool-contrast slot for when a chart needs colour distance the warm palette can't provide.

### Destructive

`--destructive` is a deeper red (`oklch(0.55 0.20 25)`), distinct from the salmon primary so destructive actions never visually compete with brand CTAs.

---

## 3. Typography

### Type families

- **Display — Parkinsans** (Google Fonts, weights 400–800)
  Headlines, hero, dish titles, chef names, H1–H3. Has personality; doesn't need a co-star.
  Variable: `--font-display`. Utility: `font-display` or any `<h1>`/`<h2>`/`<h3>`.

- **Body — Albert Sans** (Google Fonts, weights 300–700)
  Body copy, UI, microcopy, forms, tables. The workhorse. Disappears.
  Variable: `--font-sans`. Default — applied to `<html>`.

- **Mono — JetBrains Mono** (Google Fonts, weights 400/500/700)
  *Data only.* Macros, calorie counts, day counters, timestamps, chef IDs. Never body copy.
  Variable: `--font-mono`. Utility: `font-mono` or `<code>`.
  Chosen for a neutral, calm presence at small sizes — Space Mono's heavier slab feel competed visually with the data it was meant to mark.

### Type scale

Fixed scale for **product surfaces** (app, dashboards). Marketing pages may use fluid scaling.

| Token | Size | Line height | Weight | Family | Use |
|---|---|---|---|---|---|
| `text-display-lg` | 60px | 1.05 | 700 | Parkinsans | Hero |
| `text-display` | 48px | 1.1 | 600 | Parkinsans | Page hero, big moments |
| `text-h1` | 36px | 1.15 | 600 | Parkinsans | Section H1 |
| `text-h2` | 28px | 1.2 | 600 | Parkinsans | Subsection |
| `text-h3` | 22px | 1.25 | 500 | Parkinsans | Card titles, dish names |
| `text-lg` | 18px | 1.5 | 400 | Albert Sans | Lede paragraphs |
| `text-base` | 16px | 1.55 | 400 | Albert Sans | Body |
| `text-sm` | 14px | 1.5 | 400 | Albert Sans | Captions, table cells |
| `text-xs` | 12px | 1.45 | 500 | Albert Sans | Microcopy, labels |
| `text-mono-label` | 12–14px | 1.4 | 500 | JetBrains Mono | Macros, kcal, day labels |

### Typographic rules

- Tracking is slightly negative (`-0.015em`) on Parkinsans display sizes — already set in base styles.
- Tabular numbers (`.nums-tabular` or `font-variant-numeric: tabular-nums`) on anything that lines up vertically — nutrition tables, prices, day counters.
- Never use uppercase letter-spaced eyebrow chips above hero headlines (flagged as AI-cliche).
- Never use italic Parkinsans at hero size. If italic is needed at scale, use Albert Sans italic, not the display font.

---

## 4. Elevation & Surfaces

### Radius scale

Base `--radius: 0.625rem` (10px). Derived scale, used via Tailwind.

**Everyday tokens** — these cover the entire product surface:

| Token | Value | Use |
|---|---|---|
| `rounded-sm` | 6px | Inputs, small badges, diet colour swatch |
| `rounded-md` | 8px | Buttons, small cards |
| `rounded-lg` | 10px | Cards, dialogs, default |
| `rounded-xl` | 14px | Hero cards, feature blocks |
| `rounded-full` | 9999px | Avatars, soft badges, status dots |

**Marketing-rare** — defined in CSS but reserved for landing / editorial surfaces. Don't reach for these in product UI:

| Token | Value | Use |
|---|---|---|
| `rounded-2xl` | 18px | Large feature surfaces |
| `rounded-3xl` | 22px | Marketing hero, oversized cards |
| `rounded-4xl` | 26px | Full-bleed marketing surfaces |

All buttons use `rounded-md`. The pill shape (`rounded-full`) is reserved for avatars, soft badges, and status dots — never for buttons.

### Shadows

Soft, diffused, low-opacity. Cards lift gently — never sharp drop shadows.

```css
--shadow-xs: 0 1px 2px 0 oklch(0.18 0.012 30 / 0.04);
--shadow-sm: 0 2px 4px -1px oklch(0.18 0.012 30 / 0.06);
--shadow-md: 0 6px 12px -2px oklch(0.18 0.012 30 / 0.08);
--shadow-lg: 0 12px 24px -4px oklch(0.18 0.012 30 / 0.10);
--shadow-xl: 0 20px 40px -8px oklch(0.18 0.012 30 / 0.12);
```

Surface elevation rules:

- Page background → no shadow.
- Card on background → `shadow-xs` or `shadow-sm`.
- Dialog / popover → `shadow-lg`.
- Hover lift on interactive cards → `shadow-sm` → `shadow-md`, with `transition-shadow duration-200`.

### Spacing

shadcn defaults (4px base) work as-is. No custom spacing scale. Use Tailwind's spacing utilities directly.

---

## 5. Components

### Button

| Variant | Background | Text | Radius | Use |
|---|---|---|---|---|
| `default` (primary) | `bg-primary` | `text-primary-foreground` | `rounded-md` | The main action on the surface. One per view. |
| `secondary` | `bg-secondary` | `text-secondary-foreground` | `rounded-md` | Secondary actions. |
| `outline` | `bg-transparent border` | `text-foreground` | `rounded-md` | Tertiary actions, filters. |
| `ghost` | `bg-transparent hover:bg-muted` | `text-foreground` | `rounded-md` | Nav, low-emphasis. |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | `rounded-md` | Delete, cancel order. |

Sizes: `sm` (32px), `default` (40px), `lg` (48px). Primary CTAs in heroes use `lg`.

### Card

- Background: `bg-card`
- Border: `border border-border`
- Radius: `rounded-lg` (cards) or `rounded-xl` (feature cards)
- Shadow: `shadow-xs` resting, `shadow-md` on hover for interactive cards
- Padding: `p-6` (default), `p-4` (compact), `p-8` (feature)

### Input / Form

- Border: `border border-input`
- Background: `bg-background` — **solid neutral white, not transparent.** Inputs sit on warm cards, so a transparent fill picks up the card warmth and reads as filled — we want clear separation between input and its surface.
- Radius: `rounded-md`
- Focus: `ring-2 ring-ring ring-offset-2 ring-offset-background`
- Label: Albert Sans 500, 14px, `text-foreground`
- Helper text: Albert Sans 400, 12px, `text-muted-foreground`

### Badge / Pill

Used for plan tier, dietary callouts, status.

- Default: `bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs`
- Primary: `bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs`
- Soft: `bg-primary/10 text-primary rounded-full px-3 py-1 text-xs`

### Diet badge

A composed pattern, not a separate component.

```tsx
<div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs">
  <span
    className="h-2.5 w-2.5 rounded-sm"
    style={{ backgroundColor: diet.colorHex }}
  />
  {diet.name}
</div>
```

The `colorHex` is the only inline-style colour usage permitted in the codebase. It's user data, not a token.

### Dialog / Modal

- Background: `bg-popover`
- Radius: `rounded-xl`
- Shadow: `shadow-lg`
- Backdrop: `bg-foreground/40` with `backdrop-blur-sm`

### Data callouts (macros, kcal, day counter)

Use JetBrains Mono for the number, Albert Sans for the unit/label. Numbers must be `tabular-nums`.

```tsx
<div className="flex items-baseline gap-1">
  <span className="font-mono nums-tabular text-2xl font-bold">2,400</span>
  <span className="text-sm text-muted-foreground">kcal</span>
</div>
```

---

## 6. Do's and Don'ts

### Do

- Use Parkinsans for headlines, dish names, and chef names. Anywhere "chef" appears prominently, Parkinsans.
- Keep salmon as an **accent** color — CTAs, brand marks, one signature callout. Not a background wash.
- Use JetBrains Mono *only* for numeric data and labels (kcal, macros, day counts, timestamps, order IDs).
- Use tabular numbers for anything that aligns vertically.
- Lift cards with `shadow-xs` resting, never harder than `shadow-md` on hover.
- Use sage / walnut / champagne for decorative or illustrative moments where pure salmon would be too much.
- Pair the diet imagery with the diet's energy: boxer pages can have grit; anti-aging pages should feel light and luminous. The system stays the same; the photography differentiates.

### Don't

- Don't use the word "meal plan" or "meal kit" anywhere in copy. Salsa is a chef service.
- Don't hardcode colors. Reference `bg-primary`, `text-foreground`, `border-border`. The one exception is `diet.colorHex` as an inline style for the diet swatch (it's data, not design).
- Don't add per-diet theme classes. Diets are data; they identify through name, photography, and the swatch colour from their data record.
- Don't use Parkinsans for body copy. It loses its purpose if it's everywhere.
- Don't use JetBrains Mono for prose, slogans, or labels that aren't data.
- Don't set headlines in italic Parkinsans — Impeccable flags oversized italic display heroes as an AI tell, and Parkinsans isn't designed for it anyway.
- Don't put an uppercase letter-spaced eyebrow chip above a hero h1 — same reason.
- Don't use salmon for destructive actions. `--destructive` is a deeper, redder color for a reason.
- Don't lean on pure white backgrounds — the warm off-white in `--background` is intentional. White breaks the warmth.
- Don't use a generic three-card feature grid below the hero. Reach for editorial layouts instead — alternating left/right sections, asymmetric splits, photography-led blocks.

---

## Quickstart for the dev team

1. Drop `globals.css` into `src/app/globals.css` (Next.js App Router) or your equivalent Tailwind v4 entry. It replaces what shadcn's `init` generated.
2. Install fonts via `next/font/google` in `app/layout.tsx`. Bind to `--font-albert-sans`, `--font-parkinsans`, `--font-jetbrains-mono` on the `<html>` element. The CSS variables in `globals.css` reference these names — no other wiring needed.
3. `npx shadcn@latest add ...` for the components you need. The existing tokens stay intact.
4. For Impeccable users on the team: `npx skills add pbakaus/impeccable`, then `/impeccable craft <surface>` will read this doc and `PRODUCT.md` automatically.
5. To add a new diet: insert a row in the diets table with `colorHex` set to a value from the brand palette (or close to it). No design changes required.

## Open questions

- Type scale for marketing surfaces — fixed (above) or fluid? Lean fluid; revisit after first landing page.
- Photography licensing and direction — separate doc with the brand team.
- Motion / interaction tokens — not yet defined. Add when the first interactive prototype lands.
