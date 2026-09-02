import type { RegistryEntry } from "../../types";
import InteractiveTimelineDemo from "./demo";
import source from "./interactive-timeline.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const interactiveTimeline: RegistryEntry = {
  slug: "interactive-timeline",
  name: "3D Interactive Timeline",
  description:
    "Immersive vertical timeline with 3D perspective cards that tilt toward your cursor, pulsing active nodes, and expandable descriptions.",
  category: "sections",
  dependencies: ["framer-motion"],
  shadcnCommand:
    "npx @21st-dev/cli add dhileepkumargm/3d-interactive-timeline",
  sourceUrl: "https://21st.dev/dhileepkumargm/components/3d-interactive-timeline",
  author: {
    name: "dhileepkumargm",
    url: "https://21st.dev/dhileepkumargm",
  },
  files: [
    {
      name: "interactive-timeline.tsx",
      target: "components/ui/interactive-timeline.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/interactive-timeline-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: InteractiveTimelineDemo,
  addedAt: "2026-09-02",
};
