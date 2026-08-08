import type { RegistryEntry } from "../../types";
import EmojiSpreeChipsDemo from "./demo";
import source from "./emoji-spree-chips.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const emojiSpreeChips: RegistryEntry = {
  slug: "emoji-spree-chips",
  name: "Emoji Spree Choice Chips",
  description:
    "Draggable multi-row interest chips that spray floating emoji particles on select. Motion-powered.",
  category: "inputs",
  dependencies: ["motion", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/emoji-spree-choice-chips.json",
  sourceUrl: "https://registry.watermelon.sh/r/emoji-spree-choice-chips.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    { name: "emoji-spree-chips.tsx", target: "components/ui/emoji-spree-chips.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/emoji-spree-chips-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: EmojiSpreeChipsDemo,
  addedAt: "2026-08-08",
};
