import type { ButtonProps } from "@/types/ui";
import { cn } from "@/lib";

const buttonVariants = {
  primary: "bg-secondary-base text-background-DEFAULT hover:opacity-90",
  secondary: "bg-primary-base text-text-title hover:opacity-90",
  outline:
    "border border-secondary-base text-secondary-base hover:bg-secondary-base hover:text-background-DEFAULT",
  ghost:
    "bg-transparent text-text-body hover:bg-[rgba(255,255,255,0.05)] hover:text-text-title",
};

const buttonSizes = {
  sm: "px-4 py-2 text-[14px] leading-[20px]",
  md: "px-6 py-3 text-button",
  lg: "px-8 py-4 text-[18px] leading-[26px]",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center cursor-pointer justify-center gap-2",
        "rounded-button font-sans font-bold",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-background-DEFAULT",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
