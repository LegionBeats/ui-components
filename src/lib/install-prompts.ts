import type { RegistryEntry } from "@/registry/types";
import type { DesignEntry } from "@/registry/designs/types";
import type { TemplateEntry } from "@/registry/templates/types";

export type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

export function installCommand(pm: PackageManager, deps: string[]): string {
  if (deps.length === 0) return "";
  const verb = pm === "npm" ? "install" : "add";
  return `${pm} ${verb} ${deps.join(" ")}`;
}

export type AiTool =
  | "lovable"
  | "v0"
  | "cursor"
  | "claude-code"
  | "emergent"
  | "google-ai-studio"
  | "gohighlevel";

const toolLabels: Record<AiTool, string> = {
  lovable: "Lovable",
  v0: "v0",
  cursor: "Cursor",
  "claude-code": "Claude Code",
  emergent: "Emergent",
  "google-ai-studio": "Google AI Studio",
  gohighlevel: "GoHighLevel",
};

export function aiToolLabel(tool: AiTool): string {
  return toolLabels[tool];
}

function filesBlock(entry: RegistryEntry): string {
  return entry.files
    .map(
      (f) =>
        `File: ${f.target}\n\`\`\`${f.language ?? "tsx"}\n${f.source}\n\`\`\``,
    )
    .join("\n\n");
}

export function copyAllFiles(entry: RegistryEntry): string {
  return entry.files
    .map(
      (f) =>
        `// ${f.target}\n\n\`\`\`${f.language ?? "tsx"}\n${f.source}\n\`\`\``,
    )
    .join("\n\n");
}

function componentUsageExample(entry: RegistryEntry): string {
  const mainFile = entry.files.find((f) => f.target.endsWith(".tsx"));
  if (!mainFile) return "";
  const importName = mainFile.target
    .replace(/.*\//, "")
    .replace(/\.tsx$/, "");
  const componentName = importName
    .split("-")
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join("");
  return `

Usage example:

\`\`\`tsx
import { ${componentName} } from "${mainFile.target.replace(/\.tsx$/, "")}";

export default function Example() {
  return (
    <div className="p-8">
      <${componentName} />
    </div>
  );
}
\`\`\``;
}

export function aiPrompt(tool: AiTool, entry: RegistryEntry): string {
  const deps = entry.dependencies.join(" ");
  const headers: Record<AiTool, string> = {
    lovable: `Add the "${entry.name}" component to my project. It is a React component that uses Tailwind CSS for styling and imports from the dependencies listed below.\n\nStep 1: run \`bun add ${deps}\` to install dependencies.\nStep 2: create the following files at the exact paths shown, using the source contents verbatim.\nStep 3: export a default example from a temporary page so I can preview the component immediately.\n\nFiles to create:`,
    v0: `Create a new component called "${entry.name}". Dependencies: ${deps}. Files:`,
    cursor: `Please add this component to the project. Run \`npm install ${deps}\`, then create these files at the given paths:`,
    "claude-code": `Add the "${entry.name}" component. Run \`npm install ${deps}\` (or the project's package manager equivalent), then create the following files at the exact paths shown:`,
    emergent: `Add the "${entry.name}" component to this project. Install dependencies: ${deps}. Then create these files exactly as shown:`,
    "google-ai-studio": `I want to add the "${entry.name}" React component to my project. First, run \`npm install ${deps}\` to install the required dependencies. Then create each of the following files at the exact path shown, using the contents provided verbatim:`,
    gohighlevel: `Convert the following React + Tailwind component into a single self-contained snippet I can paste into a GoHighLevel Custom HTML / Custom Code element (funnel or website builder).\n\nRequirements:\n- Output ONE block of plain HTML with an inline <style> tag and, if needed, an inline <script> tag. No React, no JSX, no build step, no external framework imports.\n- Replace Tailwind utility classes with equivalent plain CSS scoped under a unique wrapper class (e.g. .ghl-${entry.slug}) so styles do not leak into the rest of the page.\n- Replace lucide-react / react-icons with inline SVGs.\n- Replace framer-motion / motion with CSS transitions/animations or small vanilla JS. If an effect truly can't be reproduced without a React runtime, degrade gracefully and note it in an HTML comment.\n- Keep the visual result as close to the original as possible; simplify interactivity only where React is strictly required.\n- Return only the final HTML snippet, ready to paste.\n\nOriginal component source for reference:`,
  };
  return `${headers[tool]}\n\n${filesBlock(entry)}${componentUsageExample(entry)}`;
}

export function aiDesignPrompt(tool: AiTool, entry: DesignEntry): string {
  const promptBlock = entry.prompt
    ? `\n\n---\n\n${entry.prompt.source}`
    : "";
  const source = entry.sourceUrl ? ` (source: ${entry.sourceUrl})` : "";
  const headers: Record<AiTool, string> = {
    lovable: `Restyle my current project to match the "${entry.name}" design system${source}. Apply the palette, typography, spacing, radii, and overall visual language described below to the existing pages and components — don't add new pages. Use design tokens in src/styles.css rather than hardcoded values.${promptBlock}`,
    v0: `Use this design system spec as the visual language for the component you generate next${source}.${promptBlock}`,
    cursor: `Apply the following design system to this project. Update the Tailwind theme / CSS tokens and refactor existing components to match. Do not add new pages.${promptBlock}`,
    "claude-code": `Apply this design system to the current project. Update the theme tokens (colors, typography, spacing, radii, shadows) and adjust existing components to match. Keep the routes and content unchanged.${promptBlock}`,
    emergent: `Restyle this project to match the "${entry.name}" design system${source}. Update tokens and refactor existing components — no new pages.${promptBlock}`,
    "google-ai-studio": `I'm going to give you a design system spec. Use it as the visual language for a React + Tailwind project: derive the color tokens, typography scale, spacing, radii, and component styles from it and describe how you would apply them.${promptBlock}`,
    gohighlevel: `I'm styling pages inside GoHighLevel's funnel/website builder (Custom HTML/CSS/JS blocks — no React, no Tailwind build). Translate the "${entry.name}" design system${source} into: (1) a palette of hex values I can plug into GHL's global colors, (2) recommended Google Fonts + weights with the exact <link> tag, (3) a small plain-CSS snippet with variables and base styles for headings, body, buttons, and cards that I can paste into a global Custom CSS block. Keep it framework-free.${promptBlock}`,
  };
  return headers[tool];
}