import { TextRotate } from "./text-rotate";

export default function TextRotateDemo() {
  return (
    <div className="flex min-h-40 items-center justify-center p-8">
      <div className="flex flex-wrap items-center justify-center gap-2 text-3xl font-semibold tracking-tight">
        <span>Made for</span>
        <TextRotate
          as="span"
          texts={["designers", "builders", "tinkerers", "hoarders"]}
          mainClassName="overflow-hidden rounded-lg bg-primary px-3 py-1 text-primary-foreground"
          splitLevelClassName="overflow-hidden"
          staggerDuration={0.025}
          staggerFrom="last"
          rotationInterval={2200}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        />
      </div>
    </div>
  );
}
