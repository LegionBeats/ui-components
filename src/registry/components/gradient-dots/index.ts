import type { RegistryEntry } from "../../types";
import GradientDotsDemo from "./demo";
import source from "./gradient-dots.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const gradientDots: RegistryEntry = {
  slug: "gradient-dots",
  name: "Gradient Dots",
  description:
    "A hexagonal dot-grid background with drifting rainbow gradients and a continuous hue cycle.",
  category: "backgrounds",
  dependencies: ["framer-motion"],
  files: [
    { name: "gradient-dots.tsx", target: "components/ui/gradient-dots.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/gradient-dots-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: GradientDotsDemo,
  addedAt: "2026-10-03",
};
