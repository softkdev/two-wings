"use client";

import { Container } from "@/components/ui";
import { ABOUT_CONTACT_FORM } from "@/data/about";

export function AboutContactFormSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // UI only for now; can wire to API later
  };

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
            {ABOUT_CONTACT_FORM.title}
          </h2>
          <p className="mt-4 text-center text-lg text-text-body font-sans">
            {ABOUT_CONTACT_FORM.description}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-button border border-white/10 bg-[#16181b] p-6 md:p-8 flex flex-col gap-6"
          >
            <label className="flex flex-col gap-2">
              <span className="text-[16px] leading-container-x-sm text-text-title font-sans">
                {ABOUT_CONTACT_FORM.fields.fullName}
              </span>
              <input
                type="text"
                placeholder="John Doe"
                className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[16px] leading-container-x-sm text-text-title font-sans">
                {ABOUT_CONTACT_FORM.fields.email}
              </span>
              <input
                type="email"
                placeholder="john@example.com"
                className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[16px] leading-container-x-sm text-text-title font-sans">
                {ABOUT_CONTACT_FORM.fields.message}
              </span>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 resize-none transition-all duration-200 hover:border-white/20"
              />
            </label>
            <button
              type="submit"
              className="h-12 px-6 rounded-button bg-secondary-base text-background-DEFAULT text-[16px] leading-container-x-sm font-sans font-bold hover:opacity-90 transition-opacity w-full md:w-auto"
            >
              {ABOUT_CONTACT_FORM.submitLabel}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
