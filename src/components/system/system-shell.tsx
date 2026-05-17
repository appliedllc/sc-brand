"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { BrandLogo } from "@/components/system/brand-logo";
import { ThemeToggle } from "@/components/system/theme-toggle";
import { DietSwatchPicker } from "@/components/system/diet-swatch-picker";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/system/brand", label: "Brand" },
  { href: "/system/foundations", label: "Foundations" },
  { href: "/system/components", label: "Components" },
  { href: "/system/patterns", label: "Patterns" },
  { href: "/system/guidelines", label: "Guidelines" },
  { href: "/system/showcase", label: "Showcase" },
];

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col gap-0.5 px-3">
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarBody({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      <div className="flex items-center px-6 py-5">
        <Link href="/system/brand" className="inline-flex items-center" onClick={onNavigate}>
          <BrandLogo height={28} priority />
        </Link>
      </div>
      <NavLinks pathname={pathname} onNavigate={onNavigate} />
      <div className="flex flex-col gap-4 border-t border-border px-4 py-4">
        <ThemeToggle />
        <DietSwatchPicker />
      </div>
    </>
  );
}

export function SystemShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-card px-5 py-3 md:hidden">
        <Link href="/system/brand" className="inline-flex items-center">
          <BrandLogo height={24} priority />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="Open menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 flex flex-col bg-card">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="sr-only">Salsa design system sections</SheetDescription>
            <SidebarBody pathname={pathname} onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-border bg-card md:flex">
        <SidebarBody pathname={pathname} />
      </aside>

      <main className="min-w-0 flex-1 overflow-x-hidden pt-14 md:pt-0">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-8 md:px-10 md:py-12">{children}</div>
      </main>
    </div>
  );
}
