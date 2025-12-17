import { cn } from "@/lib";

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  color: string;
  isMobile?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  color,
  isMobile = false,
}: ProcessStepProps) {
  // Mobile layout: text beside the card
  if (isMobile) {
    return (
      <div className="relative flex items-start gap-4 group">
        {/* Number badge - positioned at intersection point */}
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center text-[20px] font-semibold text-white shrink-0",
            "rounded-full border border-white/20 bg-[#0d1116]",
            "transition-all duration-300 group-hover:border-white/30 group-hover:scale-110 z-10"
          )}
        >
          {number}
        </div>
        
        {/* Card with text */}
        <div
          className={cn(
            "relative flex-1 rounded-2xl border border-white/10 bg-gradient-to-br px-6 py-10 shadow-[0px_20px_60px_rgba(0,0,0,0.35)]",
            "transition-all duration-300 hover:border-white/20 hover:shadow-[0px_24px_70px_rgba(0,0,0,0.45)] hover:-translate-y-1",
            color
          )}
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

  // Desktop layout: number badge above, card below, text below card
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Number badge - positioned at intersection point */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center text-[20px] font-semibold text-white z-10",
          "rounded-full border border-white/20 bg-[#0d1116]",
          "mb-4 transition-all duration-300 group-hover:border-white/30 group-hover:scale-110"
        )}
      >
        {number}
      </div>
      
      {/* Card */}
      <div
        className={cn(
          "relative w-full rounded-2xl border border-white/10 bg-gradient-to-br px-6 py-10 shadow-[0px_20px_60px_rgba(0,0,0,0.35)]",
          "transition-all duration-300 hover:border-white/20 hover:shadow-[0px_24px_70px_rgba(0,0,0,0.45)] hover:-translate-y-1",
          color
        )}
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

