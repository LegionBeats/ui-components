import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Dev-only importer for shadcn-format component registries.
 * Writes files into src/registry/components/<slug>/ and appends to src/registry/index.ts.
 * Only works inside the Lovable editor environment (filesystem writes).
 */

const RegistryFileSchema = z.object({
  path: z.string(),
  content: z.string(),
  type: z.string().optional(),
  target: z.string().optional(),
});

const RegistryJsonSchema = z.object({
  name: z.string(),
  type: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(RegistryFileSchema).min(1),
});

function extractUrl(input: string): string {
  const trimmed = input.trim();
  // Pull first https URL out (handles `npx shadcn@latest add <url>` form).
  const match = trimmed.match(/https?:\/\/\S+/);
  if (!match) throw new Error("No https URL found in input.");
  return match[0].replace(/[)\]\s]+$/, "");
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function safeFileName(p: string): string {
  // Strip directories and unsafe segments; keep just the final filename.
  const parts = p.split(/[\\/]/);
  const last = parts[parts.length - 1] || "file.tsx";
  if (last.includes("..")) throw new Error("Unsafe file path");
  return last;
}

function isDemoFile(f: z.infer<typeof RegistryFileSchema>): boolean {
  const name = safeFileName(f.path).toLowerCase();
  const type = (f.type ?? "").toLowerCase();
  return (
    name.includes("demo") ||
    name.includes("example") ||
    type.includes("example") ||
    type.includes("demo")
  );
}

export type ImportPreview = {
  url: string;
  slug: string;
  name: string;
  description: string;
  dependencies: string[];
  files: { name: string; isDemo: boolean; bytes: number }[];
};

export const fetchRegistry = createServerFn({ method: "POST" })
  .inputValidator((input: { input: string }) =>
    z.object({ input: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }): Promise<ImportPreview> => {
    const url = extractUrl(data.input);
    if (!url.startsWith("https://"))
      throw new Error("Only https:// URLs are allowed.");
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok)
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    const json = await res.json();
    const parsed = RegistryJsonSchema.parse(json);
    const slug = slugify(parsed.name);
    return {
      url,
      slug,
      name: titleCase(slug),
      description: parsed.description ?? "",
      dependencies: parsed.dependencies ?? [],
      files: parsed.files.map((f) => ({
        name: safeFileName(f.path),
        isDemo: isDemoFile(f),
        bytes: f.content.length,
      })),
    };
  });

const SaveInputSchema = z.object({
  url: z.string().url(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9][a-z0-9-]*$/, "lowercase letters, digits, hyphens only"),
  name: z.string().min(1).max(120),
  description: z.string().max(500),
  category: z.enum(["buttons", "inputs", "sections", "effects", "misc"]),
  sourceUrl: z.string().url().optional().or(z.literal("")),
  authorName: z.string().max(120).optional().or(z.literal("")),
  authorUrl: z.string().url().optional().or(z.literal("")),
});

export type SaveResult = { slug: string; createdFiles: string[] };

export const saveComponent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SaveInputSchema.parse(input))
  .handler(async ({ data }): Promise<SaveResult> => {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");

    // Re-fetch registry server-side so we control exactly what gets written.
    const res = await fetch(data.url, { redirect: "follow" });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const parsed = RegistryJsonSchema.parse(await res.json());

    const cwd = process.cwd();
    const componentDir = path.join(
      cwd,
      "src",
      "registry",
      "components",
      data.slug,
    );

    try {
      await fs.access(componentDir);
      throw new Error(`Component "${data.slug}" already exists.`);
    } catch (e) {
      // ENOENT = good, anything else = bubble up.
      if ((e as NodeJS.ErrnoException).code !== "ENOENT")
        if ((e as Error).message?.includes("already exists")) throw e;
    }

    await fs.mkdir(componentDir, { recursive: true });

    // Pick a "main" component file (first non-demo) and a "demo" file.
    const demoFile = parsed.files.find(isDemoFile);
    const mainFile =
      parsed.files.find((f) => !isDemoFile(f)) ?? parsed.files[0];

    const mainName = safeFileName(mainFile.path);
    const mainBase = mainName.replace(/\.[tj]sx?$/, "");
    const createdFiles: string[] = [];

    // Write the main component file under its original filename.
    const mainTargetName = `${data.slug}.tsx`;
    await fs.writeFile(
      path.join(componentDir, mainTargetName),
      mainFile.content,
      "utf8",
    );
    createdFiles.push(mainTargetName);

    // Write any other non-demo files alongside.
    const extraFiles = parsed.files.filter(
      (f) => f !== mainFile && !isDemoFile(f),
    );
    for (const f of extraFiles) {
      const n = safeFileName(f.path);
      await fs.writeFile(path.join(componentDir, n), f.content, "utf8");
      createdFiles.push(n);
    }

    // Demo: use provided demo file if present, else generate a stub that
    // imports the main component and renders it with no props.
    let demoSource: string;
    if (demoFile) {
      demoSource = demoFile.content;
    } else {
      demoSource = `import ${exportName(mainBase)} from "./${data.slug}";

export default function Demo() {
  return <${exportName(mainBase)} />;
}
`;
    }
    await fs.writeFile(
      path.join(componentDir, "demo.tsx"),
      demoSource,
      "utf8",
    );
    createdFiles.push("demo.tsx");

    // Write index.ts with the RegistryEntry.
    const indexSrc = buildIndexTs({
      slug: data.slug,
      name: data.name,
      description: data.description,
      category: data.category,
      dependencies: parsed.dependencies ?? [],
      mainFileName: mainTargetName,
      extraFileNames: createdFiles.filter(
        (n) => n !== mainTargetName && n !== "demo.tsx",
      ),
      sourceUrl: data.sourceUrl || undefined,
      authorName: data.authorName || undefined,
      authorUrl: data.authorUrl || undefined,
      shadcnCommand: `npx shadcn@latest add ${data.url}`,
    });
    await fs.writeFile(path.join(componentDir, "index.ts"), indexSrc, "utf8");
    createdFiles.push("index.ts");

    // Append to src/registry/index.ts.
    const registryIndexPath = path.join(cwd, "src", "registry", "index.ts");
    const current = await fs.readFile(registryIndexPath, "utf8");
    const exportVarName = camel(data.slug);
    if (current.includes(`from "./components/${data.slug}"`)) {
      throw new Error("Registry already references this slug.");
    }
    const importLine = `import { ${exportVarName} } from "./components/${data.slug}";\n`;
    const updated = current
      // add import after the last existing component import
      .replace(
        /(import \{ [^}]+ \} from "\.\/components\/[^"]+";\n)(?!import )/,
        `$1${importLine}`,
      )
      // add to the registry array (before the closing bracket)
      .replace(
        /export const registry: RegistryEntry\[\] = \[([^\]]*)\];/,
        (_, inner) => {
          const items = inner
            .split(",")
            .map((s: string) => s.trim())
            .filter(Boolean);
          items.push(exportVarName);
          return `export const registry: RegistryEntry[] = [${items.join(", ")}];`;
        },
      );
    await fs.writeFile(registryIndexPath, updated, "utf8");

    return { slug: data.slug, createdFiles };
  });

function exportName(base: string): string {
  const parts = base.split(/[-_.]/).filter(Boolean);
  return parts.map((p) => p[0].toUpperCase() + p.slice(1)).join("");
}

function camel(slug: string): string {
  const parts = slug.split("-").filter(Boolean);
  return (
    parts[0] +
    parts
      .slice(1)
      .map((p) => p[0].toUpperCase() + p.slice(1))
      .join("")
  );
}

function buildIndexTs(args: {
  slug: string;
  name: string;
  description: string;
  category: string;
  dependencies: string[];
  mainFileName: string;
  extraFileNames: string[];
  sourceUrl?: string;
  authorName?: string;
  authorUrl?: string;
  shadcnCommand: string;
}): string {
  const varName = camel(args.slug);
  const today = new Date().toISOString().slice(0, 10);
  const allFiles = [args.mainFileName, ...args.extraFileNames];
  const rawImports = allFiles
    .map(
      (f, i) =>
        `import source${i} from "./${f}?raw";`,
    )
    .join("\n");
  const fileEntries = allFiles
    .map(
      (f, i) =>
        `    { name: "${f}", target: "components/ui/${f}", source: source${i}, language: "tsx" }`,
    )
    .join(",\n");
  const demoImport = `import demoSource from "./demo.tsx?raw";`;
  const demoEntry = `    { name: "demo.tsx", target: "components/ui/${args.slug}-demo.tsx", source: demoSource, language: "tsx" }`;
  const authorLine = args.authorName
    ? `  author: { name: ${JSON.stringify(args.authorName)}${args.authorUrl ? `, url: ${JSON.stringify(args.authorUrl)}` : ""} },\n`
    : "";
  const sourceUrlLine = args.sourceUrl
    ? `  sourceUrl: ${JSON.stringify(args.sourceUrl)},\n`
    : "";
  return `import type { RegistryEntry } from "../../types";
import Demo from "./demo";
${rawImports}
${demoImport}

export const ${varName}: RegistryEntry = {
  slug: "${args.slug}",
  name: ${JSON.stringify(args.name)},
  description: ${JSON.stringify(args.description)},
  category: "${args.category}",
  dependencies: ${JSON.stringify(args.dependencies)},
  files: [
${fileEntries},
${demoEntry},
  ],
  Preview: Demo,
${sourceUrlLine}${authorLine}  shadcnCommand: ${JSON.stringify(args.shadcnCommand)},
  addedAt: "${today}",
};
`;
}