"use client";

import { useEffect, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib";
import { fadeIn, scaleIn, defaultTransition } from "@/lib/animations";

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

const slideUpContent = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "50%" },
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          className={cn(
            "fixed inset-0 z-50 flex",
            "items-end md:items-center",
            "justify-center",
            "p-0 md:p-4 md:p-6"
          )}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeIn}
          transition={defaultTransition}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            className={cn(
              "relative w-full",
              maxWidthClasses[maxWidth],
              "h-full md:h-auto md:max-h-[90vh]",
              "md:rounded-t-[10px] md:rounded-[10px]",
              "bg-[#16181b] border border-white/10",
              "shadow-[0px_60px_140px_rgba(0,0,0,0.55)]",
              className
            )}
            variants={isMobile ? slideUpContent : scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={defaultTransition}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
