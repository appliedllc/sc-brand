import { SystemShell } from "@/components/system/system-shell";

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  return <SystemShell>{children}</SystemShell>;
}
