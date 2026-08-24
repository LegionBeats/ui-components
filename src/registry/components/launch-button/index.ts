import type { RegistryEntry } from "../../types";
import LaunchButtonDemo from "./demo";
import source from "./launch-button.tsx?raw";
import css from "./launch-button.css?raw";
import demoSource from "./demo.tsx?raw";

export const launchButton: RegistryEntry = {
  slug: "launch-button",
  name: "Launch Button",
  description:
    "A machined metal CTA with a live WebGL starfield portal inside — stars streak into warp on hover, a white flash fires on click, plus a blur-in intro and cursor parallax.",
  category: "buttons",
  dependencies: [],
  files: [
    {
      name: "launch-button.tsx",
      target: "components/ui/launch-button.tsx",
      source,
      language: "tsx",
    },
    {
      name: "launch-button.css",
      target: "components/ui/launch-button.css",
      source: css,
      language: "css",
    },
    {
      name: "demo.tsx",
      target: "components/ui/launch-button-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: LaunchButtonDemo,
  addedAt: "2026-08-24",
};
