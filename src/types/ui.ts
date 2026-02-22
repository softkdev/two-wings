/**
 * UI Component Types
 *
 * Type definitions for UI components.
 */

import type { ReactNode, CSSProperties } from "react";

/**
 * Button variants
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

/**
 * Button sizes
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Badge sizes
 */
export type BadgeSize = "sm" | "md";

/**
 * Icon wrapper sizes
 */
export type IconWrapperSize = "sm" | "md" | "lg";

/**
 * Container element types
 */
export type ContainerAs = "div" | "section";

/**
 * Color variants
 */
export type ColorVariant = "primary" | "secondary" | "text";

/**
 * Base component props
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Button props
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
}

/**
 * Badge props
 */
export interface BadgeProps extends BaseComponentProps {
  size?: BadgeSize;
  color?: ColorVariant;
}

/**
 * IconWrapper props
 */
export interface IconWrapperProps extends BaseComponentProps {
  size?: IconWrapperSize;
}

/**
 * ServiceCard props
 */
export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconBackground?: string;
}

/**
 * ProjectCard props
 */
export interface ProjectCardProps {
  image: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

/**
 * StatItem props
 */
export interface StatItemProps {
  value: string;
  label: string;
  color?: "primary" | "secondary";
  className?: string;
}

/**
 * Container props
 */
export interface ContainerProps extends BaseComponentProps {
  as?: ContainerAs;
}

/**
 * Logo props
 */
export interface LogoProps {
  className?: string;
  showText?: boolean;
}
