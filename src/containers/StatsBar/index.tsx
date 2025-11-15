import { StatItem, Container } from "@/components/ui";
import { STATS } from "@/lib";

export function StatsBar() {
  return (
    <section className="bg-background-section border-y border-border-DEFAULT py-8 md:py-12">
      <Container>
        {/* Mobile: Vertical Stack */}
        <div className="flex flex-col md:hidden gap-8 items-center">
          {STATS.map((stat) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              label={stat.label}
              color={stat.color as "primary" | "secondary"}
            />
          ))}
        </div>

        {/* Tablet & Desktop: Horizontal with Dividers */}
        <div className="hidden md:flex items-center justify-center">
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              label={stat.label}
              color={stat.color as "primary" | "secondary"}
              showDivider={index < STATS.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
