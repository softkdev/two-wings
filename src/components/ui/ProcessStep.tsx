import type { ComponentType } from "react";
import { cn } from "@/lib";

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  icon: ComponentType<{ className?: string }>;
  isMobile?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  accentColor,
  icon: Icon,
  isMobile = false,
}: ProcessStepProps) {
  // Mobile layout: text beside the card (unchanged until mobile design provided)
  const mobileGradient = `linear-gradient(135deg, ${accentColor} 0%, #0d1116 100%)`;

  if (isMobile) {
    return (
      <div className="relative flex items-start gap-4 group">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center text-[20px] font-semibold text-white shrink-0",
            "rounded-full border border-white/20 bg-[#0d1116]",
            "transition-all duration-300 group-hover:border-white/30 group-hover:scale-110 z-10"
          )}
        >
          {number}
        </div>

        <div
          className={cn(
            "relative flex-1 rounded-2xl border border-white/10 px-6 py-10 shadow-[0px_20px_60px_rgba(0,0,0,0.35)]",
            "transition-all duration-300 hover:border-white/20 hover:shadow-[0px_24px_70px_rgba(0,0,0,0.45)] hover:-translate-y-1"
          )}
          style={{ background: mobileGradient }}
        >
          <span className="absolute inset-x-6 top-4 h-px bg-white/15" />
          <h3 className="mt-6 text-[20px] font-semibold text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 text-[16px] leading-[24px] text-white/80">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Desktop layout (Figma): number italic accent above-left, icon block 3D, title underline, description left-align
  return (
    <div className="relative flex flex-col items-start text-left group">
      {/* Number - italic, accent color, above-left of icon block */}
      <span
        className="text-[28px] md:text-[36px] font-bold italic leading-none mb-2 -ml-1"
        style={{ color: accentColor }}
      >
        {number}
      </span>

      {/* Icon block - dark bg #1A1A1A, border/glow accent, 3D effect */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl w-16 h-16 md:w-20 md:h-20",
          "border transition-all duration-300 z-10",
        )}
        style={{
          backgroundColor: "#1A1A1A",
          borderColor: accentColor,
          boxShadow: `0 4px 14px rgba(0,0,0,0.4), 0 0 20px ${accentColor}20`,
          transform: "perspective(300px) rotateX(-3deg) rotateY(2deg)",
        }}
      >
        <span className="[&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10" style={{ color: accentColor }}>
          <Icon className="shrink-0 w-8 h-8 md:w-10 md:h-10" />
        </span>
      </div>

      {/* Title - accent color, bold, underline */}
      <h3
        className="mt-4 text-[18px] md:text-[20px] font-bold pb-1 border-b-2 w-fit"
        style={{ color: accentColor, borderColor: accentColor }}
      >
        {title}
      </h3>

      {/* Description - #E0E0E0, left-aligned */}
      <p className="mt-3 text-[14px] md:text-[16px] leading-[24px] text-[#E0E0E0]">
        {description}
      </p>
    </div>
  );
}
