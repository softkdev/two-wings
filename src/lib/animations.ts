import type { Variants, Transition } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 12 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: { opacity: 0 },
};

export const defaultTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};
