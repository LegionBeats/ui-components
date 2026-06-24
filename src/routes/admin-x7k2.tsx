import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin-x7k2")({
  head: () => ({
    meta: [
      { title: "Component Queue" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ImporterPage,
});

type PendingRow = {
  id: string;
  url: string;
  note: string | null;
  status: string;
  created_at: string;
};

function extractUrl(input: string): string {
  const m = input.match(/https?:\/\/\S+/);
  return m ? m[0] : input.trim();
}

function ImporterPage() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");
  const [rows, setRows] = useState<PendingRow[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function load() {
    const { data, error } = await supabase
      .from("pending_components")
      .select("id, url, note, status, created_at")
      .order("created_at", { ascending: false })
      .limit(100);
    if (error) {
      setError(error.message);
      return;
    }
    setRows((data ?? []) as PendingRow[]);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleAdd() {
    setError(null);
    setSuccess(null);
    const url = extractUrl(input);
    if (!/^https?:\/\//.test(url)) {
      setError("Please paste a valid URL or an `npx shadcn add <url>` command.");
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("pending_components").insert({
      url,
      note: note.trim() || null,
    });
    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSuccess("Added to the queue.");
    setInput("");
    setNote("");
    load();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-8">
        <Link to="/" className="text-sm text-muted-foreground hover:underline">
          ← Home
        </Link>
        <h1 className="mt-2 text-3xl font-semibold">Component Queue</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Paste a link to any shadcn-format component (e.g. from 21st.dev). It gets
          saved to the queue. Next time you chat with the AI, ask it to "process the
          queue" and it'll add them to the site.
        </p>
      </div>

      <div className="space-y-3 rounded-lg border bg-card p-4">
        <label className="block text-sm font-medium">Link or command</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https://21st.dev/r/author/name  —or—  npx shadcn@latest add https://..."
          className="w-full rounded-md border bg-background px-3 py-2 text-sm font-mono"
          rows={2}
        />
        <label className="block text-sm font-medium">Note (optional)</label>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g. credit @author, use in hero section"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
        <button
          onClick={handleAdd}
          disabled={saving || !input.trim()}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
        >
          {saving ? "Adding…" : "Add to queue"}
        </button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {success && <p className="text-sm text-green-600">{success}</p>}
      </div>

      <div className="mt-10">
        <h2 className="mb-3 text-lg font-medium">
          Queue ({rows.length})
        </h2>
        {rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nothing queued yet.</p>
        ) : (
          <ul className="space-y-2">
            {rows.map((r) => (
              <li key={r.id} className="rounded-md border bg-card p-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate font-mono text-xs hover:underline"
                  >
                    {r.url}
                  </a>
                  <span
                    className={
                      "shrink-0 rounded px-2 py-0.5 text-xs " +
                      (r.status === "done"
                        ? "bg-green-500/15 text-green-600"
                        : "bg-muted text-muted-foreground")
                    }
                  >
                    {r.status}
                  </span>
                </div>
                {r.note && (
                  <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">
                  {new Date(r.created_at).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

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