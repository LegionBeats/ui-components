import type { RegistryEntry } from "../../types";
import VCard6Demo from "./demo";
import source from "./v-card-6.tsx?raw";
import cardSource from "./card.tsx?raw";
import badgeSource from "./badge.tsx?raw";
import buttonSource from "./button.tsx?raw";
import spinnerSource from "./spinner.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const vCard6: RegistryEntry = {
  slug: "v-card-6",
  name: "Card 6",
  description:
    "A card with image, badge, description, and CTA button. From Cnippet UI.",
  category: "misc",
  dependencies: ["@base-ui/react", "class-variance-authority"],
  shadcnCommand: "npx shadcn@latest add @cnippet/v-card-6",
  sourceUrl: "https://ui.cnippet.dev/r/v-card-6.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "v-card-6.tsx",
      target: "components/ui/v-card-6.tsx",
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
      name: "badge.tsx",
      target: "components/ui/badge.tsx",
      source: badgeSource,
      language: "tsx",
    },
    {
      name: "button.tsx",
      target: "components/ui/button.tsx",
      source: buttonSource,
      language: "tsx",
    },
    {
      name: "spinner.tsx",
      target: "components/ui/spinner.tsx",
      source: spinnerSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/v-card-6-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: VCard6Demo,
  addedAt: "2026-08-11",
};
