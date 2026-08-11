import { useRef } from "react";
import { TextHighlight, type TextHighlightRef } from "./text-highlight";

export default function TextHighlightDemo() {
  const ref = useRef<TextHighlightRef>(null);

  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-6 p-8 text-center">
      <p className="max-w-md text-xl leading-relaxed font-medium">
        Ship faster with{" "}
        <TextHighlight triggerType="auto" className="px-1">
          beautifully animated
        </TextHighlight>{" "}
        components.
      </p>
      <p className="max-w-md text-xl leading-relaxed font-medium">
        Hover this{" "}
        <TextHighlight
          triggerType="hover"
          direction="btt"
          highlightColor="hsl(190, 90%, 80%)"
          className="px-1"
        >
          bottom-to-top highlight
        </TextHighlight>
        .
      </p>
      <div className="flex items-center gap-3">
        <p className="text-xl font-medium">
          <TextHighlight
            ref={ref}
            triggerType="ref"
            highlightColor="hsl(280, 90%, 85%)"
            className="px-1"
          >
            Trigger me
          </TextHighlight>
        </p>
        <button
          type="button"
          onClick={() => ref.current?.animate("rtl")}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          Animate
        </button>
        <button
          type="button"
          onClick={() => ref.current?.reset()}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}