import { AsmrBackground } from "./asmr-background";

export default function AsmrBackgroundDemo() {
  return (
    <div className="h-[500px] w-full">
      <AsmrBackground className="flex items-center justify-center">
        <div className="flex h-full items-center justify-center px-6 text-center">
          <div className="border border-white/5 bg-white/[0.02] px-8 py-4 backdrop-blur-sm">
            <h2 className="text-sm font-light uppercase tracking-[0.7em] text-white/30 md:text-xl">
              Atmospheric Friction
            </h2>
            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-[10px] uppercase tracking-widest text-white/10">
              Interactive kinetic environment
            </p>
          </div>
        </div>
      </AsmrBackground>
    </div>
  );
}