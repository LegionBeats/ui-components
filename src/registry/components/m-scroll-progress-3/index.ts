import type { RegistryEntry } from "../../types";
import MScrollProgress3Demo from "./demo";
import source from "./m-scroll-progress-3.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const mScrollProgress3: RegistryEntry = {
  slug: "m-scroll-progress-3",
  name: "Scroll Progress 3",
  description:
    "Styled bar with percentage — rounded gradient bar with live percentage label. From Cnippet UI.",
  category: "misc",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/m-scroll-progress-3",
  sourceUrl: "https://ui.cnippet.dev/r/m-scroll-progress-3.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    {
      name: "m-scroll-progress-3.tsx",
      target: "components/ui/m-scroll-progress-3.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/m-scroll-progress-3-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: MScrollProgress3Demo,
  addedAt: "2026-08-11",
};
