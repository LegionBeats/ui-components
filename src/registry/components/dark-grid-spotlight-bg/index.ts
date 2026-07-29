import type { RegistryEntry } from "../../types";
import DarkGridSpotlightBgDemo from "./demo";
import source from "./dark-grid-spotlight-bg.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const darkGridSpotlightBg: RegistryEntry = {
  slug: "dark-grid-spotlight-bg",
  name: "Dark Grid Spotlight Background",
  description:
    "A dark grid background with a large radial spotlight at the top. Creates a dramatic, stage-lit feel for dark-themed pages.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "dark-grid-spotlight-bg.tsx",
      target: "components/ui/dark-grid-spotlight-bg.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/dark-grid-spotlight-bg-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: DarkGridSpotlightBgDemo,
  addedAt: "2026-07-29",
};
