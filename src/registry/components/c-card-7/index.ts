import type { RegistryEntry } from "../../types";
import CCard7Demo from "./demo";
import source from "./c-card-7.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const cCard7: RegistryEntry = {
  slug: "c-card-7",
  name: "Card with Image",
  description:
    "Compact card with image, trending/featured badges, description, and a CTA button. From reui.io.",
  category: "cards",
  dependencies: ["lucide-react"],
  shadcnCommand: "npx shadcn@latest add @reui/c-card-7",
  sourceUrl: "https://reui.io/blocks/cards",
  author: { name: "reui.io", url: "https://reui.io" },
  files: [
    { name: "c-card-7.tsx", target: "components/ui/c-card-7.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/c-card-7-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: CCard7Demo,
  addedAt: "2026-09-02",
};
