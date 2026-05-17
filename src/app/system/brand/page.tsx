import { BrandLogo } from "@/components/system/brand-logo";
import { Caption, Section } from "@/components/system/section";

const taglines = [
  { variant: "Premium", text: "Designed for your diet. Delivered by your chef." },
  { variant: "Conversational", text: "You choose the diet. We send the chef." },
  { variant: "Slogan", text: "Your private chef, on demand." },
];

const voicePairs = [
  { is: "Confident", isNot: "Clinical", note: "Plain talk about complex topics." },
  { is: "Personal", isNot: "Generic", note: "Your body, your goals, your chef." },
  { is: "Warm", isNot: "Soft", note: "Warmth with purpose. No hedging." },
  { is: "Empowering", isNot: "Prescriptive", note: "Show the path; don't issue commands." },
];

const antiReferences = [
  "Generic wellness DTC: purple gradients, 'Welcome to your journey,' soft-focus stock.",
  "Hospital / clinical aesthetic: pure white, cold blue accents, 'clinically proven' badges.",
  "Luxury-hotel restraint: empty pages, cream-on-cream, gold accents.",
  "Subscription meal-kit codes: overhead plastic trays, 'fresh' stamps, ingredient checklists.",
  "Diet cards with circular emoji badges and rounded-2xl chrome.",
  "Salmon flat-bleed hero background: Salsa salmon is an accent, not a wash.",
];

export default function BrandPage() {
  return (
    <>
      <section className="mb-16 flex flex-col items-center gap-8 border-b border-border pb-16 pt-4 md:mb-20 md:gap-12 md:pb-20 md:pt-8">
        <span className="md:hidden">
          <BrandLogo height={56} priority />
        </span>
        <span className="hidden md:block">
          <BrandLogo height={80} priority />
        </span>
        <p className="max-w-xl text-center text-base text-muted-foreground md:text-lg">
          A private-chef service for people that want to live their life.
        </p>
      </section>

      <Section label="Logo lockup">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card px-6 py-10">
            <div className="flex h-20 items-center">
              <BrandLogo height={40} variant="primary" />
            </div>
            <Caption>salsa-logo.svg</Caption>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-background px-6 py-10">
            <div className="flex h-20 items-center">
              <BrandLogo height={40} variant="black" />
            </div>
            <Caption>salsa-logo-black.svg</Caption>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-walnut px-6 py-10">
            <div className="flex h-20 items-center">
              <BrandLogo height={40} variant="white" />
            </div>
            <Caption className="text-champagne/80">salsa-logo-white.svg</Caption>
          </div>
        </div>
      </Section>

      <Section label="Taglines">
        <div className="flex flex-col gap-4">
          {taglines.map((t) => (
            <div
              key={t.variant}
              className="flex flex-col gap-3 rounded-lg border border-border bg-card px-8 py-10"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {t.variant}
              </span>
              <p className="font-display text-[28px] leading-tight tracking-tight text-foreground">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Voice principles">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {voicePairs.map((p) => (
            <div
              key={p.is}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg border border-border bg-card px-5 py-4"
            >
              <span className="font-display text-lg font-medium text-foreground">{p.is}</span>
              <span className="font-display text-lg font-light text-muted-foreground/60 line-through">
                {p.isNot}
              </span>
              <span className="ml-auto text-xs text-muted-foreground">{p.note}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section label="We are NOT">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {antiReferences.map((a) => (
            <div key={a} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="text-destructive">
                •
              </span>
              <span>{a}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
