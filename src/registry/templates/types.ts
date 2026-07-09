export type TemplateEntry = {
  slug: string;
  name: string;
  description: string;
  tags?: string[];
  sourceUrl?: string;
  author?: { name: string; url?: string };
  screenshotUrl?: string;
  /** Full self-contained HTML document used for the live preview and download. */
  html: string;
  /** Filename to use when the user downloads the template. */
  filename: string;
  addedAt: string;
};