import type { RegistryEntry } from "../../types";
import LogoLoopDemo from "./demo";
import logoLoopSource from "./logo-loop.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const logoLoop: RegistryEntry = {
  slug: "logo-loop",
  name: "Logo Loop",
  description:
    "Infinite horizontal or vertical logo marquee with smooth easing, hover pause/slow, fade edges, and optional scale-on-hover.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "logo-loop.tsx",
      target: "components/ui/logo-loop.tsx",
      source: logoLoopSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/logo-loop-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: LogoLoopDemo,
  sourceUrl: "https://reactbits.dev/animations/logo-loop",
  author: { name: "React Bits", url: "https://reactbits.dev" },
  addedAt: "2026-07-14",
};