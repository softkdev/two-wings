import { Fragment } from "react";
import { StatItem } from "@/components/ui";
import { ABOUT_STATS } from "@/data/about";

export function AboutStats() {
  return (
    <section>
      <div className="w-full border border-white/10 bg-[#16181b] px-6 py-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 md:hidden">
          {ABOUT_STATS.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center gap-4 text-center"
            >
              <StatItem
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
              {index < ABOUT_STATS.length - 1 && (
                <span className="h-px w-16 bg-white/15 mx-auto" />
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16">
          {ABOUT_STATS.map((stat, index) => (
            <Fragment key={stat.id}>
              <StatItem
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
              {index < ABOUT_STATS.length - 1 && (
                <span className="hidden md:block h-20 w-px bg-white/20" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
