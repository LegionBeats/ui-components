import type { RegistryEntry } from "../../types";
import ThinkingOrbDemo from "./demo";
import source from "./thinking-orb.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const thinkingOrb: RegistryEntry = {
  slug: "thinking-orb",
  name: "Thinking Orb",
  description:
    "Dotted thought-orb loading indicators for AI and agent UIs. Nine hand-tuned states, 64px and 20px presets, auto dark/light, SSR-safe canvas.",
  category: "effects",
  dependencies: ["thinking-orbs"],
  sourceUrl: "https://orbs.jakubantalik.com",
  author: { name: "Jakub Antalik", url: "https://orbs.jakubantalik.com" },
  files: [
    {
      name: "thinking-orb.tsx",
      target: "components/ui/thinking-orb.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/thinking-orb-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: ThinkingOrbDemo,
  addedAt: "2026-08-08",
};