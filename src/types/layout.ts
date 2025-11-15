/**
 * Layout Component Types
 *
 * Type definitions for layout components.
 */

import type { ReactNode } from "react";

/**
 * Navigation link
 */
export interface NavLinkItem {
  label: string;
  href: string;
  isActive?: boolean;
}

/**
 * NavLink component props
 */
export interface NavLinkProps {
  href: string;
  isActive?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

/**
 * Navigation component props
 */
export interface NavigationProps {
  className?: string;
}

/**
 * Footer link
 */
export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Footer column data
 */
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/**
 * Social link
 */
export interface SocialLink {
  platform: string;
  href: string;
  icon: ReactNode;
}

