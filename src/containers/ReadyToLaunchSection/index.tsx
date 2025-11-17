import { Button, Container } from "@/components/ui";

export function ReadyToLaunchSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#08111b] via-[#07090f] to-[#120a18] px-6 py-16 shadow-[0px_80px_200px_rgba(0,0,0,0.55)] md:px-12">
          <div className="absolute -right-10 top-6 hidden h-72 w-72 rounded-full bg-secondary-base/10 blur-[120px] lg:block" />
          <div className="absolute -left-10 bottom-0 hidden h-60 w-60 rounded-full bg-primary-base/15 blur-[120px] lg:block" />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary-base">
                Next Steps
              </p>
              <h2 className="mt-4 text-[48px] leading-[58px] text-text-title font-sans font-bold">
                Ready to launch your project?
              </h2>
              <p className="mt-4 text-[20px] leading-[30px] text-text-body">
                High-quality design. Real results. Fair pricing. Let’s make your
                vision take flight.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="w-full sm:w-auto">Start a Project</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative h-64 w-full rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0f1724] to-[#05070a]">
              <div className="absolute inset-6 rounded-[24px] border border-white/5 bg-gradient-to-br from-transparent via-white/5 to-transparent blur-3xl" />
              <div className="absolute inset-12 rounded-[20px] border border-white/10 bg-[#0b111a] p-8 text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-[#91d2ff]">
                  Flight Plan
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Two Wings
                </h3>
                <p className="mt-2 text-sm text-text-body">
                  Crafted for bold teams that expect enterprise quality without
                  the agency drama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

