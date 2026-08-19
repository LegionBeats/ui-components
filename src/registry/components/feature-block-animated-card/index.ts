import type { RegistryEntry } from "../../types";
import FeatureBlockAnimatedCardDemo from "./demo";
import source from "./feature-block-animated-card.tsx?raw";
import css from "./feature-block-animated-card.css?raw";
import demoSource from "./demo.tsx?raw";

export const featureBlockAnimatedCard: RegistryEntry = {
  slug: "feature-block-animated-card",
  name: "Feature Block Animated Card",
  description:
    "Feature card with pulsing icon row, a sweeping cyan scan line, and drifting sparkles. Great for bento/feature grids.",
  category: "sections",
  dependencies: ["framer-motion", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://21st.dev/r/manuarora700/feature-block-animated-card",
  sourceUrl: "https://21st.dev/manuarora700/feature-block-animated-card",
  author: { name: "Manu Arora", url: "https://21st.dev/manuarora700" },
  files: [
    {
      name: "feature-block-animated-card.tsx",
      target: "components/ui/feature-block-animated-card.tsx",
      source,
      language: "tsx",
    },
    {
      name: "feature-block-animated-card.css",
      target: "components/ui/feature-block-animated-card.css",
      source: css,
      language: "css",
    },
    {
      name: "demo.tsx",
      target: "components/ui/feature-block-animated-card-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: FeatureBlockAnimatedCardDemo,
  addedAt: "2026-08-19",
};
