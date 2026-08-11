import type { RegistryEntry } from "../../types";
import AnimatedGradientDemo from "./demo";
import source from "./animated-gradient-with-svg.tsx?raw";
import hookSource from "./use-debounced-dimensions.tsx?raw";
import css from "./animated-gradient-with-svg.css?raw";
import demoSource from "./demo.tsx?raw";

export const animatedGradientWithSvg: RegistryEntry = {
  slug: "animated-gradient-with-svg",
  name: "Animated Gradient (SVG)",
  description:
    "Multi-color animated gradient background built from blurred SVG circles that drift around their container.",
  category: "backgrounds",
  dependencies: [],
  shadcnCommand:
    "npx shadcn@latest add https://21st.dev/r/danielpetho/animated-gradient-with-svg",
  sourceUrl: "https://21st.dev/r/danielpetho/animated-gradient-with-svg",
  author: { name: "danielpetho", url: "https://21st.dev/danielpetho" },
  files: [
    {
      name: "animated-gradient-with-svg.tsx",
      target: "components/ui/animated-gradient-with-svg.tsx",
      source,
      language: "tsx",
    },
    {
      name: "animated-gradient-with-svg.css",
      target: "components/ui/animated-gradient-with-svg.css",
      source: css,
      language: "css",
    },
    {
      name: "use-debounced-dimensions.tsx",
      target: "hooks/use-debounced-dimensions.tsx",
      source: hookSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/animated-gradient-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: AnimatedGradientDemo,
  addedAt: "2026-08-11",
};