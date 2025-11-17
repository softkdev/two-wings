import { Button, Container } from "@/components/ui";

const highlights = [
  {
    title: "Our Mission",
    description:
      "Make world-class web development accessible and affordable for ambitious teams.",
  },
  {
    title: "Our Values",
    description: "Quality, transparency, and client success above all else.",
  },
  {
    title: "Our Approach",
    description: "Smart solutions tailored to your needs, goals, and budget.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,#1c3d52,#05070a)] opacity-90 blur-3xl" />
              <div className="relative z-10 flex h-full items-center justify-center rounded-[40px] border border-white/10 bg-linear-to-b from-[#0f1c2a] to-[#04070b] shadow-[0px_60px_140px_rgba(0,0,0,0.55)]">
                <div className="relative h-[70%] w-[70%] rounded-[30%] bg-[conic-gradient(from_90deg,#42d1ff,#2b8fff,#5d33ff,#42d1ff)] opacity-70 blur-[20px]" />
                <div className="absolute inset-[12%] rounded-[28%] border border-white/10" />
                <div className="absolute inset-[22%] rounded-[26%] border border-white/5" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mt-4 text-[48px] leading-[58px] text-text-title font-sans font-bold">
              About Us
            </h2>
            <p className="mt-6 text-2xl text-text-body font-sans">
              We’re a remote crew of designers and builders.
            </p>
            <p className="mt-6 text-2xl text-text-body font-sans">
              By leveraging the latest technologies and efficient processes, we
              deliver premium websites and digital products for a fraction of
              the traditional cost.
            </p>

            <div className="mt-8 space-y-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0f1419]/70 p-5"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-primary-base/15 text-primary-base flex items-center justify-center text-lg font-semibold">
                    ✦
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-white font-sans">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-container-x-sm text-text-body font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="w-full sm:w-auto">Discover More</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
