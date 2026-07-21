import type { RegistryEntry } from "../../types";
import ShinyGradientButtonDemo from "./demo";
import source from "./shiny-gradient-button.tsx?raw";
import css from "./shiny-gradient-button.css?raw";
import demoSource from "./demo.tsx?raw";

export const shinyGradientButton: RegistryEntry = {
  slug: "shiny-gradient-button",
  name: "Shiny Gradient Button",
  description:
    "Animated spinning gradient border CTA with red/gold conic gradient, subtle dot pattern, and an arrow that slides on hover.",
  category: "buttons",
  dependencies: ["lucide-react"],
  files: [
    {
      name: "shiny-gradient-button.tsx",
      target: "components/ui/shiny-gradient-button.tsx",
      source,
      language: "tsx",
    },
    {
      name: "shiny-gradient-button.css",
      target: "components/ui/shiny-gradient-button.css",
      source: css,
      language: "css",
    },
    {
      name: "demo.tsx",
      target: "components/ui/shiny-gradient-button-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: ShinyGradientButtonDemo,
  addedAt: "2026-07-21",
};