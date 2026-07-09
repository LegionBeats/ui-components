import { useRef } from "react";
import html from "./climacode.html?raw";

/**
 * Climacode — a self-contained interactive SVG scene by @LegionBeats.
 * Original: https://gist.github.com/LegionBeats/9bf6a7f11fd0ab1845178bb7c3816741
 *
 * The piece is a single HTML document with inline SVG, CSS, and JS. We render
 * it inside a sandboxed iframe via `srcDoc` so its global styles/scripts
 * cannot leak into the host app.
 */
export function Climacode({
  className,
  height = 500,
}: {
  className?: string;
  height?: number | string;
}) {
  const ref = useRef<HTMLIFrameElement>(null);
  return (
    <iframe
      ref={ref}
      title="Climacode"
      srcDoc={html}
      sandbox="allow-scripts"
      className={className}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        border: 0,
        display: "block",
      }}
    />
  );
}

export default Climacode;