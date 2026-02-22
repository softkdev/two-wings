"use client";

import { useState, useMemo } from "react";
import { Container, Button, ServiceCard, Modal } from "@/components/ui";
import { getIconForService } from "@/lib/data/service-icons";
import { SearchIcon } from "@/assets/icons";
import { cn } from "@/lib";
import type { HeroData, FilterCategory, ServiceItem } from "@/types/services";

interface ServicesPageContentProps {
  hero: HeroData;
  filterCategories: FilterCategory[];
  services: ServiceItem[];
}

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="relative flex cursor-pointer items-center gap-3 text-left group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div
        className={cn(
          "h-5 w-5 rounded border-2 shrink-0 transition-all duration-200 flex items-center justify-center",
          checked
            ? "bg-secondary-base border-secondary-base"
            : "bg-white/5 border-white/20 group-hover:border-white/30"
        )}
      >
        {checked && (
          <svg
            className="h-3 w-3"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6609 3.49805L5.24739 9.91153L2.33217 6.99631"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[16px] leading-[24px] text-text-body group-hover:text-text-title transition-colors">
        {label}
      </span>
    </label>
  );
}

function FilterPanelContent({
  filterCategories,
  selectedCategoryIds,
  onToggleCategory,
  onResetAll,
}: {
  filterCategories: FilterCategory[];
  selectedCategoryIds: string[];
  onToggleCategory: (optionId: string) => void;
  onResetAll: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {filterCategories.map((category) => (
          <div key={category.id} className="flex flex-col gap-2">
            <p className="text-[14px] leading-[20px] text-text-title font-sans font-semibold">
              {category.title}
            </p>
            <div className="flex flex-col gap-2">
              {category.options.map((option) => (
                <FilterCheckbox
                  key={option.id}
                  label={option.label}
                  checked={selectedCategoryIds.includes(option.id)}
                  onChange={() => onToggleCategory(option.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="w-fit text-primary-base hover:text-primary-base/90"
        onClick={onResetAll}
      >
        Reset All
      </Button>
    </div>
  );
}

export function ServicesPageContent({
  hero,
  filterCategories,
  services,
}: ServicesPageContentProps) {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategoryIds.length === 0 ||
        service.categoryIds.some((id) => selectedCategoryIds.includes(id));
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [services, selectedCategoryIds, searchQuery]);

  const toggleCategory = (optionId: string) => {
    setSelectedCategoryIds((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleResetAll = () => {
    setSelectedCategoryIds([]);
  };

  const handleApplyFilterClose = () => {
    setIsFilterOpen(false);
  };

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-[1104px] mx-auto">
          {/* Hero */}
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] text-text-title font-sans font-bold">
              {hero.title}
            </h1>
            <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans">
              {hero.description}
            </p>
            <Button variant="primary" size="md" className="mt-4">
              {hero.ctaLabel}
            </Button>
          </div>

          {/* Search + Filters bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-button border border-white/10 bg-[#16181b] text-text-title placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all"
              />
            </div>
            <Button
              variant="outline"
              size="md"
              className="sm:w-auto rounded-button border-white/20 text-text-body"
              onClick={() => setIsFilterOpen(true)}
              rightIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              }
            >
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Desktop filter sidebar */}
            <aside
              className={cn(
                "hidden lg:block shrink-0 transition-all duration-300 overflow-hidden",
                isFilterOpen ? "w-64 opacity-100" : "w-0 opacity-0"
              )}
            >
              {isFilterOpen && (
                <div className="rounded-card border border-white/10 bg-[#16181b] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[18px] leading-[28px] text-text-title font-sans font-semibold">
                      Filter
                    </h2>
                    <button
                      type="button"
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1 rounded text-text-body hover:text-text-title hover:bg-white/10 transition-colors"
                      aria-label="Close filter"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <FilterPanelContent
                    filterCategories={filterCategories}
                    selectedCategoryIds={selectedCategoryIds}
                    onToggleCategory={toggleCategory}
                    onResetAll={handleResetAll}
                  />
                </div>
              )}
            </aside>

            {/* Main content: service grid */}
            <div className="flex-1 min-w-0">
              {filteredServices.length === 0 ? (
                <p className="text-center text-text-body py-12">
                  No services match your filters.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => {
                    const { icon, iconBackground } = getIconForService(service.iconKey);
                    return (
                      <ServiceCard
                        key={service.id}
                        icon={icon}
                        iconBackground={iconBackground}
                        title={service.title}
                        description={service.description}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile filter modal */}
      <Modal
        isOpen={isFilterOpen}
        onClose={handleApplyFilterClose}
        maxWidth="full"
      >
        <div className="flex flex-col h-full md:max-h-[90vh] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] leading-[28px] text-text-title font-sans font-semibold">
              Filter
            </h2>
            <button
              type="button"
              onClick={handleApplyFilterClose}
              className="p-2 rounded text-text-body hover:text-text-title hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <FilterPanelContent
              filterCategories={filterCategories}
              selectedCategoryIds={selectedCategoryIds}
              onToggleCategory={toggleCategory}
              onResetAll={handleResetAll}
            />
          </div>
          <div className="flex flex-col gap-3 pt-6 mt-auto border-t border-white/10">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleApplyFilterClose}
            >
              Apply Filter
            </Button>
            <Button
              variant="ghost"
              size="md"
              className="w-full text-primary-base"
              onClick={handleResetAll}
            >
              Reset All
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
