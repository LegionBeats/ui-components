import type { RegistryEntry } from "../../types";
import Card12Demo from "./demo";
import source from "./card-12.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const card12: RegistryEntry = {
  slug: "card-12",
  name: "Card 12",
  description:
    "Product card with hero image, like button, size/color badges, price, and CTA. Built on shadcn card primitives.",
  category: "sections",
  dependencies: ["lucide-react", "motion"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/card-12.json",
  sourceUrl: "https://registry.watermelon.sh/r/card-12.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    { name: "card-12.tsx", target: "components/ui/card-12.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/card-12-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Card12Demo,
  addedAt: "2026-07-29",
};