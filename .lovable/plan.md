# Password-gate `/drop`

Small, ~10 min of work. One shared password everyone who's allowed to drop links uses. No accounts, no login UI beyond a single password field.

## How it works

1. First visit to `/drop` → redirected to `/drop-unlock`.
2. Type the password → server checks it → sets an encrypted cookie that lasts 7 days.
3. `/drop` works normally after that. No re-prompting unless the cookie expires or the user clears cookies.

The password lives in a server-only environment variable (`DROP_PASSWORD`). It never ships to the browser. The check runs on the server with a timing-safe comparison.

## What I'll build

- **Two secrets**: `DROP_PASSWORD` (the password you choose) and `SESSION_SECRET` (a random 32+ char string I'll generate to encrypt the cookie). I'll prompt you for the password value via the secrets tool.
- **`src/lib/drop-gate.functions.ts`** — three server functions: `unlockDrop({ password })`, `lockDrop()`, and an internal `requireDropUnlocked()` helper the `/drop` loader calls.
- **`src/routes/drop-unlock.tsx`** — a minimal page with one password input and a submit button. Wrong password shows "Incorrect password".
- **`src/routes/drop.tsx`** — add a `loader` that calls `requireDropUnlocked()`. If locked, it throws a redirect to `/drop-unlock`. Also add a small "Lock" button in the corner that calls `lockDrop()` and redirects back to the unlock page.

## Tradeoffs (honest)

- **Shared password**: everyone uses the same one. You can't revoke a single person — if the password leaks, you change it (update the secret, everyone re-enters).
- **Not real auth**: it's a gate, not user accounts. Perfect for "just me and 2 friends can add stuff".
- **Cookie is per-browser**: your friend on their phone will type the password once on that phone, once on their laptop, etc. Lasts 7 days each.

## What I need from you

- The password you want to use (I'll ask via the secrets form so it never appears in chat).

That's it. Ready when you are.
