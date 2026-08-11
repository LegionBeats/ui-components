import type { RegistryEntry } from "../../types";
import VCard7Demo from "./demo";
import source from "./v-card-7.tsx?raw";
import cardSource from "./card.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const vCard7: RegistryEntry = {
  slug: "v-card-7",
  name: "Card 7",
  description:
    "A full-bleed image card with scale-on-hover effect and gradient overlay. From Cnippet UI.",
  category: "misc",
  dependencies: ["@base-ui/react"],
  shadcnCommand: "npx shadcn@latest add @cnippet/v-card-7",
  sourceUrl: "https://ui.cnippet.dev/r/v-card-7.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "v-card-7.tsx",
      target: "components/ui/v-card-7.tsx",
      source,
      language: "tsx",
    },
    {
      name: "card.tsx",
      target: "components/ui/card.tsx",
      source: cardSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/v-card-7-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: VCard7Demo,
  addedAt: "2026-08-11",
};
