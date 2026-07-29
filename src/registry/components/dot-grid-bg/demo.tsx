import { DotGridBg } from "./dot-grid-bg";

export default function DotGridBgDemo() {
  return (
    <div className="h-96 w-full">
      <DotGridBg className="flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Dot Grid</h2>
          <p className="mt-2 text-slate-300">Tiny dots on a dark canvas.</p>
        </div>
      </DotGridBg>
    </div>
  );
}
