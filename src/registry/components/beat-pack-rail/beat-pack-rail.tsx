"use client";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";

export type PackFormat = "vinyl" | "tape";

export interface BeatPack {
  id: string;
  name: string;
  format: PackFormat;
  /** Short label on the hanging tag, e.g. "24 beats" or "FREE". */
  tag: string;
  /** Main button in the close-up view. */
  cta?: { label: string; href: string };
  description: string;
  tracks: string[];
  image: string;
}

const SIZES: Record<PackFormat, string> = {
  vinyl: "h-40 w-40 sm:h-44 sm:w-44",
  tape: "h-28 w-44 sm:h-32 sm:w-52",
};

function Clip() {
  return (
    <div className="relative z-20 mx-auto -mb-2 h-7 w-3 rounded-sm bg-gradient-to-b from-muted-foreground/70 to-muted-foreground/40 shadow-md">
      <div className="absolute inset-x-0 top-3 h-px bg-background/40" />
    </div>
  );
}

function Record({ className = "", spinning = false }: { className?: string; spinning?: boolean }) {
  return (
    <div
      className={`absolute aspect-square rounded-full shadow-xl ${spinning ? "animate-spin" : ""} ${className}`}
      style={{
        animationDuration: "3s",
        background:
          "repeating-radial-gradient(circle, color-mix(in oklch, var(--foreground) 92%, var(--background)) 0 2px, color-mix(in oklch, var(--foreground) 82%, var(--background)) 2px 3px)",
      }}
    >
      <div className="absolute inset-[36%] rounded-full bg-primary" />
      <div className="absolute inset-[48%] rounded-full bg-background" />
    </div>
  );
}

function Cassette() {
  return (
    <div className="absolute inset-[6%] flex items-center justify-center gap-[18%] rounded-md bg-muted shadow-inner">
      {[0, 1].map((i) => (
        <div key={i} className="aspect-square h-[38%] rounded-full border-4 border-dashed border-muted-foreground/60 bg-background group-hover:animate-spin" style={{ animationDuration: "2s" }} />
      ))}
      <div className="absolute inset-x-[22%] top-[14%] h-[14%] rounded-sm bg-primary/80" />
    </div>
  );
}

function PackItem({ pack, index, onOpen }: { pack: BeatPack; index: number; onOpen: () => void }) {
  const isTape = pack.format === "tape";
  const [swing, setSwing] = useState(0);
  const style = {
    "--sway": `${index % 2 ? 1.5 : -1.5}deg`,
    transform: `rotate(${swing}deg)`,
  } as CSSProperties;
  return (
    <div className="flex shrink-0 flex-col items-center">
      <Clip />
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={() => setSwing(index % 2 ? 4 : -4)}
        onMouseLeave={() => setSwing(0)}
        aria-label={`Open ${pack.name}`}
        className="group relative origin-top transition-transform duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={style}
      >
        {pack.format === "vinyl" && (
          <Record className="right-0 top-[6%] h-[88%] transition-transform duration-500 group-hover:translate-x-1/2 group-hover:rotate-90" />
        )}
        <div className={`relative [perspective:700px] ${SIZES[pack.format]}`}>
          {isTape && <div className="absolute inset-0 rounded-sm border border-border/40 bg-card shadow-2xl"><Cassette /></div>}
          <div
            className={`relative h-full w-full overflow-hidden rounded-sm border border-border/40 shadow-2xl ${
              isTape ? "origin-left transition-transform duration-500 ease-[cubic-bezier(.3,1.4,.5,1)] group-hover:[transform:rotateY(-55deg)]" : ""
            }`}
          >
            <img src={pack.image} alt="" className="h-full w-full object-cover" draggable={false} />
            {isTape && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-foreground/10" />
            )}
          </div>
        </div>
        <span className="absolute -bottom-3 right-2 rotate-3 rounded-sm bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground shadow">
          {pack.tag}
        </span>
      </button>
    </div>
  );
}

function Detail({ pack, onClose }: { pack: BeatPack; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-label={pack.name}
        className="grid w-full max-w-3xl gap-6 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-2xl sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto aspect-square w-full max-w-xs">
          <Record className="right-0 top-[5%] h-[90%] translate-x-[18%]" />
          <img src={pack.image} alt={pack.name} className="relative h-full w-[82%] rounded-sm object-cover shadow-2xl" />
        </div>
        <div className="relative z-10 flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{pack.format} edition</p>
          <h3 className="mt-1 text-2xl font-black">{pack.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{pack.description}</p>
          <ol className="mt-4 space-y-1 text-sm">
            {pack.tracks.map((t, i) => (
              <li key={t} className="flex gap-3 border-b border-border/50 pb-1">
                <span className="w-5 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </li>
            ))}
          </ol>
          <div className="mt-auto flex items-center gap-3 pt-5">
            <a
              href={pack.cta?.href ?? "#"}
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {pack.cta?.label ?? "Learn more"}
            </a>
            <span className="text-sm font-semibold text-muted-foreground">{pack.tag}</span>
            <button type="button" onClick={onClose} className="ml-auto text-sm text-muted-foreground hover:text-foreground">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeatPackRail({ packs, title = "The Crate" }: { packs: BeatPack[]; title?: string }) {
  const [open, setOpen] = useState<BeatPack | null>(null);
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: 0 });
  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || !rail.current) return;
    drag.current = { down: true, x: e.clientX, left: rail.current.scrollLeft, moved: 0 };
  };
  const onPointerMove = (e: PointerEvent) => {
    const d = drag.current;
    if (!d.down || !rail.current) return;
    const dx = e.clientX - d.x;
    d.moved = Math.max(d.moved, Math.abs(dx));
    rail.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  // Swallow the click that ends a drag so packs don't open by accident.
  const onClickCapture = (e: MouseEvent) => {
    if (drag.current.moved > 5) {
      e.stopPropagation();
      e.preventDefault();
      drag.current.moved = 0;
    }
  };
  return (
    <section className="relative w-full overflow-hidden bg-background py-10">
      <h2 className="px-6 text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">{title}</h2>
      <div className="relative mt-8">
        <div className="absolute inset-x-0 top-3 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/60 to-transparent" />
        <div
          ref={rail}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className="flex cursor-grab select-none items-start gap-16 overflow-x-auto px-10 pb-10 pt-0 active:cursor-grabbing [scrollbar-width:thin]"
        >
          {packs.map((p, i) => (
            <PackItem key={p.id} pack={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>
      {open && <Detail pack={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

export default BeatPackRail;
