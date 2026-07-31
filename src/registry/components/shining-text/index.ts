import type { RegistryEntry } from "../../types";
import ShiningTextDemo from "./demo";
import source from "./shining-text.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const shiningText: RegistryEntry = {
  slug: "shining-text",
  name: "Shining Text",
  description:
    "Text with a looping shine sweep driven by an animated gradient background clip. Motion-powered.",
  category: "effects",
  dependencies: ["motion"],
  shadcnCommand:
    "npx shadcn@latest add https://21st.dev/r/preetsuthar17/shining-text",
  sourceUrl: "https://21st.dev/r/preetsuthar17/shining-text",
  author: { name: "preetsuthar17", url: "https://21st.dev/preetsuthar17" },
  files: [
    {
      name: "shining-text.tsx",
      target: "components/ui/shining-text.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/shining-text-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: ShiningTextDemo,
  addedAt: "2026-07-31",
};
