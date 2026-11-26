import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import source from "./skate-deck-rail.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const skateDeckRail: RegistryEntry = {
  slug: "skate-deck-rail",
  name: "Picture Rail Gallery",
  description: "Items hang from hooks on a wall rail, swing when touched, and lift into a flippable detail view.",
  category: "carousels",
  dependencies: [],
  shadcnCommand: 'npx shadcn@latest add "https://21st.dev/r/dhxwhy/skate-deck-rail"',
  sourceUrl: "https://21st.dev/dhxwhy/skate-deck-rail",
  author: { name: "dhxwhy", url: "https://21st.dev/dhxwhy" },
  files: [
    { name: "skate-deck-rail.tsx", target: "components/ui/skate-deck-rail.tsx", source, language: "tsx" },
    { name: "skate-deck-rail-demo.tsx", target: "components/skate-deck-rail-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Demo,
  addedAt: "2026-11-26",
};
