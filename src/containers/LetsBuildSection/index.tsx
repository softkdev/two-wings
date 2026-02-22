"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { getServicesData } from "@/lib/data/services";
import { cn } from "@/lib";
import { fadeInUp, defaultTransition } from "@/lib/animations";

const serviceGroups = (() => {
  const { filterCategories } = getServicesData();
  return filterCategories.map((category) => ({
    title: category.title,
    options: category.options.map((opt) => opt.label),
  }));
})();

const budgetOptions = [
  "Under €1,000",
  "€1,000 - €3,000",
  "€3,000 - €5,000",
  "€5,000 - €10,000",
  "€10,000 - €20,000",
  "Over €20,000",
  "Not sure yet",
];

const formSectionIcons = {
  person: (
    <svg
      className="w-5 h-5 shrink-0 text-secondary-base"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  briefcase: (
    <svg
      className="w-5 h-5 shrink-0 text-secondary-base"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  dollar: (
    <svg
      className="w-5 h-5 shrink-0 text-secondary-base"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  folder: (
    <svg
      className="w-5 h-5 shrink-0 text-secondary-base"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M2 10h20" />
    </svg>
  ),
};

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <span className="text-[16px] leading-[24px] text-primary-base font-medium">
        {title}
      </span>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="relative flex cursor-pointer items-center gap-3 text-left group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div
        className={cn(
          "h-5 w-5 rounded border-2 shrink-0 transition-all duration-200 flex items-center justify-center",
          checked
            ? "bg-secondary-base border-secondary-base"
            : "bg-white/5 border-white/20 group-hover:border-white/30"
        )}
      >
        {checked && (
          <svg
            className="h-3 w-3"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6609 3.49805L5.24739 9.91153L2.33217 6.99631"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[16px] leading-[24px] text-text-body group-hover:text-text-title transition-colors">
        {label}
      </span>
    </label>
  );
}

function RadioButton({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cn(
        "flex items-center gap-3 rounded-[10px] border px-4 py-3 h-[49px] transition-all duration-200 text-left",
        checked
          ? "bg-white/5 border-primary-base/50 shadow-sm"
          : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
      )}
    >
      <div
        className={cn(
          "h-5 w-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-200",
          checked
            ? "border-primary-base"
            : "border-white/30"
        )}
      >
        {checked && <div className="h-2.5 w-2.5 rounded-full bg-primary-base" />}
      </div>
      <span className={cn(
        "text-[16px] leading-[24px] flex-1 transition-colors",
        checked ? "text-text-title" : "text-text-body"
      )}>
        {label}
      </span>
    </button>
  );
}

export function LetsBuildSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>(
    budgetOptions[2]
  );
  const [otherSelected, setOtherSelected] = useState(false);
  const [otherText, setOtherText] = useState("");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <section ref={ref} className="py-20 md:py-32">
      <Container>
        <motion.h2
          className="mt-4 text-center text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] text-text-title font-sans font-bold"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Let&apos;s Build Something Amazing Together
        </motion.h2>
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <p className="mt-2 text-lg md:text-2xl leading-[26px] md:leading-[30px] text-text-body">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed proposal.
          </p>
          <p className="text-base md:text-xl mt-2 leading-container-x-sm md:leading-[30px] text-text-body">
            You can reach us anytime via{" "}
            <a
              href="mailto:2wings.companies@gmail.com"
              className="text-secondary-base underline decoration-dotted"
            >
              2wings.companies@gmail.com
            </a>
            .
          </p>
        </motion.div>
        <motion.div
          className="rounded-button border border-white/10 bg-[#16181b] p-6 md:p-12 shadow-[0px_60px_140px_rgba(0,0,0,0.55)] transition-all duration-300"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <form className="flex flex-col gap-8">
            {/* Personal Information */}
            <div>
              <SectionHeader
                icon={formSectionIcons.person}
                title="Personal Information"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <div className="flex items-center gap-2 h-6">
                  <span className="text-[16px] leading-container-x-sm text-text-title">
                    Full Name
                  </span>
                  <span className="text-[18px] leading-[14px] text-primary-base">
                    *
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <div className="flex items-center gap-2 h-6">
                  <span className="text-[16px] leading-container-x-sm text-text-title">
                    Email Address
                  </span>
                  <span className="text-[18px] leading-[14px] text-primary-base">
                    *
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] leading-container-x-sm text-text-title h-6">
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] leading-container-x-sm text-text-title h-6">
                  Company Name
                </span>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20"
                />
              </label>
              </div>
            </div>

            {/* Services Interested In */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                icon={formSectionIcons.briefcase}
                title="Services Interested In"
              />
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-3">
                      <p className="text-[16px] leading-container-x-sm text-primary-base">
                        {group.title}
                      </p>
                      <div className="flex flex-col gap-2">
                        {group.options.map((option) => (
                          <Checkbox
                            key={option}
                            label={option}
                            checked={selectedServices.includes(option)}
                            onChange={() => toggleService(option)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <Checkbox
                    label="Other (Please specify)"
                    checked={otherSelected}
                    onChange={() => setOtherSelected((prev) => !prev)}
                  />
                  <input
                    type="text"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    placeholder="Please describe the service you're looking for..."
                    disabled={!otherSelected}
                    className={cn(
                      "h-12 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 transition-all duration-200 hover:border-white/20",
                      !otherSelected && "opacity-50 cursor-not-allowed"
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Budget Range */}
            <div className="flex flex-col gap-4">
              <SectionHeader
                icon={formSectionIcons.dollar}
                title="Budget Range"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {budgetOptions.map((budget) => (
                  <RadioButton
                    key={budget}
                    label={budget}
                    checked={selectedBudget === budget}
                    onChange={() => setSelectedBudget(budget)}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-4">
              <SectionHeader
                icon={formSectionIcons.folder}
                title="Project Details"
              />
              <textarea
                placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                rows={4}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[16px] leading-[24px] text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none focus:ring-1 focus:ring-primary-base/20 resize-none transition-all duration-200 hover:border-white/20"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[20px] leading-[100%] text-text-body font-body font-medium">
                We&apos;ll respond within 24 hours with a detailed proposal
              </p>
              <motion.button
                type="submit"
                className="h-12 px-6 rounded-button bg-secondary-base text-background-DEFAULT text-[16px] leading-container-x-sm font-sans font-bold flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={defaultTransition}
              >
                <span>Send Message</span>
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.537 21.6851C14.575 21.7798 14.6411 21.8606 14.7263 21.9166C14.8115 21.9727 14.9119 22.0013 15.0139 21.9987C15.1159 21.9961 15.2146 21.9624 15.2969 21.902C15.3791 21.8417 15.4409 21.7576 15.474 21.6611L21.974 2.66108C22.006 2.57247 22.0121 2.47658 21.9916 2.38463C21.9711 2.29268 21.9249 2.20847 21.8582 2.14186C21.7916 2.07524 21.7074 2.02897 21.6155 2.00847C21.5235 1.98797 21.4276 1.99408 21.339 2.02608L2.33903 8.52608C2.24252 8.55917 2.15845 8.621 2.0981 8.70325C2.03774 8.7855 2.004 8.88425 2.00138 8.98624C1.99877 9.08822 2.02742 9.18857 2.08348 9.27381C2.13955 9.35904 2.22034 9.42509 2.31503 9.46308L10.245 12.6431C10.4957 12.7434 10.7235 12.8935 10.9146 13.0843C11.1057 13.2751 11.2562 13.5026 11.357 13.7531L14.537 21.6851Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.853 2.14648L10.913 13.0855"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
