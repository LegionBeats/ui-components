import type { RegistryEntry } from "../../types";
import BudgetCardDemo from "./demo";
import source from "./budget-card.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const budgetCard: RegistryEntry = {
  slug: "budget-card",
  name: "Budget Card",
  description:
    "Animated monthly budget card with spend breakdown, month picker, and expandable details. Motion-powered.",
  category: "sections",
  dependencies: ["motion", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/budget-card.json",
  sourceUrl: "https://registry.watermelon.sh/r/budget-card.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    {
      name: "budget-card.tsx",
      target: "components/ui/budget-card.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/budget-card-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: BudgetCardDemo,
  addedAt: "2026-07-21",
};