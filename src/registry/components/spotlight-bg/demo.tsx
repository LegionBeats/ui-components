import { SpotlightBg } from "./spotlight-bg";

export default function SpotlightBgDemo() {
  return (
    <div className="h-96 w-full">
      <SpotlightBg className="flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Spotlight</h2>
          <p className="mt-2 text-slate-400">A dark radial gradient background.</p>
        </div>
      </SpotlightBg>
    </div>
  );
}
