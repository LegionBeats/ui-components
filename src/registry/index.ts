import type { RegistryEntry } from "./types";
import { morphingButton } from "./components/morphing-button";

/**
 * Add new components here. Each component lives in
 * `src/registry/components/<slug>/` with:
 *   - source files (.tsx)
 *   - a `demo.tsx` exporting the rendered preview
 *   - an `index.ts` exporting a RegistryEntry
 */
export const registry: RegistryEntry[] = [morphingButton];

export const getEntry = (slug: string) =>
  registry.find((e) => e.slug === slug);

export type { RegistryEntry } from "./types";