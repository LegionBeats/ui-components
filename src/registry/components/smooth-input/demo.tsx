import { Input, SmoothInput } from "./smooth-input";

export default function SmoothInputDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-muted/30 px-6 py-14">
      <span className="text-xs uppercase tracking-wide opacity-40">
        Try typing below
      </span>
      <SmoothInput aria-label="Smooth caret input" />
      <Input
        placeholder="normal input"
        className="caret-primary text-2xl"
        wrapperClassName="max-w-[420px] p-4"
        aria-label="Normal input"
      />
    </div>
  );
}
