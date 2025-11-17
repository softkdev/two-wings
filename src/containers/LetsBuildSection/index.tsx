"use client";

import { useState } from "react";
import { Button, Container } from "@/components/ui";
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
    <label className="flex cursor-pointer items-start gap-3 text-left text-[16px] text-text-body">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-secondary-base focus:ring-secondary-base"
      />
      <span>{label}</span>
    </label>
  );
}

function BudgetChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[14px] border px-4 py-3 text-left text-[16px] transition-colors",
        active
          ? "border-secondary-base bg-secondary-base/10 text-white"
          : "border-white/15 text-text-body hover:border-secondary-base/40"
      )}
    >
      {label}
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
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mt-4 text-[48px] leading-[58px] text-text-title font-sans font-bold">
            Let’s Build Something Amazing Together
          </h2>
          <p className="mt-4 text-[20px] leading-[30px] text-text-body">
            Tell us about your project and we’ll respond within 24 hours with a
            tailored plan. You can reach us anytime via{" "}
            <a
              href="mailto:2wings.companies@gmail.com"
              className="text-secondary-base underline decoration-dotted"
            >
              2wings.companies@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#16181b]/90 p-6 shadow-[0px_60px_140px_rgba(0,0,0,0.55)] md:p-10">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-text-title">Full Name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-secondary-base focus:outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-text-title">Email Address</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-secondary-base focus:outline-none"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-text-title">Phone Number</span>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-secondary-base focus:outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-text-title">Company Name</span>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-secondary-base focus:outline-none"
                />
              </label>
            </div>

            <label className="space-y-3">
              <span className="text-sm text-text-title">
                What services are you interested in?
              </span>
              <div className="grid gap-6 md:grid-cols-2">
                {serviceGroups.map((group) => (
                  <div key={group.title} className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary-base">
                      {group.title}
                    </p>
                    <div className="space-y-3">
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
                <div className="space-y-3 md:col-span-2">
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
                    className={cn(
                      "w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-secondary-base focus:outline-none",
                      !otherSelected && "opacity-60"
                    )}
                    disabled={!otherSelected}
                  />
                </div>
              </div>
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-3">
                <span className="text-sm text-text-title">
                  Estimated Budget
                </span>
                <div className="grid gap-3 sm:grid-cols-2">
                  {budgetOptions.map((budget) => (
                    <BudgetChip
                      key={budget}
                      label={budget}
                      active={selectedBudget === budget}
                      onClick={() => setSelectedBudget(budget)}
                    />
                  ))}
                </div>
              </label>
            </div>

            <label className="space-y-3">
              <span className="text-sm text-text-title">Project Details</span>
              <textarea
                rows={5}
                placeholder="Tell us about your project, timeline, goals, or any specific requirements…"
                className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-secondary-base focus:outline-none"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-text-body">
                We’ll respond within 24 hours with a detailed proposal.
              </p>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
