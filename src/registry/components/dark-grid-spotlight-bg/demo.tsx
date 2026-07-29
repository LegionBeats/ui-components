import { DarkGridSpotlightBg } from "./dark-grid-spotlight-bg";

export default function DarkGridSpotlightBgDemo() {
  return (
    <div className="h-96 w-full">
      <DarkGridSpotlightBg className="flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Dark Grid Spotlight</h2>
          <p className="mt-2 text-slate-300">A grid lit by a large radial spotlight.</p>
        </div>
      </DarkGridSpotlightBg>
    </div>
  );
}
