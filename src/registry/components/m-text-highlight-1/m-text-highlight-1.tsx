"use client";

import { TextHighlight } from "./text-highlight";

export default function TextHighlightInView() {
  return (
    <div className="flex min-h-50 items-center justify-center px-6">
      <h2 className="max-w-xl text-center font-bold text-3xl text-foreground sm:text-4xl">
        Ship{" "}
        <TextHighlight
          highlightColor="color-mix(in oklch, var(--chart-3) 40%, transparent)"
          transition={{ bounce: 0, duration: 0.9, type: "spring" }}
          triggerType="inView"
        >
          production-ready
        </TextHighlight>{" "}
        animations in minutes
      </h2>
    </div>
  );
}
