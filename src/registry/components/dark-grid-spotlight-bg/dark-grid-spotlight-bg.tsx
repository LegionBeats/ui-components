import { cn } from "@/lib/utils";

/**
 * A dark grid background with a large radial spotlight at the top.
 * Creates a dramatic, stage-lit feel for dark-themed pages.
 */
export function DarkGridSpotlightBg({
  children,
  className,
  gridClassName,
  spotlightClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  gridClassName?: string;
  spotlightClassName?: string;
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
          "absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
          gridClassName,
        )}
      />
      <div
        className={cn(
          "absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]",
          spotlightClassName,
        )}
      />
      {children}
    </div>
  );
}

export default DarkGridSpotlightBg;
