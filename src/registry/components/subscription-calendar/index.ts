import type { RegistryEntry } from "../../types";
import SubscriptionCalendarDemo from "./demo";
import source from "./subscription-calendar.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const subscriptionCalendar: RegistryEntry = {
  slug: "subscription-calendar",
  name: "Subscription Calendar",
  description:
    "Animated monthly subscription calendar with day indicators, search, add, and summary states.",
  category: "sections",
  dependencies: ["motion", "react-icons", "lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/subscription-calendar.json",
  sourceUrl: "https://registry.watermelon.sh/r/subscription-calendar.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    {
      name: "subscription-calendar.tsx",
      target: "components/ui/subscription-calendar.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/subscription-calendar-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: SubscriptionCalendarDemo,
  addedAt: "2026-07-21",
};