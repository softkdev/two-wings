"use client";

import Link from "next/link";
import type { NavLinkProps } from "@/types/layout";
import { cn } from "@/lib";

export function NavLink({
  href,
  isActive = false,
  className,
  children,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-heading font-semibold text-[18px] transition-colors duration-200",
        isActive
          ? "text-secondary-base"
          : "text-text-body hover:text-text-title",
        className
      )}
    >
      {children}
    </Link>
  );
}

