export type DesignEntry = {
  slug: string;
  name: string;
  description: string;
  tool?: string;
  sourceUrl?: string;
  author?: { name: string; url?: string };
  screenshotUrl: string;
  prompt?: { filename: string; source: string };
  cliCommand?: string;
  addedAt: string;
};