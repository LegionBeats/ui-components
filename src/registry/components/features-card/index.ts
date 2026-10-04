import type { RegistryEntry } from "../../types";
import FeaturesCard from "./features-card";
import source from "./features-card.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const featuresCard: RegistryEntry = {
  slug: "features-card",
  name: "Features Bento Grid",
  description:
    "A dark bento-grid features section with interactive feature tabs, live metrics, integrations grid, and a terminal deploy demo.",
  category: "sections",
  dependencies: ["lucide-react"],
  files: [
    {
      name: "features-card.tsx",
      target: "components/ui/features-card.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/features-card-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: FeaturesCard,
  addedAt: "2026-10-04",
};
