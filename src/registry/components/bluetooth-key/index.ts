import type { RegistryEntry } from "../../types";
import BluetoothKeyDemo from "./demo";
import bluetoothKeySource from "./bluetooth-key.tsx?raw";
import bluetoothKeyCss from "./bluetooth-key.css?raw";
import demoSource from "./demo.tsx?raw";

export const bluetoothKey: RegistryEntry = {
  slug: "bluetooth-key",
  name: "Bluetooth Key",
  description:
    "A tactile skeuomorphic Bluetooth toggle with an amber LED, glow, noise, and animated symbol paths. Pure SVG + CSS.",
  category: "buttons",
  dependencies: [],
  files: [
    {
      name: "bluetooth-key.tsx",
      target: "components/ui/bluetooth-key.tsx",
      source: bluetoothKeySource,
      language: "tsx",
    },
    {
      name: "bluetooth-key.css",
      target: "components/ui/bluetooth-key.css",
      source: bluetoothKeyCss,
      language: "css",
    },
    {
      name: "demo.tsx",
      target: "components/ui/bluetooth-key-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: BluetoothKeyDemo,
  sourceUrl: "https://21st.dev/theutkarshmail/bluetooth-key",
  author: {
    name: "@theutkarshmail",
    url: "https://21st.dev/@theutkarshmail",
  },
  shadcnCommand: "npx shadcn@latest add https://21st.dev/r/theutkarshmail/bluetooth-key",
  addedAt: "2026-07-09",
};