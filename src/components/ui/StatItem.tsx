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
  className,
}: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center text-center gap-2", className)}>
      <p
        className={cn(
          "font-sans text-[60px] leading-[60px] font-normal tracking-[-0.02em]",
          statColors[color]
        )}
      >
        {value}
      </p>
      <p className="font-sans text-[16px] leading-[24px] text-text-body">
        {label}
      </p>
    </div>
  );
}
