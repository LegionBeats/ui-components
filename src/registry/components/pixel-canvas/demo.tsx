import { PixelCanvas } from "./pixel-canvas";

export default function PixelCanvasDemo() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-4 p-6 sm:grid-cols-3">
      {[
        { title: "Analytics", colors: "#e0f2fe,#7dd3fc,#0ea5e9" },
        { title: "Automations", colors: "#fef3c7,#fcd34d,#f59e0b" },
        { title: "Integrations", colors: "#fae8ff,#e879f9,#c026d3" },
      ].map((card) => (
        <div
          key={card.title}
          tabIndex={0}
          className="group relative h-40 overflow-hidden rounded-xl border border-border bg-card outline-none"
        >
          <PixelCanvas
            gap={6}
            speed={40}
            colors={card.colors.split(",")}
            variant="icon"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-foreground">
              {card.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
