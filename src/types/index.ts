/**
 * TypeScript Types & Interfaces
 *
 * Shared types and interfaces used throughout the application.
 * Keep types organized by domain or feature.
 *
 * Export all types here:
 * import type { Service, Project, ButtonVariant } from '@/types';
 */

// Export UI component types
export * from "./ui";

// Export layout component types
export * from "./layout";

// Export project data types
export * from "./project";

/**
 * Service type
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

/**
 * Project type
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  url?: string;
}

/**
 * Stat type
 */
export interface Stat {
  id: string;
  value: string;
  label: string;
  color?: "primary" | "secondary";
}

/**
 * Navigation link type
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Social link type
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
