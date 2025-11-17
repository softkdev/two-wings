"use client";

import { useEffect, ReactNode, useState } from "react";
import { cn } from "@/lib";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const maxWidthClasses = {
  sm: "md:max-w-sm",
  md: "md:max-w-md",
  lg: "md:max-w-lg",
  xl: "md:max-w-xl",
  full: "md:max-w-full",
};

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  maxWidth = "md",
}: ModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex",
        // Mobile: items-end for bottom alignment
        "items-end md:items-center",
        "justify-center",
        "p-0 md:p-4 md:p-6",
        // Desktop: fade in
        "opacity-0 md:opacity-100 md:transition-opacity md:duration-200"
      )}
      style={{
        animation: "fadeIn 0.2s ease-out forwards",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-200"
        )}
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full",
          maxWidthClasses[maxWidth],
          // Mobile: full screen, slide up from bottom
          "h-full md:h-auto md:max-h-[90vh]",
          "md:rounded-t-[10px] md:rounded-[10px]",
          "bg-[#16181b] border border-white/10",
          "shadow-[0px_60px_140px_rgba(0,0,0,0.55)]",
          className
        )}
        style={{
          animation: isMobile
            ? "slideUp 0.3s ease-out"
            : "fadeInZoom 0.2s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
