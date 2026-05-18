"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const brandColors = [
  { name: "Salmon", hex: "#DC4A36" },
  { name: "Sage", hex: "#86A186" },
  { name: "Walnut", hex: "#4C3428" },
  { name: "Champagne", hex: "#DFCBAA" },
];

export function DietSwatchPicker() {
  const [selected, setSelected] = React.useState(brandColors[0]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-foreground">{selected.name}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{selected.hex.toUpperCase()}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {brandColors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => setSelected(color)}
            aria-label={color.name}
            className={cn(
              "size-5 rounded-sm transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
              selected.name === color.name && "ring-2 ring-foreground ring-offset-2 ring-offset-card",
            )}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
