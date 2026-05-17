"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-full justify-between"
      aria-label="Toggle theme"
    >
      <span className="text-xs font-medium">{mounted ? (isDark ? "Dark" : "Light") : "Light"}</span>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
