import type { RegistryEntry } from "../../types";
import CountingNumberDemo from "./demo";
import source from "./counting-number.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const countingNumber: RegistryEntry = {
  slug: "counting-number",
  name: "Counting Number",
  description:
    "Animates from a start value to a target number with a tween, formatted with thousands separators. Replayable via ref.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/counting-number",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "counting-number.tsx",
      target: "components/ui/counting-number.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/counting-number-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: CountingNumberDemo,
  addedAt: "2026-08-11",
};