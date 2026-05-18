# Salsa — Product Context

This file is read by Impeccable (and any AI harness using shared design memory) before generating UI work. It defines who Salsa is for, how it should sound, and what we are deliberately not.

## What Salsa is

Salsa is a private-chef service for people with specific dietary needs. Customers pick a diet and a real chef cooks for that diet and delivers it. Salsa is **not** a meal-kit subscription, and the word "meal plan" is forbidden in all surfaces.

The differentiator is the **chef**. The word *chef* must appear early on every page — homepage hero, diet pages, app onboarding.

## Audience — personas

Each diet attracts a distinct customer. Imagery, microcopy, and dish photography shift per diet. The brand's visual system stays consistent — diets identify themselves through content, not theme tokens.

Current diets at launch (subject to change — diets are configurable, not hardcoded):

- **Boxer / Athlete** — Ages 25–45. Performance-driven, high discipline. Language: fuel, performance, timing, gains.
- **Anti-Aging** — Ages 35–60. Wellness-focused, appearance and longevity. Language: glow, protect, restore, nourish.
- **Gluten / Dairy Free** — All ages. Celiac, intolerance, or lifestyle. Language: clean, safe, free from, trusted.
- **IBS / Gut Health** — Ages 25–55. Medically motivated, evidence-seekers. Language: gentle, low FODMAP, gut-friendly, evidence-backed.
- **Balance** — Broad audience. The entry-point diet — position as the least intimidating, most accessible. Language: wholesome, balanced, satisfying, real food.

### How diets identify visually

Diets are data, not design. The system never hardcodes diet-specific colors, fonts, or component variants. Each diet record carries:

- **Name** — rendered in Parkinsans display.
- **Description** — Albert Sans, written in the diet's language register.
- **Hero photography** — lifestyle photography that carries the persona's energy. This is where Boxer feels different from Anti-Aging, not in the chrome.
- **Diet swatch** — an optional `colorHex` field on the diet record used for a small visual marker (a 12×12 square next to the name, or a 4px accent border). Pulled from the brand's supporting palette where possible (sage, walnut, champagne, or salmon itself). Authored per diet by the brand team.

Adding a new diet means inserting a row, adding photography, and authoring copy. No design-system change required.

## Brand personality

A knowledgeable friend who happens to have a private chef. Not a hospital brochure. Not a luxury hotel.

- **Confident, not clinical.** Plain talk about complex topics. Say "the right fuel, timed right" not "macronutrient protocol."
- **Personal, not generic.** Every line addresses *your* body, *your* goals, *your* chef.
- **Warm, not soft.** Warmth with purpose. No hedging — "here's what works," not "we think this might help."
- **Empowering, not prescriptive.** Show the path; don't issue commands.

## Register

Salsa has two registers, and design treatment differs per register.

- **Brand register** — marketing site, landing pages, press, app-store listings. Editorial type allowed. Generous whitespace. Lifestyle photography leads.
- **Product register** — the app itself, onboarding, dashboards, order flows, account screens. Utility-first, consistent components, fixed type scale, no decorative typography in dense UI.

When in doubt, ask which register a surface belongs to before generating.

## Voice — concrete dos and don'ts

Do:

- "Designed for your diet. Delivered by your chef." (premium tagline)
- "You choose the diet. We send the chef." (conversational tagline)
- "Your private chef, on demand." (slogan — keep visible)
- Plain numbers in copy: "2,400 kcal," "Day 3 of 7."

Don't:

- "Meal plan," "meal kit," "subscription box" — these miscategorise Salsa.
- "We think," "we believe," "perhaps," "might" — hedge words break the confidence.
- "Macronutrient protocol," "caloric deficit optimisation" — jargon.
- "Cleanse," "detox," "miracle" — wellness clichés.

## Anti-references

Generated output should **not** look or read like these. Use as a reflex-reject list.

- Generic wellness DTC slop — purple gradients, "Welcome to your journey," soft-focus stock photography, three-feature card grid below a 64px serif italic hero.
- Hospital / clinical aesthetic — pure white, cold blue accents, "clinically proven" badges, bullet-pointed benefits.
- Luxury-hotel restraint that goes too far — empty pages, undifferentiated cream-on-cream, gold accents.
- Subscription-meal-kit visual codes — overhead photography of plastic trays, green "fresh" stamps, ingredient checklists with green ticks.
- AI-cliche typography — Inter, Geist, Fraunces italic display, oversized italic-serif hero h1, uppercase letter-spaced eyebrow chip above hero, Plus Jakarta Sans, Space Grotesk.

## Reflex-reject for this brand specifically

Before any design generation, if the first instinct is any of the following, restart:

- Hero with `Designed for your diet. Delivered by your chef.` set in italic Fraunces or Recoleta at 72px+.
- A grid of cards showing the diets with circular emoji badges and rounded-2xl cards.
- Salmon used as a flat full-width hero background. Salsa's salmon is a *brand accent*, not a wash.
- A "Get started" pill button placed center-stage with no surrounding context.
- Per-diet color theming baked into components (this couples diets to the design system — wrong layer).

## Imagery direction

Lifestyle photography over product photography. Hands, kitchens, real plates on real tables, mid-action shots. Avoid overhead flatlays of finished dishes (the meal-kit visual code). Light should be warm and directional, not studio-cool. Photography carries the per-diet personality — the system stays unified, the photography differentiates.

## Technical context

- Stack: Next.js + shadcn/ui (Vega preset, Radix primitives, Tailwind v4)
- Base color: Mauve (warm neutrals)
- Primary: `#DD5239` salmon
- Supporting palette: sage, walnut, champagne (named accents, diet-independent)
- Radius: medium (10px) — Vega defaults
- Fonts: Parkinsans (display), Albert Sans (body), JetBrains Mono (data labels only)

See `DESIGN.md` for the full visual system spec.
