import { cn } from "@/lib/utils";

/**
 * A dark dot-grid background made of tiny radial-gradient dots.
 * Great for sci-fi dashboards or code-heavy interfaces.
 */
export function DotGridBg({
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
        "relative h-full w-full min-h-[320px] overflow-hidden bg-black",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0 -z-[2] h-screen w-screen",
          innerClassName,
        )}
        style={{
          background: "radial-gradient(#ffffff33 1px, #00091d 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {children}
    </div>
  );
}

export default DotGridBg;
