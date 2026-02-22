/**
 * Types for services data structure
 */

export interface FilterOption {
  id: string;
  label: string;
}

export interface FilterCategory {
  id: string;
  title: string;
  options: FilterOption[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconKey: string;
  iconBackground: string;
  categoryIds: string[];
}

export interface HeroData {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface ServicesData {
  hero: HeroData;
  filterCategories: FilterCategory[];
  services: ServiceItem[];
}
