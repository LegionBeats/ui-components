import type { RegistryEntry } from "../../types";
import DotGridBgDemo from "./demo";
import source from "./dot-grid-bg.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const dotGridBg: RegistryEntry = {
  slug: "dot-grid-bg",
  name: "Dot Grid Background",
  description:
    "A dark dot-grid background made of tiny radial-gradient dots. Perfect for sci-fi dashboards or code-heavy interfaces.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "dot-grid-bg.tsx",
      target: "components/ui/dot-grid-bg.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/dot-grid-bg-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: DotGridBgDemo,
  addedAt: "2026-07-29",
};
