import type { ComponentType } from "react";

export type RegistryFile = {
  name: string;
  target: string;
  source: string;
  language?: string;
};

export type RegistryEntry = {
  slug: string;
  name: string;
  description: string;
  category: "buttons" | "inputs" | "sections" | "effects" | "misc";
  dependencies: string[];
  files: RegistryFile[];
  Preview: ComponentType;
  sourceUrl?: string;
  addedAt: string;
};