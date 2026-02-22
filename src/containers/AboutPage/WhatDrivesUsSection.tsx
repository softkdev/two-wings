import { Container } from "@/components/ui";
import { WHAT_DRIVES_US } from "@/data/about";
import { cn } from "@/lib";

const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 17L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5C7.5 5 4 12 4 12s3.5 7 8 7 8-7 8-7-3.5-7-8-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PromiseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconMap = {
  mission: MissionIcon,
  vision: VisionIcon,
  promise: PromiseIcon,
};

export function WhatDrivesUsSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <h2 className="text-center text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title mb-12 md:mb-16">
          What Drives Us
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {WHAT_DRIVES_US.map((item) => {
            const Icon = iconMap[item.iconKey];
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center md:items-center md:text-center"
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-full shrink-0",
                    item.iconColor === "primary"
                      ? "bg-primary-base/20 text-primary-base"
                      : "bg-secondary-base/20 text-secondary-base"
                  )}
                >
                  {Icon && <Icon />}
                </div>
                <h3 className="mt-4 text-[20px] font-sans font-semibold text-text-title">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[24px] text-text-body font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
