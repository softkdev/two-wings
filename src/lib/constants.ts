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
 * Services offered
 */
export const SERVICES = [
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description:
      "User research, wireframing, prototyping, visual design, usability testing, and developer handoff",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Solutions",
    description:
      "Online stores with product catalogs, carts, payment gateways, multi-vendor marketplaces, and custom dashboards",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description:
      "Full-featured iOS & Android apps for on-demand services, education, health, social platforms, and events",
  },
  {
    id: "business-tools",
    title: "Business Management Tools",
    description:
      "CRM, ERP, project management, team collaboration, and scheduling tools for appointments and bookings",
  },
  {
    id: "ai-systems",
    title: "AI-Powered Systems",
    description:
      "Chatbot assistants, document summarization, smart search, recommendation systems, and OCR",
  },
  {
    id: "education",
    title: "Educational & Content Platforms",
    description:
      "Online course platforms, document libraries, video streaming, webinar systems, and quiz platforms",
  },
] as const;

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
