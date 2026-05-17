import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import {
  LoginCard,
  SignupCard,
  AccountCard,
  DietPickerCard,
  TodaysMealCard,
  YourChefCard,
  WeeklyScheduleCard,
  StatsCard,
  NotificationsCard,
  PricingCard,
  SettingsCard,
  CookieConsentCard,
  ReportIssueCard,
  TeamListCard,
  EmptyStateCard,
  CommandPaletteCard,
} from "@/components/system/showcase/cards";
import { PageHeader } from "@/components/system/section";
import { Button } from "@/components/ui/button";

const flows: { href: string; label: string }[] = [
  { href: "/booking", label: "Booking flow" },
];

export default function ShowcasePage() {
  return (
    <>
      <PageHeader
        title="Showcase"
        subtitle="The system flexing across real Salsa surfaces. Every card composes shadcn primitives: no inline reimplementations."
      />

      <div className="mb-6 flex flex-wrap items-center gap-2 md:mb-8">
        <span className="mr-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Try a flow
        </span>
        {flows.map((f) => (
          <Button
            key={f.href}
            variant="outline"
            size="sm"
            asChild
            data-icon="inline-end"
          >
            <Link href={f.href}>
              {f.label}
              <ArrowRightIcon />
            </Link>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-5"><LoginCard /></div>
        <div className="md:col-span-7"><TodaysMealCard /></div>

        <div className="md:col-span-12"><StatsCard /></div>

        <div className="md:col-span-7"><SignupCard /></div>
        <div className="flex flex-col gap-4 md:col-span-5 md:gap-5">
          <YourChefCard />
          <AccountCard />
        </div>

        <div className="md:col-span-12"><WeeklyScheduleCard /></div>

        <div className="md:col-span-6"><DietPickerCard /></div>
        <div className="flex flex-col gap-4 md:col-span-6 md:gap-5">
          <NotificationsCard />
          <CookieConsentCard />
        </div>

        <div className="md:col-span-12"><PricingCard /></div>

        <div className="md:col-span-6"><SettingsCard /></div>
        <div className="md:col-span-6"><ReportIssueCard /></div>

        <div className="md:col-span-7"><TeamListCard /></div>
        <div className="md:col-span-5"><EmptyStateCard /></div>

        <div className="md:col-span-12"><CommandPaletteCard /></div>
      </div>
    </>
  );
}
