import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/drop")({
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
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <Link to="/" className="text-sm text-muted-foreground hover:underline">
          ← Home
        </Link>
        <h1 className="mt-2 text-3xl font-semibold">Component Queue</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Paste a link to any shadcn-format component (e.g. from 21st.dev). It saves
          to the queue. Next time you chat with the AI, ask it to "process the queue"
          and it'll add them to the site.
        </p>

        <div className="mt-6 space-y-3 rounded-lg border bg-card p-4">
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
          <h2 className="mb-3 text-lg font-medium">Queue ({rows.length})</h2>
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
    </main>
  );
}