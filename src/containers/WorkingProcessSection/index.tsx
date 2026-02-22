"use client";

import { Container, ProcessStep } from "@/components/ui";
import type { ProcessStepProps } from "@/components/ui";
import {
  SearchIcon,
  DesignIcon,
  CodeIcon,
  DocumentCheckIcon,
  RocketIcon,
} from "@/assets/icons";

const steps: Omit<ProcessStepProps, "isMobile">[] = [
  {
    number: "01",
    title: "Discover",
    description: "Turning designs into powerful, functional systems.",
    accentColor: "#00BFFF",
    icon: SearchIcon,
  },
  {
    number: "02",
    title: "Design",
    description: "Turning designs into powerful, functional systems.",
    accentColor: "#8A2BE2",
    icon: DesignIcon,
  },
  {
    number: "03",
    title: "Develop",
    description: "Turning designs into powerful, functional systems.",
    accentColor: "#8A2BE2",
    icon: CodeIcon,
  },
  {
    number: "04",
    title: "Test",
    description:
      "We review, refine, and ensure everything performs seamlessly across devices.",
    accentColor: "#FF1493",
    icon: DocumentCheckIcon,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deliver your project with care and continue to support your success.",
    accentColor: "#20B2AA",
    icon: RocketIcon,
  },
];

export function WorkingProcessSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] text-text-title font-sans font-bold">
            Our Working Process
          </h2>
          <p className="mt-4 text-lg md:text-2xl leading-[26px] md:leading-[30px] text-text-body font-sans">
            A simple, transparent process that keeps you involved every step of
            the way.
          </p>
        </div>

        {/* Desktop Layout - Linear horizontal with dashed connector */}
        <div className="relative mt-16 hidden lg:block">
          {/* Dashed line - connects icon block centers */}
          <div
            className="absolute left-0 right-0 top-[84px] h-0 border-t border-dashed pointer-events-none"
            style={{ borderColor: "#2a2a2a" }}
          />

          <div className="flex justify-between gap-8 xl:gap-12 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex-1 min-w-0 max-w-[200px]"
              >
                <ProcessStep {...step} isMobile={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - unchanged until design provided */}
        <div className="relative mt-16 lg:hidden" style={{ minHeight: "1200px" }}>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none" style={{ height: "1200px" }}>
            <svg
              width="278"
              height="1089"
              viewBox="0 0 278 1089"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_d_1348_66963)">
                <path
                  d="M265.859 4.1123L11.8587 280.14L265.859 540.744L11.8587 814.149L262.957 1077.11"
                  stroke="#16161B"
                  strokeWidth="12.1468"
                  strokeMiterlimit="10"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1348_66963"
                  x="3.26633e-05"
                  y="0"
                  width="277.736"
                  height="1088.3"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.49472" />
                  <feGaussianBlur stdDeviation="1.74736" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1348_66963"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1348_66963"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="relative w-full px-4">
            {steps.map((step, index) => {
              const pathPoints = [
                { x: 265.859, y: 4.1123 },
                { x: 11.8587, y: 280.14 },
                { x: 265.859, y: 540.744 },
                { x: 11.8587, y: 814.149 },
                { x: 262.957, y: 1077.11 },
              ];
              const point = pathPoints[index];
              const svgCenterX = 139;
              const isLeft = point.x < svgCenterX;
              const yScale = 1200 / 1089;
              const topPosition = point.y * yScale;
              const horizontalOffset = Math.abs(point.x - svgCenterX);
              const maxWidth = "calc(50% - 80px)";

              return (
                <div
                  key={step.title}
                  className="absolute"
                  style={{
                    left: isLeft ? `calc(50% - ${horizontalOffset}px)` : undefined,
                    right: !isLeft ? `calc(50% - ${horizontalOffset}px)` : undefined,
                    top: `${topPosition}px`,
                    transform: "translateY(-50%)",
                    width: maxWidth,
                    maxWidth: "280px",
                  }}
                >
                  <ProcessStep {...step} isMobile />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
