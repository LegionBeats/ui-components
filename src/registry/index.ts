import type { RegistryEntry } from "./types";
import { morphingButton } from "./components/morphing-button";
import { interactiveFolderGallery } from "./components/interactive-folder-gallery";
import { climacode } from "./components/climacode";
import { visualizerButton } from "./components/visualizer-button";
import { bluetoothKey } from "./components/bluetooth-key";

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
];

export const getEntry = (slug: string) =>
  registry.find((e) => e.slug === slug);

export type { RegistryEntry } from "./types";