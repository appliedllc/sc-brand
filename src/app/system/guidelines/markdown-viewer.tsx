"use client";

import * as React from "react";
import { CopyIcon, DownloadIcon, CheckIcon, FileTextIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getMarkdownFile } from "./actions";

interface MarkdownViewerProps {
  filename: string;
  label: string;
}

export function MarkdownViewer({ filename, label }: MarkdownViewerProps) {
  const [content, setContent] = React.useState<string | null>(null);
  const [copied, setCopied] = React.useState(false);

  const loadContent = async () => {
    if (content) return;
    const data = await getMarkdownFile(filename);
    setContent(data);
  };

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!content) return;
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Download started");
  };

  return (
    <Dialog onOpenChange={(open) => open && loadContent()}>
      <DialogTrigger asChild>
        import {
          Dialog,
          DialogContent,
          DialogHeader,
          DialogTitle,
          DialogTrigger,
          DialogFooter,
        } from "@/components/ui/dialog";
        ...
              <DialogContent className="max-h-[85vh] max-w-3xl overflow-hidden p-0 flex flex-col">
                <DialogHeader className="border-b border-border px-6 py-4 shrink-0">
                  <DialogTitle className="font-display text-lg">{filename}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto p-6">
                  {content === null ? (
                    <div className="flex h-40 items-center justify-center text-sm text-muted-foreground italic">
                      Loading content...
                    </div>
                  ) : (
                    <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap break-words text-foreground selection:bg-primary/20">
                      {content}
                    </pre>
                  )}
                </div>
                <DialogFooter className="border-t border-border px-6 py-4 flex items-center justify-end gap-2 bg-muted/30 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="h-9 gap-1.5 px-3 text-sm"
                  >
                    {copied ? (
                      <CheckIcon className="size-4" />
                    ) : (
                      <CopyIcon className="size-4" />
                    )}
                    {copied ? "Copied" : "Copy to clipboard"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="h-9 gap-1.5 px-3 text-sm"
                  >
                    <DownloadIcon className="size-4" />
                    Download .md
                  </Button>
                </DialogFooter>
              </DialogContent>

