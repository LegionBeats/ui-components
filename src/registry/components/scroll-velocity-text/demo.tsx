import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./scroll-velocity-text";

export default function ScrollVelocityTextDemo() {
  return (
    <div className="flex min-h-40 flex-col justify-center gap-3 py-10">
      <ScrollVelocityContainer className="space-y-2">
        <ScrollVelocityRow baseVelocity={6} direction={1}>
          <span className="px-4 text-4xl font-semibold tracking-tight">
            Scroll Velocity Text
          </span>
          <span className="px-4 text-4xl font-semibold tracking-tight opacity-40">
            Scroll Velocity Text
          </span>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1}>
          <span className="px-4 text-4xl font-semibold tracking-tight opacity-40">
            Faster when you scroll
          </span>
          <span className="px-4 text-4xl font-semibold tracking-tight">
            Faster when you scroll
          </span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <p className="text-center text-xs text-muted-foreground">
        Scroll the page to speed it up and flip direction.
      </p>
    </div>
  );
}