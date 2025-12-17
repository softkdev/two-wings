import { cn } from "@/lib";

export interface ReasonCardProps {
  title: string;
  description: string;
  accent: string;
  align: "left" | "right";
}

export function ReasonCard({ title, description, align, accent }: ReasonCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-linear-to-br backdrop-blur-sm px-6 py-5 shadow-[0px_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-white/25 hover:shadow-[0px_16px_50px_rgba(0,0,0,0.5)]",
        accent,
        align === "right" ? "text-right items-end" : "text-left items-start"
      )}
    >
      <div
        className={cn(
          "mb-3 h-px w-12 bg-primary-base/60 transition-all duration-300",
          align === "right" ? "ml-auto" : "mr-auto"
        )}
      />
      <h3 className="text-[18px] font-semibold text-primary-light transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 text-[16px] leading-container-x-sm text-text-body">
        {description}
      </p>
    </div>
  );
}

