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

// Icon mapping with actual Figma assets
const ServiceIcons: Record<string, React.ReactNode> = {
  "ux-ui-design": <DesignIcon className="w-8 h-8 text-text-title" />,
  "e-commerce": <CartIcon className="w-8 h-8 text-text-title" />,
  "mobile-apps": <MobileIcon className="w-8 h-8 text-text-title" />,
  "business-tools": <DashboardIcon className="w-8 h-8 text-text-title" />,
  "ai-systems": <AIIcon className="w-8 h-8 text-text-title" />,
  education: <EducationIcon className="w-8 h-8 text-text-title" />,
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h1 text-text-title mb-6 font-heading">
            What We Can Build for You
          </h2>
          <p className="text-body-lg text-text-body-2">
            From simple landing pages to complex enterprise systems, we deliver
            excellence at every scale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={ServiceIcons[service.id] || ServiceIcons["ux-ui-design"]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            rightIcon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
