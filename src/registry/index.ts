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
import { depthCarousel } from "./components/depth-carousel";
import { emojiSpreeChips } from "./components/emoji-spree-chips";
import { thinkingOrb } from "./components/thinking-orb";
import { heroSection } from "./components/hero-section";
import { mScrollProgress3 } from "./components/m-scroll-progress-3";
import { vAvatar9 } from "./components/v-avatar-9";
import { vAvatar8 } from "./components/v-avatar-8";
import { vCard6 } from "./components/v-card-6";
import { vCard7 } from "./components/v-card-7";
import { vCard8 } from "./components/v-card-8";
import { typewriter } from "./components/typewriter";
import { countingNumber } from "./components/counting-number";
import { textShimmer } from "./components/text-shimmer";
import { textHighlight } from "./components/text-highlight";
import { rollingText } from "./components/rolling-text";
import { scrollVelocityText } from "./components/scroll-velocity-text";
import { animatedGradientWithSvg } from "./components/animated-gradient-with-svg";




/**
 * Add new components here. Each component lives in
 * `src/registry/components/<slug>/` with:
 *   - source files (.tsx)
 *   - a `demo.tsx` exporting the rendered preview
 *   - an `index.ts` exporting a RegistryEntry
 */
export const registry: RegistryEntry[] = [
  animatedGradientWithSvg,
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
  depthCarousel,
  emojiSpreeChips,
  thinkingOrb,
  heroSection,
  mScrollProgress3,
  vAvatar9,
  vAvatar8,
  vCard6,
  vCard7,
  vCard8,
  typewriter,
  countingNumber,
  textShimmer,
  textHighlight,
  rollingText,
  scrollVelocityText,
];




export const getEntry = (slug: string) =>
  registry.find((e) => e.slug === slug);

export type { RegistryEntry } from "./types";