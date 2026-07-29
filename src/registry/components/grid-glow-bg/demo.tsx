import { GridGlowBg } from "./grid-glow-bg";

export default function GridGlowBgDemo() {
  return (
    <div className="h-96 w-full">
      <GridGlowBg className="flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Grid Glow</h2>
          <p className="mt-2 text-slate-600">Light grid with a fuchsia glow.</p>
        </div>
      </GridGlowBg>
    </div>
  );
}
