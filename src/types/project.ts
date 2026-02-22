/**
 * Project data types for projects.json and SSR pages.
 */

export interface ProjectFilter {
  slug: string;
  label: string;
  icon: string | null;
}

export interface ProjectsMeta {
  pageSize: number;
  filters: ProjectFilter[];
}

export interface ListPageContent {
  title: string;
  description: string;
}

export interface ContactSectionContent {
  title: string;
  description: string;
  email: string;
  submitLabel: string;
}

export interface ProjectsFooterLink {
  label: string;
  url: string;
}

export interface FooterContactInfo {
  location: string;
  email: string;
  phone: string;
}

export interface SocialLinkItem {
  platform: string;
  url: string | null;
}

export interface FooterContent {
  companyDescription: string;
  quickLinks: ProjectsFooterLink[];
  contactInfo: FooterContactInfo;
  copyrightText: string;
  socialLinks: SocialLinkItem[];
}

export interface ProjectCommitment {
  title: string;
  description: string;
}

export interface ProjectTodayWork {
  title: string;
  description: string;
  image?: string | null;
}

export interface Project {
  id: string;
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  tags: string[];
  thumbnailImage: string;
  carouselImages: string[];
  overview: string;
  problem: string;
  solution: string;
  commitment: ProjectCommitment;
  todayWork: ProjectTodayWork;
  relatedProjectIds: string[];
}

export interface ProjectsData {
  meta: ProjectsMeta;
  listPage: ListPageContent;
  contactSection: ContactSectionContent;
  footer: FooterContent;
  projects: Project[];
}
