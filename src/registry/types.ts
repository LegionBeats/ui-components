import type { ComponentType } from "react";

/** Display order of the gallery sections. */
export const CATEGORY_ORDER = [
  "buttons",
  "inputs",
  "text",
  "backgrounds",
  "cards",
  "carousels",
  "navigation",
  "sections",
  "effects",
  "misc",
] as const;

export type RegistryCategory = (typeof CATEGORY_ORDER)[number];

export const CATEGORY_LABELS: Record<RegistryCategory, string> = {
  buttons: "Buttons",
  inputs: "Inputs & Forms",
  text: "Text Effects",
  backgrounds: "Backgrounds",
  cards: "Cards & Widgets",
  carousels: "Carousels & Galleries",
  navigation: "Navigation & Disclosure",
  sections: "Page Sections",
  effects: "Visual Effects",
  misc: "Misc",
};

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
  category: RegistryCategory;
  dependencies: string[];
  files: RegistryFile[];
  Preview: ComponentType;
  sourceUrl?: string;
  /** Credit for original author/site. */
  author?: { name: string; url?: string };
  /** Optional one-line shadcn CLI install command, e.g.
   *  "npx shadcn@latest add https://registry.example.com/r/foo.json" */
  shadcnCommand?: string;
  addedAt: string;
};