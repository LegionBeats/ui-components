import { useRef } from "react";
import { AnimatedBeam, Circle, Icons } from "./animated-beam";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const out1Ref = useRef<HTMLDivElement>(null);
  const out2Ref = useRef<HTMLDivElement>(null);
  const out3Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center bg-background p-6">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Connect everything
      </h2>
      <p className="mb-10 mt-2 text-sm text-muted-foreground">
        Animated beams flowing between nodes — great for integration sections.
      </p>

      <div
        ref={containerRef}
        className="relative flex w-full max-w-2xl items-center justify-between py-4"
      >
        {/* left: user */}
        <div className="flex flex-col items-center">
          <Circle ref={userRef}>
            <Icons.user />
          </Circle>
        </div>

        {/* center hub */}
        <Circle ref={hubRef} className="h-16 w-16 border-primary/30">
          <Icons.logo />
        </Circle>

        {/* right: outputs */}
        <div className="flex flex-col gap-8">
          <Circle ref={out1Ref}>
            <Icons.reactjs />
          </Circle>
          <Circle ref={out2Ref}>
            <Icons.tailwindcss />
          </Circle>
          <Circle ref={out3Ref}>
            <Icons.typescript />
          </Circle>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={userRef}
          toRef={hubRef}
          curvature={-40}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={userRef}
          curvature={-40}
          reverse
          gradientStartColor="#ff8a3d"
          gradientStopColor="#ffb347"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={out1Ref}
          curvature={-60}
          duration={5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={out2Ref}
          duration={4}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hubRef}
          toRef={out3Ref}
          curvature={60}
          duration={6}
        />
      </div>
    </div>
  );
}
