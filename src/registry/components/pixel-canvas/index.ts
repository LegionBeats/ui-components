import type { RegistryEntry } from "../../types";
import PixelCanvasDemo from "./demo";
import source from "./pixel-canvas.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const pixelCanvas: RegistryEntry = {
  slug: "pixel-canvas",
  name: "Pixel Canvas",
  description:
    "A hover-activated pixel shimmer that ripples across any card or element — built as a framework-free web component with a React wrapper.",
  category: "effects",
  dependencies: [],
  shadcnCommand:
    'npx shadcn@latest add "https://21st.dev/r/serafimcloud/pixel-canvas"',
  sourceUrl: "https://21st.dev/serafimcloud/pixel-canvas",
  author: { name: "serafimcloud", url: "https://21st.dev/serafimcloud" },
  files: [
    {
      name: "pixel-canvas.tsx",
      target: "components/ui/pixel-canvas.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/pixel-canvas-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: PixelCanvasDemo,
  addedAt: "2026-10-05",
};
