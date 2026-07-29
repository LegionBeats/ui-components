import type { RegistryEntry } from "../../types";
import TestimonialsColumnsDemo from "./demo";
import source from "./testimonials-columns.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const testimonialsColumns: RegistryEntry = {
  slug: "testimonials-columns",
  name: "Testimonials Columns",
  description:
    "Vertically scrolling testimonial columns with looping motion. Great for landing page social proof sections.",
  category: "sections",
  dependencies: ["motion"],
  shadcnCommand:
    "npx shadcn@latest add https://21st.dev/r/sshahaider/testimonials-columns-1",
  sourceUrl: "https://21st.dev/sshahaider/testimonials-columns-1",
  author: { name: "S. Shahaider", url: "https://21st.dev/sshahaider" },
  files: [
    { name: "testimonials-columns.tsx", target: "components/ui/testimonials-columns.tsx", source, language: "tsx" },
    { name: "demo.tsx", target: "components/ui/testimonials-columns-demo.tsx", source: demoSource, language: "tsx" },
  ],
  Preview: TestimonialsColumnsDemo,
  addedAt: "2026-07-29",
};