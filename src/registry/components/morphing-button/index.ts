import type { RegistryEntry } from "../../types";
import MorphingButtonDemo from "./demo";
import morphingButtonSource from "./morphing-button.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const morphingButton: RegistryEntry = {
  slug: "morphing-button",
  name: "Morphing Button",
  description:
    "A bell-icon button that morphs into an email input on click. Uses Motion layout animations.",
  category: "buttons",
  dependencies: ["motion", "react-icons"],
  files: [
    {
      name: "morphing-button.tsx",
      target: "components/ui/morphing-button.tsx",
      source: morphingButtonSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/morphing-button-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: MorphingButtonDemo,
  addedAt: "2026-06-24",
};