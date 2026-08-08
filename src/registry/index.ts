import type { RegistryEntry } from "./types";
import { morphingButton } from "./components/morphing-button";
import { interactiveFolderGallery } from "./components/interactive-folder-gallery";
import { climacode } from "./components/climacode";
import { visualizerButton } from "./components/visualizer-button";
import { bluetoothKey } from "./components/bluetooth-key";
import { glowButton } from "./components/glow-button";
import { logoLoop } from "./components/logo-loop";
import { shinyGradientButton } from "./components/shiny-gradient-button";
import { imgSphere } from "./components/img-sphere";
import { accordion11 } from "./components/accordion-11";
import { licenseKey } from "./components/license-key";
import { budgetCard } from "./components/budget-card";
import { integrationCard } from "./components/integration-card";
import { subscriptionCalendar } from "./components/subscription-calendar";
import { card12 } from "./components/card-12";
import { onboardingScreen } from "./components/onboarding-screen";
import { spotlightBg } from "./components/spotlight-bg";
import { purpleRadialBg } from "./components/purple-radial-bg";
import { dotGridBg } from "./components/dot-grid-bg";
import { gridGlowBg } from "./components/grid-glow-bg";
import { darkGridSpotlightBg } from "./components/dark-grid-spotlight-bg";
import { animatedTabs } from "./components/animated-tabs";
import { testimonialsColumns } from "./components/testimonials-columns";
import { shiningText } from "./components/shining-text";
import { hero15 } from "./components/hero-15";
import { collapsible7 } from "./components/collapsible-7";
import { listStack } from "./components/list-stack";
import { textBlurIn } from "./components/text-blur-in";
import { metalFx } from "./components/metal-fx";


/**
 * Add new components here. Each component lives in
 * `src/registry/components/<slug>/` with:
 *   - source files (.tsx)
 *   - a `demo.tsx` exporting the rendered preview
 *   - an `index.ts` exporting a RegistryEntry
 */
export const registry: RegistryEntry[] = [
  morphingButton,
  interactiveFolderGallery,
  climacode,
  visualizerButton,
  bluetoothKey,
  glowButton,
  logoLoop,
  shinyGradientButton,
  imgSphere,
  accordion11,
  licenseKey,
  budgetCard,
  integrationCard,
  subscriptionCalendar,
  card12,
  onboardingScreen,
  spotlightBg,
  purpleRadialBg,
  dotGridBg,
  gridGlowBg,
  darkGridSpotlightBg,
  animatedTabs,
  testimonialsColumns,
  shiningText,
  hero15,
  collapsible7,
  listStack,
  textBlurIn,
  metalFx,
];


export const getEntry = (slug: string) =>
  registry.find((e) => e.slug === slug);

export type { RegistryEntry } from "./types";