import { useState } from "react";
import { TextReveal } from "./text-reveal";

export default function TextRevealDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex min-h-52 flex-col items-center justify-center gap-6 p-8 text-center">
      <div key={key} className="space-y-3">
        <TextReveal
          as="h3"
          per="word"
          preset="fade-in-blur"
          className="text-2xl font-semibold tracking-tight"
          speedReveal={1.1}
        >
          Reveal text word by word
        </TextReveal>
        <TextReveal
          per="char"
          preset="slide"
          delay={0.6}
          className="text-sm text-muted-foreground"
        >
          Character stagger with a slide preset
        </TextReveal>
      </div>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Replay
      </button>
    </div>
  );
}
