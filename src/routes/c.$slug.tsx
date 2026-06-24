import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, ArrowLeft } from "lucide-react";
import { getEntry, registry } from "@/registry";
import type { RegistryEntry } from "@/registry";

export const Route = createFileRoute("/c/$slug")({
  loader: ({ params }) => {
    const entry = getEntry(params.slug);
    if (!entry) throw notFound();
    return { entry };
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
  const { entry } = Route.useLoaderData() as { entry: RegistryEntry };
  const [activeFile, setActiveFile] = useState(entry.files[0].name);
  const file = entry.files.find((f) => f.name === activeFile) ?? entry.files[0];

  const installCmd =
    entry.dependencies.length > 0
      ? `npm install ${entry.dependencies.join(" ")}`
      : "";

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

        {/* Install */}
        {entry.shadcnCommand && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Install with shadcn CLI
              </h2>
              <CopyButton value={entry.shadcnCommand} />
            </div>
            <pre className="overflow-x-auto rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm">
              <code>{entry.shadcnCommand}</code>
            </pre>
            <p className="mt-2 text-xs text-muted-foreground">
              One-shot install — pulls files and dependencies into any shadcn-configured project.
            </p>
          </div>
        )}

        {installCmd && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Or install dependencies manually
              </h2>
              <CopyButton value={installCmd} />
            </div>
            <pre className="overflow-x-auto rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm">
              <code>{installCmd}</code>
            </pre>
          </div>
        )}

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