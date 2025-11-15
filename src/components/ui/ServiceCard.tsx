import type { ServiceCardProps } from "@/types/ui";
import { cn } from "@/lib";
import { IconWrapper } from "./IconWrapper";

export function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group",
        "bg-background-section border border-border-DEFAULT rounded-card",
        "p-6 md:p-8",
        "transition-all duration-300",
        "hover:border-primary-base/50 hover:shadow-glow-primary",
        className
      )}
    >
      {/* Icon */}
      <IconWrapper
        size="md"
        className="mb-6 transition-transform duration-300 group-hover:scale-110"
      >
        {icon}
      </IconWrapper>

      {/* Title */}
      <h3 className="text-h3 text-text-title mb-4 font-heading">{title}</h3>

      {/* Description */}
      <p className="text-body text-text-body-2 font-sans leading-relaxed">
        {description}
      </p>
    </article>
  );
}
