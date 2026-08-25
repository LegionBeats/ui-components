import type { RegistryEntry } from "../../types";
import TextRotateDemo from "./demo";
import source from "./text-rotate.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const textRotate: RegistryEntry = {
  slug: "text-rotate",
  name: "Text Rotate",
  description:
    "Rotating text with configurable enter/exit animations, per-character stagger and imperative next/previous controls.",
  category: "text",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/text-rotate",
  sourceUrl: "https://ui.cnippet.dev/motion/text-animations/text-rotate",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "text-rotate.tsx",
      target: "components/ui/text-rotate.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/text-rotate-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: TextRotateDemo,
  addedAt: "2026-08-25",
};
