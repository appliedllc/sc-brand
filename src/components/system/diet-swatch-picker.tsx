"use client";

import * as React from "react";
import { diets, type Diet } from "@/lib/system/data";
import { cn } from "@/lib/utils";

export function DietSwatchPicker() {
  const [selected, setSelected] = React.useState<Diet>(diets[0]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-foreground">{selected.name}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{selected.colorHex.toUpperCase()}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {diets.map((diet) => (
          <button
            key={diet.id}
            type="button"
            onClick={() => setSelected(diet)}
            aria-label={diet.name}
            className={cn(
              "size-5 rounded-sm transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
              selected.id === diet.id && "ring-2 ring-foreground ring-offset-2 ring-offset-card",
            )}
            style={{ backgroundColor: diet.colorHex }}
          />
        ))}
      </div>
    </div>
  );
}
