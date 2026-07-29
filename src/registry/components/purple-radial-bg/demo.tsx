import { PurpleRadialBg } from "./purple-radial-bg";

export default function PurpleRadialBgDemo() {
  return (
    <div className="h-96 w-full">
      <PurpleRadialBg className="flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Purple Radial</h2>
          <p className="mt-2 text-slate-300">Black center, electric purple edges.</p>
        </div>
      </PurpleRadialBg>
    </div>
  );
}
