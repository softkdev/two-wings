/**
 * SVG Module Declarations
 *
 * TypeScript declarations for importing SVG files as React components (via SVGR)
 */

declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
