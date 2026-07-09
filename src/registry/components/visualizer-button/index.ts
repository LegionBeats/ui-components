import type { RegistryEntry } from "../../types";
import VisualizerButtonDemo from "./demo";
import visualizerButtonSource from "./visualizer-button.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const visualizerButton: RegistryEntry = {
  slug: "visualizer-button",
  name: "Visualizer Button",
  description:
    "An outline button that doubles as an audio player — five randomized bars animate while an <audio> element plays.",
  category: "buttons",
  dependencies: ["@/components/ui/button"],
  files: [
    {
      name: "visualizer-button.tsx",
      target: "components/ui/visualizer-button.tsx",
      source: visualizerButtonSource,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/visualizer-button-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: VisualizerButtonDemo,
  sourceUrl: "https://21st.dev/ruixen.ui/visualizer-button",
  author: { name: "ruixen.ui", url: "https://21st.dev/ruixen.ui" },
  shadcnCommand: "npx shadcn@latest add https://21st.dev/r/ruixen.ui/visualizer-button",
  addedAt: "2026-07-09",
};