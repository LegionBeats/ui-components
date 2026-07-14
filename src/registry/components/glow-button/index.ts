import type { RegistryEntry } from "../../types";
import GlowButtonDemo from "./demo";
import glowButtonSource from "./glow-button.tsx?raw";
import glowButtonCss from "./glow-button.css?raw";
import demoSource from "./demo.tsx?raw";

export const glowButton: RegistryEntry = {
  slug: "glow-button",
  name: "Glow Button",
  description:
    "A dark CTA button with a cursor-tracking radial glow, glowing border, and a nudge-on-hover arrow.",
  category: "buttons",
  dependencies: [],
  files: [
    {
      name: "glow-button.tsx",
      target: "components/ui/glow-button.tsx",
      source: glowButtonSource,
      language: "tsx",
    },
    {
      name: "glow-button.css",
      target: "components/ui/glow-button.css",
      source: glowButtonCss,
      language: "css",
    },
    {
      name: "demo.tsx",
      target: "components/ui/glow-button-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: GlowButtonDemo,
  sourceUrl: "https://codepen.io/",
  author: { name: "CodePen" },
  addedAt: "2026-07-14",
};