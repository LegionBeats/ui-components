import type { RegistryEntry } from "../../types";
import TextShimmerDemo from "./demo";
import source from "./text-shimmer.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const textShimmer: RegistryEntry = {
  slug: "text-shimmer",
  name: "Text Shimmer",
  description:
    "A gradient shine sweeps across text continuously — great for loading and thinking states. Motion-powered.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/text-shimmer",
  sourceUrl: "https://ui.cnippet.dev",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "text-shimmer.tsx",
      target: "components/ui/text-shimmer.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/text-shimmer-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: TextShimmerDemo,
  addedAt: "2026-08-11",
};