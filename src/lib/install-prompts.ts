import type { RegistryEntry } from "@/registry/types";

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