
# Make the component detail page work like the reference site

Goal: when you (or someone else) opens a component, give them every realistic way to get it into a project — terminal, manual copy-paste, or "hand it to an AI."

## What changes

### 1. Installation section — CLI / Manual tabs
Replace the current stacked layout with a two-tab switcher:

- **CLI tab** — shows the `npx shadcn@latest add ...` command (the `shadcnCommand` field already exists on entries that have one). One-line copy button. Small helper text: *"Paste this into a terminal, or paste it into a Lovable chat and the AI will run it."*
- **Manual tab** — shows:
  1. Package-manager sub-tabs (**bun / npm / pnpm / yarn**) generating the right install line from the entry's `dependencies` array (e.g. `bun add motion react-icons`). Lovable uses bun, so default to that tab.
  2. The component source files (already shown today) with copy buttons.

If a component has no `shadcnCommand`, the CLI tab is hidden and Manual is the only option.

### 2. "Copy for AI" section
A new row of buttons above Installation. Each generates a prompt tuned to one AI tool and copies it to the clipboard:

- **Lovable** — "Create a new component at `src/components/<slug>.tsx` with the following code. Install these dependencies: <list>. Code: <source>."
- **v0**, **Cursor**, **Bolt** — same idea, slightly different phrasing/path conventions for each.

These are static string templates built from the entry's `name`, `dependencies`, and `files[].source`. No backend needed.

### 3. Small explainer on the detail page
A collapsible "What am I looking at?" block at the top of Installation with one-sentence definitions of CLI, Manual, Dependencies, and Copy-for-AI — so future-you doesn't have to remember.

## What does NOT change

- Registry structure (`src/registry/`), routing, the gallery index page, the morphing-button entry.
- No new dependencies.
- No backend.

## Files touched

- `src/routes/c.$slug.tsx` — new tabs UI, AI-prompt buttons, explainer block.
- Possibly a small helper file `src/lib/install-prompts.ts` to keep prompt templates out of the route file.

## Technical notes

- Tabs use the existing `@/components/ui/tabs` shadcn component.
- Clipboard uses `navigator.clipboard.writeText` inside event handlers (client-only, safe).
- Package-manager command generation: `${pm} ${pm === "npm" ? "install" : "add"} ${deps.join(" ")}`.
