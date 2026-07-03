import type { DesignEntry } from "./types";
import { framer } from "./entries/framer";

export const designRegistry: DesignEntry[] = [framer];

export const getDesign = (slug: string) =>
  designRegistry.find((d) => d.slug === slug);

export type { DesignEntry } from "./types";