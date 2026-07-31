import { ShiningText } from "./shining-text";

export default function ShiningTextDemo() {
  return (
    <div className="flex w-full items-center justify-center bg-neutral-950 p-12 rounded-lg">
      <ShiningText text="Thinking..." className="text-2xl" />
    </div>
  );
}
