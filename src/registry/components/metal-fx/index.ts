import type { RegistryEntry } from "../../types";
import MetalFxDemo from "./demo";
import source from "./metal-button.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const metalFx: RegistryEntry = {
  slug: "metal-fx",
  name: "Metal FX Button",
  description:
    "Animated WebGL liquid-metal ring for buttons and chips. Three presets (chromatic, silver, gold), pill or circle variant, SSR-safe.",
  category: "buttons",
  dependencies: ["metal-fx"],
  sourceUrl: "https://metal.jakubantalik.com",
  author: { name: "Jakub Antalik", url: "https://github.com/Jakubantalik/metal-fx" },
  files: [
    {
      name: "metal-button.tsx",
      target: "components/ui/metal-button.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/metal-button-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: MetalFxDemo,
  addedAt: "2026-08-08",
};