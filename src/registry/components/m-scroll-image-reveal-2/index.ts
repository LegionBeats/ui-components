import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import sharedSource from "./scroll-image-reveal.tsx?raw";
import variantSource from "./m-scroll-image-reveal-2.tsx?raw";
import demoSource from "./demo.tsx?raw";
import photo from "@/assets/scroll-image-northern-lights.jpg.asset.json";

export const mScrollImageReveal2: RegistryEntry = {
  slug: "m-scroll-image-reveal-2",
  name: "Scroll Image Reveal 2",
  description: "A northern-lights photo expands from a circle to full width as you scroll. From Cnippet UI.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add @cnippet/m-scroll-image-reveal-2",
  sourceUrl: "https://ui.cnippet.dev/r/m-scroll-image-reveal-2.json",
  author: { name: "Cnippet UI", url: "https://ui.cnippet.dev" },
  files: [
    { name: "scroll-image-reveal.tsx", target: "components/ui/scroll-image-reveal.tsx", source: sharedSource, language: "tsx" },
    { name: "m-scroll-image-reveal-2.tsx", target: "components/ui/m-scroll-image-reveal-2.tsx", source: variantSource.replace('import photo from "@/assets/scroll-image-northern-lights.jpg.asset.json";', `const photo = { url: "https://ui-components.lovable.app${photo.url}" };`), language: "tsx" },
    { name: "demo.tsx", target: "components/ui/m-scroll-image-reveal-2-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Demo,
  addedAt: "2026-11-26",
};
