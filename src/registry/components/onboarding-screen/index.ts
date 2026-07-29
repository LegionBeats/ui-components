import type { RegistryEntry } from "../../types";
import OnboardingScreenDemo from "./demo";
import source from "./onboarding-screen.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const onboardingScreen: RegistryEntry = {
  slug: "onboarding-screen",
  name: "Onboarding Screen",
  description:
    "Two-panel business onboarding screen with animated form fields, tooltip, and logo upload. Motion-powered.",
  category: "sections",
  dependencies: ["motion", "lucide-react", "react-icons"],
  shadcnCommand:
    "npx shadcn@latest add https://registry.watermelon.sh/r/onboarding-screen.json",
  sourceUrl: "https://registry.watermelon.sh/r/onboarding-screen.json",
  author: { name: "Watermelon UI", url: "https://registry.watermelon.sh" },
  files: [
    { name: "onboarding-screen.tsx", target: "components/ui/onboarding-screen.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/onboarding-screen-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: OnboardingScreenDemo,
  addedAt: "2026-07-29",
};