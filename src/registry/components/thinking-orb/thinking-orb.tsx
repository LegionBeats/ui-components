"use client";

import * as React from "react";
import { ThinkingOrb, type OrbState, type OrbSize } from "thinking-orbs";

export interface ThinkingOrbStatusProps {
  /** Which of the nine tuned animations to show. */
  state?: OrbState;
  /** Tuned size preset — 64 (avatar) or 20 (inline). */
  size?: OrbSize;
  /** Optional status text rendered next to the orb. */
  label?: string;
  /** Theme mode; `auto` follows the host project. */
  theme?: "auto" | "dark" | "light";
  /** Animation speed multiplier. */
  speed?: number;
  /** Freeze on the current frame. */
  paused?: boolean;
  className?: string;
}

/**
 * Dotted thought-orb status indicator for AI / agent UIs.
 * Renders the orb plus an optional live-updating status label.
 */
export function ThinkingOrbStatus({
  state = "working",
  size = 64,
  label,
  theme = "auto",
  speed = 1,
  paused = false,
  className,
}: ThinkingOrbStatusProps) {
  return (
    <div
      className={className ?? "inline-flex items-center gap-3"}
      role="status"
      aria-live="polite"
    >
      <ThinkingOrb
        state={state}
        size={size}
        theme={theme}
        speed={speed}
        paused={paused}
        aria-label={label ?? state}
      />
      {label && (
        <span className="text-sm text-muted-foreground">{label}</span>
      )}
    </div>
  );
}

export { ThinkingOrb };
export type { OrbState, OrbSize };