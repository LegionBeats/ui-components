import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  fetchRegistry,
  saveComponent,
  type ImportPreview,
} from "@/lib/importer.functions";

export const Route = createFileRoute("/admin-x7k2")({
  head: () => ({
    meta: [
      { title: "Importer" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ImporterPage,
});

type Category = "buttons" | "inputs" | "sections" | "effects" | "misc";

function ImporterPage() {
  const fetchFn = useServerFn(fetchRegistry);
  const saveFn = useServerFn(saveComponent);

  const [input, setInput] = useState("");
  const [preview, setPreview] = useState<ImportPreview | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // editable form fields
  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("misc");
  const [sourceUrl, setSourceUrl] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorUrl, setAuthorUrl] = useState("");

  async function handleFetch() {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await fetchFn({ data: { input } });
      setPreview(result);
      setSlug(result.slug);
      setName(result.name);
      setDescription(result.description);
      setSourceUrl("");
      setAuthorName("");
      setAuthorUrl("");
    } catch (e) {
      setError((e as Error).message);
      setPreview(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!preview) return;
    setLoading(true);
    setError(null);
    try {
      const result = await saveFn({
        data: {
          url: preview.url,
          slug,
          name,
          description,
          category,
          sourceUrl: sourceUrl || undefined,
          authorName: authorName || undefined,
          authorUrl: authorUrl || undefined,
        },
      });
      setSuccess(result.slug);
      setPreview(null);
      setInput("");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
          ← Back
        </Link>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Importer</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Paste a shadcn registry URL or a full <code>npx shadcn add …</code>{" "}
          command. Works inside the Lovable editor only.
        </p>

        <div className="mt-6 space-y-2">
          <label className="text-xs font-medium text-muted-foreground">
            Registry URL or CLI command
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={3}
            placeholder="https://registry.21st.dev/r/some-button.json"
            className="w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-xs"
          />
          <button
            onClick={handleFetch}
            disabled={loading || !input.trim()}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Working…" : "Fetch"}
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-md border border-border bg-muted/30 p-3 text-sm">
            Added!{" "}
            <Link
              to="/c/$slug"
              params={{ slug: success }}
              className="font-medium underline"
            >
              View /c/{success}
            </Link>
          </div>
        )}

        {preview && (
          <div className="mt-8 space-y-4 rounded-xl border border-border p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Review &amp; save
            </h2>

            <Field label="Slug">
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-sm"
              />
            </Field>
            <Field label="Name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Description">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Category">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                {(["buttons", "inputs", "sections", "effects", "misc"] as Category[]).map(
                  (c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ),
                )}
              </select>
            </Field>
            <Field label="Source URL (where you found it)">
              <input
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://21st.dev/…"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Author name (for credit)">
              <input
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="e.g. 21st.dev"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Author URL (optional)">
              <input
                value={authorUrl}
                onChange={(e) => setAuthorUrl(e.target.value)}
                placeholder="https://21st.dev"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>

            <div className="rounded-md border border-border bg-muted/20 p-3 text-xs text-muted-foreground">
              <div className="mb-1 font-medium text-foreground">Files</div>
              <ul className="space-y-0.5">
                {preview.files.map((f) => (
                  <li key={f.name} className="font-mono">
                    {f.name} {f.isDemo && <span className="text-primary">(demo)</span>}
                  </li>
                ))}
              </ul>
              <div className="mt-2 font-medium text-foreground">Dependencies</div>
              <div className="font-mono">
                {preview.dependencies.length ? preview.dependencies.join(", ") : "none"}
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={loading}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
            >
              {loading ? "Saving…" : "Add component"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}