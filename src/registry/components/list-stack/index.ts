import type { RegistryEntry } from "../../types";
import ListStackDemo from "./demo";
import source from "./list-stack.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const listStack: RegistryEntry = {
  slug: "list-stack",
  name: "List Stack",
  description:
    "Stacked activity cards in 3D perspective that fan out into a list when expanded. Spring-animated with Framer Motion.",
  category: "sections",
  dependencies: ["framer-motion", "react-icons"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/list-stack.json",
  sourceUrl: "https://registry.watermelon.sh/r/list-stack.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    { name: "list-stack.tsx", target: "components/ui/list-stack.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/list-stack-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: ListStackDemo,
  addedAt: "2026-08-08",
};