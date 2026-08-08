import type { RegistryEntry } from "../../types";
import HeroSectionDemo from "./demo";
import source from "./hero-section.tsx?raw";
import css from "./hero-section.css?raw";
import demoSource from "./demo.tsx?raw";

export const heroSection: RegistryEntry = {
  slug: "hero-section",
  name: "Hero Section (Editorial)",
  description:
    "Full-screen editorial hero with animated SVG grid lines, word-by-word reveal, cursor-following gradient, and click ripples.",
  category: "sections",
  dependencies: [],
  shadcnCommand: "npx shadcn@latest add https://21st.dev/r/reuno-ui/hero-section.json",
  sourceUrl: "https://21st.dev/r/reuno-ui/hero-section",
  author: { name: "reuno-ui", url: "https://21st.dev/reuno-ui" },
  files: [
    { name: "hero-section.tsx", target: "components/ui/hero-section.tsx", source, language: "tsx" },
    { name: "hero-section.css", target: "components/ui/hero-section.css", source: css, language: "css" },
    { name: "demo.tsx", target: "components/ui/hero-section-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: HeroSectionDemo,
  addedAt: "2026-08-08",
};
