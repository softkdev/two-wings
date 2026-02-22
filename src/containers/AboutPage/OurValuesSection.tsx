import { Container } from "@/components/ui";
import { OUR_VALUES, WHAT_WE_OFFER } from "@/data/about";

const valueIcons: Record<string, React.ReactNode> = {
  "client-centricity": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  innovation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  ),
  collaboration: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  accountability: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const offerIcons: Record<string, React.ReactNode> = {
  consultancy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  innovation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  solutions: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  support: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
};

export function OurValuesSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <h2 className="text-center text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title mb-12 md:mb-16 md:block hidden">
          Our Values
        </h2>
        <h2 className="text-center text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title mb-12 md:mb-16 md:hidden">
          What We Offer
        </h2>

        {/* Desktop: 2x2 grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {OUR_VALUES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-[#0f1317] p-6 lg:p-8 flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-[10px] bg-primary-base/20 text-primary-base flex items-center justify-center">
                {valueIcons[item.id] ?? null}
              </div>
              <div>
                <h3 className="text-[18px] font-sans font-semibold text-text-title">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[24px] text-text-body font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: list with icons */}
        <div className="flex flex-col gap-6 md:hidden">
          {WHAT_WE_OFFER.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#0f1317] p-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary-base/20 text-primary-base flex items-center justify-center">
                {offerIcons[item.id] ?? null}
              </div>
              <div>
                <h3 className="text-[18px] font-sans font-semibold text-text-title">
                  {item.title}
                </h3>
                <p className="mt-1 text-[16px] leading-[24px] text-text-body font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
