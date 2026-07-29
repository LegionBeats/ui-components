import { cn } from "@/lib/utils";

/**
 * A deep purple radial gradient background.
 * The gradient fades from black at the center to electric purple at the edges.
 */
export function PurpleRadialBg({
  children,
  className,
  innerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full min-h-[320px] overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full items-center px-5 py-24",
          innerClassName,
        )}
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        }}
      />
      {children}
    </div>
  );
}

export default PurpleRadialBg;
