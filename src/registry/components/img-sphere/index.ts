import type { RegistryEntry } from "../../types";
import ImgSphereDemo from "./demo";
import source from "./img-sphere.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const imgSphere: RegistryEntry = {
  slug: "img-sphere",
  name: "Img Sphere",
  description:
    "Interactive 3D image sphere with Fibonacci distribution, drag-to-rotate with momentum, auto-rotation, and spotlight modal on click.",
  category: "media",
  dependencies: ["lucide-react"],
  shadcnCommand:
    "npx shadcn@latest add https://21st.dev/r/tonyzebastian/img-sphere.json",
  sourceUrl: "https://21st.dev/r/tonyzebastian/img-sphere",
  author: { name: "tonyzebastian", url: "https://21st.dev/tonyzebastian" },
  files: [
    {
      name: "img-sphere.tsx",
      target: "components/ui/img-sphere.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/img-sphere-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: ImgSphereDemo,
  addedAt: "2026-07-21",
};