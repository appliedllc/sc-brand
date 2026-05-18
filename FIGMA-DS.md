# Figma — Salsa design system parity

Updates the official shadcn Figma kit so its variables, styles, and effects are 1:1 with the Salsa codebase. Apply these in Local Variables / Local Styles in your Figma file.

Hex values below come from the live compiled CSS (verified by inspecting the running app). OKLCH values are the source of truth in [`src/app/globals.css`](./src/app/globals.css) — use them directly if your Figma version supports OKLCH (late-2024+), otherwise paste the hex.

## How to apply

1. Open the shadcn Figma kit file (or duplicate it).
2. Open the **Local Variables** panel (top-right toolbar → "Show local variables").
3. For each row below, find the matching variable in the kit and replace its **Light** and **Dark** values.
4. Variables marked **NEW** don't exist in the default kit — create them in the Colors collection.
5. Update **Local Styles** for typography and effects per the sections below.

> **Don't** overwrite the variable *names* — only the values. The shadcn kit components reference them by name; renaming detaches every instance.

---

## Colors

The shadcn kit's Colors collection has modes (Light / Dark). Set both for each variable.

### Semantic surface & text

| Figma variable | Light | Dark |
|---|---|---|
| `background` | `#FCFCFC` | `#100908` |
| `foreground` | `#17100E` | `#F6F0EF` |
| `card` | `#F7F5F1` | `#170F0E` |
| `card-foreground` | `#17100E` | `#F6F0EF` |
| `popover` | `#FCFCFC` | `#170F0E` |
| `popover-foreground` | `#17100E` | `#F6F0EF` |
| `muted` | `#F2EFE9` | `#201917` |
| `muted-foreground` | `#716664` | `#A09694` |
| `secondary` | `#EEEBE4` | `#261D1B` |
| `secondary-foreground` | `#211817` | `#EAE3E1` |
| `accent` | `#E8E4DB` | `#261D1B` |
| `accent-foreground` | `#211817` | `#EAE3E1` |
| `border` | `#E4E4E4` | `#FFFFFF` @ 10% |
| `input` | `#E4E4E4` | `#FFFFFF` @ 15% |

> **The warmth story.** Light-mode `background` is pure neutral. `card` carries a quiet champagne warmth. To avoid a cold blue contrast effect, `muted` / `secondary` / `accent` also carry a small amount of warmth to feel like natural shadows of the beige palette rather than neutral grey.

### Brand

| Figma variable | Light | Dark |
|---|---|---|
| `primary` | `#DC4A36` | `#E9604B` |
| `primary-foreground` | `#FCFCFC` | `#100908` |
| `ring` | `#DC4A36` @ 45% | `#E9604B` @ 50% |
| `destructive` | `#CC272E` | `#DE4E4B` |

### Charts

| Figma variable | Light | Dark | Brand role |
|---|---|---|---|
| `chart-1` | `#DC4A36` | `#E9604B` | salmon (primary) |
| `chart-2` | `#86A186` | `#8EAF8E` | sage |
| `chart-3` | `#4C3428` | `#886A5A` | walnut |
| `chart-4` | `#DFCBAA` | `#D9C099` | champagne |
| `chart-5` | `#454E58` | `#677380` | slate (cool contrast slot) |

### Sidebar

| Figma variable | Light | Dark |
|---|---|---|
| `sidebar` | `#F7F5F1` | `#170F0E` |
| `sidebar-foreground` | `#211817` | `#EAE3E1` |
| `sidebar-primary` | `#DC4A36` | `#E9604B` |
| `sidebar-primary-foreground` | `#FCFCFC` | `#100908` |
| `sidebar-accent` | `#EEEEEE` | `#261D1B` |
| `sidebar-accent-foreground` | `#211817` | `#EAE3E1` |
| `sidebar-border` | `#E4E4E4` | `#FFFFFF` @ 10% |
| `sidebar-ring` | `#DC4A36` @ 45% | `#E9604B` @ 50% |

### Supporting palette — Salsa additions

These three accents extend the brand beyond the primary. **NEW** in the kit — add them to the Colors collection.

| Figma variable (NEW) | Light | Dark | Use |
|---|---|---|---|
| `sage` | `#86A186` | `#8EAF8E` | Food-positive states, plant/fresh moments, "organic" tag |
| `walnut` | `#4C3428` | `#886A5A` | Dark surfaces, alternative to pure black, chart axis, footer |
| `champagne` | `#DFCBAA` | `#D9C099` | Subtle hover wash, premium tier accents, decorative panels |

---

## Typography

The shadcn kit ships with one Body family and one Mono. **Salsa needs three**: a Display family in addition to Body and Mono. Add Parkinsans as a new family in your Figma text styles.

### Families

| Figma family variable | Font | Weights | Use |
|---|---|---|---|
| `font-display` **NEW** | Parkinsans (Google Fonts) | 400, 500, 600, 700, 800 | Headlines, dish names, chef names, H1–H3 |
| `font-sans` (Body) | Albert Sans (Google Fonts) | 300, 400, 500, 600, 700 | UI, body, forms, tables, default |
| `font-mono` | JetBrains Mono (Google Fonts) | 400, 500, 700 | Data only — kcal, macros, day counters, timestamps |

> The shadcn kit ships with a generic body/mono pairing. **Replace them**, don't add alongside.

### Type styles (Local Styles → Text)

Rename existing text styles to match these names, or add new ones. All Parkinsans styles have **letter-spacing −0.015em (−1.5%)** — apply once to the Parkinsans family default.

| Style name | Family | Size | Line height | Weight |
|---|---|---|---|---|
| `text-display-lg` | Parkinsans | 60 | 1.05 (63px) | 700 |
| `text-display` | Parkinsans | 48 | 1.10 (52.8px) | 600 |
| `text-h1` | Parkinsans | 36 | 1.15 (41.4px) | 600 |
| `text-h2` | Parkinsans | 28 | 1.20 (33.6px) | 600 |
| `text-h3` | Parkinsans | 22 | 1.25 (27.5px) | 500 |
| `text-lg` | Albert Sans | 18 | 1.50 (27px) | 400 |
| `text-base` | Albert Sans | 16 | 1.55 (24.8px) | 400 |
| `text-sm` | Albert Sans | 14 | 1.50 (21px) | 400 |
| `text-xs` | Albert Sans | 12 | 1.45 (17.4px) | 500 |
| `text-mono-label` | JetBrains Mono | 12 (or 14) | 1.40 | 500 — set OpenType feature `tnum` (tabular nums) |

> **Tabular nums** is essential for `text-mono-label` and any number column. In Figma, enable it via Type Settings → Details → Number style → Tabular.

---

## Radius

The shadcn kit usually has a single `radius` number variable or per-component radii. Salsa defines five everyday values plus a full-pill. Define each literal so component instances can pick the right one.

| Figma variable | Px | Use |
|---|---|---|
| `radius` (base) | 10 | Reference value, equals `radius-lg` |
| `radius-sm` | 6 | Inputs, small badges, diet swatch |
| `radius-md` | 8 | Buttons, small cards |
| `radius-lg` | 10 | Cards, dialogs, default |
| `radius-xl` | 14 | Hero cards, feature blocks |
| `radius-full` | 9999 | Avatars, soft badges, status dots |

### Marketing-rare — define but don't use in product

| Figma variable | Px |
|---|---|
| `radius-2xl` | 18 |
| `radius-3xl` | 22 |
| `radius-4xl` | 26 |

---

## Effects (shadows)

Five elevation tokens. Create as **Local Effect Styles** in Figma. All shadows: X = 0, color = `#17100E` (the foreground value), alpha as listed. Type = Drop Shadow, blend mode = Normal.

| Effect style | Y | Blur | Spread | Color | Opacity |
|---|---|---|---|---|---|
| `shadow-xs` | 1 | 2 | 0 | `#17100E` | 4% |
| `shadow-sm` | 2 | 4 | -1 | `#17100E` | 6% |
| `shadow-md` | 6 | 12 | -2 | `#17100E` | 8% |
| `shadow-lg` | 12 | 24 | -4 | `#17100E` | 10% |
| `shadow-xl` | 20 | 40 | -8 | `#17100E` | 12% |

In dark mode, the shadow color is the same but barely visible — that's intentional, dark surfaces don't need lift in the same way.

---

## Verification

After applying everything:

1. Open the kit's **Button / default** component instance.
   - Fill should be `#DC4A36`.
   - Text should be `#FCFCFC`.
   - Radius should be 8px.
2. Open the kit's **Card** component instance.
   - Fill should be `#F7F5F1` (warm champagne tint, **not** pure white).
   - Border should be `#E4E4E4`.
   - Radius should be 10px.
3. Open the kit's **Input** component.
   - Fill should be `#FCFCFC` (pure neutral white — must read distinct from Card).
   - Border should be `#E4E4E4`.

If a component looks wrong, the variable wasn't picked up. Re-detach the component and reapply, or check that the variable name matches exactly.

For full visual reference, open `/system` in the running app side-by-side with Figma. Every shadcn primitive renders there at every variant.

---

## What's not in this doc

- Component-level overrides (padding, sizes, etc.) — these live in the component code (`src/components/ui/*`) and the shadcn kit's auto-layout already maps to them.
- Per-diet color theming — there isn't any. `diet.colorHex` is data, not design, and is applied inline at a single 12×12 swatch only.
- Motion / animation tokens — not yet defined in code or Figma.
- Marketing-only typography (fluid scaling, oversized hero treatments) — TBD when the first landing page lands.
