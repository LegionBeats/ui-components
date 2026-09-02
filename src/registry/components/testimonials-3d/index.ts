import type { RegistryEntry } from "../../types";
import Testimonials3dDemo from "./demo";
import source from "./testimonials-3d.tsx?raw";
import cssSource from "./testimonials-3d.css?raw";
import demoSource from "./demo.tsx?raw";

export const testimonials3d: RegistryEntry = {
  slug: "testimonials-3d",
  name: "3D Testimonials",
  description:
    "Vertically scrolling testimonial marquees tilted in 3D perspective. Pause on hover, reverse alternating columns.",
  category: "sections",
  dependencies: [],
  shadcnCommand:
    'npx shadcn@latest add "https://21st.dev/r/sean0205/3d-testimonails"',
  sourceUrl: "https://21st.dev/sean0205/3d-testimonails",
  author: { name: "sean0205", url: "https://21st.dev/sean0205" },
  files: [
    { name: "testimonials-3d.tsx", target: "components/ui/testimonials-3d.tsx", source, language: "tsx" },
    { name: "testimonials-3d.css", target: "components/ui/testimonials-3d.css", source: cssSource, language: "css" },
    { name: "demo.tsx", target: "components/ui/testimonials-3d-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: Testimonials3dDemo,
  addedAt: "2026-09-02",
};
