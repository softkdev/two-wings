"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/lib";

const serviceGroups = [
  {
    title: "Websites & Online Presence",
    options: [
      "Landing Pages & Marketing Sites",
      "E-Commerce Solutions",
      "Educational & Content Platforms",
    ],
  },
  {
    title: "Apps & Digital Platforms",
    options: [
      "Mobile Applications",
      "Communication Tools",
      "Customer Support Systems",
    ],
  },
  {
    title: "Business & Operations Tools",
    options: ["Business Management Tools", "Custom Dashboards & Admin Panels"],
  },
  {
    title: "Advanced & Custom Solutions",
    options: ["AI-Powered Systems", "UX/UI Design"],
  },
];

const budgetOptions = [
  "Under €1,000",
  "€1,000 - €3,000",
  "€3,000 - €5,000",
  "€5,000 - €10,000",
  "€10,000 - €20,000",
  "Over €20,000",
  "Not sure yet",
];

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
    <label className="relative flex cursor-pointer items-center gap-2 text-left">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div
        className={cn(
          "h-4 w-4 rounded border shrink-0 transition-colors",
          checked
            ? "bg-primary-base border-primary-base"
            : "bg-[#1f1f2e] border-white/20"
        )}
      >
        {checked && (
          <svg
            className="h-full w-full"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6609 3.49805L5.24739 9.91153L2.33217 6.99631"
              stroke="#0A0C0F"
              strokeWidth="1.16609"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[16px] leading-container-x-sm text-text-body">
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
        "flex items-center gap-3 rounded-[10px] border px-3 py-1 h-[49px] transition-colors text-left",
        checked
          ? "bg-white/5 border-white/10"
          : "bg-white/5 border-white/10 hover:border-white/20"
      )}
    >
      <div
        className={cn(
          "h-4 w-4 rounded-full border shrink-0 flex items-center justify-center transition-colors",
          checked
            ? "border-white/20 bg-transparent"
            : "border-white/20 bg-transparent"
        )}
      >
        {checked && <div className="h-2 w-2 rounded-full bg-white/60" />}
      </div>
      <span className="text-[16px] leading-container-x-sm text-text-body flex-1">
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

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <section className="py-20 md:py-32">
      <Container>
        <h2 className="mt-4 text-center text-[48px] leading-[58px] text-text-title font-sans font-bold">
          Let&apos;s Build Something Amazing Together
        </h2>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mt-2 text-2xl leading-[30px] text-text-body">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed proposal.
          </p>
          <p className="text-xl mt-2 leading-[30px] text-text-body">
            You can reach us anytime via{" "}
            <a
              href="mailto:2wings.companies@gmail.com"
              className="text-secondary-base underline decoration-dotted"
            >
              2wings.companies@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="rounded-button border border-white/10 bg-[#16181b] p-12 shadow-[0px_60px_140px_rgba(0,0,0,0.55)]">
          <form className="flex flex-col gap-8">
            {/* Name, Email, Phone, Company */}
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
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[16px] leading-container-x-sm text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none"
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
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[16px] leading-container-x-sm text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] leading-container-x-sm text-text-title h-6">
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[16px] leading-container-x-sm text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[16px] leading-container-x-sm text-text-title h-6">
                  Company Name
                </span>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="h-12 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[16px] leading-container-x-sm text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none"
                />
              </label>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-2">
              <span className="text-[16px] leading-container-x-sm text-text-title">
                What services are you interested in?
              </span>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      "h-12 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[16px] leading-container-x-sm text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none transition-opacity",
                      !otherSelected && "opacity-50 cursor-not-allowed"
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-4">
              <span className="text-[16px] leading-container-x-sm text-text-title">
                What is your estimated budget range?
              </span>
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
            <div className="flex flex-col gap-2">
              <span className="text-[16px] leading-container-x-sm text-text-title">
                Project Details
              </span>
              <textarea
                placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                className="h-16 rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-[16px] leading-container-x-sm text-white placeholder:text-text-secondary focus:border-primary-base focus:outline-none resize-none"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[20px] leading-[100%] text-text-body font-body font-medium">
                We&apos;ll respond within 24 hours with a detailed proposal
              </p>
              <button
                type="submit"
                className="h-12 px-6 rounded-button bg-secondary-base text-background-DEFAULT text-[16px] leading-container-x-sm font-sans font-bold flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
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
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
