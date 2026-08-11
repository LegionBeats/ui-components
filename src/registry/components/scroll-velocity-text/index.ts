import type { RegistryEntry } from "../../types";
import ScrollVelocityTextDemo from "./demo";
import source from "./scroll-velocity-text.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const scrollVelocityText: RegistryEntry = {
  slug: "scroll-velocity-text",
  name: "Scroll Velocity Text",
  description:
    "A looping text marquee whose speed and direction react to scroll velocity, with reduced-motion and offscreen pausing built in.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/scroll-velocity-text",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "scroll-velocity-text.tsx",
      target: "components/ui/scroll-velocity-text.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/scroll-velocity-text-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: ScrollVelocityTextDemo,
  addedAt: "2026-08-11",
};