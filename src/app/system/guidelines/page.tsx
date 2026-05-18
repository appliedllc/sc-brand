import { PageHeader, Section } from "@/components/system/section";
import { BrandLogo } from "@/components/system/brand-logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarkdownViewer } from "./markdown-viewer";

const docs = [
  { filename: "PRODUCT.md", label: "Product Context" },
  { filename: "DESIGN.md", label: "Design System" },
  { filename: "AGENTS.md", label: "Agent Instructions" },
];

const dos = [
  {
    title: "Parkinsans for headlines, dish names, chef names",
    note: "Anywhere chef appears prominently, Parkinsans.",
    example: (
      <span className="font-display text-lg font-medium leading-tight">
        Grilled mackerel, miso aubergine
      </span>
    ),
  },
  {
    title: "Salmon as an accent",
    note: "CTAs, brand marks, one signature callout: not a wash.",
    example: (
      <div className="flex items-center gap-2">
        <Button size="sm">Order now</Button>
        <Badge>Premium</Badge>
      </div>
    ),
  },
  {
    title: "JetBrains Mono only for data",
    note: "Macros, kcal, day counters, timestamps, order IDs.",
    example: (
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-2xl font-bold tabular-nums">2,400</span>
        <span className="text-sm text-muted-foreground">kcal</span>
      </div>
    ),
  },
  {
    title: "Tabular numbers for aligned data",
    note: "Use tabular-nums on anything that lines up vertically.",
    example: (
      <div className="font-mono text-sm tabular-nums">
        <div>612 kcal</div>
        <div>740 kcal</div>
        <div>480 kcal</div>
      </div>
    ),
  },
  {
    title: "Soft, diffused shadows",
    note: "shadow-xs at rest, shadow-md max on hover.",
    example: (
      <div className="flex gap-4 p-2">
        <div className="size-12 rounded-md bg-card shadow-xs ring-1 ring-foreground/5" />
        <div className="size-12 rounded-md bg-card shadow-sm ring-1 ring-foreground/5" />
        <div className="size-12 rounded-md bg-card shadow-md ring-1 ring-foreground/5" />
      </div>
    ),
  },
  {
    title: "Sage / walnut / champagne for decorative moments",
    note: "When pure salmon would be too much.",
    example: (
      <div className="flex gap-1.5">
        <div className="size-8 rounded-sm bg-sage" />
        <div className="size-8 rounded-sm bg-walnut" />
        <div className="size-8 rounded-sm bg-champagne" />
      </div>
    ),
  },
];

const donts = [
  {
    title: "Use the word 'meal plan' or 'meal kit'",
    note: "Salsa is a chef service. Always.",
    example: (
      <span className="text-sm text-muted-foreground line-through decoration-destructive">
        Your weekly meal plan
      </span>
    ),
  },
  {
    title: "Hardcode colors",
    note: "Reference bg-primary, text-foreground. Exception: diet.colorHex as inline style.",
    example: (
      <div className="flex flex-col gap-1 font-mono text-xs">
        <span className="text-destructive">bg-[#DD5239]</span>
        <span className="text-foreground">bg-primary</span>
      </div>
    ),
  },
  {
    title: "Use Parkinsans for body copy",
    note: "It loses its purpose if it's everywhere.",
    example: (
      <span className="font-display text-sm text-muted-foreground line-through decoration-destructive">
        Lorem ipsum dolor sit amet
      </span>
    ),
  },
  {
    title: "Set headlines in italic Parkinsans",
    note: "Parkinsans isn't designed for italic at hero scale.",
    example: (
      <span className="font-display text-xl italic text-muted-foreground line-through decoration-destructive">
        Designed for your diet
      </span>
    ),
  },
  {
    title: "Use salmon for destructive",
    note: "--destructive is a deeper, redder colour for a reason.",
    example: (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="destructive">Delete order</Button>
      </div>
    ),
  },
  {
    title: "Redraw the wordmark",
    note: "Always use the SVG files in /public/logos.",
    example: (
      <div className="flex items-center gap-3">
        <BrandLogo height={16} />
        <span className="font-display text-sm font-bold tracking-tight text-muted-foreground line-through decoration-destructive">
          salsa
        </span>
      </div>
    ),
  },
  {
    title: "Use a generic three-card feature grid",
    note: "Reach for editorial layouts: alternating, asymmetric, photography-led.",
    example: (
      <div className="grid grid-cols-3 gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-10 rounded-sm border border-border bg-muted line-through decoration-destructive" />
        ))}
      </div>
    ),
  },
];

function ItemRow({
  title,
  note,
  example,
  tone,
}: {
  title: string;
  note: string;
  example: React.ReactNode;
  tone: "do" | "dont";
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-card px-4 py-4">
      <div className="flex items-baseline gap-2">
        <span
          className={
            tone === "do"
              ? "font-mono text-xs font-bold uppercase tracking-wider text-sage"
              : "font-mono text-xs font-bold uppercase tracking-wider text-destructive"
          }
        >
          {tone === "do" ? "Do" : "Don't"}
        </span>
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      <span className="text-xs text-muted-foreground">{note}</span>
      <div className="mt-1 flex max-h-24 items-center border-t border-border pt-3">
        {example}
      </div>
    </div>
  );
}

export default function GuidelinesPage() {
  return (
    <>
      <PageHeader
        title="Guidelines"
        subtitle="Reflex rules. When in doubt, look here before generating."
      />

      <div className="mb-6 flex flex-wrap items-center gap-2 md:mb-8">
        <span className="mr-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Internal references
        </span>
        {docs.map((doc) => (
          <MarkdownViewer key={doc.filename} {...doc} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-3">
          {dos.map((d) => (
            <ItemRow key={d.title} {...d} tone="do" />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {donts.map((d) => (
            <ItemRow key={d.title} {...d} tone="dont" />
          ))}
        </div>
      </div>
    </>
  );
}
