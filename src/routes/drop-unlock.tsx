import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { unlockDrop } from "@/lib/drop-gate.functions";

export const Route = createFileRoute("/drop-unlock")({
  head: () => ({
    meta: [
      { title: "Unlock" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: UnlockPage,
});

function UnlockPage() {
  const router = useRouter();
  const unlock = useServerFn(unlockDrop);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const { ok } = await unlock({ data: { password } });
    setBusy(false);
    if (ok) {
      await router.navigate({ to: "/drop" });
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-sm px-6 py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:underline">
          ← Home
        </Link>
        <h1 className="mt-2 text-2xl font-semibold">Enter password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is password-protected.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input
            type="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={busy || !password}
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
          >
            {busy ? "Checking…" : "Unlock"}
          </button>
          {error && (
            <p className="text-sm text-destructive">Incorrect password</p>
          )}
        </form>
      </div>
    </main>
  );
}