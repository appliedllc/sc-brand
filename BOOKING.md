# Booking flow — building guide

Entry point for any work on Salsa's booking flow. This file tells you **how** to build, **which docs** to reference, and **how** to use Impeccable. The actual flow shape (steps, order, screens) is still being brainstormed and lives elsewhere when ready.

## Before you write a single line

Read in this order:

1. [`PRODUCT.md`](./PRODUCT.md) — register (product, not brand), voice, banned copy.
2. [`DESIGN.md`](./DESIGN.md) — tokens, components, do/don't.
3. [`AGENTS.md`](./AGENTS.md) — composition rules, reflex-reject list.
4. `/system` in the running app — live reference. Especially `/system/patterns` and `/system/showcase`.

If the answer to your question is in one of those four, don't reinvent it.

## Which doc covers what

When a question comes up while building booking, this is where to look:

| Question | Answer in |
|---|---|
| What's the copy register? Is "meal plan" OK? | `PRODUCT.md` |
| How should the diet selection card look? | `/system/patterns` → DietPickerCard |
| What font should kcal numbers be in? | `DESIGN.md` §3 |
| Which radius for the Confirm button? | `DESIGN.md` §4 |
| How does macro data appear? | `DESIGN.md` §5 Data callouts |
| Is salmon OK as a full-bleed background? | `DESIGN.md` §6 (no) |
| Can I add `<input>` directly? | `AGENTS.md` (no — use the `<Input>` primitive) |
| Should the input fill the same color as its card? | `DESIGN.md` §5 Input (no — solid white) |
| Do I need a Stepper primitive? | First check `npx shadcn@latest add stepper`. If not there, write it in `src/components/ui/` |
| Should I theme the flow per-diet? | `PRODUCT.md` §Reflex-reject (no) |

## Existing patterns to compose from

The booking flow shouldn't invent visual language. Every step has a pattern to lean on already. **Compositions live in [`src/components/system/showcase/cards.tsx`](./src/components/system/showcase/cards.tsx). Read them before building.**

| Booking need | Lean on |
|---|---|
| Diet selection step | `DietPickerCard` — selectable rows with `diet.colorHex` swatch |
| Time-slot / delivery window | Calendar + Popover (see date-picker tile on `/system/components`) |
| Week availability view | `WeeklyScheduleCard` — 7-col grid, JetBrains Mono day numbers |
| Chef pairing screen | `YourChefCard` — avatar + specialty + message CTA |
| Meal preview / confirm | `TodaysMealCard` — Parkinsans dish title + macros row + primary CTA |
| Plan tier picker | `PricingCard` |
| Notes / dietary form fields | `ReportIssueCard` — Input + Textarea + Checkbox |
| Success state | `EmptyStateCard` (repurposed as Done state) |
| Multi-step shell | **doesn't exist yet** — see "Adding new patterns" below |

## Adding new patterns

When the booking flow needs something none of the existing patterns covers (the most likely candidate is a multi-step shell with step indicator + back/continue footer):

1. Build it once in `src/components/booking/<name>.tsx`, composing primitives from `@/components/ui/*`.
2. Compose, don't invent. A "step indicator" is `Progress` or a row of `Badge`s, not a fresh primitive.
3. If the team will reuse it across surfaces, also drop a working instance into `src/components/system/showcase/cards.tsx` and register it in `showcaseList` so it appears in `/system/patterns`.
4. If you find yourself wanting a *primitive* that doesn't exist (e.g., a Stepper with first-class behavior), see `AGENTS.md` §Adding components.

## Using Impeccable on booking work

The `/impeccable craft <surface>` skill reads `PRODUCT.md` and `DESIGN.md` from the repo root automatically. To use it on a booking screen:

```
/impeccable craft booking-diet-step
```

Before invoking, think for ten seconds:

- **Be specific.** "Booking flow" is too broad. "Step 1: pick diet, single column, mobile-first" is right.
- **Reference an existing pattern when you can.** "Compose like `DietPickerCard`, but ..."
- **Don't ask it to invent a new copy register.** It reads voice from PRODUCT.md — trust that and tell it the step's purpose, not its phrasing.
- **Tell it the register**: product, not brand. Booking is utility-first, no editorial moments.

Install: `npx skills add pbakaus/impeccable`.

## Data model — define before the first screen

[`src/lib/system/data.ts`](./src/lib/system/data.ts) already has `Diet`, `Chef`, `Dish`. Booking needs at minimum:

```ts
type DeliveryWindow = {
  date: Date;
  slot: "11-13" | "17-19" | "19-21";
};

type Booking = {
  id: string;
  dietId: Diet["id"];
  chefId: Chef["id"];
  mealIds: Dish["id"][];
  window: DeliveryWindow;
  status: "draft" | "scheduled" | "delivered" | "cancelled";
};
```

Lock this shape before the first booking screen lands — every step writes into the same object. Don't let each step define its own slice.

## Don't

- Don't build a marketing-y booking flow. Booking is **product register**: utility-first, fixed type scale, no decorative typography in dense UI (see `PRODUCT.md` §Register).
- Don't introduce a new primary color, surface tone, or radius for booking. The system stays unified.
- Don't reach for `rounded-2xl` or above. Booking is everyday product, not editorial.
- Don't add a "Step 1 of 4" eyebrow chip in uppercase letterspaced caps — that's an AI-cliche reflex-reject. Use a `Progress` bar or a row of compact `Badge`s.
- Don't write "Meal plan," "meal kit," or "subscription" anywhere.
- Don't theme the flow per-diet. The diet is data the user is choosing — the chrome doesn't change to match it.
- Don't put `<input className="rounded-md border ...">` anywhere — even as a "quick prototype." Use the `<Input>` primitive.

## When the flow is brainstormed and ready

Add a "Flow" section to this file (or a separate `BOOKING-FLOW.md` if it grows): step-by-step with each step's pattern reference, validations, and what gets written to the `Booking` object. That's the working spec — this file stays the entry-point guide.
