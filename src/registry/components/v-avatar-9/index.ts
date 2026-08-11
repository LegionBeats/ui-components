import type { RegistryEntry } from "../../types";
import VAvatar9Demo from "./demo";
import source from "./v-avatar-9.tsx?raw";
import avatarSource from "./avatar.tsx?raw";
import frameSource from "./frame.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const vAvatar9: RegistryEntry = {
  slug: "v-avatar-9",
  name: "Avatar 9",
  description:
    "Compact social proof with overlapping avatars and initials fallback. From Cnippet UI.",
  category: "misc",
  dependencies: ["@base-ui/react"],
  shadcnCommand: "npx shadcn@latest add @cnippet/v-avatar-9",
  sourceUrl: "https://ui.cnippet.dev/r/v-avatar-9.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "v-avatar-9.tsx",
      target: "components/ui/v-avatar-9.tsx",
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
      name: "frame.tsx",
      target: "components/ui/frame.tsx",
      source: frameSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/v-avatar-9-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: VAvatar9Demo,
  addedAt: "2026-08-11",
};
