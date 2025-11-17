"use client";

import { useState, FormEvent } from "react";
import { Modal } from "@/components/ui";
import { cn } from "@/lib";
import { useModal } from "@/contexts/ModalContext";

export function ContactUsModal() {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    question?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.question.trim()) {
      newErrors.question = "Your question is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ fullName: "", email: "", question: "" });
      setIsSuccess(false);
      closeContactModal();
    }, 2000);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Modal
      isOpen={isContactModalOpen}
      onClose={closeContactModal}
      maxWidth="md"
      className="md:max-w-md md:min-w-lg"
    >
      <div className="flex flex-col gap-8 p-6 md:p-6 h-full md:h-auto overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <h2
              id="modal-title"
              className="text-[30px] leading-[100%] text-text-title font-sans font-semibold"
            >
              Ask Us Anything
            </h2>
            <p className="text-[18px] leading-[28px] text-text-body-2 font-sans font-normal">
              Have a question not covered in our FAQ? Send it to us and
              we&apos;ll respond within 24 hours.
            </p>
          </div>
          <button
            type="button"
            onClick={closeContactModal}
            className="shrink-0 w-6 h-6 text-text-body hover:text-text-title transition-colors mt-1"
            aria-label="Close modal"
          >
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="rounded-lg bg-primary-base/10 border border-primary-base/20 p-4 text-center">
            <p className="text-text-title font-sans">
              Thank you! We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        )}

        {/* Form */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <label className="flex flex-col gap-2">
              <div className="flex items-center gap-2 h-6">
                <span className="text-[16px] leading-container-x-sm text-text-title font-sans">
                  Full Name
                </span>
                <span className="text-[18px] leading-[14px] text-primary-base">
                  *
                </span>
              </div>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="John Doe"
                className={cn(
                  "h-12 rounded-lg border bg-white/5 px-3 py-1",
                  "text-[16px] leading-container-x-sm text-white",
                  "placeholder:text-text-secondary",
                  "focus:border-primary-base focus:outline-none",
                  "transition-colors",
                  errors.fullName ? "border-red-500/50" : "border-white/10"
                )}
              />
              {errors.fullName && (
                <span className="text-sm text-red-400">{errors.fullName}</span>
              )}
            </label>

            {/* Email Address */}
            <label className="flex flex-col gap-2">
              <div className="flex items-center gap-2 h-6">
                <span className="text-[16px] leading-container-x-sm text-text-title font-sans">
                  Email Address
                </span>
                <span className="text-[18px] leading-[14px] text-primary-base">
                  *
                </span>
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
                className={cn(
                  "h-12 rounded-lg border bg-white/5 px-3 py-1",
                  "text-[16px] leading-container-x-sm text-white",
                  "placeholder:text-text-secondary",
                  "focus:border-primary-base focus:outline-none",
                  "transition-colors",
                  errors.email ? "border-red-500/50" : "border-white/10"
                )}
              />
              {errors.email && (
                <span className="text-sm text-red-400">{errors.email}</span>
              )}
            </label>

            {/* Your Question */}
            <label className="flex flex-col gap-2">
              <div className="flex items-center gap-2 h-6">
                <span className="text-[16px] leading-container-x-sm text-text-title font-sans">
                  Your Question
                </span>
                <span className="text-[18px] leading-[14px] text-primary-base">
                  *
                </span>
              </div>
              <textarea
                value={formData.question}
                onChange={(e) => handleChange("question", e.target.value)}
                placeholder="What would you like to know?"
                rows={4}
                className={cn(
                  "min-h-[100px] rounded-lg border bg-white/5 px-3 py-3",
                  "text-[16px] leading-container-x-sm text-white",
                  "placeholder:text-text-secondary",
                  "focus:border-primary-base focus:outline-none",
                  "resize-none transition-colors",
                  errors.question ? "border-red-500/50" : "border-white/10"
                )}
              />
              {errors.question && (
                <span className="text-sm text-red-400">{errors.question}</span>
              )}
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "h-12 px-6 rounded-button bg-secondary-base",
                "text-background-DEFAULT text-[16px] leading-container-x-sm",
                "font-sans font-bold",
                "hover:opacity-90 transition-opacity",
                "flex items-center justify-center gap-1",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "mt-4"
              )}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.537 21.6851C14.575 21.7798 14.6411 21.8606 14.7263 21.9166C14.8115 21.9727 14.9119 22.0013 15.0139 21.9987C15.1159 21.9961 15.2146 21.9624 15.2969 21.902C15.3791 21.8417 15.4409 21.7576 15.474 21.6611L21.974 2.66108C22.006 2.57247 22.0121 2.47658 21.9916 2.38463C21.9711 2.29268 21.9249 2.20847 21.8582 2.14186C21.7916 2.07524 21.7074 2.02897 21.6155 2.00847C21.5235 1.98797 21.4276 1.99408 21.339 2.02608L2.33903 8.52608C2.24252 8.55917 2.15845 8.621 2.0981 8.70325C2.03774 8.7855 2.004 8.88425 2.00138 8.98624C1.99877 9.08822 2.02742 9.18857 2.08348 9.27381C2.13955 9.35904 2.22034 9.42509 2.31503 9.46308L10.245 12.6431C10.4957 12.7434 10.7235 12.8935 10.9146 13.0843C11.1057 13.2751 11.2562 13.5026 11.357 13.7531L14.537 21.6851Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.853 2.14648L10.913 13.0855"
                  />
                </svg>
              )}
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
