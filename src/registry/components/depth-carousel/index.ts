import type { RegistryEntry } from "../../types";
import DepthCarouselDemo from "./demo";
import source from "./depth-carousel.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const depthCarousel: RegistryEntry = {
  slug: "depth-carousel",
  name: "Depth Carousel",
  description:
    "GSAP-powered 3D depth carousel with drag, autoplay, blur falloff, tilt, controls, and indicators.",
  category: "sections",
  dependencies: ["gsap"],
  sourceUrl: "https://reactbits.dev",
  author: { name: "React Bits", url: "https://reactbits.dev" },
  files: [
    { name: "depth-carousel.tsx", target: "components/ui/depth-carousel.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/depth-carousel-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: DepthCarouselDemo,
  addedAt: "2026-08-08",
};
