"use client";

import Link from "next/link";
import { Button, Container } from "@/components/ui";
import Image from "next/image";
import Lottie from "lottie-react";
import rocketAnimation from "@/assets/animations/rocket-launching.json";
import { ABOUT_CTA } from "@/data/about";
import { ROUTES } from "@/lib";
import { useModal } from "@/contexts/ModalContext";
import { cn } from "@/lib";

const buttonBase =
  "inline-flex cursor-pointer justify-center gap-2 rounded-button font-sans font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-background-DEFAULT";
const buttonPrimary =
  "bg-secondary-base text-background-DEFAULT hover:opacity-90 px-6 py-3 text-button min-w-[174px]";

export function AboutCTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-button border border-white/10 shadow-[0px_80px_200px_rgba(0,0,0,0.55)] bg-[#0f1619]">
          <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-1/2 opacity-[0.39] blur-[2.9px]">
            <Image
              src="/pattern-bg.svg"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1440}
              height={326}
              unoptimized
              aria-hidden="true"
            />
          </div>

          {/* Mobile */}
          <div className="relative flex min-h-[600px] flex-col items-center justify-between px-6 py-12 text-center md:hidden">
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <h2 className="text-[36px] leading-[100%] text-text-title font-sans font-semibold">
                {ABOUT_CTA.mobile.title}
              </h2>
              <p className="text-lg leading-[26px] text-text-body font-sans">
                {ABOUT_CTA.mobile.description}
              </p>
              <div className="mt-6 w-full max-w-xs">
                <Link
                  href={ROUTES.CONTACT}
                  className={cn(buttonBase, buttonPrimary, "w-full")}
                >
                  {ABOUT_CTA.mobile.primaryButtonLabel}
                </Link>
              </div>
            </div>
            <div className="relative mt-8 shrink-0 w-full max-w-[300px] mx-auto aspect-square" aria-hidden="true">
              <Lottie
                animationData={rocketAnimation}
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="relative hidden min-h-[500px] md:flex md:items-center md:justify-between md:px-12 md:py-20">
            <div className="relative z-10 max-w-lg">
              <h2 className="text-5xl leading-[58px] text-text-title font-sans font-bold">
                {ABOUT_CTA.desktop.title}
              </h2>
              <p className="mt-4 text-2xl leading-[30px] text-text-body font-sans">
                {ABOUT_CTA.desktop.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={ROUTES.CONTACT}
                  className={cn(buttonBase, buttonPrimary, "w-full sm:w-auto")}
                >
                  {ABOUT_CTA.desktop.primaryButtonLabel}
                </Link>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={openContactModal}
                >
                  {ABOUT_CTA.desktop.secondaryButtonLabel}
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-full w-1/2 flex items-center justify-center overflow-hidden" aria-hidden="true">
              <div className="w-full h-full max-w-full max-h-full flex items-center justify-center relative z-10">
                <Lottie
                  animationData={rocketAnimation}
                  loop
                  autoplay
                  className="w-full h-full"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
