import type { TemplateEntry } from "./types";
import { antigravityCss } from "./entries/antigravity-css";
import { scratchDiscountTicket } from "./entries/scratch-discount-ticket";
import { cardBeamAnimation } from "./entries/card-beam-animation";

export const templateRegistry: TemplateEntry[] = [
  antigravityCss,
  scratchDiscountTicket,
  cardBeamAnimation,
];

export const getTemplate = (slug: string) =>
  templateRegistry.find((t) => t.slug === slug);

export type { TemplateEntry } from "./types";