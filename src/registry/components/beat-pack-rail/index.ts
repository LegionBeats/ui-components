import { createElement } from "react";
import type { RegistryEntry } from "../../types";
import Demo from "./demo";
import source from "./beat-pack-rail.tsx?raw";
import demoSource from "./demo.tsx?raw";
import a from "@/assets/beatpack-self-made-artist.webp.asset.json";
import b from "@/assets/beatpack-tech-n9ne-gold.webp.asset.json";
import c from "@/assets/beatpack-west-coast-legends.webp.asset.json";
import d from "@/assets/beatpack-free-beats.webp.asset.json";
import e from "@/assets/beatpack-snoop-contest.webp.asset.json";
import f from "@/assets/beatpack-industry-icons.webp.asset.json";
import g from "@/assets/beatpack-x-pack.webp.asset.json";

const images = {
  "self-made-artist": a.url, "tech-n9ne-gold": b.url, "west-coast-legends": c.url, "free-beats": d.url,
  "snoop-contest": e.url, "industry-icons": f.url, "x-pack": g.url,
};

export const beatPackRail: RegistryEntry = {
  slug: "beat-pack-rail",
  name: "Beat Pack Rail",
  description: "Vinyl and tape beat packs clipped to a draggable wire — records slide out and tape cases swing open on hover; tapping opens a detail view with a Learn more button.",
  category: "carousels",
  dependencies: [],
  files: [
    { name: "beat-pack-rail.tsx", target: "components/ui/beat-pack-rail.tsx", source, language: "tsx" },
    { name: "beat-pack-rail-demo.tsx", target: "components/beat-pack-rail-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: () => createElement(Demo, { images }),
  addedAt: "2026-11-26",
};
