import { ServiceCard, Container, Button } from "@/components/ui";
import { SERVICES } from "@/lib";
import {
  DesignIcon,
  CartIcon,
  MobileIcon,
  DashboardIcon,
  AIIcon,
  EducationIcon,
} from "@/assets/icons";

const SERVICE_META: Record<
  string,
  { icon: React.ReactNode; iconBackground: string }
> = {
  "ux-ui-design": {
    icon: <DesignIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#fcdce7",
  },
  "e-commerce": {
    icon: <CartIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#f1fcdc",
  },
  "mobile-apps": {
    icon: <MobileIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#dce7fc",
  },
  "business-tools": {
    icon: <DashboardIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#dcfcfc",
  },
  "ai-systems": {
    icon: <AIIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#e7dcfc",
  },
  education: {
    icon: <EducationIcon className="w-8 h-8 text-text-title" />,
    iconBackground: "#fce9dc",
  },
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-[1104px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-[48px] leading-[58px] text-text-title font-sans font-bold">
              What We Can Build for You
            </h2>
            <p className="text-[24px] leading-[30px] text-text-body font-sans">
              From simple landing pages to complex enterprise systems, we have
              the expertise to bring your vision to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES.map((service) => {
              const meta =
                SERVICE_META[service.id] ?? SERVICE_META["ux-ui-design"];
              return (
                <ServiceCard
                  key={service.id}
                  icon={meta.icon}
                  iconBackground={meta.iconBackground}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="md"
              className="w-[174px] h-12 rounded-button border-secondary-base text-secondary-base"
              rightIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              }
            >
              All Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
