import { useState } from "react";
import { RollingText } from "./rolling-text";

export default function RollingTextDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-6 p-8 text-center">
      <div key={key} className="space-y-2">
        <RollingText className="text-3xl font-semibold tracking-tight">
          Rolling Text
        </RollingText>
        <div>
          <RollingText
            className="text-3xl font-semibold tracking-tight"
            direction="down"
            delay={0.3}
          >
            From the top
          </RollingText>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setKey((k) => k + 1)}
        className="rounded-md border px-3 py-1.5 text-sm"
      >
        Replay
      </button>
    </div>
  );
}