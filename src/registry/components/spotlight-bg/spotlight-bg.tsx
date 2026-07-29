import { cn } from "@/lib/utils";

/**
 * A simple dark radial-gradient spotlight background.
 * Place content inside or overlay it as a fixed background layer.
 */
export function SpotlightBg({
  children,
  className,
  innerClassName,
  color = "#3e3e3e",
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  color?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full min-h-[320px] overflow-hidden bg-slate-950",
        className,
      )}
    >
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 top-0",
          innerClassName,
        )}
        style={{
          background: `radial-gradient(circle 500px at 50% 200px, ${color}, transparent)`,
        }}
      />
      {children}
    </div>
  );
}

export default SpotlightBg;
