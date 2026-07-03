import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { registry } from "@/registry";
import { designRegistry } from "@/registry/designs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stash — Component Library" },
      { name: "description", content: "A personal stash of cool UI components, ready to copy into any project." },
      { property: "og:title", content: "Stash — Component Library" },
      { property: "og:description", content: "A personal stash of cool UI components, ready to copy into any project." },
    ],
  }),
  component: Index,
});

function Index() {
  const [tab, setTab] = useState<"components" | "designs">("components");
  const grouped = registry.reduce<Record<string, typeof registry>>((acc, e) => {
    (acc[e.category] ||= []).push(e);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Personal Library
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Stash
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A growing collection of UI components I want to reuse. Click any
            card to see the live preview, copy the install command, and copy
            the source files.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {registry.length} component{registry.length === 1 ? "" : "s"} ·{" "}
            {designRegistry.length} design
            {designRegistry.length === 1 ? "" : "s"}
          </p>
          <div className="mt-6 inline-flex rounded-md border border-border bg-muted/30 p-1">
            {(["components", "designs"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                  tab === t
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {tab === "components" &&
          Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((entry) => (
                <Link
                  key={entry.slug}
                  to="/c/$slug"
                  params={{ slug: entry.slug }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-48 items-center justify-center overflow-hidden border-b border-border bg-muted/30">
                    <div className="scale-90 transition-transform group-hover:scale-95">
                      <entry.Preview />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-card-foreground">
                      {entry.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {tab === "designs" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designRegistry.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No designs yet. Drop one at{" "}
                <Link to="/drop" className="underline">
                  /drop
                </Link>
                .
              </p>
            )}
            {designRegistry.map((d) => (
              <Link
                key={d.slug}
                to="/d/$slug"
                params={{ slug: d.slug }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-border bg-muted/30">
                  <img
                    src={d.screenshotUrl}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground">{d.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {d.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
