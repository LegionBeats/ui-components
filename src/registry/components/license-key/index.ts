import type { RegistryEntry } from "../../types";
import LicenceKeyDemo from "./demo";
import source from "./license-key.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const licenseKey: RegistryEntry = {
  slug: "license-key",
  name: "License Key Input",
  description:
    "Pill-shaped license key entry that morphs open on click with a spring animation. Motion-powered.",
  category: "inputs",
  dependencies: ["motion"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/license-key.json",
  sourceUrl: "https://registry.watermelon.sh/r/license-key.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    {
      name: "license-key.tsx",
      target: "components/ui/license-key.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/license-key-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: LicenceKeyDemo,
  addedAt: "2026-07-21",
};