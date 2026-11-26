import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import containerSource from "./container-scroll.tsx?raw";
import variantSource from "./m-container-scroll-3.tsx?raw";
import demoSource from "./demo.tsx?raw";
import poster from "@/assets/container-scroll-mountains.jpg.asset.json";

export const mContainerScroll3: RegistryEntry = {
  slug: "m-container-scroll-3",
  name: "Container Scroll 3",
  description: "A mountain keynote poster tilts into view and settles flat as you scroll. Poster preview from Cnippet UI; no video included.",
  category: "effects",
  dependencies: ["motion", "lucide-react"],
  shadcnCommand: "npx shadcn@latest add @cnippet/m-container-scroll-3",
  sourceUrl: "https://ui.cnippet.dev/r/m-container-scroll-3.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    { name: "container-scroll.tsx", target: "components/ui/container-scroll.tsx", source: containerSource, language: "tsx" },
    { name: "m-container-scroll-3.tsx", target: "components/ui/m-container-scroll-3.tsx", source: variantSource.replace('import poster from "@/assets/container-scroll-mountains.jpg.asset.json";', `const poster = { url: "https://ui-components.lovable.app${poster.url}" };`), language: "tsx" },
    { name: "demo.tsx", target: "components/ui/m-container-scroll-3-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Demo,
  addedAt: "2026-11-26",
};
