import type { RegistryEntry } from "@/registry/types";

export type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

export function installCommand(pm: PackageManager, deps: string[]): string {
  if (deps.length === 0) return "";
  const verb = pm === "npm" ? "install" : "add";
  return `${pm} ${verb} ${deps.join(" ")}`;
}

export type AiTool = "lovable" | "v0" | "cursor" | "bolt";

const toolLabels: Record<AiTool, string> = {
  lovable: "Lovable",
  v0: "v0",
  cursor: "Cursor",
  bolt: "Bolt",
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
  const header =
    tool === "lovable"
      ? `Add the "${entry.name}" component to my project. Install these dependencies with bun: ${deps}. Then create the following files exactly as shown:`
      : tool === "v0"
        ? `Create a new component called "${entry.name}". Dependencies: ${deps}. Files:`
        : tool === "cursor"
          ? `Please add this component to the project. Run \`npm install ${deps}\`, then create these files at the given paths:`
          : `Add this component. Install: \`npm install ${deps}\`. Create these files:`;
  return `${header}\n\n${filesBlock(entry)}`;
}