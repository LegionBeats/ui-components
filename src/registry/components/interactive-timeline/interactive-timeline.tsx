import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface TimelineItem {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image?: string;
}

export interface InteractiveTimelineProps {
  items: TimelineItem[];
  /** Accent color used for nodes and hover glow. */
  accentColor?: string;
  className?: string;
}

function TimelineCard({
  item,
  index,
  accent,
}: {
  item: TimelineItem;
  index: number;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

  // 3D tilt driven by the pointer over the card
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => setExpanded((v) => !v)}
      initial={{ opacity: 0, y: 60, rotateY: isLeft ? -14 : 14 }}
      animate={
        inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 60 }
      }
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((v) => !v);
        }
      }}
      aria-expanded={expanded}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at 50% 0%, ${accent}26, transparent 70%)`,
        }}
      />
      <div className="flex items-start justify-between gap-3">
        <div>
          {item.subtitle && (
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {item.subtitle}
            </p>
          )}
          <h3 className="mt-0.5 text-lg font-semibold text-foreground">
            {item.title}
          </h3>
        </div>
        <span
          className="shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
          style={{ borderColor: `${accent}55`, color: accent }}
        >
          {item.date}
        </span>
      </div>

      {item.image && (
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </motion.div>

      <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
        {expanded ? "Show less" : "Read more"}
      </div>
    </motion.div>
  );
}

function TimelineNode({
  active,
  accent,
}: {
  active: boolean;
  accent: string;
}) {
  return (
    <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2">
      <div
        className="relative flex h-4 w-4 items-center justify-center rounded-full border-2"
        style={{
          borderColor: accent,
          backgroundColor: active ? accent : "transparent",
        }}
      >
        {active && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${accent}` }}
            animate={{ scale: [1, 2.2], opacity: [0.9, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </div>
    </div>
  );
}

export function InteractiveTimeline({
  items,
  accentColor = "#8b5cf6",
  className,
}: InteractiveTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto w-full max-w-4xl px-4 ${className ?? ""}`}
      style={{ perspective: 1200 }}
    >
      {/* floating background orbs for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-64 w-64 rounded-full blur-3xl"
            style={{
              background: accentColor,
              opacity: 0.07,
              left: `${10 + i * 35}%`,
              top: `${15 + i * 28}%`,
            }}
            animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
            transition={{
              duration: 9 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* center line */}
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border md:block" />

      <div className="relative flex flex-col gap-10 md:gap-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="relative">
              <div className="hidden md:block">
                <TimelineNode active={activeIndex === i} accent={accentColor} />
              </div>
              <div
                className={`md:w-[calc(50%-2.5rem)] ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <VisibilityProbe
                  onVisible={() => setActiveIndex(i)}
                />
                <TimelineCard item={item} index={i} accent={accentColor} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VisibilityProbe({ onVisible }: { onVisible: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  if (inView) onVisible();
  return <div ref={ref} className="absolute inset-0 pointer-events-none" />;
}

export default InteractiveTimeline;
