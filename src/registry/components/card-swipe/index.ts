import type { RegistryEntry } from "../../types";
import CardSwipeDemo from "./demo";
import source from "./card-swipe.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const cardSwipe: RegistryEntry = {
  slug: "card-swipe",
  name: "Card Swipe Carousel",
  description:
    "A stacked card carousel built on Swiper's cards effect, with grab-to-drag gestures, looping, optional autoplay, pagination and navigation arrows.",
  category: "sections",
  dependencies: ["swiper", "framer-motion", "lucide-react"],
  files: [
    {
      name: "card-swipe.tsx",
      target: "components/ui/card-swipe.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/card-swipe-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: CardSwipeDemo,
  sourceUrl: "https://skiper-ui.com/docs/components/skiper48",
  author: { name: "Skiper UI", url: "https://skiper-ui.com" },
  shadcnCommand: "npx shadcn@latest add @skiper-ui/skiper48",
  addedAt: "2026-08-24",
};
