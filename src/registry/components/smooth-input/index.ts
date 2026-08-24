import type { RegistryEntry } from "../../types";
import SmoothInputDemo from "./demo";
import source from "./smooth-input.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const smoothInput: RegistryEntry = {
  slug: "smooth-input",
  name: "Smooth Input",
  description:
    "An input with a spring-animated caret that glides between characters, with password masking, scroll tracking and reduced-motion support.",
  category: "inputs",
  dependencies: ["framer-motion"],
  files: [
    {
      name: "smooth-input.tsx",
      target: "components/ui/smooth-input.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/smooth-input-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: SmoothInputDemo,
  sourceUrl: "https://skiper-ui.com/docs/components/skiper106",
  author: { name: "Skiper UI", url: "https://skiper-ui.com" },
  shadcnCommand: "npx shadcn@latest add @skiper-ui/skiper106",
  addedAt: "2026-08-24",
};
