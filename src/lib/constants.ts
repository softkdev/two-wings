/**
 * Application Constants
 *
 * Global constants used throughout the application.
 * Prefer using enums over hardcoded strings.
 */

/**
 * Application routes
 */
export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  PROJECTS: "/projects",
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
} as const;

/**
 * Contact information
 */
export const CONTACT_INFO = {
  EMAIL: "2wings.companies@gmail.com",
  PHONE: "+31687433276",
  LOCATION: "Remote Team, Worldwide",
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  LINKEDIN: null, // Add URL when available
  INSTAGRAM: null, // Add URL when available
  TWITTER: null, // Add URL when available
} as const;

/**
 * Company information
 */
export const COMPANY_INFO = {
  NAME: "Two Wings",
  TAGLINE: "From vision to flight",
  DESCRIPTION:
    "Professional web solutions at smart prices. Custom code, no-code, and low-code development.",
  YEAR_FOUNDED: 2025,
} as const;

/**
 * Statistics
 */
export const STATS = [
  {
    id: "cost-savings",
    value: "60%",
    label: "Average Cost Savings",
    color: "primary",
  },
  {
    id: "quality",
    value: "100%",
    label: "Premium Quality",
    color: "secondary",
  },
  {
    id: "clients",
    value: "50+",
    label: "Happy Clients",
    color: "primary",
  },
] as const;
