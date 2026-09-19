import type { RegistryEntry } from "../../types";
import AsmrBackgroundDemo from "./demo";
import source from "./asmr-background.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const asmrBackground: RegistryEntry = {
  slug: "asmr-background",
  name: "ASMR Background",
  description:
    "A dense glass-shard particle field with an interactive magnetic vortex and friction glow that follows the pointer.",
  category: "backgrounds",
  dependencies: [],
  shadcnCommand:
    'npx shadcn@latest add "https://21st.dev/r/ashishrajwaniai01/asmr-background"',
  sourceUrl: "https://21st.dev/ashishrajwaniai01/asmr-background",
  author: {
    name: "ashishrajwaniai01",
    url: "https://21st.dev/ashishrajwaniai01",
  },
  files: [
    {
      name: "asmr-background.tsx",
      target: "components/ui/asmr-background.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/asmr-background-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: AsmrBackgroundDemo,
  addedAt: "2026-09-19",
};