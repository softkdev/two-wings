"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo, Button, Container } from "@/components/ui";
import { NavLink } from "./NavLink";
import { ROUTES } from "@/lib";
import { cn } from "@/lib";
import { useIsScrolled } from "@/hooks";

const navigationLinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "About us", href: ROUTES.ABOUT },
  { label: "Blog", href: ROUTES.BLOG },
];

const NAV_GRADIENT =
  "bg-[linear-gradient(120deg,#040404_0%,#070d0f_55%,#0b1012_100%)]";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isScrolled = useIsScrolled(50);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "md:bg-background-DEFAULT/80 backdrop-blur-sm",
        isScrolled && "border-b border-border-DEFAULT"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container className="py-2 md:py-4">
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-[32px] border border-[#06191d] px-4 sm:px-6 lg:px-10",
            "h-[73px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
            NAV_GRADIENT
          )}
        >
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="md"
              className="rounded-button px-8 text-[16px]"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden px-4 py-2 text-text-body hover:text-text-title transition-colors font-sans text-[16px] leading-container-x-sm"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2",
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-6 pt-6 border-t border-white/10 rounded-card bg-[#0b1015]/50 p-6">
            {/* Mobile Links */}
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
                onClick={closeMobileMenu}
                className="text-[18px] font-sans"
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Button variant="primary" size="md" className="w-full mt-2">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
