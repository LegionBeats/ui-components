import type { RegistryEntry } from "../../types";
import SpotlightBgDemo from "./demo";
import source from "./spotlight-bg.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const spotlightBg: RegistryEntry = {
  slug: "spotlight-bg",
  name: "Spotlight Background",
  description:
    "A dark slate-950 wrapper with a centered radial gradient spotlight. Great for hero sections or card backdrops.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "spotlight-bg.tsx",
      target: "components/ui/spotlight-bg.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/spotlight-bg-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: SpotlightBgDemo,
  addedAt: "2026-07-29",
};
