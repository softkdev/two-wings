import type { StatItemProps } from "@/types/ui";
import { cn } from "@/lib";

const statColors = {
  primary: "text-primary-base",
  secondary: "text-secondary-base",
};

export function StatItem({
  value,
  label,
  color = "primary",
  showDivider = false,
  className,
}: StatItemProps) {
  return (
    <div className={cn("flex items-center gap-8 md:gap-16", className)}>
      <div className="flex flex-col items-center gap-2">
        {/* Value */}
        <p className={cn("text-stat font-sans text-center", statColors[color])}>
          {value}
        </p>

        {/* Label */}
        <p className="text-body text-text-body text-center font-sans">
          {label}
        </p>
      </div>

      {/* Divider */}
      {showDivider && (
        <div
          className="h-20 w-px bg-[rgba(255,255,255,0.2)] shrink-0"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
