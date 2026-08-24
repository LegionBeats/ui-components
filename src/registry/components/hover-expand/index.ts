import type { RegistryEntry } from "../../types";
import HoverExpandDemo from "./demo";
import source from "./hover-expand.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const hoverExpand: RegistryEntry = {
  slug: "hover-expand",
  name: "Hover Expand Gallery",
  description:
    "A row of slim image cards that smoothly expand on hover or tap, revealing a gradient overlay and caption for the active image.",
  category: "sections",
  dependencies: ["framer-motion"],
  files: [
    {
      name: "hover-expand.tsx",
      target: "components/ui/hover-expand.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/hover-expand-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: HoverExpandDemo,
  sourceUrl: "https://skiper-ui.com/docs/components/skiper52",
  author: { name: "Skiper UI", url: "https://skiper-ui.com" },
  shadcnCommand: "npx shadcn@latest add @skiper-ui/skiper52",
  addedAt: "2026-08-24",
};
