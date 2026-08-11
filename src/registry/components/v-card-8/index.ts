import type { RegistryEntry } from "../../types";
import VCard8Demo from "./demo";
import source from "./v-card-8.tsx?raw";
import cardSource from "./card.tsx?raw";
import avatarSource from "./avatar.tsx?raw";
import badgeSource from "./badge.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const vCard8: RegistryEntry = {
  slug: "v-card-8",
  name: "Card 8",
  description:
    "Full-bleed image profile card with top/bottom shadow fades, verified avatar and hover zoom. From Cnippet UI.",
  category: "misc",
  dependencies: ["@base-ui/react", "class-variance-authority"],
  shadcnCommand: "npx shadcn@latest add @cnippet/v-card-8",
  sourceUrl: "https://ui.cnippet.dev/r/v-card-8.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "v-card-8.tsx",
      target: "components/ui/v-card-8.tsx",
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
      name: "avatar.tsx",
      target: "components/ui/avatar.tsx",
      source: avatarSource,
      language: "tsx",
    },
    {
      name: "badge.tsx",
      target: "components/ui/badge.tsx",
      source: badgeSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/v-card-8-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: VCard8Demo,
  addedAt: "2026-08-11",
};
