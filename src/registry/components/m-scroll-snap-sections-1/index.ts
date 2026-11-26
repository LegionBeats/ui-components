import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import sharedSource from "./scroll-snap-sections.tsx?raw";
import variantSource from "./m-scroll-snap-sections-1.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const mScrollSnapSections1: RegistryEntry = {
  slug: "m-scroll-snap-sections-1",
  name: "Scroll Snap Sections 1",
  description: "A four-chapter product story with full-height snap scrolling, animated entrances, and dot navigation. From Cnippet UI.",
  category: "sections",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/m-scroll-snap-sections-1",
  sourceUrl: "https://ui.cnippet.dev/r/m-scroll-snap-sections-1.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    { name: "scroll-snap-sections.tsx", target: "components/ui/scroll-snap-sections.tsx", source: sharedSource, language: "tsx" },
    { name: "m-scroll-snap-sections-1.tsx", target: "components/ui/m-scroll-snap-sections-1.tsx", source: variantSource, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/m-scroll-snap-sections-1-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Demo,
  addedAt: "2026-11-26",
};
