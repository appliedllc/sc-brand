import { cn } from "@/lib/utils";

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-12 flex flex-col gap-2 border-b border-border pb-8">
      <h1 className="text-[36px] leading-[1.15]">{title}</h1>
      {subtitle && <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
    </header>
  );
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mb-5 text-sm font-medium text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Caption({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("font-mono text-xs text-muted-foreground", className)}>{children}</p>;
}

export function Section({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mb-16", className)}>
      <SectionLabel>{label}</SectionLabel>
      {children}
    </section>
  );
}
