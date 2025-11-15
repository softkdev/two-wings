import type { IconWrapperProps } from "@/types/ui";
import { cn } from "@/lib";

const iconWrapperSizes = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
};

export function IconWrapper({
  size = "md",
  className,
  children,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "bg-primary-base rounded-icon",
        "shrink-0",
        iconWrapperSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
