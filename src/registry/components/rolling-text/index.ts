import type { RegistryEntry } from "../../types";
import RollingTextDemo from "./demo";
import source from "./rolling-text.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const rollingText: RegistryEntry = {
  slug: "rolling-text",
  name: "Rolling Text",
  description:
    "Letters roll in one by one with a 3D perspective flip — configurable direction, stagger and easing.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/rolling-text",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "rolling-text.tsx",
      target: "components/ui/rolling-text.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/rolling-text-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: RollingTextDemo,
  addedAt: "2026-08-11",
};