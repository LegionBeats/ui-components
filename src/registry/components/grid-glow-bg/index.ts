import type { RegistryEntry } from "../../types";
import GridGlowBgDemo from "./demo";
import source from "./grid-glow-bg.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const gridGlowBg: RegistryEntry = {
  slug: "grid-glow-bg",
  name: "Grid Glow Background",
  description:
    "A light grid background with a soft fuchsia glow behind it. Great for landing pages that need a subtle tech texture.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "grid-glow-bg.tsx",
      target: "components/ui/grid-glow-bg.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/grid-glow-bg-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: GridGlowBgDemo,
  addedAt: "2026-07-29",
};
