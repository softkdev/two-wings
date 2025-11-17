import type { BadgeProps } from "@/types/ui";
import { cn } from "@/lib";

const badgeSizes = {
  sm: "px-2 py-1 text-[14px] leading-[20px]",
  md: "px-4 py-2 text-body",
};

const badgeColors = {
  primary: "text-primary-base",
  secondary: "text-secondary-base",
  text: "text-text-body-2",
};

export function Badge({
  size = "md",
  color = "text",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]",
        "rounded-icon font-sans",
        "whitespace-nowrap",
        badgeSizes[size],
        badgeColors[color],
        className
      )}
    >
      {children}
    </span>
  );
}
