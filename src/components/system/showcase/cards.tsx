"use client";

import * as React from "react";
import {
  ChefHatIcon,
  MessageCircleIcon,
  ClockIcon,
  ChevronRightIcon,
  CheckIcon,
  BellIcon,
  HeartPulseIcon,
  HelpCircleIcon,
  SearchIcon,
  CommandIcon,
  XIcon,
  SettingsIcon,
  FlameIcon,
  CalendarDaysIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

import { diets, chefs, todaysDish, upcomingMeals } from "@/lib/system/data";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// LOGIN
// ---------------------------------------------------------------------------
export function LoginCard() {
  return (
    <Card className="p-8">
      <CardHeader className="px-0 pb-2">
        <CardTitle className="font-display text-[22px] font-medium leading-tight">Welcome back</CardTitle>
        <CardDescription>Sign in to manage your chef.</CardDescription>
      </CardHeader>
      <CardContent className="px-0 flex flex-col gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="login-email">Email</Label>
          <Input id="login-email" type="email" placeholder="you@salsa.cooks" defaultValue="ines@salsa.cooks" />
        </div>
        <div className="grid gap-1.5">
          <div className="flex items-baseline justify-between">
            <Label htmlFor="login-pw">Password</Label>
            <a href="#" className="text-xs text-primary underline-offset-4 hover:underline">
              Forgot password?
            </a>
          </div>
          <Input id="login-pw" type="password" defaultValue="••••••••••" />
        </div>
      </CardContent>
      <CardFooter className="px-0 pt-2 flex-col items-stretch gap-3">
        <Button size="lg" className="w-full">Sign in</Button>
        <p className="text-center text-xs text-muted-foreground">
          No account?{" "}
          <a href="#" className="text-foreground underline-offset-4 hover:underline">
            Find your chef
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// SIGN-UP with inline diet selector
// ---------------------------------------------------------------------------
export function SignupCard() {
  const [diet, setDiet] = React.useState(diets[0].id);
  return (
    <Card className="p-8">
      <CardHeader className="px-0 pb-2">
        <CardTitle className="font-display text-[22px] font-medium leading-tight">Find your chef</CardTitle>
        <CardDescription>Pick a diet and we&apos;ll match you in 24 hours.</CardDescription>
      </CardHeader>
      <CardContent className="px-0 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="su-first">First name</Label>
            <Input id="su-first" defaultValue="Maya" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="su-last">Last name</Label>
            <Input id="su-last" defaultValue="Patel" />
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="su-email">Email</Label>
          <Input id="su-email" type="email" defaultValue="maya@salsa.cooks" />
        </div>
        <div className="grid gap-2">
          <Label>Your diet</Label>
          <div className="grid grid-cols-1 gap-1.5">
            {diets.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDiet(d.id)}
                className={cn(
                  "flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2.5 text-left transition-colors hover:bg-muted",
                  diet === d.id && "border-primary bg-primary/5",
                )}
              >
                <span
                  className="size-3 shrink-0 rounded-sm"
                  style={{ backgroundColor: d.colorHex }}
                  aria-hidden
                />
                <span className="text-sm font-medium text-foreground">{d.name}</span>
                {diet === d.id && <CheckIcon className="ml-auto size-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-0 pt-2">
        <Button size="lg" className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// ACCOUNT
// ---------------------------------------------------------------------------
export function AccountCard() {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <Avatar size="lg">
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-0.5">
          <div className="font-display text-lg font-medium leading-tight">Maya Patel</div>
          <div className="text-sm text-muted-foreground">maya@salsa.cooks · London N1</div>
        </div>
        <Button variant="outline" size="sm">Edit</Button>
      </div>
      <Separator className="my-5" />
      <div className="grid gap-3">
        <div className="text-xs font-medium text-muted-foreground">Dietary</div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">
            <span className="size-2 rounded-sm" style={{ backgroundColor: diets[0].colorHex }} />
            Boxer
          </Badge>
          <Badge variant="outline">Gluten free</Badge>
          <Badge variant="outline">No shellfish</Badge>
          <Badge variant="outline">Higher protein</Badge>
        </div>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// DIET PICKER (large cards)
// ---------------------------------------------------------------------------
export function DietPickerCard() {
  const [selected, setSelected] = React.useState(diets[0].id);
  return (
    <Card className="p-6">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="font-display text-lg font-medium leading-tight">Choose your diet</CardTitle>
        <CardDescription>Adding new diets doesn&apos;t change the design: just the data.</CardDescription>
      </CardHeader>
      <div className="grid gap-2">
        {diets.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setSelected(d.id)}
            className={cn(
              "flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3 text-left transition-all hover:border-foreground/20",
              selected === d.id && "border-l-4 border-l-primary border-y-foreground/10 border-r-foreground/10",
            )}
            style={selected === d.id ? { borderLeftColor: d.colorHex } : undefined}
          >
            <span
              className="mt-1 size-3 shrink-0 rounded-sm"
              style={{ backgroundColor: d.colorHex }}
              aria-hidden
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{d.name}</div>
              <div className="text-xs leading-relaxed text-muted-foreground">{d.description}</div>
            </div>
            {selected === d.id && <CheckIcon className="size-4 text-primary" />}
          </button>
        ))}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// TODAY'S MEAL
// ---------------------------------------------------------------------------
export function TodaysMealCard() {
  return (
    <Card className="p-7">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Today · 18:30
        </div>
        <Badge>
          <ChefHatIcon /> Inés
        </Badge>
      </div>
      <h3 className="mt-3 font-display text-[26px] font-medium leading-tight tracking-tight">
        {todaysDish.name}
      </h3>
      <div className="mt-5 grid grid-cols-4 gap-2 rounded-lg bg-muted/60 px-4 py-3">
        {[
          ["KCAL", todaysDish.kcal],
          ["PROTEIN", `${todaysDish.protein}g`],
          ["CARBS", `${todaysDish.carbs}g`],
          ["FAT", `${todaysDish.fat}g`],
        ].map(([label, val]) => (
          <div key={label} className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {label}
            </span>
            <span className="font-mono text-lg font-bold tabular-nums text-foreground">{val}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <Button size="lg" className="flex-1">
          Confirm session
        </Button>
        <Button variant="outline" size="lg">
          <ClockIcon /> Reschedule
        </Button>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// YOUR CHEF
// ---------------------------------------------------------------------------
export function YourChefCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Avatar size="lg">
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Your chef
          </div>
          <div className="font-display text-lg font-medium leading-tight">Inés Marchetti</div>
          <Badge variant="secondary" className="w-fit">Mediterranean</Badge>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Trained at Mugaritz. Cooks for boxer and high-protein plans across north London.
      </p>
      <div className="mt-5 flex gap-2">
        <Button variant="outline" className="flex-1">
          <MessageCircleIcon /> Message Inés
        </Button>
        <Button variant="ghost" size="icon" aria-label="Chef profile">
          <ChevronRightIcon />
        </Button>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// WEEKLY SCHEDULE
// ---------------------------------------------------------------------------
export function WeeklyScheduleCard() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = 1; // Tue
  const bookings: Record<number, { time: string; dish: string }> = {
    1: { time: "18:30", dish: "Mackerel" },
    2: { time: "19:00", dish: "Lamb" },
    3: { time: "18:00", dish: "Halibut" },
    4: { time: "18:30", dish: "Buckwheat" },
  };

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="font-display text-lg font-medium leading-tight">This week</CardTitle>
        <CardDescription>Four sessions · 17–23 May</CardDescription>
      </CardHeader>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((d, i) => {
          const b = bookings[i];
          const isToday = i === today;
          return (
            <div
              key={d}
              className={cn(
                "flex aspect-[3/4] flex-col rounded-md border border-border bg-background p-2",
                isToday && "border-primary bg-primary/5",
              )}
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {d}
              </div>
              <div className="font-mono text-base font-bold tabular-nums">{17 + i}</div>
              {b && (
                <div className="mt-auto flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] tabular-nums text-foreground">{b.time}</span>
                  <span className="truncate text-[10px] text-muted-foreground">{b.dish}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export function StatsCard() {
  const tiles = [
    { label: "MEALS THIS WEEK", value: "5", unit: "of 5", icon: UtensilsCrossedIcon },
    { label: "AVG KCAL", value: "612", unit: "/ day", icon: FlameIcon },
    { label: "STREAK", value: "23", unit: "days", icon: CalendarDaysIcon },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {tiles.map(({ label, value, unit, icon: Icon }) => (
        <Card key={label} className="p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {label}
            </span>
            <Icon className="size-3.5 text-muted-foreground" />
          </div>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-mono text-3xl font-bold tabular-nums text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// NOTIFICATIONS
// ---------------------------------------------------------------------------
export function NotificationsCard() {
  const items = [
    { icon: ChefHatIcon, title: "Inés confirmed Tuesday", time: "12m", unread: true },
    { icon: BellIcon, title: "Order #4821 session on its way", time: "2h", unread: true },
    { icon: HeartPulseIcon, title: "Weekly macros report ready", time: "1d", unread: false },
    { icon: CheckIcon, title: "Payment received", time: "3d", unread: false },
  ];
  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <CardTitle className="font-display text-lg font-medium leading-tight">Notifications</CardTitle>
        <Button variant="ghost" size="sm">Mark all read</Button>
      </div>
      <Separator />
      <div className="flex flex-col">
        {items.map(({ icon: Icon, title, time, unread }, i) => (
          <div
            key={i}
            className={cn(
              "flex items-start gap-3 px-5 py-3 border-b border-border last:border-b-0",
              unread && "bg-primary/[0.03]",
            )}
          >
            <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-muted">
              <Icon className="size-3.5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-foreground">{title}</div>
              <div className="font-mono text-[10px] text-muted-foreground">{time} ago</div>
            </div>
            {unread && <span className="mt-1.5 size-1.5 rounded-full bg-primary" aria-hidden />}
          </div>
        ))}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// PRICING TIER
// ---------------------------------------------------------------------------
export function PricingCard() {
  const tiers = [
    { name: "Three", per: "/ week", price: "£140", features: ["3 sessions", "Any diet", "Switch anytime"], featured: false },
    { name: "Five", per: "/ week", price: "£220", features: ["5 sessions", "Priority matching", "Macro reports"], featured: true },
    { name: "Daily", per: "/ week", price: "£320", features: ["7 sessions", "Dedicated chef", "Nutritionist on call"], featured: false },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {tiers.map((t) => (
        <Card
          key={t.name}
          className={cn(
            "p-5",
            t.featured && "ring-1 ring-primary",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-medium">{t.name}</span>
            {t.featured && <Badge>Most popular</Badge>}
          </div>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-display text-3xl font-semibold tracking-tight">{t.price}</span>
            <span className="text-xs text-muted-foreground">{t.per}</span>
          </div>
          <ul className="mt-4 flex flex-col gap-1.5">
            {t.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckIcon className="size-3 text-foreground" /> {f}
              </li>
            ))}
          </ul>
          <Button variant={t.featured ? "default" : "outline"} className="mt-5 w-full">
            Choose {t.name}
          </Button>
        </Card>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SETTINGS
// ---------------------------------------------------------------------------
export function SettingsCard() {
  const rows = [
    { label: "Session reminders", hint: "10 min before your chef arrives", on: true },
    { label: "Weekly macros email", hint: "Sunday digest", on: true },
    { label: "Marketing emails", hint: "New chefs and seasonal menus", on: false },
    { label: "Share order with household", hint: "Adds a second account", on: false },
  ];
  return (
    <Card className="p-6">
      <CardHeader className="px-0 pb-4 flex-row items-center gap-2">
        <SettingsIcon className="size-4 text-muted-foreground" />
        <CardTitle className="font-display text-lg font-medium leading-tight">Settings</CardTitle>
      </CardHeader>
      <div className="flex flex-col">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={cn(
              "flex items-start justify-between gap-4 py-3",
              i !== rows.length - 1 && "border-b border-border",
            )}
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{r.label}</span>
              <span className="text-xs text-muted-foreground">{r.hint}</span>
            </div>
            <Switch defaultChecked={r.on} />
          </div>
        ))}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// COOKIE CONSENT
// ---------------------------------------------------------------------------
export function CookieConsentCard() {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="font-display text-base font-medium">A note on cookies</div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We use essentials to keep you signed in, and analytics to make Salsa better. Nothing sold.
          </p>
        </div>
        <Button variant="ghost" size="icon-sm" aria-label="Dismiss">
          <XIcon />
        </Button>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <Button variant="ghost" size="sm">Essentials only</Button>
        <Button size="sm">Allow all</Button>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// REPORT AN ISSUE
// ---------------------------------------------------------------------------
export function ReportIssueCard() {
  return (
    <Card className="p-6">
      <CardHeader className="px-0 pb-4 flex-row items-center gap-2">
        <HelpCircleIcon className="size-4 text-muted-foreground" />
        <CardTitle className="font-display text-lg font-medium leading-tight">Report an issue</CardTitle>
      </CardHeader>
      <div className="flex flex-col gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="ri-subject">Subject</Label>
          <Input id="ri-subject" defaultValue="Session arrived 40 minutes late" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="ri-desc">What happened?</Label>
          <Textarea id="ri-desc" rows={4} defaultValue="Tuesday's session was scheduled for 18:30 and arrived at 19:10. Food was still warm but the timing matters for training." />
        </div>
        <div className="flex items-center gap-2 pt-1">
          <Checkbox id="ri-attach" defaultChecked />
          <Label htmlFor="ri-attach" className="font-normal">Attach the order details (recommended)</Label>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// TEAM LIST
// ---------------------------------------------------------------------------
export function TeamListCard() {
  const team = [
    { name: "Inés Marchetti", role: "Your chef", tag: "Mediterranean", initials: "IM" },
    { name: "Dr. Rohan Mehta", role: "Nutritionist", tag: "Gut health", initials: "RM" },
    { name: "Salsa Support", role: "On call 7–22h", tag: "Concierge", initials: "SS" },
  ];
  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <CardTitle className="font-display text-lg font-medium leading-tight">Your team</CardTitle>
        <Badge variant="outline">3</Badge>
      </div>
      <Separator />
      {team.map((t, i) => (
        <div
          key={t.name}
          className={cn(
            "flex items-center gap-3 px-5 py-3",
            i !== team.length - 1 && "border-b border-border",
          )}
        >
          <Avatar>
            <AvatarFallback>{t.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="font-display text-base font-medium leading-tight">{t.name}</span>
            <span className="text-xs text-muted-foreground">{t.role}</span>
          </div>
          <Badge variant="secondary">{t.tag}</Badge>
          <Button variant="ghost" size="icon-sm" aria-label={`Message ${t.name}`}>
            <MessageCircleIcon />
          </Button>
        </div>
      ))}
    </Card>
  );
}

// ---------------------------------------------------------------------------
// EMPTY STATE
// ---------------------------------------------------------------------------
export function EmptyStateCard() {
  return (
    <Card className="flex flex-col items-center gap-4 px-6 py-12 text-center">
      <h3 className="font-display text-[26px] font-medium leading-tight tracking-tight">
        Nothing scheduled this week
      </h3>
      <p className="max-w-sm text-sm text-muted-foreground">
        Pause is on until 24 May. Resume any day to slot back into Inés&apos;s week.
      </p>
      <Button size="lg" className="mt-2">Resume sessions</Button>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// COMMAND PALETTE (open state, inline)
// ---------------------------------------------------------------------------
export function CommandPaletteCard() {
  return (
    <Card className="overflow-hidden p-0 ring-1 ring-foreground/10 bg-popover">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <SearchIcon className="size-4 text-muted-foreground" />
        <input
          readOnly
          defaultValue="mac"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          placeholder="Search dishes, chefs, settings…"
        />
        <kbd className="rounded-sm bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">ESC</kbd>
      </div>
      <div className="flex flex-col py-1">
        <div className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Dishes
        </div>
        <div className="bg-muted px-3 py-2 text-sm">
          <span className="font-medium">Mac</span>kerel, miso aubergine
          <span className="ml-2 text-muted-foreground">: Tuesday</span>
        </div>
        <div className="px-3 py-2 text-sm">
          Halibut, fennel, blood orange
        </div>
        <Separator className="my-1" />
        <div className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Chefs
        </div>
        <div className="px-3 py-2 text-sm">
          Inés <span className="ml-1 text-muted-foreground">Mar</span>chetti
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border bg-muted/40 px-3 py-1.5">
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <kbd className="rounded-sm bg-background px-1 font-mono">↑↓</kbd> navigate
          <kbd className="ml-2 rounded-sm bg-background px-1 font-mono">↵</kbd> select
        </div>
        <div className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
          <CommandIcon className="size-3" /> K
        </div>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Patterns metadata: used by /patterns page captions
// ---------------------------------------------------------------------------
export const showcaseList = [
  { id: "login", title: "Login", Component: LoginCard, composition: "Card + Input × 2 + Label + Button + link" },
  { id: "signup", title: "Sign-up", Component: SignupCard, composition: "Card + Input + Label + custom radio cards using inline diet.colorHex + Button" },
  { id: "account", title: "Account", Component: AccountCard, composition: "Card + Avatar + Badge × 4 + Separator + Button" },
  { id: "diet-picker", title: "Diet picker", Component: DietPickerCard, composition: "Card + 5 selectable rows with diet.colorHex swatch + Check icon" },
  { id: "todays-meal", title: "Today's meal", Component: TodaysMealCard, composition: "Card + Parkinsans dish title + JetBrains Mono macros row + Badge + Button × 2" },
  { id: "your-chef", title: "Your chef", Component: YourChefCard, composition: "Card + Avatar + Badge + Button × 2" },
  { id: "weekly-schedule", title: "Weekly schedule", Component: WeeklyScheduleCard, composition: "Card + 7-day grid with tabular-nums dates and JetBrains Mono times" },
  { id: "stats", title: "Stats", Component: StatsCard, composition: "Three Card tiles + JetBrains Mono numbers + lucide icons" },
  { id: "notifications", title: "Notifications", Component: NotificationsCard, composition: "Card + Separator + read/unread rows with primary dot" },
  { id: "pricing", title: "Pricing tiers", Component: PricingCard, composition: "Three Cards (one ringed primary) + Badge + Button" },
  { id: "settings", title: "Settings", Component: SettingsCard, composition: "Card + 4 Switch rows with hint copy" },
  { id: "cookie", title: "Cookie consent", Component: CookieConsentCard, composition: "Card + dismiss icon-button + ghost / primary Button pair" },
  { id: "report", title: "Report an issue", Component: ReportIssueCard, composition: "Card + Input + Textarea + Label + Checkbox + Button × 2" },
  { id: "team", title: "Team list", Component: TeamListCard, composition: "Card + Avatar + Badge + ghost icon-button per row" },
  { id: "empty", title: "Empty state", Component: EmptyStateCard, composition: "Card + Parkinsans headline + body + lg primary Button" },
  { id: "command", title: "Command palette", Component: CommandPaletteCard, composition: "Card composed to mirror cmdk: search + grouped results + footer kbd hints" },
] as const;
