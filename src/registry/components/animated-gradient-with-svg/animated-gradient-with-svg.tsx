import React, { useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "./use-debounced-dimensions";
import "./animated-gradient-with-svg.css";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

/** Deterministic PRNG so SSR and client markup match. */
const makeRandom = (seed: number) => {
  let s = seed + 0x6d2b79f5;
  return () => {
    s = Math.imul(s ^ (s >>> 15), s | 1);
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
    return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
  };
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height],
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
        ? "blur-3xl"
        : "blur-[100px]";

  const circles = useMemo(
    () =>
      colors.map((color, index) => {
        const rand = makeRandom(index * 9973 + color.length * 131);
        return {
          color,
          top: rand() * 50,
          left: rand() * 50,
          tx1: rand() - 0.5,
          ty1: rand() - 0.5,
          tx2: rand() - 0.5,
          ty2: rand() - 0.5,
          tx3: rand() - 0.5,
          ty3: rand() - 0.5,
          tx4: rand() - 0.5,
          ty4: rand() - 0.5,
          scale: 0.5 + rand(),
        };
      }),
    [colors],
  );

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {circles.map((c, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={
              {
                top: `${c.top}%`,
                left: `${c.left}%`,
                "--background-gradient-speed": `${1 / speed}`,
                "--tx-1": c.tx1,
                "--ty-1": c.ty1,
                "--tx-2": c.tx2,
                "--ty-2": c.ty2,
                "--tx-3": c.tx3,
                "--ty-3": c.ty3,
                "--tx-4": c.tx4,
                "--ty-4": c.ty4,
              } as React.CSSProperties
            }
            width={circleSize * c.scale}
            height={circleSize * c.scale}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={c.color}
              className="opacity-30 dark:opacity-[0.15]"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export { AnimatedGradient };