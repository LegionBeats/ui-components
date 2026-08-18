import type { RegistryEntry } from "../../types";
import TextRevealDemo from "./demo";
import source from "./text-reveal.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const textReveal: RegistryEntry = {
  slug: "text-reveal",
  name: "Text Reveal",
  description:
    "Reveals text by word, character, or line with fade, slide, scale, and blur presets. Motion-powered.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/text-reveal",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    { name: "text-reveal.tsx", target: "components/ui/text-reveal.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/text-reveal-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: TextRevealDemo,
  addedAt: "2026-08-18",
};
