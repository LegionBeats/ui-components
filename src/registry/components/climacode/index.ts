import type { RegistryEntry } from "../../types";
import ClimacodeDemo from "./demo";
import climacodeSource from "./climacode.tsx?raw";
import climacodeHtml from "./climacode.html?raw";
import demoSource from "./demo.tsx?raw";

export const climacode: RegistryEntry = {
  slug: "climacode",
  name: "Climacode",
  description:
    "A self-contained interactive SVG scene — moon, mountains, biplane, and weather-window controls. Renders inside a sandboxed iframe.",
  category: "effects",
  dependencies: [],
  files: [
    {
      name: "climacode.tsx",
      target: "components/ui/climacode.tsx",
      source: climacodeSource,
      language: "tsx",
    },
    {
      name: "climacode.html",
      target: "components/ui/climacode.html",
      source: climacodeHtml,
      language: "html",
    },
    {
      name: "demo.tsx",
      target: "components/ui/climacode-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: ClimacodeDemo,
  sourceUrl:
    "https://gist.github.com/LegionBeats/9bf6a7f11fd0ab1845178bb7c3816741",
  author: { name: "@LegionBeats", url: "https://gist.github.com/LegionBeats" },
  addedAt: "2026-07-09",
};