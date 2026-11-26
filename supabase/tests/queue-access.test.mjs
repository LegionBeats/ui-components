import test from "node:test";
import assert from "node:assert/strict";

test("visitors cannot read the private component queue directly", async () => {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  assert.ok(url && key, "Public connection configuration is required");
  const response = await fetch(`${url}/rest/v1/pending_components?select=id&limit=1`, {
    headers: { apikey: key },
  });
  const result = await response.json();
  assert.equal(response.ok, false, "Direct visitor reads must be denied");
  assert.equal(result.code, "42501", "Table access must be denied");
});