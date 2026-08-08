"use client";

import * as React from "react";
import { MetalFx } from "metal-fx";

type MetalPreset = "chromatic" | "silver" | "gold";

export interface MetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Palette of the metal ring. */
  preset?: MetalPreset;
  /** "button" = pill silhouette, "circle" = compact circular ring. */
  variant?: "button" | "circle";
  /** Follows the OS theme by default. */
  theme?: "auto" | "dark" | "light";
  /** 0 = invisible, 1 = full intensity. */
  strength?: number;
  /** Freeze the shader on its current frame. */
  paused?: boolean;
}

/**
 * A button wrapped in an animated WebGL "liquid metal" ring.
 * The effect is painted on top of the child and never blocks pointer events.
 */
export const MetalButton = React.forwardRef<
  HTMLButtonElement,
  MetalButtonProps
>(function MetalButton(
  {
    preset = "chromatic",
    variant = "button",
    theme = "auto",
    strength = 1,
    paused = false,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <MetalFx
      variant={variant}
      preset={preset}
      theme={theme}
      strength={strength}
      paused={paused}
    >
      <button
        ref={ref}
        className={
          className ??
          (variant === "circle"
            ? "flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-800"
            : "rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-800")
        }
        {...props}
      >
        {children}
      </button>
    </MetalFx>
  );
});

export { MetalFx };