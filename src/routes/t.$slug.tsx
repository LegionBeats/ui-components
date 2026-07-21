import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Copy, Download, ExternalLink, Sparkles } from "lucide-react";
import { templateRegistry, getTemplate } from "@/registry/templates";
import { aiTemplatePrompt, aiToolLabel, type AiTool } from "@/lib/install-prompts";

export const Route = createFileRoute("/t/$slug")({
  loader: ({ params }) => {
    const exists = templateRegistry.some((t) => t.slug === params.slug);
    if (!exists) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const t = templateRegistry.find((e) => e.slug === params.slug);
    return {
      meta: [
        { title: t ? `${t.name} — Template` : "Template" },
        { name: "description", content: t?.description ?? "Page template" },
      ],
    };
  },
  component: TemplateDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground">Template not found</h1>
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

function downloadHtml(filename: string, html: string) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function TemplateDetail() {
  const { slug } = Route.useLoaderData();
  const t = getTemplate(slug)!;

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
          <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Template
                {t.tags?.length ? ` · ${t.tags.join(" · ")}` : ""}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">{t.name}</h1>
              <p className="mt-2 max-w-2xl text-muted-foreground">{t.description}</p>
              {(t.author || t.sourceUrl) && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {t.author && (
                    <>
                      Via{" "}
                      {t.author.url ? (
                        <a
                          href={t.author.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-foreground"
                        >
                          {t.author.name}
                        </a>
                      ) : (
                        t.author.name
                      )}
                    </>
                  )}
                  {t.author && t.sourceUrl && " · "}
                  {t.sourceUrl && (
                    <a
                      href={t.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 underline hover:text-foreground"
                    >
                      View source <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <CopyButton value={t.html} label="Copy HTML" />
              <button
                onClick={() => downloadHtml(t.filename, t.html)}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-3.5 w-3.5" />
                Download {t.filename}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Live preview
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title={t.name}
              srcDoc={t.html}
              sandbox="allow-scripts allow-same-origin"
              className="h-[720px] w-full bg-white"
            />
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Source
            </h2>
            <CopyButton value={t.html} label="Copy HTML" />
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="border-b border-border bg-muted/10 px-4 py-2 font-mono text-xs text-muted-foreground">
              {t.filename}
            </div>
            <pre className="max-h-[640px] overflow-auto bg-card p-4 text-xs leading-relaxed">
              <code>{t.html}</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}