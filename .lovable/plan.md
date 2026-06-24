# Plan: Importer + Credits + Google AI Studio

Three independent additions. End result: same component pages as today, but new components can be added in ~30 seconds by pasting a URL, and every page can show a credit line.

## 1. Source URL & credit fields

- Extend the registry entry type with two optional fields: `sourceUrl` and `author` (`{ name: string; url?: string }`).
- On the component page (`/c/$slug`), render a small line under the title: "Inspired by [author name](author url) · [View source](sourceUrl)" — only shows fields that exist, omits the line entirely if neither is set.
- Backfill the morphing-button entry with watermelon.sh credit.

## 2. Google AI Studio in "Copy for AI"

- Add `"google-ai-studio"` to the `AiTool` type in `src/lib/install-prompts.ts`.
- Add a prompt template tuned for AI Studio (similar to Lovable's — full source + install command + clear instructions).
- Add it to the `aiTools` array in `src/routes/c.$slug.tsx`. Final list: Lovable, v0, Cursor, Claude Code, Emergent, Google AI Studio.

## 3. Hidden shadcn registry importer at `/admin-x7k2`

A page where you paste a registry URL (or full `npx shadcn add ...` command) and it creates the entry automatically.

### Flow

1. **Paste** — one text input. Accepts either a raw `https://...registry.json` URL OR a full `npx shadcn@latest add <url>` command (script extracts the URL).
2. **Fetch & preview** — clicks "Fetch". A server function downloads the JSON, parses it, returns a preview: name, slug, description, file list, dependencies.
3. **Edit & confirm** — form shows the parsed fields plus two empty fields: `sourceUrl` and `author`. Tweak anything before saving.
4. **Save** — clicks "Add component". Server function writes:
   - `src/registry/components/{slug}/{component-name}.tsx` (and any other files from the registry)
   - `src/registry/components/{slug}/demo.tsx` (stub if registry doesn't include one)
   - `src/registry/components/{slug}/index.ts` (the registry entry object)
   - Appends the import + entry to `src/registry/index.ts`
5. **Done** — shows "Added! View at /c/{slug}" with a link.

### Access

- Route lives at `/admin-x7k2` (not linked from anywhere; not in nav).
- No login. Per your choice — security by obscurity, fine for a personal tool.
- The page itself is public, but it lives at an unguessable path. The underlying server function is also public — anyone who guesses the URL can call it. Acceptable tradeoff.

### Out of scope (deliberately)

- CodePen / GitHub / arbitrary HTML scraping — those stay manual via chat. Adding them would 3x the build time and they're a small fraction of your sources.
- Editing or deleting existing entries from the UI — edit registry files directly when needed.
- Auth — chose hidden URL instead.

## Technical details

**Registry JSON shape** (shadcn standard, what we parse):

```json
{
  "name": "morphing-button",
  "type": "registry:ui",
  "description": "...",
  "dependencies": ["framer-motion"],
  "registryDependencies": [],
  "files": [
    { "path": "morphing-button.tsx", "content": "...", "type": "registry:ui" }
  ]
}
```

The importer reads `name`, `description`, `dependencies`, writes each `files[].content` to disk. The `shadcnCommand` on the entry is reconstructed: `npx shadcn@latest add {url}`.

**Server function** (`src/lib/importer.functions.ts`):
- `fetchRegistry({ url })` — GET the JSON, validate shape with Zod, return preview.
- `saveComponent({ ... })` — write files using Node's `fs/promises`.

**Important caveat:** This is a **dev-only tool**. It writes to your source tree, which only exists inside the Lovable editor environment. The published site is a built bundle — you can't add components to it via the live URL. That's fine — use the importer inside Lovable, then the changes flow to the published site on the next deploy.

**File-write safety:**
- Reject if the slug folder already exists (no accidental overwrites).
- Slugify strictly: lowercase, hyphens, alphanumeric.
- Validate file paths from the registry don't contain `..` or absolute paths.

## Files to touch

- `src/registry/types.ts` — add `sourceUrl?` and `author?` to entry type.
- `src/registry/components/morphing-button/index.ts` — add watermelon credit.
- `src/routes/c.$slug.tsx` — render credit line; add Google AI Studio button.
- `src/lib/install-prompts.ts` — add `google-ai-studio` tool + label + prompt.
- `src/lib/importer.functions.ts` — new. Server functions for fetch + save.
- `src/routes/admin-x7k2.tsx` — new. The hidden importer page.

## What this gets you

- **21st.dev, Origin UI, Aceternity, Magic UI, Kibo UI, watermelon, etc.** — paste-URL-and-done. Covers the vast majority of modern component sites.
- **Random CodePen / GitHub / blog snippets** — keep using chat. ~2 min each.
- **Credit displayed on every component page** when filled in.
- **Google AI Studio** ready to copy.
