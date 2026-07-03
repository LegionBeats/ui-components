import type { RegistryEntry } from "@/registry/types";
import type { DesignEntry } from "@/registry/designs/types";

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
  | "google-ai-studio";

const toolLabels: Record<AiTool, string> = {
  lovable: "Lovable",
  v0: "v0",
  cursor: "Cursor",
  "claude-code": "Claude Code",
  emergent: "Emergent",
  "google-ai-studio": "Google AI Studio",
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

export function aiPrompt(tool: AiTool, entry: RegistryEntry): string {
  const deps = entry.dependencies.join(" ");
  const headers: Record<AiTool, string> = {
    lovable: `Add the "${entry.name}" component to my project. Install these dependencies with bun: ${deps}. Then create the following files exactly as shown:`,
    v0: `Create a new component called "${entry.name}". Dependencies: ${deps}. Files:`,
    cursor: `Please add this component to the project. Run \`npm install ${deps}\`, then create these files at the given paths:`,
    "claude-code": `Add the "${entry.name}" component. Run \`npm install ${deps}\` (or the project's package manager equivalent), then create the following files at the exact paths shown:`,
    emergent: `Add the "${entry.name}" component to this project. Install dependencies: ${deps}. Then create these files exactly as shown:`,
    "google-ai-studio": `I want to add the "${entry.name}" React component to my project. First, run \`npm install ${deps}\` to install the required dependencies. Then create each of the following files at the exact path shown, using the contents provided verbatim:`,
  };
  return `${headers[tool]}\n\n${filesBlock(entry)}`;
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
  };
  return headers[tool];
}