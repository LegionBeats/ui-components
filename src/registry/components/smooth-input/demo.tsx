import { SmoothInput } from "./smooth-input";

export default function SmoothInputDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-muted/30 px-6 py-14">
      <span className="text-xs uppercase tracking-wide opacity-40">
        Enter your info below
      </span>
      <SmoothInput
        placeholder="This move on"
        aria-label="Smooth caret input"
      />
    </div>
  );
}

