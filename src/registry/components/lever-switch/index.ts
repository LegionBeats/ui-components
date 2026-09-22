import type { RegistryEntry } from "../../types";
import LeverSwitchDemo from "./demo";
import source from "./lever-switch.tsx?raw";
import cssSource from "./lever-switch.css?raw";
import demoSource from "./demo.tsx?raw";

export const leverSwitch: RegistryEntry = {
  slug: "lever-switch",
  name: "Lever Switch",
  description:
    "A tactile animated machine lever that rocks between states and illuminates its base when switched on.",
  category: "buttons",
  dependencies: [],
  shadcnCommand: "npx @21st-dev/cli add theutkarshmail/lever-switch",
  sourceUrl: "https://21st.dev/theutkarshmail/lever-switch",
  author: {
    name: "@theutkarshmail",
    url: "https://21st.dev/@theutkarshmail",
  },
  files: [
    {
      name: "lever-switch.tsx",
      target: "components/ui/lever-switch.tsx",
      source,
      language: "tsx",
    },
    {
      name: "lever-switch.css",
      target: "components/ui/lever-switch.css",
      source: cssSource,
      language: "css",
    },
    {
      name: "demo.tsx",
      target: "components/ui/lever-switch-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: LeverSwitchDemo,
  addedAt: "2026-09-22",
};