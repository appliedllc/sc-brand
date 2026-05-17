"use client";

import * as React from "react";
import {
  ChefHatIcon,
  PlusIcon,
  CalendarIcon,
  BellIcon,
  CheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  MoreHorizontalIcon,
  Trash2Icon,
  PencilIcon,
  SearchIcon,
  ChevronsUpDownIcon,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

import { PageHeader, Section } from "@/components/system/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandShortcut,
  CommandDialog,
} from "@/components/ui/command";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";

function Tile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card px-5 py-4 sm:grid sm:grid-cols-[140px_1fr] sm:items-center sm:gap-6">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export default function ComponentsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 4, 17));
  const [slider, setSlider] = React.useState([60]);
  const [progress, setProgress] = React.useState(64);
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 95 ? 30 : p + 5)), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <PageHeader
        title="Components"
        subtitle="Every primitive in the library, every variant, every state. Imports come from @/components/ui/*."
      />

      <Section label="Buttons: variants">
        <div className="flex flex-col gap-3">
          <Row label="default">
            <Button>Order now</Button>
            <Button disabled>Disabled</Button>
            <Button>
              <ChefHatIcon /> With icon
            </Button>
            <Button size="icon" aria-label="Add">
              <PlusIcon />
            </Button>
          </Row>
          <Row label="secondary">
            <Button variant="secondary">Save draft</Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </Row>
          <Row label="outline">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">
              <CalendarIcon /> Schedule
            </Button>
          </Row>
          <Row label="ghost">
            <Button variant="ghost">Settings</Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <BellIcon />
            </Button>
          </Row>
          <Row label="destructive">
            <Button variant="destructive">Cancel order</Button>
            <Button variant="destructive">
              <Trash2Icon /> Delete
            </Button>
          </Row>
          <Row label="link">
            <Button variant="link">Forgot password?</Button>
          </Row>
          <Row label="sizes">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon-sm" aria-label="Add" variant="outline">
              <PlusIcon />
            </Button>
            <Button size="icon" aria-label="Add" variant="outline">
              <PlusIcon />
            </Button>
            <Button size="icon-lg" aria-label="Add" variant="outline">
              <PlusIcon />
            </Button>
          </Row>
        </div>
      </Section>

      <Section label="Inputs">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Tile label="text">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@salsa.cooks" />
            </div>
          </Tile>
          <Tile label="text: disabled">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="d">Email</Label>
              <Input id="d" placeholder="you@salsa.cooks" disabled />
            </div>
          </Tile>
          <Tile label="textarea">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="note">Note for the chef</Label>
              <Textarea id="note" placeholder="Anything Inés should know about Tuesday?" />
            </div>
          </Tile>
          <Tile label="select">
            <div className="grid w-full gap-1.5">
              <Label>Diet</Label>
              <Select defaultValue="boxer">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="boxer">Boxer</SelectItem>
                  <SelectItem value="anti-aging">Anti-Aging</SelectItem>
                  <SelectItem value="ibs">Gut Health</SelectItem>
                  <SelectItem value="balance">Balance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Tile>
          <Tile label="checkbox">
            <div className="flex flex-col gap-2.5">
              {["Gluten free", "Dairy free", "Nut free"].map((opt) => (
                <Label key={opt} className="font-normal">
                  <Checkbox defaultChecked={opt === "Gluten free"} /> {opt}
                </Label>
              ))}
            </div>
          </Tile>
          <Tile label="radio">
            <RadioGroup defaultValue="three" className="gap-2.5">
              {[
                ["three", "Three days a week"],
                ["five", "Five days a week"],
                ["seven", "Every day"],
              ].map(([v, l]) => (
                <Label key={v} className="font-normal">
                  <RadioGroupItem value={v} /> {l}
                </Label>
              ))}
            </RadioGroup>
          </Tile>
          <Tile label="switch">
            <div className="flex flex-col gap-2.5 w-full">
              <Label className="justify-between font-normal">
                Daily reminder <Switch defaultChecked />
              </Label>
              <Label className="justify-between font-normal">
                Sunday digest <Switch />
              </Label>
            </div>
          </Tile>
          <Tile label="slider">
            <div className="flex flex-col gap-3 w-full">
              <Label className="justify-between">
                Spice <span className="font-mono text-xs text-muted-foreground tabular-nums">{slider[0]}</span>
              </Label>
              <Slider value={slider} onValueChange={setSlider} />
            </div>
          </Tile>
          <Tile label="date picker">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon /> {date ? format(date, "EEE, d MMM") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </Tile>
        </div>
      </Section>

      <Section label="Badges">
        <Tile label="variants">
          <Badge>Premium</Badge>
          <Badge variant="secondary">Boxer</Badge>
          <Badge variant="outline">Day 3 of 7</Badge>
          <Badge variant="destructive">Failed</Badge>
          <Badge variant="ghost">Soft</Badge>
        </Tile>
      </Section>

      <Section label="Avatar">
        <Tile label="sizes & fallback">
          <Avatar size="sm">
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>KW</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>AO</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=80&h=80&fit=crop&crop=faces" alt="" />
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
        </Tile>
      </Section>

      <Section label="Alerts">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Alert>
            <InfoIcon />
            <AlertTitle>Your chef confirmed Tuesday</AlertTitle>
            <AlertDescription>Session with Inés at 18:30. We&apos;ll text 10 minutes ahead.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlertIcon />
            <AlertTitle>Card declined</AlertTitle>
            <AlertDescription>Update payment to avoid a gap in next week&apos;s sessions.</AlertDescription>
          </Alert>
        </div>
      </Section>

      <Section label="Overlays">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <Tile label="dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pause sessions</DialogTitle>
                  <DialogDescription>
                    We&apos;ll hold your chef until you resume. No charges while paused.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="ghost">Keep going</Button>
                  <Button>Pause until Monday</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Tile>
          <Tile label="drawer">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Reschedule session</DrawerTitle>
                  <DrawerDescription>Pick a new window for Tuesday.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Confirm</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Tile>
          <Tile label="sheet">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Today on the pass</SheetTitle>
                  <SheetDescription>Inés is prepping mackerel and miso aubergine.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Tile>
          <Tile label="popover">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Macros tonight</span>
                  <span className="text-muted-foreground">38p · 41c · 28f</span>
                </div>
              </PopoverContent>
            </Popover>
          </Tile>
        </div>
      </Section>

      <Section label="Menus">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Tile label="dropdown">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoreHorizontalIcon /> Order actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-48">
                <DropdownMenuLabel>Order #4821</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PencilIcon /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarIcon /> Reschedule
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon /> Cancel order
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Tile>
          <Tile label="command palette">
            <Button variant="outline" onClick={() => setPaletteOpen(true)}>
              <SearchIcon /> Open palette
              <kbd className="ml-2 rounded-sm bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">⌘K</kbd>
            </Button>
            <CommandDialog open={paletteOpen} onOpenChange={setPaletteOpen}>
              <CommandInput placeholder="Search dishes, chefs, settings…" />
              <CommandList>
                <CommandEmpty>No results.</CommandEmpty>
                <CommandGroup heading="Dishes">
                  <CommandItem>
                    Grilled mackerel, miso aubergine
                    <CommandShortcut>⌘1</CommandShortcut>
                  </CommandItem>
                  <CommandItem>Slow lamb shoulder, charred greens</CommandItem>
                  <CommandItem>Buckwheat, roasted squash, tahini</CommandItem>
                </CommandGroup>
                <CommandGroup heading="Chefs">
                  <CommandItem>Inés Marchetti</CommandItem>
                  <CommandItem>Kenji Watanabe</CommandItem>
                  <CommandItem>Amara Okafor</CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </Tile>
        </div>
      </Section>

      <Section label="Tabs & accordion">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Tile label="tabs">
            <Tabs defaultValue="today" className="w-full">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="week">This week</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="today" className="pt-4 text-muted-foreground">
                One session: 18:30 with Inés.
              </TabsContent>
              <TabsContent value="week" className="pt-4 text-muted-foreground">
                Five sessions scheduled.
              </TabsContent>
              <TabsContent value="history" className="pt-4 text-muted-foreground">
                42 meals over the past month.
              </TabsContent>
            </Tabs>
          </Tile>
          <Tile label="accordion">
            <Accordion type="single" collapsible className="w-full" defaultValue="a">
              <AccordionItem value="a">
                <AccordionTrigger>How do sessions work?</AccordionTrigger>
                <AccordionContent>Your chef cooks and drops off in a one-hour window you pick weekly.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Can I switch chefs?</AccordionTrigger>
                <AccordionContent>Yes: anytime from your account settings.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>What if I&apos;m travelling?</AccordionTrigger>
                <AccordionContent>Pause for any number of weeks. We hold your chef.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Tile>
        </div>
      </Section>

      <Section label="Table">
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10 pl-4">
                  <Checkbox />
                </TableHead>
                <TableHead>
                  <span className="inline-flex items-center gap-1">Dish <ChevronsUpDownIcon className="size-3 text-muted-foreground" /></span>
                </TableHead>
                <TableHead>Chef</TableHead>
                <TableHead className="text-right">Kcal</TableHead>
                <TableHead className="pr-4">Session</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Grilled mackerel, miso aubergine", "Inés", 612, "Tue 18:30"],
                ["Slow lamb shoulder, charred greens", "Kenji", 740, "Wed 19:00"],
                ["Olive-oil halibut, fennel", "Amara", 528, "Thu 18:00"],
                ["Buckwheat, squash, tahini", "Inés", 480, "Fri 18:30"],
              ].map(([dish, chef, kcal, when], i) => (
                <TableRow key={i} data-state={i === 1 ? "selected" : undefined}>
                  <TableCell className="pl-4">
                    <Checkbox defaultChecked={i === 1} />
                  </TableCell>
                  <TableCell className="font-medium">{dish}</TableCell>
                  <TableCell className="text-muted-foreground">{chef as string}</TableCell>
                  <TableCell className="text-right font-mono tabular-nums">{kcal as number}</TableCell>
                  <TableCell className="pr-4 font-mono text-xs text-muted-foreground">{when}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      <Section label="Tooltip · Skeleton · Progress · Toast">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <Tile label="tooltip">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <InfoIcon /> Hover
                </Button>
              </TooltipTrigger>
              <TooltipContent>Session in a 1-hour window.</TooltipContent>
            </Tooltip>
          </Tile>
          <Tile label="skeleton">
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </Tile>
          <Tile label="progress">
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-baseline justify-between font-mono text-xs">
                <span className="text-muted-foreground">Day 3 of 7</span>
                <span className="tabular-nums">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          </Tile>
          <Tile label="toast">
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Tuesday locked in", {
                  description: "Session with Inés at 18:30.",
                })
              }
            >
              <CheckIcon /> Trigger toast
            </Button>
          </Tile>
        </div>
      </Section>
    </>
  );
}
