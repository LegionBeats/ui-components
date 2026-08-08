import { useState } from "react";
import { ThinkingOrbStatus } from "./thinking-orb";
import type { OrbState } from "thinking-orbs";

const STATES: { state: OrbState; label: string }[] = [
  { state: "working", label: "Working…" },
  { state: "searching", label: "Searching…" },
  { state: "solving", label: "Solving…" },
  { state: "listening", label: "Agent listening…" },
  { state: "connecting", label: "Connecting…" },
  { state: "weaving", label: "Agent weaving…" },
  { state: "composing", label: "Composing…" },
  { state: "breathing", label: "Agent breathing…" },
  { state: "shaping", label: "Agent shaping…" },
];

export default function ThinkingOrbDemo() {
  const [active, setActive] = useState<OrbState>("listening");
  const current = STATES.find((s) => s.state === active)!;

  return (
    <div className="flex w-full flex-col items-center gap-8 rounded-xl bg-[#070707] p-10">
      <div className="flex items-center gap-3 text-neutral-300">
        <ThinkingOrbStatus
          key={active}
          state={active}
          size={64}
          theme="dark"
          className="inline-flex"
        />
        <span className="text-sm">{current.label}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {STATES.map((s) => (
          <button
            key={s.state}
            onClick={() => setActive(s.state)}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
              s.state === active
                ? "border-neutral-600 bg-neutral-800 text-neutral-100"
                : "border-neutral-800 text-neutral-500 hover:text-neutral-200"
            }`}
          >
            {s.state}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm text-neutral-400">
        <ThinkingOrbStatus state={active} size={20} theme="dark" />
        Inline 20px variant
      </div>
    </div>
  );
}