import type { LogoProps } from "@/types/ui";
import { cn } from "@/lib";
import Image from "next/image";

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo-icon.png"
        alt="Two Wings Logo"
        width={84}
        height={50}
        className="object-contain"
        priority
      />
    </div>
  );
}
