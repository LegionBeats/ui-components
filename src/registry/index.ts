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
];

export const getEntry = (slug: string) =>
  registry.find((e) => e.slug === slug);

export type { RegistryEntry } from "./types";