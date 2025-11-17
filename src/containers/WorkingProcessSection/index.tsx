import { Container } from "@/components/ui";
import { cn } from "@/lib";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive into your goals, audience, and success metrics.",
    color: "from-[#4fb5e3] to-[#1c3c57]",
  },
  {
    number: "02",
    title: "Design",
    description: "Turning insights into beautiful, functional experiences.",
    color: "from-[#7068ff] to-[#1f2044]",
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean, scalable code that performs on every device.",
    color: "from-[#9245ee] to-[#2a163d]",
  },
  {
    number: "04",
    title: "Test",
    description: "Rigorous reviews to ensure flawless performance.",
    color: "from-[#ff5ca8] to-[#3b0c2c]",
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy with care and support your growth.",
    color: "from-[#29c5ad] to-[#0d2f2a]",
  },
];

export function WorkingProcessSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-[48px] leading-[58px] text-text-title font-sans font-bold">
            Our Working Process
          </h2>
          <p className="mt-4 text-2xl text-text-body font-sans">
            A simple, transparent process that keeps you involved every step of
            the way.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-x-4 top-16 hidden h-px rounded-full bg-linear-to-r from-transparent via-white/10 to-transparent lg:block" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center text-[20px] font-semibold text-white",
                    "rounded-full border border-white/20 bg-[#0d1116]",
                    "mb-4"
                  )}
                >
                  {step.number}
                </div>
                <div
                  className={cn(
                    "relative w-full rounded-2xl border border-white/10 bg-gradient-to-br px-6 py-10 shadow-[0px_20px_60px_rgba(0,0,0,0.35)]",
                    step.color
                  )}
                >
                  <span className="absolute inset-x-6 top-4 h-px bg-white/15" />
                  <h3 className="mt-6 text-[20px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[24px] text-white/80">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
