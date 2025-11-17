import { Container, Logo } from "@/components/ui";
import { cn } from "@/lib";

interface Reason {
  title: string;
  description: string;
  accent: string;
  align: "left" | "right";
}

const reasons: Reason[] = [
  {
    title: "Smart Pricing",
    description:
      "Significantly lower costs without compromising on quality or results.",
    accent: "from-[#0a2c38] to-[#09161b]",
    align: "left",
  },
  {
    title: "World-Class Quality",
    description:
      "Professional designs and clean code that meet enterprise standards.",
    accent: "from-[#09263a] to-[#0c171d]",
    align: "right",
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient workflows and modern tools mean faster project completion.",
    accent: "from-[#091c2f] to-[#080f18]",
    align: "left",
  },
  {
    title: "Reliable & Secure",
    description:
      "Built with best practices, security, and scalability in mind.",
    accent: "from-[#0c1f2c] to-[#0b141a]",
    align: "right",
  },
  {
    title: "Growth-Focused",
    description: "Solutions designed to scale with your business.",
    accent: "from-[#0c1d29] to-[#0a1118]",
    align: "left",
  },
  {
    title: "Collaborative Process",
    description: "We work closely with you every step of the way.",
    accent: "from-[#0a1e2f] to-[#09121c]",
    align: "right",
  },
];

function ReasonCard({ title, description, align, accent }: Reason) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-linear-to-br backdrop-blur-sm px-6 py-5 shadow-[0px_12px_40px_rgba(0,0,0,0.4)]",
        accent,
        align === "right" ? "text-right items-end" : "text-left items-start"
      )}
    >
      <div
        className={cn(
          "mb-3 h-px w-12 bg-primary-base/60",
          align === "right" ? "ml-auto" : "mr-auto"
        )}
      />
      <h3 className="text-[18px] font-semibold text-[#4fb5e3]">{title}</h3>
      <p className="mt-2 text-[16px] leading-container-x-sm text-text-body">
        {description}
      </p>
    </div>
  );
}

export function WhyChooseSection() {
  const leftItems = reasons.filter((item) => item.align === "left");
  const rightItems = reasons.filter((item) => item.align === "right");

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#0e1d2b_0%,#050609_60%)] opacity-20" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] text-text-title font-sans font-bold">
            Why Choose Two Wings?
          </h2>
          <p className="mt-4 text-lg md:text-2xl leading-[26px] md:leading-[30px] text-text-body font-sans">
            Professional quality at smart prices. We deliver exceptional results
            that fit your budget.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
          <div className="flex flex-col gap-10">
            {leftItems.map((reason) => (
              <ReasonCard key={reason.title} {...reason} />
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,#09121c_0%,#05080d_70%)] shadow-[0_0_120px_rgba(2,12,24,0.6)]">
              <div className="absolute inset-[18%] rounded-full border border-white/5" />
              <div className="absolute inset-[32%] rounded-full border border-white/5 opacity-60" />
              <Logo className="relative z-10 scale-110" />
            </div>
            <span className="absolute top-1/2 left-0 h-px w-[160px] -translate-x-full bg-linear-to-l from-[#f1d48f] to-transparent opacity-60" />
            <span className="absolute top-1/2 right-0 h-px w-[160px] -translate-y-1/2 bg-linear-to-r from-[#f1d48f] to-transparent opacity-60" />
            <span className="absolute top-16 left-1/2 h-16 w-px -translate-x-1/2 bg-linear-to-t from-[#f1d48f] to-transparent opacity-60" />
            <span className="absolute bottom-16 left-1/2 h-16 w-px -translate-x-1/2 bg-linear-to-b from-[#f1d48f] to-transparent opacity-60" />
          </div>

          <div className="flex flex-col gap-10">
            {rightItems.map((reason) => (
              <ReasonCard key={reason.title} {...reason} />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="mt-16 grid gap-6 lg:hidden">
          <div className="flex justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,#09121c_0%,#05080d_70%)]">
              <Logo className="scale-90" />
            </div>
          </div>
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </Container>
    </section>
  );
}
