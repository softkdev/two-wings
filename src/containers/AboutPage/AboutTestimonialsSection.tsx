import { Container } from "@/components/ui";
import Image from "next/image";
import { ABOUT_TESTIMONIALS, ABOUT_TESTIMONIALS_INTRO } from "@/data/about";

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
    <path
      d="M19.1078 26.6643C17.916 26.6683 16.7453 26.979 15.7083 27.5665C17.1682 23.7877 19.5896 20.4555 22.7328 17.8998C22.9126 17.7517 23.0615 17.5697 23.171 17.364C23.2804 17.1584 23.3483 16.9332 23.3708 16.7013C23.3932 16.4694 23.3698 16.2354 23.3018 16.0125C23.2338 15.7897 23.1225 15.5825 22.9744 15.4026C22.8263 15.2228 22.6442 15.0739 22.4386 14.9644C22.233 14.8549 22.0078 14.787 21.7759 14.7646C21.544 14.7422 21.3099 14.7656 21.0871 14.8336C20.8643 14.9016 20.657 15.0129 20.4772 15.161C14.0328 20.3971 11.165 27.6471 11.165 32.1421C11.1761 33.7314 11.6497 35.2831 12.528 36.6078C13.4064 37.9324 14.6514 38.9727 16.1111 39.6015C17.0558 40.0591 18.0903 40.3013 19.14 40.3104C20.0639 40.3553 20.9873 40.2121 21.8542 39.8895C22.7211 39.5669 23.5135 39.0715 24.1832 38.4335C24.853 37.7955 25.3862 37.0282 25.7505 36.1779C26.1149 35.3277 26.3027 34.4123 26.3027 33.4873C26.3027 32.5623 26.1149 31.647 25.7505 30.7968C25.3862 29.9465 24.853 29.1792 24.1832 28.5412C23.5135 27.9032 22.7211 27.4078 21.8542 27.0852C20.9873 26.7626 20.0639 26.6194 19.14 26.6643H19.1078Z"
      fill="#29ADC5"
    />
    <path
      d="M37.2768 26.3078C36.0848 26.3104 34.9137 26.6212 33.8773 27.2101C35.3366 23.4352 37.7516 20.1041 40.8857 17.5434C41.0818 17.402 41.247 17.2219 41.3709 17.0143C41.4949 16.8067 41.5751 16.5759 41.6065 16.3362C41.638 16.0964 41.62 15.8528 41.5538 15.6202C41.4875 15.3877 41.3744 15.1711 41.2213 14.9839C41.0683 14.7967 40.8785 14.6428 40.6638 14.5317C40.449 14.4206 40.2138 14.3546 39.9725 14.3378C39.7313 14.321 39.4892 14.3537 39.2611 14.434C39.033 14.5142 38.8238 14.6403 38.6462 14.8045C32.2018 20.0406 29.334 27.2906 29.334 31.7856C29.3416 33.357 29.8014 34.8929 30.6585 36.2099C31.5156 37.527 32.7337 38.5695 34.1673 39.2128C35.1359 39.6839 36.1997 39.9264 37.2768 39.9217C38.2007 39.9666 39.1241 39.8234 39.991 39.5008C40.8579 39.1782 41.6503 38.6829 42.32 38.0449C42.9898 37.4069 43.523 36.6395 43.8873 35.7892C44.2517 34.939 44.4395 34.0237 44.4395 33.0987C44.4395 32.1737 44.2517 31.2583 43.8873 30.4081C43.523 29.5578 42.9898 28.7905 42.32 28.1525C41.6503 27.5145 40.8579 27.0191 39.991 26.6965C39.1241 26.3739 38.2007 26.2307 37.2768 26.2756V26.3078Z"
      fill="#29ADC5"
    />
  </svg>
);

export function AboutTestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg md:text-2xl leading-[26px] md:leading-[30px] text-text-body font-sans">
            {ABOUT_TESTIMONIALS_INTRO}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ABOUT_TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#0f1317] p-4 shadow-[0px_30px_80px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-white/20 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.5)] hover:-translate-y-1"
            >
              <span className="text-4xl text-primary-base">
                <QuoteIcon />
              </span>
              <p className="mt-4 flex-1 text-[18px] leading-[28px] text-text-body">
                {testimonial.quote}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden ring-2 ring-white/10">
                  <Image
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name} avatar`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    unoptimized={testimonial.imageSrc.endsWith(".svg")}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px] font-semibold text-white truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-[14px] text-text-body-2 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
