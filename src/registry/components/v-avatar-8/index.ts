import type { RegistryEntry } from "../../types";
import VAvatar8Demo from "./demo";
import source from "./v-avatar-8.tsx?raw";
import avatarSource from "./avatar.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const vAvatar8: RegistryEntry = {
  slug: "v-avatar-8",
  name: "Avatar 8",
  description:
    "Avatar social proof with a text label — overlapping avatars inside a rounded pill. From Cnippet UI.",
  category: "misc",
  dependencies: ["@base-ui/react"],
  shadcnCommand: "npx shadcn@latest add @cnippet/v-avatar-8",
  sourceUrl: "https://ui.cnippet.dev/r/v-avatar-8.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "v-avatar-8.tsx",
      target: "components/ui/v-avatar-8.tsx",
      source,
      language: "tsx",
    },
    {
      name: "avatar.tsx",
      target: "components/ui/avatar.tsx",
      source: avatarSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/v-avatar-8-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: VAvatar8Demo,
  addedAt: "2026-08-11",
};
