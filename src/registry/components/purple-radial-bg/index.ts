import type { RegistryEntry } from "../../types";
import PurpleRadialBgDemo from "./demo";
import source from "./purple-radial-bg.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const purpleRadialBg: RegistryEntry = {
  slug: "purple-radial-bg",
  name: "Purple Radial Background",
  description:
    "A deep purple radial gradient that fades from black at the center to electric purple at the edges.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "purple-radial-bg.tsx",
      target: "components/ui/purple-radial-bg.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/purple-radial-bg-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: PurpleRadialBgDemo,
  addedAt: "2026-07-29",
};
