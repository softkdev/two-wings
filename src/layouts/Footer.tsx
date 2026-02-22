"use client";

import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Logo, Container } from "@/components/ui";
import { ROUTES, CONTACT_INFO, COMPANY_INFO } from "@/lib";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  EmailIcon,
  WhatsAppIcon,
  LocationIcon,
} from "@/assets/icons";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const quickLinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Blog", href: ROUTES.BLOG },
];

const services = [
  { label: "UX/UI Design", href: `${ROUTES.SERVICES}#ux-ui` },
  { label: "E-Commerce Solutions", href: `${ROUTES.SERVICES}#ecommerce` },
  { label: "Mobile Applications", href: `${ROUTES.SERVICES}#mobile` },
  { label: "Custom Dashboards", href: `${ROUTES.SERVICES}#dashboards` },
  { label: "See All Services", href: ROUTES.SERVICES },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer
      ref={ref}
      className="bg-background-DEFAULT border-t border-border-DEFAULT"
      role="contentinfo"
    >
      <Container className="py-8 md:py-12 lg:py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Column 1: Logo & Description */}
          <motion.div
            className="flex flex-col gap-3 md:gap-4"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <Logo />
            <p className="text-sm md:text-base text-text-body-2 font-sans leading-relaxed">
              Professional web solutions at smart prices. Custom code, no-code,
              and low-code development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-[rgba(212,239,243,0.05)] flex items-center justify-center text-text-body-2 hover:text-text-title hover:bg-[rgba(212,239,243,0.1)] transition-colors duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                transition={defaultTransition}
              >
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-[rgba(212,239,243,0.05)] flex items-center justify-center text-text-body-2 hover:text-text-title hover:bg-[rgba(212,239,243,0.1)] transition-colors duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                transition={defaultTransition}
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-9 h-9 rounded-full bg-[rgba(212,239,243,0.05)] flex items-center justify-center text-text-body-2 hover:text-text-title hover:bg-[rgba(212,239,243,0.1)] transition-colors duration-300"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                transition={defaultTransition}
              >
                <TwitterIcon className="w-[18px] h-[18px]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <h3 className="text-base md:text-lg text-primary-base font-sans mb-4 md:mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }} transition={defaultTransition}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-base text-text-body-2 font-sans hover:text-text-title transition-colors duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Services */}
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <h3 className="text-base md:text-lg text-primary-base font-sans mb-4 md:mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {services.map((service) => (
                <li key={service.href}>
                  <motion.div whileHover={{ x: 4 }} transition={defaultTransition}>
                    <Link
                      href={service.href}
                      className="text-sm md:text-base text-text-body-2 font-sans hover:text-text-title transition-colors inline-block"
                    >
                      {service.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <h3 className="text-base md:text-lg text-primary-base font-sans mb-4 md:mb-6">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {/* Email */}
              <li className="flex gap-3">
                <EmailIcon className="w-[18px] h-[18px] text-text-body-2 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="text-sm md:text-base text-text-body-2 font-sans hover:text-text-title transition-colors break-all"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex gap-3">
                <WhatsAppIcon className="w-[18px] h-[18px] text-text-body-2 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.PHONE.replace(
                    /\D/g,
                    ""
                  )}`}
                  className="text-sm md:text-base text-text-body-2 font-sans hover:text-text-title transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_INFO.PHONE}
                </a>
              </li>

              {/* Location */}
              <li className="flex gap-3">
                <LocationIcon className="w-[18px] h-[18px] text-text-body-2 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-text-body-2 font-sans">
                  {CONTACT_INFO.LOCATION}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-border-DEFAULT">
          <p className="text-xs md:text-sm text-text-secondary font-sans text-center">
            © {currentYear} {COMPANY_INFO.NAME}. All rights reserved. Built with
            excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
}
