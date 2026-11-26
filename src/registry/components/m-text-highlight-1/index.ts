import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import sharedSource from "./text-highlight.tsx?raw";
import variantSource from "./m-text-highlight-1.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const mTextHighlight1: RegistryEntry = {
  slug: "m-text-highlight-1",
  name: "Text Highlight 1",
  description: "A key phrase highlights from left to right when it enters view. From Cnippet UI.",
  category: "text",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/m-text-highlight-1",
  sourceUrl: "https://ui.cnippet.dev/r/m-text-highlight-1.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    { name: "text-highlight.tsx", target: "components/ui/text-highlight.tsx", source: sharedSource, language: "tsx" },
    { name: "m-text-highlight-1.tsx", target: "components/ui/m-text-highlight-1.tsx", source: variantSource, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/m-text-highlight-1-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Demo,
  addedAt: "2026-11-26",
};
