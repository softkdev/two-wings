import type { ContainerProps } from "@/types/ui";
import { cn } from "@/lib";

export function Container({
  as: Component = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto",
        "px-container-x-sm md:px-container-x-md lg:px-container-x",
        "max-w-[1440px]",
        className
      )}
    >
      {children}
    </Component>
  );
}
