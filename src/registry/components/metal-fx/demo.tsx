import { MetalButton } from "./metal-button";

export default function MetalFxDemo() {
  return (
    <div className="flex min-h-64 w-full flex-wrap items-center justify-center gap-6 rounded-xl bg-[#070707] p-12">
      <MetalButton preset="chromatic">Upgrade to Pro</MetalButton>
      <MetalButton preset="silver">Silver</MetalButton>
      <MetalButton preset="gold">Gold</MetalButton>
      <MetalButton variant="circle" preset="chromatic" aria-label="Send">
        ↑
      </MetalButton>
    </div>
  );
}