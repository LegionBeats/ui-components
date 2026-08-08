import type { RegistryEntry } from "../../types";
import TextBlurInDemo from "./demo";
import source from "./text-blur-in.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const textBlurIn: RegistryEntry = {
  slug: "text-blur-in",
  name: "Text Blur In",
  description:
    "Text that fades and un-blurs into place, staggered by word or character. Lightweight Motion animation.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand: "npx shadcn@latest add https://21st.dev/r/animbits/text-blur-in",
  sourceUrl: "https://21st.dev/r/animbits/text-blur-in",
  author: { name: "animbits", url: "https://21st.dev/animbits" },
  files: [
    { name: "text-blur-in.tsx", target: "components/ui/text-blur-in.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/text-blur-in-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: TextBlurInDemo,
  addedAt: "2026-08-08",
};