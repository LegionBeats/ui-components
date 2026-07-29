import type { RegistryEntry } from "../../types";
import AnimatedTabsDemo from "./demo";
import source from "./animated-tabs.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const animatedTabs: RegistryEntry = {
  slug: "animated-tabs",
  name: "Animated Tabs",
  description:
    "Dark glass-morphism tabs with a spring-animated active pill and blur-in content transitions.",
  category: "sections",
  dependencies: ["framer-motion"],
  shadcnCommand:
    "npx shadcn@latest add https://21st.dev/r/chetanverma16/animated-tabs",
  sourceUrl: "https://21st.dev/chetanverma16/animated-tabs",
  author: { name: "Chetan Verma", url: "https://21st.dev/chetanverma16" },
  files: [
    { name: "animated-tabs.tsx", target: "components/ui/animated-tabs.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/animated-tabs-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: AnimatedTabsDemo,
  addedAt: "2026-07-29",
};