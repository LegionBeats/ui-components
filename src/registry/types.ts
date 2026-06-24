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
  /** Credit for original author/site. */
  author?: { name: string; url?: string };
  /** Optional one-line shadcn CLI install command, e.g.
   *  "npx shadcn@latest add https://registry.example.com/r/foo.json" */
  shadcnCommand?: string;
  addedAt: string;
};