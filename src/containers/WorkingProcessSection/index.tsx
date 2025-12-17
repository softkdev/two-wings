"use client";

import { Container, ProcessStep } from "@/components/ui";
import type { ProcessStepProps } from "@/components/ui";

const steps: Omit<ProcessStepProps, "isMobile">[] = [
  {
    number: "01",
    title: "Discover",
    description: "We dive into your goals, audience, and success metrics.",
    color: "from-[#4fb5e3] to-[#1c3c57]",
  },
  {
    number: "02",
    title: "Design",
    description: "Turning insights into beautiful, functional experiences.",
    color: "from-[#7068ff] to-[#1f2044]",
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean, scalable code that performs on every device.",
    color: "from-[#9245ee] to-[#2a163d]",
  },
  {
    number: "04",
    title: "Test",
    description: "Rigorous reviews to ensure flawless performance.",
    color: "from-[#ff5ca8] to-[#3b0c2c]",
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy with care and support your growth.",
    color: "from-[#29c5ad] to-[#0d2f2a]",
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

        {/* Desktop Layout - Components positioned at SVG path intersection points */}
        <div className="relative mt-16 hidden lg:block" style={{ minHeight: "600px" }}>
          {/* Desktop connecting line SVG - positioned at center */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none w-full max-w-[910px]" style={{ top: "100px" }}>
            <svg
              width="910"
              height="139"
              viewBox="0 0 910 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_d_1439_27206)">
                <path
                  d="M7.85544 8.67969L237.702 120.644L454.706 8.67969L682.369 120.644L901.337 9.95876"
                  stroke="#16161B"
                  strokeWidth="15.504"
                  strokeMiterlimit="10"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1439_27206"
                  x="-4.29153e-06"
                  y="0"
                  width="909.295"
                  height="138.237"
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
                  <feOffset dy="4.46061" />
                  <feGaussianBlur stdDeviation="2.2303" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1439_27206"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1439_27206"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Steps positioned at exact intersection points */}
          {/* Path points: (7.855, 8.67969), (237.702, 120.644), (454.706, 8.67969), (682.369, 120.644), (901.337, 9.95876) */}
          <div className="relative w-full max-w-[910px] mx-auto">
            {steps.map((step, index) => {
              // Extract coordinates from SVG path
              const pathPoints = [
                { x: 7.855, y: 8.67969 },
                { x: 237.702, y: 120.644 },
                { x: 454.706, y: 8.67969 },
                { x: 682.369, y: 120.644 },
                { x: 901.337, y: 9.95876 },
              ];
              const point = pathPoints[index];
              
              // Calculate position relative to container
              const containerWidth = 910; // max-w-[910px]
              const xPercent = (point.x / containerWidth) * 100;
              
              // Y position: SVG is positioned at top: 100px, so we add that offset
              // point.y is the Y coordinate in the SVG (0-139)
              const svgTopOffset = 100; // SVG top position
              const topPosition = svgTopOffset + point.y;
              
              return (
                <div
                  key={step.title}
                  className="absolute"
                  style={{
                    left: `${xPercent}%`,
                    top: `${topPosition}px`,
                    transform: "translateX(-50%)",
                    width: "200px",
                  }}
                >
                  <ProcessStep {...step} isMobile={false} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout - Components positioned at SVG path intersection points */}
        <div className="relative mt-16 lg:hidden" style={{ minHeight: "1200px" }}>
          {/* Mobile connecting line SVG - positioned vertically at center */}
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

          {/* Steps positioned at exact intersection points */}
          {/* Path points: (265.859, 4.1123), (11.8587, 280.14), (265.859, 540.744), (11.8587, 814.149), (262.957, 1077.11) */}
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
              
              // Determine if on left or right side
              const svgCenterX = 139; // 278 / 2
              const isLeft = point.x < svgCenterX;
              
              // Calculate Y position - scale from SVG height (1089) to container height (1200)
              const yScale = 1200 / 1089;
              const topPosition = point.y * yScale;
              
              // Calculate horizontal offset from center
              const horizontalOffset = Math.abs(point.x - svgCenterX);
              const maxWidth = "calc(50% - 80px)"; // Leave space for line and padding
              
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
                  <ProcessStep {...step} isMobile={true} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
