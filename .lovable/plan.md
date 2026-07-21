Upgrade the component/design/template detail pages so the Lovable "Copy for AI" action is the fastest, most reliable way to move something into another Lovable project.

What we will build:
1. Make the Lovable copy action the primary CTA on component detail pages.
2. Improve the Lovable prompt in `src/lib/install-prompts.ts` so it includes:
   - A clear one-line instruction
   - The exact dependency install command (`bun add ...`)
   - Every file at its exact target path with verbatim source
   - A small usage example showing how to import and render the component
3. Add a "Copy all files" quick action next to the per-file tab copy so users can grab just the source without the AI wrapper.
4. Apply the same prompt and CTA improvements to the design detail page (`/d/$slug`) and template detail page (`/t/$slug`), since those are also items the user may want to move into another project.

Out of scope:
- No export-to-zip, export-to-github, or cross-project push feature — those require more infrastructure and are not the best cost/value tradeoff.
- No new pages or tabs; this is purely improving the existing detail pages.

Files to change:
- `src/lib/install-prompts.ts` — rewrite the Lovable prompt and add a `copyAllFiles` helper for raw source concatenation.
- `src/routes/c.$slug.tsx` — hero Lovable button, copy-all-files action.
- `src/routes/d.$slug.tsx` — hero Lovable button.
- `src/routes/t.$slug.tsx` — hero Lovable button and a Lovable-specific prompt if it doesn't already exist.

Acceptance:
- Clicking the Lovable button copies a prompt that, when pasted into a fresh Lovable chat, should produce the same component with dependencies and usage example.
- The copy-all action produces a string with all file contents and paths.
- Build passes and the detail pages render correctly.