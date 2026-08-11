import type { RegistryEntry } from "../../types";
import TextHighlightDemo from "./demo";
import source from "./text-highlight.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const textHighlight: RegistryEntry = {
  slug: "text-highlight",
  name: "Text Highlight",
  description:
    "A marker-style background sweeps behind text on hover, in view, or via ref — with ltr, rtl, ttb and btt directions.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/text-highlight",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "text-highlight.tsx",
      target: "components/ui/text-highlight.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/text-highlight-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: TextHighlightDemo,
  addedAt: "2026-08-11",
};