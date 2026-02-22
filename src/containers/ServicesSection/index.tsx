import Link from "next/link";
import { ServiceCard, Container, Button } from "@/components/ui";
import { getServicesData } from "@/lib/data/services";
import { getIconForService } from "@/lib/data/service-icons";
import { ROUTES } from "@/lib";

export function ServicesSection() {
  const { services } = getServicesData();

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-[1104px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] text-text-title font-sans font-bold">
              What We Can Build for You
            </h2>
            <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans">
              From simple landing pages to complex enterprise systems, we have
              the expertise to bring your vision to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => {
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

          {/* CTA Button */}
          <div className="flex justify-end">
            <Link href={ROUTES.SERVICES}>
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
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
