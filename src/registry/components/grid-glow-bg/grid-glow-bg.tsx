import { cn } from "@/lib/utils";

/**
 * A light grid background with a soft fuchsia glow behind it.
 * Works well for landing pages that need a subtle tech texture.
 */
export function GridGlowBg({
  children,
  className,
  gridClassName,
  glowClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  gridClassName?: string;
  glowClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full min-h-[320px] overflow-hidden bg-white",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
          gridClassName,
        )}
      />
      <div
        className={cn(
          "absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]",
          glowClassName,
        )}
      />
      {children}
    </div>
  );
}

export default GridGlowBg;
