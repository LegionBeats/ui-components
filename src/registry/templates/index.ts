import type { TemplateEntry } from "./types";

export const templateRegistry: TemplateEntry[] = [];

export const getTemplate = (slug: string) =>
  templateRegistry.find((t) => t.slug === slug);

export type { TemplateEntry } from "./types";