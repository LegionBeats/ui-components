import type { RegistryEntry } from "../../types";
import TypewriterDemo from "./demo";
import source from "./typewriter.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const typewriter: RegistryEntry = {
  slug: "typewriter",
  name: "Typewriter",
  description:
    "Characters appear one by one with an optional blinking cursor, looping through multiple strings with delete/retype.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/typewriter",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "typewriter.tsx",
      target: "components/ui/typewriter.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/typewriter-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: TypewriterDemo,
  addedAt: "2026-08-11",
};