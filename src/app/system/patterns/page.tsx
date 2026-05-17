"use client";

import { showcaseList } from "@/components/system/showcase/cards";
import { PageHeader } from "@/components/system/section";

export default function PatternsPage() {
  return (
    <>
      <PageHeader
        title="Patterns"
        subtitle="Every Showcase composition, listed for reference. Copy and adapt: primitives stay live."
      />

      <div className="flex flex-col gap-10">
        {showcaseList.map(({ id, title, Component, composition }) => (
          <div key={id} className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between border-b border-border pb-2">
              <div className="font-display text-base font-medium text-foreground">{title}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {id}
              </div>
            </div>
            <Component />
            <p className="text-xs text-muted-foreground">{composition}</p>
          </div>
        ))}
      </div>
    </>
  );
}
