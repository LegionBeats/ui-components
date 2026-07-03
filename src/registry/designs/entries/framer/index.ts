import type { DesignEntry } from "../../types";
import screenshot from "./screenshot.png.asset.json";
import prompt from "./prompt.md?raw";

export const framer: DesignEntry = {
  slug: "framer",
  name: "Framer",
  description:
    "Confident dark-canvas builder marketing site. Pure black surfaces, white GT Walsheim display type with aggressive negative tracking, and a single blue accent reserved for links.",
  tool: "Framer",
  sourceUrl: "https://getdesign.md/framer/design-md",
  author: { name: "getdesign.md", url: "https://getdesign.md" },
  screenshotUrl: screenshot.url,
  prompt: { filename: "framer.design.md", source: prompt },
  cliCommand: "npx getdesign@latest add framer",
  addedAt: "2026-07-03",
};