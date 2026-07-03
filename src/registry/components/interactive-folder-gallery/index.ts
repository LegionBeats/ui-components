import type { RegistryEntry } from "../../types";
import InteractiveFolderGalleryDemo from "./demo";
import source from "./interactive-folder-gallery.tsx?raw";
import demoSource from "./demo.tsx?raw";

export const interactiveFolderGallery: RegistryEntry = {
  slug: "interactive-folder-gallery",
  name: "Interactive Folder Gallery",
  description:
    "A macOS-style folder that opens on click and fans out a stack of draggable photos. Drag a photo down to close.",
  category: "sections",
  dependencies: ["framer-motion"],
  files: [
    {
      name: "interactive-folder-gallery.tsx",
      target: "components/ui/interactive-folder-gallery.tsx",
      source,
      language: "tsx",
    },
    {
      name: "demo.tsx",
      target: "components/ui/interactive-folder-gallery-demo.tsx",
      source: demoSource,
      language: "tsx",
    },
  ],
  Preview: InteractiveFolderGalleryDemo,
  sourceUrl: "https://21st.dev/alexperezcedeno/interactive-folder-gallery",
  author: { name: "alexperezcedeno", url: "https://21st.dev/alexperezcedeno" },
  shadcnCommand:
    "npx shadcn@latest add \"https://21st.dev/r/alexperezcedeno/interactive-folder-gallery\"",
  addedAt: "2026-07-03",
};