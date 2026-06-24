import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, ArrowLeft, ChevronDown, Sparkles } from "lucide-react";
import { getEntry, registry } from "@/registry";
import {
  aiPrompt,
  aiToolLabel,
  installCommand,
  type AiTool,
  type PackageManager,
} from "@/lib/install-prompts";

export const Route = createFileRoute("/c/$slug")({
  loader: ({ params }) => {
    const exists = registry.some((e) => e.slug === params.slug);
    if (!exists) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const entry = registry.find((e) => e.slug === params.slug);
    const title = entry ? `${entry.name} — Stash` : "Component — Stash";
    const description = entry?.description ?? "Component from the Stash library.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ComponentDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">Component not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm text-primary underline">
          Back to library
        </Link>
      </div>
    </div>
  ),
});

function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}

function ComponentDetail() {
  const { slug } = Route.useLoaderData();
  const entry = getEntry(slug)!;
  const [activeFile, setActiveFile] = useState(entry.files[0].name);
  const file = entry.files.find((f) => f.name === activeFile) ?? entry.files[0];
  const hasCli = Boolean(entry.shadcnCommand);
  const [installTab, setInstallTab] = useState<"cli" | "manual">(
    hasCli ? "cli" : "manual",
  );
  const [pm, setPm] = useState<PackageManager>("bun");
  const [explainerOpen, setExplainerOpen] = useState(false);
  const pmCmd = installCommand(pm, entry.dependencies);
  const aiTools: AiTool[] = ["lovable", "v0", "cursor", "claude-code", "emergent"];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to library
          </Link>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {entry.category}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">{entry.name}</h1>
              <p className="mt-2 max-w-2xl text-muted-foreground">{entry.description}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        {/* Preview */}
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Preview
          </h2>
          <div className="flex min-h-72 items-center justify-center rounded-xl border border-border bg-card">
            <entry.Preview />
          </div>
        </div>

        {/* Copy for AI */}
        <div>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Copy for AI
          </h2>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <CopyButton
                key={tool}
                value={aiPrompt(tool, entry)}
                label={aiToolLabel(tool)}
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Copies a ready-to-paste prompt with the install command and full
            source. Drop it into the target tool's chat.
          </p>
        </div>

        {/* Installation */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Installation
            </h2>
            <button
              onClick={() => setExplainerOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              What am I looking at?
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${explainerOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {explainerOpen && (
            <div className="mb-4 space-y-2 rounded-lg border border-border bg-muted/20 p-4 text-xs text-muted-foreground">
              <p>
                <strong className="text-foreground">CLI</strong> — one terminal
                command that installs the dependencies and writes the files for
                you. Easiest if your project supports it.
              </p>
              <p>
                <strong className="text-foreground">Manual</strong> — do it
                yourself in two steps: install the dependencies, then create
                the source files.
              </p>
              <p>
                <strong className="text-foreground">Dependencies</strong> —
                npm packages the component imports from. Without them, it
                won't run.
              </p>
              <p>
                <strong className="text-foreground">bun / npm / pnpm / yarn</strong>{" "}
                — four interchangeable package-manager tools. Pick whichever
                your project already uses. Lovable uses <code>bun</code>.
              </p>
            </div>
          )}

          {/* CLI / Manual tabs */}
          <div className="mb-4 inline-flex rounded-md border border-border bg-muted/30 p-1">
            {hasCli && (
              <button
                onClick={() => setInstallTab("cli")}
                className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                  installTab === "cli"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                CLI
              </button>
            )}
            <button
              onClick={() => setInstallTab("manual")}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                installTab === "manual"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Manual
            </button>
          </div>

          {installTab === "cli" && entry.shadcnCommand && (
            <div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3">
                <code className="overflow-x-auto text-sm">{entry.shadcnCommand}</code>
                <CopyButton value={entry.shadcnCommand} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Paste into a terminal — or paste into a Lovable chat and I'll
                run it for you.
              </p>
            </div>
          )}

          {installTab === "manual" && (
            <div className="space-y-4">
              {pmCmd && (
                <div>
                  <div className="mb-2 inline-flex rounded-md border border-border bg-muted/30 p-1">
                    {(["bun", "npm", "pnpm", "yarn"] as PackageManager[]).map(
                      (p) => (
                        <button
                          key={p}
                          onClick={() => setPm(p)}
                          className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                            pm === p
                              ? "bg-background text-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {p}
                        </button>
                      ),
                    )}
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3">
                    <code className="overflow-x-auto text-sm">{pmCmd}</code>
                    <CopyButton value={pmCmd} />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Step 1: install dependencies. Step 2: copy the source files
                    below into your project.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Files */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Source files
            </h2>
            <CopyButton value={file.source} label="Copy file" />
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex flex-wrap gap-1 border-b border-border bg-muted/30 p-2">
              {entry.files.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setActiveFile(f.name)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    f.name === activeFile
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/60"
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
            <div className="border-b border-border bg-muted/10 px-4 py-2 font-mono text-xs text-muted-foreground">
              {file.target}
            </div>
            <pre className="max-h-[640px] overflow-auto bg-card p-4 text-xs leading-relaxed">
              <code>{file.source}</code>
            </pre>
          </div>
        </div>

        {/* Deps list */}
        {entry.dependencies.length > 0 && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Dependencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {entry.dependencies.map((d) => (
                <span
                  key={d}
                  className="rounded-md border border-border bg-muted/30 px-2.5 py-1 font-mono text-xs"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}