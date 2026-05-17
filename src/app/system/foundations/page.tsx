import { PageHeader, Section, Caption } from "@/components/system/section";

type Swatch = {
  token: string;
  className: string;
  oklch: string;
  hex: string;
};

const brandSwatches: Swatch[] = [
  { token: "bg-primary", className: "bg-primary", oklch: "oklch(0.61 0.185 31)", hex: "#DC4A36" },
  { token: "bg-primary-foreground", className: "bg-primary-foreground", oklch: "oklch(0.99 0.004 30)", hex: "#FCFCFC" },
];

const surfaceSwatches: Swatch[] = [
  { token: "bg-background", className: "bg-background", oklch: "oklch(0.99 0.004 30)", hex: "#FCFCFC" },
  { token: "bg-card", className: "bg-card", oklch: "oklch(0.97 0.006 80)", hex: "#F7F5F1" },
  { token: "bg-popover", className: "bg-popover", oklch: "oklch(0.99 0.004 30)", hex: "#FCFCFC" },
  { token: "bg-muted", className: "bg-muted", oklch: "oklch(0.94 0.005 80)", hex: "#F2EFE9" },
  { token: "bg-secondary", className: "bg-secondary", oklch: "oklch(0.92 0.006 80)", hex: "#EEEBE4" },
  { token: "bg-accent", className: "bg-accent", oklch: "oklch(0.90 0.01 80)", hex: "#E8E4DB" },
];

const textSwatches: Swatch[] = [
  { token: "text-foreground", className: "bg-foreground", oklch: "oklch(0.18 0.012 30)", hex: "#17100E" },
  { token: "text-muted-foreground", className: "bg-muted-foreground", oklch: "oklch(0.52 0.014 30)", hex: "#716664" },
  { token: "border-border", className: "bg-border", oklch: "oklch(0.92 0 0)", hex: "#E4E4E4" },
  { token: "ring-ring", className: "bg-ring", oklch: "oklch(0.61 0.185 31 / .45)", hex: "#DC4A36 (45%)" },
  { token: "bg-destructive", className: "bg-destructive", oklch: "oklch(0.55 0.20 25)", hex: "#CC272E" },
];

const supportingSwatches: Swatch[] = [
  { token: "bg-sage", className: "bg-sage", oklch: "oklch(0.68 0.05 145)", hex: "#86A186" },
  { token: "bg-walnut", className: "bg-walnut", oklch: "oklch(0.35 0.04 50)", hex: "#4C3428" },
  { token: "bg-champagne", className: "bg-champagne", oklch: "oklch(0.85 0.05 80)", hex: "#DFCBAA" },
];

const chartSwatches: Swatch[] = [
  { token: "chart-1", className: "bg-chart-1", oklch: "salmon", hex: "#DC4A36" },
  { token: "chart-2", className: "bg-chart-2", oklch: "sage", hex: "#86A186" },
  { token: "chart-3", className: "bg-chart-3", oklch: "walnut", hex: "#4C3428" },
  { token: "chart-4", className: "bg-chart-4", oklch: "champagne", hex: "#DFCBAA" },
  { token: "chart-5", className: "bg-chart-5", oklch: "slate", hex: "#454E58" },
];

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
      {swatches.map((s) => (
        <div key={s.token} className="flex flex-col gap-2">
          <div
            className={`${s.className} size-16 rounded-lg border border-border ring-1 ring-foreground/5`}
          />
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-xs text-foreground uppercase">{s.hex}</span>
            <span className="font-mono text-[10px] text-muted-foreground uppercase">
              {s.token.replace("bg-", "").replace("text-", "").replace("border-", "")}
            </span>
            <span className="font-mono text-[9px] text-muted-foreground/60">{s.oklch}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const typeScale = [
  { token: "text-display-lg", size: "60", lh: "1.05", weight: "700", family: "Parkinsans", sample: "Designed for your diet.", className: "font-display text-[60px] leading-[1.05] font-bold tracking-tight" },
  { token: "text-display", size: "48", lh: "1.10", weight: "600", family: "Parkinsans", sample: "Delivered by your chef.", className: "font-display text-[48px] leading-[1.1] font-semibold tracking-tight" },
  { token: "text-h1", size: "36", lh: "1.15", weight: "600", family: "Parkinsans", sample: "Grilled mackerel, miso aubergine", className: "font-display text-[36px] leading-[1.15] font-semibold tracking-tight" },
  { token: "text-h2", size: "28", lh: "1.20", weight: "600", family: "Parkinsans", sample: "Today on the pass", className: "font-display text-[28px] leading-[1.2] font-semibold tracking-tight" },
  { token: "text-h3", size: "22", lh: "1.25", weight: "500", family: "Parkinsans", sample: "Chef Inés Marchetti", className: "font-display text-[22px] leading-[1.25] font-medium tracking-tight" },
  { token: "text-lg", size: "18", lh: "1.50", weight: "400", family: "Albert Sans", sample: "You choose the diet. We send the chef.", className: "text-[18px] leading-[1.5]" },
  { token: "text-base", size: "16", lh: "1.55", weight: "400", family: "Albert Sans", sample: "Your private chef, on demand.", className: "text-[16px] leading-[1.55]" },
  { token: "text-sm", size: "14", lh: "1.50", weight: "400", family: "Albert Sans", sample: "Slow lamb shoulder with charred greens", className: "text-[14px] leading-[1.5]" },
  { token: "text-xs", size: "12", lh: "1.45", weight: "500", family: "Albert Sans", sample: "DELIVERED 18:30", className: "text-[12px] leading-[1.45] font-medium" },
  { token: "text-mono-label", size: "12", lh: "1.40", weight: "500", family: "JetBrains Mono", sample: "612 kcal · day 3 of 7", className: "font-mono text-[12px] leading-[1.4] font-medium tabular-nums" },
];

const radiusScale = [
  { token: "rounded-sm", className: "rounded-sm", use: "Inputs, badges, swatch" },
  { token: "rounded-md", className: "rounded-md", use: "Buttons, small cards" },
  { token: "rounded-lg", className: "rounded-lg", use: "Cards, default" },
  { token: "rounded-xl", className: "rounded-xl", use: "Dialogs, feature cards" },
  { token: "rounded-full", className: "rounded-full", use: "Avatars, status dots" },
];

const shadowScale = [
  { token: "shadow-xs", className: "shadow-xs" },
  { token: "shadow-sm", className: "shadow-sm" },
  { token: "shadow-md", className: "shadow-md" },
  { token: "shadow-lg", className: "shadow-lg" },
  { token: "shadow-xl", className: "shadow-xl" },
];

export default function FoundationsPage() {
  return (
    <>
      <PageHeader
        title="Foundations"
        subtitle="Tokens: color, typography, radius, shadow. Reference these by name in components."
      />

      <Section label="Brand">
        <SwatchGrid swatches={brandSwatches} />
      </Section>

      <Section label="Surfaces">
        <SwatchGrid swatches={surfaceSwatches} />
      </Section>

      <Section label="Text & lines">
        <SwatchGrid swatches={textSwatches} />
      </Section>

      <Section label="Supporting palette">
        <SwatchGrid swatches={supportingSwatches} />
      </Section>

      <Section label="Charts">
        <SwatchGrid swatches={chartSwatches} />
      </Section>

      <Section label="Typography">
        <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card">
          {typeScale.map((t) => (
            <div key={t.token} className="flex flex-col gap-2 px-5 py-5 md:flex-row md:items-baseline md:gap-8 md:px-6 md:py-6">
              <div className={`${t.className} min-w-0 flex-1 break-words text-foreground`}>{t.sample}</div>
              <div className="shrink-0 md:w-72 md:text-right">
                <div className="font-mono text-xs text-foreground">{t.token}</div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  {t.family} · {t.weight} · {t.size}/{t.lh}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Radius">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-5">
          {radiusScale.map((r) => (
            <div key={r.token} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card px-4 py-5">
              <div className={`${r.className} size-16 border border-border bg-muted`} />
              <Caption>{r.token}</Caption>
              <span className="text-[10px] text-muted-foreground text-center">{r.use}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Shadow">
        <div className="grid grid-cols-2 gap-4 bg-muted/30 px-4 py-8 rounded-lg sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-12 md:grid-cols-5">
          {shadowScale.map((s) => (
            <div key={s.token} className="flex flex-col items-center gap-3">
              <div className={`${s.className} size-20 rounded-lg bg-card border border-border`} />
              <Caption>{s.token}</Caption>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
