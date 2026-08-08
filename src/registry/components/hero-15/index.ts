import type { RegistryEntry } from "../../types";
import Hero15Demo from "./demo";
import source from "./hero-15.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const hero15: RegistryEntry = {
  slug: "hero-15",
  name: "Hero 15",
  description:
    "Full-screen dark hero with background image, nav bar, serif italic headline, dual CTAs, and trusted-brand row. Motion reveal animations.",
  category: "sections",
  dependencies: ["motion", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/hero-15.json",
  sourceUrl: "https://registry.watermelon.sh/r/hero-15.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    { name: "hero-15.tsx", target: "components/ui/hero-15.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/hero-15-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Hero15Demo,
  addedAt: "2026-08-08",
};