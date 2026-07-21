import type { RegistryEntry } from "../../types";
import IntegrationCardDemo from "./demo";
import source from "./integration-card.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const integrationCard: RegistryEntry = {
  slug: "integration-card",
  name: "Integration Card",
  description:
    "Searchable, paginated integrations picker with animated expandable rows. Framer Motion + lucide.",
  category: "sections",
  dependencies: ["framer-motion", "react-icons", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/integration-card.json",
  sourceUrl: "https://registry.watermelon.sh/r/integration-card.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    {
      name: "integration-card.tsx",
      target: "components/ui/integration-card.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/integration-card-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: IntegrationCardDemo,
  addedAt: "2026-07-21",
};