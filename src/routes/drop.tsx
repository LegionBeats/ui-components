import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { requireDropUnlocked, lockDrop } from "@/lib/drop-gate.functions";

export const Route = createFileRoute("/drop")({
  loader: () => requireDropUnlocked(),
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
  type?: string;
};

function extractUrl(input: string): string {
  const trimmed = input.trim();
  const httpMatch = trimmed.match(/https?:\/\/\S+/);
  if (httpMatch) return httpMatch[0];
  // 21st.dev CLI shorthand: `npx @21st-dev/cli add author/name`
  const t21 = trimmed.match(/@21st-dev\/cli\s+add\s+([^\s]+)/);
  if (t21) return `https://21st.dev/r/${t21[1]}`;
  // shadcn CLI without URL: `npx shadcn add author/name` → assume 21st.dev
  const shad = trimmed.match(/shadcn(?:@\S+)?\s+add\s+([^\s]+)/);
  if (shad && shad[1].includes("/") && !shad[1].startsWith("http")) {
    return `https://21st.dev/r/${shad[1]}`;
  }
  // getdesign.md CLI shorthand: `npx getdesign@latest add framer`
  const gd = trimmed.match(/getdesign(?:@\S+)?\s+add\s+([^\s]+)/);
  if (gd) return `https://getdesign.md/${gd[1]}/design-md`;
  return trimmed;
}

function ImporterPage() {
  const router = useRouter();
  const lock = useServerFn(lockDrop);
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState<"component" | "design">("component");
  const [rows, setRows] = useState<PendingRow[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function load() {
    const { data, error } = await supabase
      .from("pending_components")
      .select("id, url, note, status, created_at, type")
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
      setError(
        "Couldn't find a URL. Paste a full https:// link, or a CLI command like `npx shadcn add https://...`, `npx @21st-dev/cli add author/name`, or `npx getdesign@latest add framer`."
      );
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("pending_components").insert({
      url,
      note: note.trim() || null,
      type,
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
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:underline">
            ← Home
          </Link>
          <button
            onClick={async () => {
              await lock();
              await router.navigate({ to: "/drop-unlock" });
            }}
            className="text-xs text-muted-foreground hover:underline"
          >
            Lock
          </button>
        </div>
        <h1 className="mt-2 text-3xl font-semibold">Component Queue</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Paste a link to a component (shadcn / 21st.dev) or a design system
          (getdesign.md). It saves to the queue. Next time you chat with the AI,
          ask it to "process the queue" and it'll add them to the site.
        </p>

        <div className="mt-6 space-y-3 rounded-lg border bg-card p-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Type</label>
            <div className="inline-flex rounded-md border border-border bg-muted/30 p-1">
              {(["component", "design"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded px-3 py-1 text-xs font-medium capitalize transition-colors ${
                    type === t
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <label className="block text-sm font-medium">Link or command</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              type === "design"
                ? "https://getdesign.md/framer/design-md  —or—  npx getdesign@latest add framer"
                : "https://21st.dev/r/author/name  —or—  npx shadcn@latest add https://..."
            }
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
                    <div className="flex shrink-0 items-center gap-1.5">
                      {r.type && r.type !== "component" && (
                        <span className="rounded bg-blue-500/15 px-2 py-0.5 text-xs text-blue-600">
                          {r.type}
                        </span>
                      )}
                      <span
                        className={
                          "rounded px-2 py-0.5 text-xs " +
                          (r.status === "done"
                            ? "bg-green-500/15 text-green-600"
                            : "bg-muted text-muted-foreground")
                        }
                      >
                        {r.status}
                      </span>
                    </div>
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