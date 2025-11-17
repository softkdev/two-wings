import type { ServiceCardProps } from "@/types/ui";
import { cn } from "@/lib";
import { IconWrapper } from "./IconWrapper";

export function ServiceCard({
  icon,
  title,
  description,
  className,
  iconBackground,
}: ServiceCardProps) {
  const iconStyle = {
    backgroundColor: iconBackground ?? "rgba(41, 173, 197, 0.15)",
  };
  return (
    <article
      className={cn(
        "group",
        "bg-[#16181b] border border-white/15 rounded-card",
        "p-6 md:p-8",
        "transition-all duration-300",
        "hover:border-primary-base/40 hover:shadow-glow-primary/70",
        className
      )}
    >
      {/* Icon */}
      <IconWrapper
        size="md"
        className={cn(
          "mb-6 transition-transform duration-300 group-hover:scale-110 rounded-[10px]"
        )}
        style={iconStyle}
      >
        {icon}
      </IconWrapper>

      {/* Title */}
      <h3 className="text-[18px] leading-[28px] text-[#70c8d8] mb-4 font-sans font-semibold">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[16px] leading-[24px] text-text-body font-sans">
        {description}
      </p>
    </article>
  );
}
