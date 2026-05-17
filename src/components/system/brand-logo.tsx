import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "auto" | "primary" | "black" | "white";

type BrandLogoProps = {
  height?: number;
  className?: string;
  variant?: Variant;
  alt?: string;
  priority?: boolean;
};

const ASPECT = 478 / 212;

export function BrandLogo({
  height = 28,
  className,
  variant = "auto",
  alt = "Salsa",
  priority,
}: BrandLogoProps) {
  const width = Math.round(height * ASPECT);
  const style = { width: `${width}px`, height: `${height}px` };

  if (variant === "primary") {
    return (
      <Image
        src="/logos/salsa-logo.svg"
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        style={style}
        className={className}
      />
    );
  }
  if (variant === "black") {
    return (
      <Image
        src="/logos/salsa-logo-black.svg"
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        style={style}
        className={className}
      />
    );
  }
  if (variant === "white") {
    return (
      <Image
        src="/logos/salsa-logo-white.svg"
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        style={style}
        className={className}
      />
    );
  }
  return (
    <>
      <Image
        src="/logos/salsa-logo.svg"
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        style={style}
        className={cn("block dark:hidden", className)}
      />
      <Image
        src="/logos/salsa-logo-white.svg"
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        style={style}
        className={cn("hidden dark:block", className)}
        aria-hidden
      />
    </>
  );
}
