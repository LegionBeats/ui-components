import { createElement } from "react";
import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import source from "./skate-deck-rail.tsx?raw";
import demoSource from "./demo.tsx?raw";
import sunsetBands from "@/assets/skate-deck-sunset-bands.webp.asset.json";
import checkerFade from "@/assets/skate-deck-checker-fade.webp.asset.json";
import koiPair from "@/assets/skate-deck-koi-pair.webp.asset.json";
import marbleInk from "@/assets/skate-deck-marble-ink.webp.asset.json";
import catEyes from "@/assets/skate-deck-cat-eyes.webp.asset.json";
import topoLines from "@/assets/skate-deck-topo-lines.webp.asset.json";
import flameTail from "@/assets/skate-deck-flame-tail.webp.asset.json";
import halftoneWave from "@/assets/skate-deck-halftone-wave.webp.asset.json";

const photos = [sunsetBands.url, checkerFade.url, koiPair.url, marbleInk.url, catEyes.url, topoLines.url, flameTail.url, halftoneWave.url];

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
  Preview: () => createElement(Demo, { photos }),
  addedAt: "2026-11-26",
};
