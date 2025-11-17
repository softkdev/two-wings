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
        "group flex flex-col",
        "bg-[#0f1317] border border-white/10 rounded-[24px]",
        "overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.35)]",
        "transition-all duration-300",
        "hover:border-primary-base/40",
        className
      )}
    >
      {/* Image/Mockup Container */}
      <div className="relative bg-[#050a10] p-2  overflow-hidden">
        <div className="absolute -top-8 -left-6 h-48 w-48 rounded-full bg-[#29adc5]/20 blur-[100px]" />
        <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-[#ffc83a]/20 blur-[90px]" />

        <div className="relative z-10 rounded-[14px] overflow-hidden flex items-center justify-center min-h-[260px]">
          <div className="relative w-full h-[260px]">{image}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <h3 className="text-[18px] leading-[28px] font-normal text-[#70c8d8]">
          {title}
        </h3>
        <p className="text-base ellipse-line-2 pb-1 leading-container-x-sm text-text-body font-sans">
          {description}
        </p>

        <div className="flex gap-2 scrollbar-hide">
          {technologies.map((tech) => (
            <Badge
              key={`${title}-${tech}`}
              size="sm"
              color="primary"
              className="border-white/15 bg-white/5"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
