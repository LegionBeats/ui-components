import type { RegistryEntry } from "../../types";
import AnimatedBeamDemo from "./demo";
import source from "./animated-beam.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const animatedBeam: RegistryEntry = {
  slug: "animated-beam",
  name: "Animated Beam",
  description:
    "An animated beam of light that travels along a curved path between any two elements — perfect for integration showcases and connection flows.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand:
    "npx shadcn@latest add 'https://www.ui-layouts.com/r/animated-beam.json'",
  sourceUrl: "https://www.ui-layouts.com/components/animated-beam",
  author: { name: "ui-layouts", url: "https://www.ui-layouts.com" },
  files: [
    {
      name: "animated-beam.tsx",
      target: "components/ui/animated-beam.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/animated-beam-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: AnimatedBeamDemo,
  addedAt: "2026-09-02",
};
