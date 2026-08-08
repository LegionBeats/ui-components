import type { RegistryEntry } from "../../types";
import Collapsible7Demo from "./demo";
import source from "./collapsible-7.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const collapsible7: RegistryEntry = {
  slug: "collapsible-7",
  name: "Collapsible 7",
  description:
    "FAQ-style collapsible card that expands to reveal answer text and a wide cover image. Built on shadcn collapsible + card.",
  category: "sections",
  dependencies: ["lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/collapsible-7.json",
  sourceUrl: "https://registry.watermelon.sh/r/collapsible-7.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    { name: "collapsible-7.tsx", target: "components/ui/collapsible-7.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/collapsible-7-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Collapsible7Demo,
  addedAt: "2026-08-08",
};