import type { LogoProps } from "@/types/ui";
import { cn } from "@/lib";
import Image from "next/image";

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon from Figma */}
      <div className="relative w-[40px] h-[40px] shrink-0">
        <Image
          src="/logo-icon.svg"
          alt="Two Wings Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <span className="font-heading text-h5 text-text-title font-medium whitespace-nowrap">
          Two Wings
        </span>
      )}
    </div>
  );
}
