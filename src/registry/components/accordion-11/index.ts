import type { RegistryEntry } from "../../types";
import Accordion11Demo from "./demo";
import source from "./accordion-11.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const accordion11: RegistryEntry = {
  slug: "accordion-11",
  name: "Accordion 11",
  description:
    "Bordered accordion variant with chevron toggle indicators and highlighted expanded state. Built on shadcn's accordion primitive.",
  category: "sections",
  dependencies: ["react-icons", "@radix-ui/react-accordion", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/accordion-11.json",
  sourceUrl: "https://registry.watermelon.sh/r/accordion-11.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    {
      name: "accordion-11.tsx",
      target: "components/ui/accordion-11.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/accordion-11-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: Accordion11Demo,
  addedAt: "2026-07-21",
};