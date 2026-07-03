
# Add a Designs section

Same site, second collection. Designs are a sibling of components: same drop-and-process flow, same detail-page pattern, tuned for what a design entry actually is.

## What a design entry contains

- **Name** (e.g. "Framer")
- **Description** (one-line summary)
- **Source URL** (e.g. `https://getdesign.md/framer/design-md`)
- **Author/credit** (optional)
- **Screenshot** — the preview image (stored as a Lovable asset)
- **Prompt file** — the `.md` file (stored as text in the registry entry, shown in a code viewer, copy-to-clipboard, and downloadable as `<name>.md`)
- **CLI command** (e.g. `npx getdesign@latest add framer`)
- **Tool** it targets (Framer / Figma / generic / etc.) — a simple tag

Both `prompt` and `cli` are optional so a design can be just "screenshot + link + credit" if that's all you have.

## Pages

- **`/` (home)** — add a top-level toggle: **Components | Designs**. Components view is what's there today. Designs view is a grid of screenshot cards (image on top, name + tool tag + credit below).
- **`/d/$slug`** — design detail page. Layout mirrors `/c/$slug`:
  - Big screenshot preview at the top.
  - Credit + source link.
  - **CLI command** block (copy button) — only if present.
  - **Prompt** tab with the full `.md` in a code viewer, copy button, and a **Download `.md`** button.
  - **Copy for AI** row using the same six tools (Lovable, v0, Cursor, Claude Code, Emergent, Google AI Studio) — the prompt for a design says "use this design system spec to style the current project" and pastes the `.md` content inline.
- **`/drop`** — same page, gains a small **Type** toggle (Component / Design) at the top of the form. Same password gate, same queue. Design drops accept the same freeform input (URL, or CLI like `npx getdesign@latest add framer`).

## Drop → queue → process

- Add a `type` column to `pending_components` (`'component' | 'design'`, defaults to `'component'` so existing rows are unaffected).
- `/drop` sets `type` based on the toggle. URL parsing also learns:
  - `npx getdesign@latest add <name>` → `https://getdesign.md/<name>/design-md`
  - Any `getdesign.md` URL is auto-classified as `design` even if the toggle is wrong.
- **Processing designs** stays the same shape as components: you say "process the queue" and I fetch the source page, pull the screenshot + prompt `.md` + CLI, save the image as a Lovable asset, write a registry entry, and mark the row done.

## Registry structure

Mirror the component registry so designs are self-contained and portable:

```
src/registry/designs/
  index.ts                 → exports designRegistry[] + getDesign(slug)
  types.ts                 → DesignEntry type
  entries/framer/
    index.ts               → the DesignEntry
    prompt.md              → the raw prompt file (imported ?raw)
    screenshot.png.asset.json  → Lovable asset pointer
```

`DesignEntry` shape:

```ts
type DesignEntry = {
  slug: string;
  name: string;
  description: string;
  tool?: string;                // "Framer", "Figma", "Generic", ...
  sourceUrl?: string;
  author?: { name: string; url?: string };
  screenshotUrl: string;        // from the .asset.json
  prompt?: { filename: string; source: string };  // the .md
  cliCommand?: string;          // "npx getdesign@latest add framer"
  addedAt: string;
};
```

Adding to another Lovable project later = copy the `entries/framer/` folder + register it, exactly like components today.

## What I'll build in this pass

1. Migration: add `type` column to `pending_components` (default `'component'`).
2. Registry scaffolding: `src/registry/designs/{types.ts,index.ts}`.
3. First entry: **Framer** — using the screenshot and `.md` you already uploaded, source URL `https://getdesign.md/framer/design-md`, CLI `npx getdesign@latest add framer`.
4. Home page: Components/Designs toggle + designs grid.
5. `/d/$slug` detail route with preview, prompt viewer, copy/download, CLI, Copy-for-AI.
6. `/drop` gains the type toggle and the getdesign URL/CLI parsing.
7. Nav link from `/` to switch views; `/drop` mentions both types.

## Non-goals (for now)

- No editing designs from the UI — same as components, adds happen via `/drop` + "process".
- No search or filtering beyond the top-level Components/Designs toggle.
- No per-design tags beyond the single `tool` field.

If any of this is more (or less) than you want, tell me and I'll revise before building.
