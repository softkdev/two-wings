import type { ProjectCardProps } from "@/types/ui";
import { cn } from "@/lib";
import { Badge } from "./Badge";

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group",
        "bg-background-section border border-border-DEFAULT rounded-card",
        "overflow-hidden",
        "transition-all duration-300",
        "hover:border-primary-base/30 hover:shadow-card",
        className
      )}
    >
      {/* Image/Mockup Container */}
      <div className="relative bg-[#0F1113] p-8 overflow-hidden">
        {/* Decorative blur effects */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-blur-primary opacity-50" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blur-secondary opacity-30" />

        {/* Image */}
        <div className="relative z-10 flex items-center justify-center min-h-[200px] md:min-h-[240px]">
          {image}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <h3 className="text-h3 text-text-title mb-3 font-heading">{title}</h3>

        {/* Description */}
        <p className="text-body text-text-body-2 font-sans mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 md:gap-3 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
          {technologies.map((tech, index) => (
            <Badge key={index} size="sm" color="text">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
