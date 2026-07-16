import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Copy, Sparkles } from "lucide-react";
import { designRegistry, getDesign } from "@/registry/designs";
import { aiDesignPrompt, aiToolLabel, type AiTool } from "@/lib/install-prompts";

export const Route = createFileRoute("/d/$slug")({
  loader: ({ params }) => {
    const exists = designRegistry.some((d) => d.slug === params.slug);
    if (!exists) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const d = designRegistry.find((e) => e.slug === params.slug);
    const title = d ? `${d.name} — Design` : "Design";
    return {
      meta: [
        { title },
        { name: "description", content: d?.description ?? "Design system" },
      ],
    };
  },
  component: DesignDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">Design not found</h1>
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

function DesignDetail() {
  const { slug } = Route.useLoaderData();
  const d = getDesign(slug)!;
  const aiTools: AiTool[] = [
    "lovable",
    "v0",
    "cursor",
    "claude-code",
    "emergent",
    "google-ai-studio",
    "gohighlevel",
  ];

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
          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Design {d.tool ? `· ${d.tool}` : ""}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">{d.name}</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">{d.description}</p>
            {(d.author || d.sourceUrl) && (
              <p className="mt-2 text-xs text-muted-foreground">
                {d.author && (
                  <>
                    Via{" "}
                    {d.author.url ? (
                      <a
                        href={d.author.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-foreground"
                      >
                        {d.author.name}
                      </a>
                    ) : (
                      d.author.name
                    )}
                  </>
                )}
                {d.author && d.sourceUrl && " · "}
                {d.sourceUrl && (
                  <a
                    href={d.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-foreground"
                  >
                    View source
                  </a>
                )}
              </p>
            )}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        {/* Screenshot */}
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Reference
          </h2>
          <div className="max-h-[80vh] overflow-auto rounded-xl border border-border bg-card">
            <img
              src={d.screenshotUrl}
              alt={d.name}
              className="block h-auto max-w-none w-auto mx-auto"
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Shown at native resolution — scroll to see the full spec.
          </p>
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
                value={aiDesignPrompt(tool, d)}
                label={aiToolLabel(tool)}
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Copies a ready-to-paste prompt including the full design spec. Drop
            it into the target tool's chat to restyle a project.
          </p>
        </div>

        {/* CLI */}
        {d.cliCommand && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              CLI
            </h2>
            <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3">
              <code className="overflow-x-auto text-sm">{d.cliCommand}</code>
              <CopyButton value={d.cliCommand} />
            </div>
          </div>
        )}

        {/* Prompt markdown */}
        {d.prompt && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Design spec
              </h2>
              <CopyButton value={d.prompt.source} label="Copy markdown" />
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="border-b border-border bg-muted/10 px-4 py-2 font-mono text-xs text-muted-foreground">
                {d.prompt.filename}
              </div>
              <pre className="max-h-[640px] overflow-auto bg-card p-4 text-xs leading-relaxed whitespace-pre-wrap">
                <code>{d.prompt.source}</code>
              </pre>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}