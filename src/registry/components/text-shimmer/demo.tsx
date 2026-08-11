import { TextShimmer } from "./text-shimmer";

export default function TextShimmerDemo() {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-4 p-8 text-center">
      <TextShimmer className="text-2xl font-semibold tracking-tight" duration={2}>
        Generating your component...
      </TextShimmer>
      <TextShimmer as="span" className="text-sm" duration={1.4} spread={3}>
        Thinking
      </TextShimmer>
    </div>
  );
}